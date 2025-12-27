// INDEX PAGE
const form = document.getElementById("futureForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      struggle: document.getElementById("struggle").value,
      dream: document.getElementById("dream").value,
      hope: document.getElementById("hope").value,
      word: document.getElementById("word").value,
      year: document.getElementById("year").value
    };

    sessionStorage.setItem("futureFormData", JSON.stringify(data));
    window.location.href = "writing.html";
  });
}

// LETTER PAGE
const letter = sessionStorage.getItem("generatedLetter");
const typed = document.getElementById("typedLetter");

if (typed && letter) {
  let i = 0;
  function type() {
    if (i < letter.length) {
      typed.textContent += letter[i++];
      setTimeout(type, 14);
    }
  }
  type();
}

function copyLetter() {
  navigator.clipboard.writeText(letter);
  alert("Copied!");
}

function shareLetter() {
  if (navigator.share) {
    navigator.share({ title: "A Letter From My Future Self", text: letter });
  } else {
    copyLetter();
  }
}

function downloadPostcard() {
  html2canvas(document.getElementById("postcard")).then(canvas => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL();
    a.download = "future-letter.png";
    a.click();
  });
}

function startAgain() {
  sessionStorage.clear();
  window.location.href = "index.html";
}
