const responses = {
  1: ["https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
    "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems"
  ],
  2: [
    "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
    "https://www.crio.do/projects/"
  ],
  3: ["https://www.crio.do/projects/"
  ],
  4: ["./companies.html"]
};

function handleInput() {
  const input = document.getElementById("chatInput").value.trim();
  const chatMsgs = document.getElementById("chatMsgs");

  if (responses[input]) {
    let responseMsg = `<div class="chatMsg botMsg">`;
    responses[input].forEach(link => {
      responseMsg += `<a href="${link}" target="_blank">${link}</a><br><br>`;
    });
    responseMsg += `</div>`;
    chatMsgs.innerHTML += `<div class="chatMsg userMsg">${input}</div>`;
    chatMsgs.innerHTML += responseMsg;
  } else {
    const errorMessage = "<div class='chatMsg botMsg'>Invalid input. Please enter a valid number.</div>";
    chatMsgs.innerHTML += `<div class="chatMsg userMsg">${input}</div>`;
    chatMsgs.innerHTML += errorMessage;
  }

  document.getElementById("chatInput").value = "";

  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

document.getElementById("chatBtn").addEventListener("click", function () {
  const chatContainer = document.getElementById("chatContainer");
  if (chatContainer.style.display === "none") {
    chatContainer.style.display = "block";
  } else {
    chatContainer.style.display = "none";
  }
});

document.getElementById("chatInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleInput();
  }
});
