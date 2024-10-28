import React from 'react';
import ShortcutItem from '../components/ShortcutItem';

const PopupShortcutsList = ({ shortcuts, onEdit, onDelete }) => {
    return (
        <div>
            <h3>Saved Shortcuts</h3>
            {shortcuts.length === 0 ? (
                <p>No shortcuts found.</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {shortcuts.map((shortcut) => (
                        <ShortcutItem
                            key={shortcut.id}
                            shortcut={shortcut}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PopupShortcutsList;
