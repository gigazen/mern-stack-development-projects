chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "countWords") {
    const text = document.body.innerText || document.body.textContent;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    sendResponse({ wordCount: wordCount });
  }
});
