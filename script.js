document.getElementById("btn").addEventListener("click", generateRandomNumber);

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random-number").innerHTML = randomNumber;
}

