// Colocando em pratica 3.1

let tabuadaA = [];
let tabuadaB = [];

function tabuada(n) {
  for (let i = 1; i < 11; i++) {
    tabuadaA.push(n * i);
    tabuadaB.push((n + 1) * i);
    tabuadaB.push((n + 2) * i);
  }

  console.log(tabuadaA);
  console.log(tabuadaB);
}

tabuada(5);

// -------------------------------------------

let arrayParadas = [
  [10, 0],
  [3, 5],
  [5, 8],
];

function PontosDeOnibus(array) {
  let passageirosAbordo = 0;
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
      x === 0
        ? (passageirosAbordo += array[i][x])
        : (passageirosAbordo -= array[i][x]);

      passageirosAbordo < 0
        ? (passageirosAbordo = 0)
        : (passageirosAbordo = passageirosAbordo);
    }
  }
  return passageirosAbordo;
}

console.log(`Restao : ${PontosDeOnibus(arrayParadas)} pessoas no onibus`);

// --------------------------------------- //
let Ficha = [21, 13, 2, 7, 5, 14, 7, 15, 9, 10];

function Bingo(arrayBingo) {
  let bingo = ["", "", "", "", ""];
  arrayBingo.filter((x) => {
    switch (x) {
      case 2:
        bingo[0] = "b";
        break;
      case 9:
        bingo[1] = "i";
        break;
      case 14:
        bingo[2] = "n";
        break;
      case 7:
        bingo[3] = "g";
        break;
      case 15:
        bingo[4] = "o";
        break;
    }
  });

  bingo = bingo.join("");

  let verifica;
  bingo === "bingo" ? (verifica = true) : (verifica = false);

  if (verifica) return "GANHOU";
  else return "PERDEU";
}

console.log(Bingo(Ficha));
