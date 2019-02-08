// fetch, promise

eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateText);
}

function translateText(e) {
    let language = document.getElementById("language").value;
    let word = document.getElementById("word").value;

    const translate = new Translate(word, language);
    translate.translateText()
        .then(response => console.log(response))
        .catch(err => console.error(err));

    e.preventDefault();
}