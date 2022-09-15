
export default class Formulario {
  constructor(inputs, atributos) {
    this.inputs = inputs;
    this.atributos = atributos;
  }

  render(idPadre) {
    const form = document.createElement("form");
    form.setAttribute("id", "formulario");
    for (let index = 0; index < this.atributos.length; index++) {
      form.setAttribute(this.atributos[index][0], this.atributos[index][1]);
    }
    let padre = document.getElementById(idPadre);
    form.classList.add("d-block");
    form.classList.add("mx-auto");
    form.classList.add("my-5");
    padre.appendChild(form);
  }
}
