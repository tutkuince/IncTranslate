// fetch, promise

eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateText);
    document.getElementById("language").onchange = function () {
        // UI Process
        ui.changeUI();
    }
}

const ui = new UI();

function translateText(e) {
    let language = document.getElementById("language").value;
    let word = document.getElementById("word").value;

    if (word === "") {
        alert("Input cannot be empty!");
    } else {
        const translate = new Translate(word, language);
        translate.translateText()
            .then(response => ui.displayTranslate(response))
            .catch(err => console.error(err));
    }
    e.preventDefault();
}