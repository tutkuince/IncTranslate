function Translate(text, language) {
    this.apiKey = "trnsl.1.1.20190206T162044Z.83c2a0a160da44dc.9b09b5d06777baf7ee2733aff889d6e3922c0570";
    this.text = text;
    this.language = language;

    // XHR Object
    this.xhr = new XMLHttpRequest();
}