// Armazena a chave da API e a URL da API de invocadores
let key = "?api_key=RGAPI-1d252bd7-5cbb-4a88-a5b5-0c603e798f87";
let urlAPI = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

// Armazena os elementos do formulário e do campo de entrada de nome de invocador
let form = document.getElementById('form-sumuner');
let sumenerName = document.getElementById('text');

// Função que é chamada quando o formulário é enviado
function submition(e) {
    // Previne o envio padrão do formulário
    e.preventDefault();

    // Concatena o nome de invocador digitado com a chave da API e a URL da API para obter a URL de chamada à API de invocadores
    let urlFinish = urlAPI + sumenerName.value.toLowerCase() + key;

    // Armazena a URL de chamada à API de invocadores no armazenamento local
    localStorage.setItem("urlFinish", urlFinish)

    // Faz uma chamada à API de invocadores
    fetch(urlFinish)
        .then(response => response.json())
        .then(response => {
            // Redireciona para a página de estatísticas e armazena as informações do invocador no armazenamento local
            location.href = "http://127.0.0.1:5500/Pages/index-stats.html";
            localStorage.setItem("name", response.name)
            localStorage.setItem("level", response.summonerLevel)
            localStorage.setItem("icon", response.profileIconId)
            localStorage.setItem("id", response.id)


        })
        // Exibe uma mensagem de erro se ocorrer um erro ao fazer a chamada à API
        .catch(error => {
            document.getElementById("erro").innerHTML = "Enter a valid SumenerName"
            //alert("error")
        });
};