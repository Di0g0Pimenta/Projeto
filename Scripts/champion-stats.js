document.getElementById("ability_haste").innerHTML = localStorage.getItem("ability_haste");
document.getElementById("ability_power").innerHTML = localStorage.getItem("ability_power");
document.getElementById("armor").innerHTML = localStorage.getItem("armor");
document.getElementById("armor_gain_per_lvl").innerHTML = localStorage.getItem("armor_gain_per_lvl");
document.getElementById("attack_damage").innerHTML = localStorage.getItem("attack_damage");
document.getElementById("attack_damage_gain_per_lvl").innerHTML = localStorage.getItem("attack_damage_gain_per_lvl");
document.getElementById("attack_speed").innerHTML = localStorage.getItem("attack_speed");
document.getElementById("attack_speed_gain_per_lvl").innerHTML = localStorage.getItem("attack_speed_gain_per_lvl");
document.getElementById("crit").innerHTML = localStorage.getItem("crit");
document.getElementById("hp").innerHTML = localStorage.getItem("hp");
document.getElementById("hp_gain_per_lvl").innerHTML = localStorage.getItem("hp_gain_per_lvl");
document.getElementById("hp_regen").innerHTML = localStorage.getItem("hp_regen");
document.getElementById("hp_regen_gain_per_lvl").innerHTML = localStorage.getItem("hp_regen_gain_per_lvl");
document.getElementById("magic_resist").innerHTML = localStorage.getItem("magic_resist");
document.getElementById("magic_resist_gain_per_lvl").innerHTML = localStorage.getItem("magic_resist_gain_per_lvl");
document.getElementById("mana").innerHTML = localStorage.getItem("mana");
document.getElementById("mana_gain_per_lvl").innerHTML = localStorage.getItem("mana_gain_per_lvl");
document.getElementById("mana_regen").innerHTML = localStorage.getItem("mana_regen");
document.getElementById("mana_regen_gain_per_lvl").innerHTML = localStorage.getItem("mana_regen_gain_per_lvl");
document.getElementById("movement_speed").innerHTML = localStorage.getItem("movement_speed");
document.getElementById("range").innerHTML = localStorage.getItem("range");

let championName = localStorage.getItem("championName");
let formattedChampionName = championName.replace(/[^a-zA-Z ]/g, "").split(" ").map(name => name.charAt(0).toUpperCase() + name.substring(1)).join("");
let championImgUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${formattedChampionName}_0.jpg`;
document.getElementById("championImg").src = championImgUrl;

