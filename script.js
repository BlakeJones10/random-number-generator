document.getElementById("btn").addEventListener("click", generateRandomNumber);

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random-number").innerHTML = randomNumber;
}

function showMessage() {
    const randomNumber = document.getElementById("random-number").innerHTML;
    if (randomNumber > 50) {
        document.getElementById("message").innerHTML = "Greater than 50";
    } else {
        document.getElementById("message").innerHTML = "Less than 50";
    }
}