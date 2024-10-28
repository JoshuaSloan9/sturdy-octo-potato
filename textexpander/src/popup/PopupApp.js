import React, { useState, useEffect } from 'react';
import ShortcutForm from '../components/ShortcutForm';
import PopupShortcutsList from './PopupShortcutsList';

const PopupApp = () => {
    const [shortcuts, setShortcuts] = useState([]);
    const [editingShortcut, setEditingShortcut] = useState(null);

    useEffect(() => {
        // Load shortcuts from chrome.storage.sync when the popup opens
        chrome.storage.sync.get(['shortcuts'], (result) => {
            setShortcuts(result.shortcuts || []);
        });
    }, []);

    const handleSaveShortcut = (shortcut) => {
        const updatedShortcuts = editingShortcut
            ? shortcuts.map((s) => (s.id === shortcut.id ? shortcut : s))
            : [...shortcuts, shortcut];

        setShortcuts(updatedShortcuts);
        setEditingShortcut(null);
        chrome.storage.sync.set({ shortcuts: updatedShortcuts });
    };

    const handleEditShortcut = (shortcut) => {
        setEditingShortcut(shortcut);
    };

    const handleDeleteShortcut = (id) => {
        const updatedShortcuts = shortcuts.filter((s) => s.id !== id);
        setShortcuts(updatedShortcuts);
        chrome.storage.sync.set({ shortcuts: updatedShortcuts });
    };

    return (
        <div style={{ padding: '10px', width: '300px' }}>
            <h2>Text Expander</h2>
            <ShortcutForm onSave={handleSaveShortcut} existingShortcut={editingShortcut} />
            <PopupShortcutsList
                shortcuts={shortcuts}
                onEdit={handleEditShortcut}
                onDelete={handleDeleteShortcut}
            />
        </div>
    );
};

export default PopupApp;