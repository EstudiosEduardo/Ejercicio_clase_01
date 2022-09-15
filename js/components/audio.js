export default class Audio {
    constructor(source) {
        this.source = source;
    }

    render(idPadre) {

        let audio = document.createElement("audio");
        audio.setAttribute("src", this.source);
        audio.setAttribute("controls", "true");

        let padre = document.getElementById(idPadre);
        audio.classList.add("d-block");
        audio.classList.add("mx-auto");
        audio.classList.add("my-5");
        padre.appendChild(audio);
    }
}