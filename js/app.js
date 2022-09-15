import Video from "./components/video.js";
import Audio from "./components/audio.js";
import ListaElementos from "./components/lista.js";
import Boton from "./components/boton.js";
import Formulario from "./components/formulario.js";
import Input from "./components/input.js"

const video = new Video("https://www.youtube.com/embed/videoseries?list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6", 560, 315);
video.render("myApp");

const audio = new Audio("./audios/Pajaros de Barro - Manolo Garcia.m4a");
audio.render("myApp");

const lista = new ListaElementos(["Perro", "Gato", "Pájaro", "Pez"]);
lista.render("myApp");

const boton = new Boton("Enviar","submit",[["style","font-size: 20pt; background-color: fuchsia"]]);
boton.render("myApp");

const form = new Formulario(1,["action","sarasa"]); 
form.render("myApp");

const input = new Input("text",["placeholder","hola soy un input"]);
input.render("formulario");

