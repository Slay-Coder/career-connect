// Database of responses
const responses = {
    1: "./amazon.html",
    2: "./Google/index.html",
    3: "./Facebook/index.html",
    4: "./Uber/index.html",
    5: "./Intuit/index.html",
    6: "./Flipkart/index.html",
    7: "./Deloitte/index.html",
    8: "./Wells fargo/index.html",
    9: "./adobe.html",
    10: "./microsoft.html",
    11: "./cisco.html",
    12: "./citi.html",
  };
  
  // Function to handle user input
  function handleInput() {
    const input = document.getElementById("chatInput").value.trim();
    const chatMsgs = document.getElementById("chatMsgs");
  
    // Check if input matches any response in the database
    if (responses[input]) {
      const responseMsg = `<div class="chatMsg botMsg"><a href="${responses[input]}" target="_blank">${responses[input]}</a></div>`;
      chatMsgs.innerHTML += `<div class="chatMsg userMsg">${input}</div>`;
      chatMsgs.innerHTML += responseMsg;
    } else {
      const errorMessage =
        "<div class='chatMsg botMsg'>Invalid input. Please enter a valid number.</div>";
      chatMsgs.innerHTML += `<div class="chatMsg userMsg">${input}</div>`;
      chatMsgs.innerHTML += errorMessage;
    }
  
    // Clear input field
    document.getElementById("chatInput").value = "";
  
    // Scroll to bottom of chat container
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
  }
  
  // Toggle chatbot container visibility
  document.getElementById("chatBtn").addEventListener("click", function () {
    const chatContainer = document.getElementById("chatContainer");
    if (chatContainer.style.display === "none") {
      chatContainer.style.display = "block";
    } else {
      chatContainer.style.display = "none";
    }
  });
  
  // Event listener for Enter key press
  document.getElementById("chatInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleInput();
    }
  });
  
s