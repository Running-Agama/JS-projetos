export function consultaDeezer(){

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)" 
       }
       
       let reqOptions = {
         url: "https://api.deezer.com/search?q=",
         method: "GET",
         headers: headersList,
       }

       let response = await axios.request(reqOptions);
    console.log('Insira o nome de uma musica')
    const resposta = read()
    reqOptions.url += resposta

}