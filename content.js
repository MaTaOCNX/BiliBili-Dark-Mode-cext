const applyTheme = (isDark) => {
    document.documentElement.classList.toggle('dark-mode', isDark);
};

// Check storage on load
chrome.storage.local.get('darkMode', (data) => {
    applyTheme(data.darkMode !== false); // Default to true
});

// Listen for toggle changes
chrome.storage.onChanged.addListener((changes) => {
    if (changes.darkMode) applyTheme(changes.darkMode.newValue);
});