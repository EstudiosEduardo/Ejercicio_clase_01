let cantVideos = parseInt(
  prompt("¿Cuantas clases quieres ver? Van de la última subida para atrás en el tiempo. A tener paciencia si pides muchos videos!! ")
);

async function obtenerVideos() {
  API_key = "AIzaSyBeNYF8xWvLifleFGlVJeJTQdASQmIaSeg";
  channelID = "UCTyVbecYnHR_X01ZYG2qEcQ";
  maxResults = 10;

  let response = await fetch(
    "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" +
      channelID +
      "&maxResults=" +
      maxResults +
      "&key=" +
      API_key +
      ""
  );
  return response.json();
 
}
const lista = document.getElementById("lista");
const datos = obtenerVideos()
    .then((data) => {
        for (let index = 0; index < cantVideos; index++) {
            let li = document.createElement("li");
            let video = document.createElement("iframe");
          
            video.setAttribute("src", "https://www.youtube.com/embed/"+data.items[index].id.videoId);
            video.style.width = "640px";
            video.style.height = "480px";
          
            li.classList.add("list-group-item");
            li.classList.add("mx-auto");
            li.classList.add("my-3");
          
            li.appendChild(video);
            lista.appendChild(li);
          }
          
          
        
        console.log(data.items[0].id.videoId);})


