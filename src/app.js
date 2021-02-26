const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  // Create players using for loop
  for (i = 0; i < players.length; i++) {
    detailedPlayers.push({
      name: players[i],
      strength: getRandomStrength(),
      image: "images/super-" + (i + 1) + ".png",
      type: heroVillain(),
    });
  }
  return detailedPlayers;
};

// fucntion to decide between hero and villain
const heroVillain = () => {
  let type = Math.floor(Math.random() * 2);
  if (type == 0) {
    return "hero";
  } else {
    return "villain";
  }
};

//Return a random integer (0,100]
const getRandomStrength = () => {
  let strength = Math.floor(Math.random() * 100) + 1;
  return strength;
};
// Loop through players and accumulate HTML template
// depending of type of player(hero|villain)
// Type your code here
const buildPlayers = (players, type) => {
  let fragment = "";
  for (let i = 0; i < players.length; i++) {
    if (players[i].type == type) {
      fragment += 
      `<div class="player">
       <img src="${players[i].image}">
       <div class="name">${players[i].name}</div>
       <div class="strength">${players[i].strength}</div>
    </div>`;
    }
  }

  return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
