chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "expandText") {
        // Insert expansion logic here (e.g., detecting triggers in the active text area)
    }
});

// Example logic to listen for input and trigger shortcut expansion
document.addEventListener("input", (event) => {
    // Check if input contains a shortcut trigger (e.g., "@shortcut")
    chrome.storage.sync.get("shortcuts", (data) => {
        const shortcuts = data.shortcuts || [];
        shortcuts.forEach(shortcut => {
            if (event.target.value.includes(shortcut.trigger)) {
                event.target.value = event.target.value.replace(shortcut.trigger, shortcut.text);
            }
        });
    });
});