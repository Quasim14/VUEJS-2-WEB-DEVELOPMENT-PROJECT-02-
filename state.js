// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
    // World
    worldRatio: getWorldRatio(),
    // Game
    turn : 1,
    // UI
    activeOverlay: null,

    players :[
      {
        name: 'Anne of Cleve',
      },
      {
        name : 'William the Bald',
      },

  ],
    testHand:[],
    currentPlayerIndex: Math.round(Math.random()),
}
