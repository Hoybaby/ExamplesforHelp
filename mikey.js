// Rules of Programming:
// 1. Make it Work (i rarely make it past this ;)
// 2. Make it Right
// 3. Make it Fast
//
// rules of the game
const rules = {
  'r': {
    'r': 'tie',
    'p': 'lose',
    's': 'win'
  }, 

  'p': {
    'r': 'win',
    'p': 'tie',
    's': 'lose'
  },

  's': {
    'r': 'lose',
    'p': 'win',
    's': 'tie'
  },
}

// rules decomposition
// rules => ['a','b','c'] => ['a', 'b', 'c'][0] => value => rules[value] == win/tie/lose

// capture valid "moves": "r", "p", "s" to clean up code lookups in loop
const allowedMoves = Object.keys( rules )
const wins = 0;
const losses = 0;
const ties = 0;

// 1. capture input from user
// 1b. show user input
// 2. determine computer choice (randomly selected from the keys of rules)
// 3. show computer choice
// 3. look up rules to determine winner
// 4. display result

for (i=0; i<10; i++) {
  // get user's move. Use prompt here
  const userChoice = 'r'

  // determine computer's move
  const randomIndex = Math.floor(Math.random() * allowedMoves.length)
  console.log(`Random Index is ${randomIndex}`)

  const computerChoice = allowedMoves[randomIndex] // look up 'r', 'p', 's' in the allowedMovies array
  console.log(`Computer choice ${computerChoice}`)

  console.log(`Ruleset to determine winner of ${userChoice} vs ${computerChoice}:`, rules[userChoice])

  // get win/lose/tie information for user's move
  switch(rules[userChoice][computerChoice]) {
    case 'win':
      ++wins
      break;
    case 'lose':
      ++ losses
      break;
    case 'tie':
      ++ ties
      break;
  }

  console.log(`Round ${i+1}: wins: ${wins} losses: ${losses} ties: ${ties}`)
}

