const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];



const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// String: uses destructuring to declare five animal sounds
const animalSounds = 'moo meow woof neigh roar';
const [sound1, sound2, sound3, sound4, sound5] = animalSounds.split(' ');

// String: uses destructuring to declare the four traditional animal names
const traditionalAnimals = 'bessie charlotte daisy duke';
const [animal1, animal2, animal3, animal4] = traditionalAnimals.split(' ');

// String: uses destructuring to declare the three traditional animal colors
const animalColors = 'blackAndWhite brown spotted';
const [color1, color2, color3] = animalColors.split(' ');

// Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Array: uses destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, i] = rainbowColors.map(color => color.charAt(0));

// Array: uses destructuring to declare Indigo using indg
const [indg] = rainbowColors.filter(color => color === 'indigo');

// Object: uses destructuring to assign all appropriate variables using the keys as the variable names
const muppet = {
  muppetName: 'Kermit',
  song1: 'The Rainbow Connection',
  song2: 'It\'s Not Easy Being Green',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};
const { muppetName, song1, song2, job, partner } = muppet;

// Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2: secondSong, song4, job: kermitJob, partner: kermitPartner } = muppet;
