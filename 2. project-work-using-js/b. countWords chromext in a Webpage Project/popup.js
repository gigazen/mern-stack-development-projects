document.getElementById("countWords").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "countWords" },
      function (response) {
        document.getElementById("wordCount").textContent =
          "Word count: " + response.wordCount;
      }
    );
  });
});
