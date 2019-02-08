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

    if (word === "")
        alert("Input cannot be empty!");
    else {
        const translate = new Translate(word, language);
        translate.translateText()
            .then(response => ui.displayTranslate(response))
            .catch(err => console.log(err));
    }
    e.preventDefault();
}