class Translate {
    constructor(text, language) {
        this.apiKey = "trnsl.1.1.20190206T162044Z.83c2a0a160da44dc.9b09b5d06777baf7ee2733aff889d6e3922c0570";
        this.text = text;
        this.language = language;
    }

    async translateText() {
        const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.text}&lang=${this.language}`;

        const response = await fetch(endpoint);
        const data = await response.json();
        const text = data.text[0];
        return text;
    }
}