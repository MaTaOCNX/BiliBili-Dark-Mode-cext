const toggle = document.getElementById('darkToggle');
chrome.storage.local.get('darkMode', (data) => {
    toggle.checked = data.darkMode !== false;
});
toggle.addEventListener('change', () => {
    chrome.storage.local.set({ darkMode: toggle.checked });
});