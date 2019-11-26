// Event listener for all button elements
let playerCardsDiv = $("#playerCards");
let dealerCardsDiv = $("#dealerCards");
let drawBtn = $("#drawBtn");
let total = $('#total');
let value = 0;
let dealerHand = [];
let playerHand = [];

$("#drawBtn").on("click", function () {
  drawCards(drawBtn.attr("data-cards"), "new");
  drawBtn.attr("data-cards", 1);
});

function drawCards(num, game) { 
  // call to API for cards to draw
  let count = num;
  let deck = game;

  let queryURL = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${count}`

  // Performing our AJAX GET request
  $.ajax({
    url: queryURL,
    method: "GET",

  })
    // After the data comes back from the API
    .then(function (response) {
      console.log(response)
      for (i = 0; i < response.cards.length; i++) {
        var cardImg = $("<img>");
        
        dealerHand.push({
          suit: response.cards[i].suit,
          value: checkScore(response.cards[i].value),
          code: response.cards[i].code,
          image: response.cards[i].image,
          hiddenImage: response.cards[i].image,
          isFlipped: false,
        });
        
        if(i == 0) { 
          dealerHand[i].isFlipped = true;
          cardImg.attr("src", "./assets/images/facedown_red.jpeg");
        } else {
          cardImg.attr("src", dealerHand[i].image);
        }
        cardImg.addClass("card");
        dealerCardsDiv.append(cardImg);
        value += parseInt(dealerHand[i].value);
        total.text("Total: " + value);
      }
    });

    console.log(dealerHand);
}

function checkScore(value) { 
  if(value == "JACK" || value == "QUEEN" || value == "KING"){
    return "10";
  }
  else if (value == "ACE") {
    return checkAces(value);
  } else {
    return value;
  }
}

function checkAces() {
  // if treated as 1 or 11
}

function flipCards() {
  // show the dealer's hidden card
  dealerHand[0].isFlipped = false;
}