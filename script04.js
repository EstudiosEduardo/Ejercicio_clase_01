class Video {

    constructor(source, width, height) {
    
        this.source = source;
        this.width = width;
        this.height = height;
  }

    crearElemento() {

        let video = document.createElement("iframe");
        video.setAttribute("src", this.source);
        video.style.width = this.width + "px";
        video.style.height = this.height + "px";

        return video;
    }

}

class Audio {
    constructor(source) {
        this.source = source;
    }

    crearElemento() {

        let audio = document.createElement("audio");
        audio.setAttribute("src", this.source);
        audio.setAttribute("controls", "true");

        return audio;
    }
}

class Boton {

    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    crearElemento() {

        let boton = document.createElement("button");
        boton.setAttribute("type", this.type);
        boton.style.backgroundColor = this.color;
        boton.innerText = "hola, soy un boton"

        return boton;
    }
}

class ListaElementos {
    constructor(elementos) {
        this.elementos = elementos;
        
    }

    crearLista(){

        const lista = document.createElement("ul");
        for (let index = 0; index < this.elementos.length; index++) {
            let li = document.createElement("li");
            console.log(this.elementos.length,this.elementos[index])
            li.innerText = this.elementos[index];
            lista.appendChild(li);  
        }
        return lista;
    
    }
}

function agregarElemento(idPadre, elemento){

    let padre = document.getElementById(idPadre);
    elemento.classList.add("d-block");
    elemento.classList.add("mx-auto");
    elemento.classList.add("my-5");
    padre.appendChild(elemento);

}

const video = new Video("https://www.youtube.com/embed/videoseries?list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6", 560, 315);
const audio = new Audio("./audios/Pajaros de Barro - Manolo Garcia.m4a");
const boton = new Boton("button", "red");
const lista = new ListaElementos(["Perro", "Gato", "Pájaro", "Pez"]);



agregarElemento( "padre", video.crearElemento());
agregarElemento( "padre", audio.crearElemento());
agregarElemento( "padre", boton.crearElemento());
agregarElemento( "padre", lista.crearLista());