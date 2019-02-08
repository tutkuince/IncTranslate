// async, await

eventListeners();

const ui = new UI();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateText);
    document.getElementById("language").onchange = function () {
        // UI Process
        ui.changeUI();
    }
}

function translateText(e) {
    const word = document.getElementById("word").value;
    const language = document.getElementById("language").value;

    const translate = new Translate(word, language);
    translate.translateText()
        .then(response => console.log(response))
        .catch(err => console.log(err));

    e.preventDefault();
}