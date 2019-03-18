playGame();

function playGame() {
    var openTreasure = confirm("You come after a long day to find an closed chest in your living room. Do you open it?");
    alert(openTreasure);

    if(openTreasure == true) {
        var itemChoice = prompt("You open the treasure chest. Inside there are several items. There's a sword, a pouch and a deck of cards. Which do you pick up?");

        if(itemChoice == "sword"){
            alert("The sword is cursed! As you touch it, it flies up and stabs you in the chest! The end.");
        }
        else if(itemChoice == "pouch"){
            alert("The pouch is cursed! As you open it up it swallows you whole! The end.");
        }
        else {
            alert("You pick up the deck of cards. You feel magic eminating from it.");

            var cardChoice = prompt('You hear a voice in your head. "Pick a card, 1, 2 or 3! Draw none and your future will be free"');

            if(cardChoice == 2) {
            alert('As you are about to draw, 2 cards flip and face you. "The first card speaks of great fortune soon to come"');
            alert('"The second card speak of an even more imminent death." The cards explode. The end.');
            }

            else if(cardChoice == 3) {
                alert('As you are about to draw, 3 cards flip and face you. "The first card speaks of a terrible war to come"');
                alert('"The second card speak of great wealth to be gained from the war."');
                alert('"The third card speaks of your death to come." The cards explode. The end');
            }

            else if(cardChoice == "none") {
                alert('You place the deck back in the treasure chest. Wisdom prevails. The end.');
            }
            else {
                alert('As you are about to draw a card, it flips and faces you. "The card speaks of great wealth to come"');
                alert('As the voice has finished speaking, the treasure chest and all the items, along with the deck dissapear. In its place is a solid bar of gold. The end.');
            }
        }
    }
    else {
        alert("You think this whole thing is super weird. Better not open it. The end.");
    }
}