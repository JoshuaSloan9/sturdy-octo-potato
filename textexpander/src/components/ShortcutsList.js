import React from 'react';
import ShortcutItem from './ShortcutItem';

const ShortcutsList = ({ shortcuts, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Saved Shortcuts</h2>
            {shortcuts.length === 0 ? (
                <p>No shortcuts found.</p>
            ) : (
                <ul>
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

export default ShortcutsList;
