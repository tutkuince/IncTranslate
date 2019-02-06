// Prototype, Ajax, Callback

eventListeners();

function eventListeners() {
    document.querySelector("#translate-form").addEventListener("submit", translateWord);
    document.querySelector("#language").onchange = function () {
        // UI Process
    }
}

function translateWord(e) {




    e.preventDefault();
}