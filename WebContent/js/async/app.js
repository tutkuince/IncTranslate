// async, await

eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateText);
}

function translateText(e) {
    const word = document.getElementById("word").value;
    const language = document.getElementById("language").value;

    e.preventDefault();
}