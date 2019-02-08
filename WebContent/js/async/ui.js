class UI {
    constructor() {
        this.outputImage = document.getElementById("outputImage");
        this.outputLanguage = document.getElementById("outputLanguage");
        this.outputWord = document.getElementById("outputWord");

        this.language = document.getElementById("language");
    }

    changeUI() {
        this.outputImage.src = `images/${this.language.value}.png`;
        this.outputLanguage.innerHTML = this.language.options[this.language.options.selectedIndex].textContent;
    }
}