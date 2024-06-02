import axios from "axios";

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)" 
}

let reqOptions = {
  url: "https://api.deezer.com/search?q=X on You",
  method: "GET",
  headers: headersList,
}

let response = await axios.request(reqOptions);

const musicas = response.data
const musica = musicas.data[0]

const oi = {
  id: musica.id,
  title: musica.title,
  link: musica.link,
  img: musica.album.cover
}

console.log(oi)

//TODO: O objeto 'oi' deve ter o nome alterado, motivos obvios
//TODO: loop pra iterar cada musica
//TODO: consultar cada objeto e colocar a imagem correspondente em uma pagina web
//TODO: Usuario deve pesquisar musicas depois e adicionar elas a uma lista