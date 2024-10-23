let nome = "Homem de Ferro";
let XP = 1500;
let experiencia;

if (XP < 1000) {
    experiencia = "Ferro";
} else if (XP > 1000 && XP <= 2000){
    experiencia = "Bronze";
} else if (XP > 2000 && XP <= 5000){
    experiencia = "Prata";
} else if (XP > 5000 && XP <= 7000){
    experiencia = "Ouro";
} else if (XP > 7000 && XP <= 8000){
    experiencia = "Platina";
} else if (XP > 8000 && XP <= 9000){
    experiencia = "Ascendente";
} else if (XP > 9000 && XP <= 10000){
    experiencia ="Imortal";
} else {
    experiencia = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + experiencia);