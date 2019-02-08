function UI() {
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.language = document.getElementById("language");
}

UI.prototype.changeUI = function () {
    this.outputImage.src = `images/${this.language.value}.png`;
    this.outputLanguage.innerHTML = this.language.options[this.language.options.selectedIndex].textContent;
}

UI.prototype.displayTranslate = function (text) {
    this.outputWord.innerHTML = text;
}