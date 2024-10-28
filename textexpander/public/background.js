chrome.runtime.onInstalled.addListener(() => {
    console.log("Text Expander extension installed.");
});

// Listens for messages from content or popup scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getShortcuts") {
        chrome.storage.sync.get("shortcuts", (data) => {
            sendResponse({ shortcuts: data.shortcuts || [] });
        });
        return true; // Indicates a response will be sent asynchronously
    }
});

const preloadShortcuts = async () => {
    const defaultShortcuts = [
        { id: 1, trigger: "@hello", text: "Hello, how can I help you today?" },
        { id: 2, trigger: "@bye", text: "Thank you! Have a great day!" },
        { id: 3, trigger: "@info", text: "For more information, please visit our website." }
    ];
    chrome.storage.sync.set({ shortcuts: defaultShortcuts });
};

preloadShortcuts();