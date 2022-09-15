export default class Video {

    constructor(source, width, height) {
    
        this.source = source;
        this.width = width;
        this.height = height;
  }

     render(idPadre) {

        let video = document.createElement("iframe");
        video.setAttribute("src", this.source);
        video.style.width = this.width + "px";
        video.style.height = this.height + "px";
        let padre = document.getElementById(idPadre);
        video.classList.add("d-block");
        video.classList.add("mx-auto");
        video.classList.add("my-5");
        padre.appendChild(video);
    }

}