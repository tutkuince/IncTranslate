class Translate {
    constructor(text, language) {
        this.apiKey = "trnsl.1.1.20190206T162044Z.83c2a0a160da44dc.9b09b5d06777baf7ee2733aff889d6e3922c0570";
        this.text = text;
        this.language = language;
    }

    translateText() {
        const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.text}&lang=${this.language}`;

        return new Promise((resolve, reject) => {
           fetch(endpoint)
               .then(response => {
                   if (!response.ok)
                       throw new Error("An error occurred! Status code: " + response.status);

                   return response.json();
               })
               .then(data => resolve(data.text[0]))
               .catch(err => reject(err));
        });
    }
}