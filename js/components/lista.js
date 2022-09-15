export default class ListaElementos {
    constructor(elementos) {
        this.elementos = elementos;
        
    }

    render(idPadre){

        const lista = document.createElement("ul");
        for (let index = 0; index < this.elementos.length; index++) {
            let li = document.createElement("li");
            console.log(this.elementos.length,this.elementos[index])
            li.innerText = this.elementos[index];
            lista.appendChild(li);  
        }
        let padre = document.getElementById(idPadre);
        lista.classList.add("d-block");
        lista.classList.add("mx-auto");
        lista.classList.add("my-5");
        padre.appendChild(lista);
    
    }
}
