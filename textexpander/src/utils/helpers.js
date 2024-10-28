// helpers.js

// Validates if a trigger already exists in the list of shortcuts
export const isTriggerUnique = (shortcuts, newTrigger, editingId = null) => {
    return !shortcuts.some(
        (shortcut) =>
            shortcut.trigger === newTrigger && shortcut.id !== editingId
    );
};

// Formats text for display, can be expanded with more specific logic as needed
export const formatText = (text) => {
    return text.trim();
};
