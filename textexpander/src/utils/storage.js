// storage.js

// Fetch all shortcuts from chrome.storage.sync
export const getShortcuts = () => {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['shortcuts'], (result) => {
            resolve(result.shortcuts || []);
        });
    });
};

// Save shortcuts to chrome.storage.sync
export const saveShortcuts = (shortcuts) => {
    return new Promise((resolve) => {
        chrome.storage.sync.set({ shortcuts }, () => {
            resolve();
        });
    });
};

// Add or update a shortcut
export const addOrUpdateShortcut = async (newShortcut) => {
    const shortcuts = await getShortcuts();
    const existingIndex = shortcuts.findIndex((s) => s.id === newShortcut.id);
    
    if (existingIndex > -1) {
        // Update existing shortcut
        shortcuts[existingIndex] = newShortcut;
    } else {
        // Add new shortcut
        shortcuts.push(newShortcut);
    }
    
    await saveShortcuts(shortcuts);
};

// Delete a shortcut by id
export const deleteShortcut = async (id) => {
    const shortcuts = await getShortcuts();
    const updatedShortcuts = shortcuts.filter((s) => s.id !== id);
    await saveShortcuts(updatedShortcuts);
};
