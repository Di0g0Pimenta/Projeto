let key = "?api_key=RGAPI-0cfbe89e-9db0-45e4-9978-da0dffe336dc";
let sumenerName = "diogovski2003pt"
let urlAPI = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
let urlFinish = urlAPI + sumenerName + key;

fetch(urlFinish)
    .then(response => response.json())
    .then(response => {
    console.log(response)
    });
