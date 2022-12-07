let key = "?api_key=RGAPI-f4c4201d-5ac0-44ca-8375-da4a3b292b90";
let urlAPI = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
var form = document.getElementById('form-sumuner');
var sumenerName = document.getElementById('text');

form.addEventListener('submit', function(e) {
    let urlFinish = urlAPI + sumenerName.value.toLowerCase() + key;
    fetch(urlFinish)
        .then(response => response.json())
        .then(response => {
        console.log(response)
        alert(`O seu nickname é ${response.name}` + ` e o seu nivel é ${response.summonerLevel}!`)
        });
    
    // impede o envio do form
    e.preventDefault();
});
