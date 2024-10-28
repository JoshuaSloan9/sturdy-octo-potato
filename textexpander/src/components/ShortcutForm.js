import React, { useState, useEffect } from 'react';

const ShortcutForm = ({ onSave, existingShortcut }) => {
    const [trigger, setTrigger] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        if (existingShortcut) {
            setTrigger(existingShortcut.trigger);
            setText(existingShortcut.text);
        }
    }, [existingShortcut]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newShortcut = { trigger, text, id: existingShortcut?.id || Date.now() };
        onSave(newShortcut);
        setTrigger('');
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Trigger:
                <input
                    type="text"
                    value={trigger}
                    onChange={(e) => setTrigger(e.target.value)}
                    required
                />
            </label>
            <label>
                Text:
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
            </label>
            <button type="submit">{existingShortcut ? 'Update' : 'Save'}</button>
        </form>
    );
};

export default ShortcutForm;
