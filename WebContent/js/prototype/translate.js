function Translate(text, language) {
    this.apiKey = "trnsl.1.1.20190206T162044Z.83c2a0a160da44dc.9b09b5d06777baf7ee2733aff889d6e3922c0570";
    this.text = text;
    this.language = language;

    // XHR Object
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateText = function (callback) {
    // Ajax Processes

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.text}&lang=${this.language}`;

    this.xhr.open("GET", endpoint, true);

    this.xhr.onload = () => {
        if (this.xhr.status) {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text);
        } else
            callback("An error occurred!", null);
    };

    this.xhr.send();
};

Translate.prototype.changeParameters =  function (newWorld, newLanguage) {
    this.text = newWorld;
    this.language = newLanguage;
}