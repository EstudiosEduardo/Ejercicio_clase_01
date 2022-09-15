export default class Boton {

    constructor(texto,type,atributos){
        this.texto = texto;
        this.type = type;
        this.atributos = atributos;
    }

    render(idPadre) {
        const button = document.createElement("button");
        button.setAttribute("type", this.type);
        button.innerText = this.texto;
        for (let index = 0; index < this.atributos.length; index++) {
            button.setAttribute(this.atributos[index][0], this.atributos[index][1]);
        }
        let padre = document.getElementById(idPadre);
        button.classList.add("d-block");
        button.classList.add("mx-auto");
        button.classList.add("my-5");
        padre.appendChild(button);
    }

   
}