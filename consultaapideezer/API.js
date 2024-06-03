import axios from "axios";
import prompt from "prompt-sync";
const read = prompt();

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)" 
}

let reqOptions = {
  url: "https://api.deezer.com/search?q=",
  method: "GET",
  headers: headersList,
}


console.log('Insira o nome de uma musica')
const resposta = read();
reqOptions.url += resposta;

let response = await axios.request(reqOptions);


let listaMusicas = [{}];

const musicas = response.data;

for(let i = 0; i < 5; i++){
  const musica = musicas.data[i];
  listaMusicas.push({
    id: musica.id,
    title: musica.title,
    link: musica.link,
    img: musica.album.cover
  })}
const musica = musicas.data[1];


console.log(listaMusicas.length);
console.log(listaMusicas);

//Ver como fazer o loop parar quando não ter resultados de pesquisas suficientes pra iteração
//Quando não tem resultados suficientes, o programa tenta adicionar um valor inexistente ao array

//TODO: consultar cada objeto e colocar a imagem correspondente em uma pagina web
//TODO: Pesquisar sobre funções assincronas