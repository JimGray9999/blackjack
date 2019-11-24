// Event listener for all button elements
var drawnCardsDiv = $("#drawnCards");
var total = $('#total');
var value = 0;

$("a").on("click", function () {

  var count = "2";
  var deck = "new";

  var queryURL = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=${count}`

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
        cardImg.attr("src", response.cards[i].image);
        drawnCardsDiv.append(cardImg);
        value += parseInt(response.cards[i].value);
        total.text("Total: " + value);
      }
    });

function drawCards(num) { 
  // call to API for cards to draw
}

function checkScore() { 
  const scoreTable = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "JACK" : 10,
    "QUEEN" : 10,
    "KING" : 10,
  }
}

function checkAces() {
  // if treated as 1 or 11
}

});