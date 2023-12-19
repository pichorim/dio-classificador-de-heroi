let nomeHeroi = "Pichoris"
let xp = 10001
let nivelHeroi = ""

if (xp <= 1000){
    nivelHeroi = "Ferro"
}else if (1001 <= xp && xp <= 2000){
    nivelHeroi = "Bronze"
}else if (2001 <= xp && xp  <= 5000){
    nivelHeroi = "Prata"
}else if (5001 <= xp && xp  <= 7000){
    nivelHeroi = "Ouro"
}else if (7001 <= xp && xp  <= 8000){
    nivelHeroi = "Platina"
}else if (8001 <= xp && xp  <= 9000){
    nivelHeroi = "Ascendente"
}else if (9001 <= xp && xp  <= 10000){
    nivelHeroi = "Imortal"
}else{
    nivelHeroi = "Radiante"
}


console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)