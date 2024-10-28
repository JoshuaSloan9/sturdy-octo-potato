import React from 'react';

const ShortcutItem = ({ shortcut, onEdit, onDelete }) => {
    return (
        <li>
            <div>
                <strong>{shortcut.trigger}</strong>: {shortcut.text}
            </div>
            <button onClick={() => onEdit(shortcut)}>Edit</button>
            <button onClick={() => onDelete(shortcut.id)}>Delete</button>
        </li>
    );
};

export default ShortcutItem;
