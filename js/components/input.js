export default class Input {
    
    constructor(type,atributos){
        this.type = type;
        this.atributos = atributos;
    }

    render(idPadre) {
        const input = document.createElement("input");
        for (let index = 0; index < this.atributos.length; index++) {
            input.setAttribute(this.atributos[index][0], this.atributos[index][1]);
        }
        let padre = document.getElementById(idPadre);
        input.classList.add("d-block");
        input.classList.add("mx-auto");
        input.classList.add("my-5");
        padre.appendChild(input);
    }
}