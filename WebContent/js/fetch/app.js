// fetch, promise

eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateText);
}

function translateText(e) {

    e.preventDefault();
}