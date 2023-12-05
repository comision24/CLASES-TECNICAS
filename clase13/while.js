const animes = [
  "Jujutsu Keisen",
  "Dragon Ball",
  "Naruto",
  "Demon Slayer",
  "Pokemon",
];
// EJEMPLO FOR
for (let index = 0; index < animes.length; index++) {
  const element = animes[index];
  // console.log(element)
}
console.log(" ")

// EJEMPLO 1
let index = 0;
while (index < animes.length) {
  // console.log(animes[index]);
  index++;
}


// EJEMPLO 2
let index2 = 0;
while (true) {

  console.log(animes[index2])

  if(index2 === animes.length - 1) {
    break;
  }

  index2++;
}
