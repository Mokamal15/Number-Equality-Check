function checkNumberEquality() {
    var userInput = parseFloat(document.getElementById("numberInput").value);
    var resultText = document.getElementById("resultText");
    
    if (userInput === 0) {
      resultText.textContent = "True";
    } else {
      resultText.textContent = "False";
    }
  }