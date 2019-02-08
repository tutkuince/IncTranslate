class Translate {
    constructor(text, language) {
        this.apiKey = "trnsl.1.1.20190206T162044Z.83c2a0a160da44dc.9b09b5d06777baf7ee2733aff889d6e3922c0570";
        this.text = text;
        this.language = language;
    }

    translateText() {
        const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.text}&lang=${this.language}`;
        this.get(endpoint)
            .then(data => {
                return data.text[0];
            }).catch(err => console.log(err));
    }

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("An error occurred!" + response.status);
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}