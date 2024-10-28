import React, { useState, useEffect } from 'react';
import ShortcutForm from '../components/ShortcutForm';
import ShortcutsList from '../components/ShortcutsList';
import { getShortcuts, addOrUpdateShortcut, deleteShortcut } from '../utils/storage';
import { isTriggerUnique } from '../utils/helpers';

const WebsiteApp = () => {
    const [shortcuts, setShortcuts] = useState([]);
    const [editingShortcut, setEditingShortcut] = useState(null);

    // Load shortcuts on component mount
    useEffect(() => {
        const loadShortcuts = async () => {
            const loadedShortcuts = await getShortcuts();
            setShortcuts(loadedShortcuts);
        };
        loadShortcuts();
    }, []);

    // Save or update a shortcut
    const handleSaveShortcut = async (shortcut) => {
        if (isTriggerUnique(shortcuts, shortcut.trigger, shortcut.id)) {
            await addOrUpdateShortcut(shortcut);
            const updatedShortcuts = await getShortcuts();
            setShortcuts(updatedShortcuts);
            setEditingShortcut(null);
        } else {
            alert("Trigger must be unique.");
        }
    };

    // Edit a shortcut
    const handleEditShortcut = (shortcut) => {
        setEditingShortcut(shortcut);
    };

    // Delete a shortcut
    const handleDeleteShortcut = async (id) => {
        await deleteShortcut(id);
        const updatedShortcuts = await getShortcuts();
        setShortcuts(updatedShortcuts);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Manage Text Shortcuts</h1>
            <ShortcutForm onSave={handleSaveShortcut} existingShortcut={editingShortcut} />
            <ShortcutsList
                shortcuts={shortcuts}
                onEdit={handleEditShortcut}
                onDelete={handleDeleteShortcut}
            />
        </div>
    );
};

export default WebsiteApp;
