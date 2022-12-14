let key = "?api_key=RGAPI-864cecdb-b341-4c38-95b0-d21481d96ffc";
let urlAPI = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
var form = document.getElementById('form-sumuner');
var sumenerName = document.getElementById('text');

function submition(e) {
    e.preventDefault();
    
    let urlFinish = urlAPI + sumenerName.value.toLowerCase() + key;
    fetch(urlFinish)
        .then(response => response.json())
        .then(response => {
        console.log(response)
        location.href = "http://127.0.0.1:5500/Stats%20Page/index-stats.html" + "?name=" + sumenerName.value.toLowerCase();
        });
};

function back() {
    location.href = "http://127.0.0.1:5500/Main%20Page/Index-main.html"
}

function checkNickName() {
    
}


/*form.addEventListener('submit', function(e) {
    let urlFinish = urlAPI + sumenerName.value.toLowerCase() + key;
    e.preventDefault();
    fetch(urlFinish)
        .then(response => response.json())
        .then(response => {
        //console.log(response)
        //alert(`O seu nickname é ${response.name}` + ` e o seu nivel é ${response.summonerLevel}!`)
        document.getElementById("userName").innerHTML = response.name;
        });
        
    
});
*/
