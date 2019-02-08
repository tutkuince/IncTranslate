// Prototype, Ajax, Callback

eventListeners();


function eventListeners() {
    document.querySelector("#translate-form").addEventListener("submit", translateWord);
    document.querySelector("#language").onchange = function () {
        // UI Process
        ui.changeUI();
    }
}

const ui = new UI();

function translateWord(e) {
    const word = document.getElementById("word").value;
    const lang = document.getElementById("language").value;
    const translate = new Translate(word, lang);

    if (word === "") {
        alert("Input cannot be empty!");
    } else {
        translate.changeParameters(word, lang);

        translate.translateText(function (err, response) {
            if (err === null)
                ui.displayTranslate(response);
            else {
                console.log(err);
            }
        });
    }
    e.preventDefault();
}