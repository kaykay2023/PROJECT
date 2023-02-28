Guessing game
This is a simple guessing game using htm.css and JavaScript. the game involves 2 players, and each player takes turning guessing the name of a sneaker. The game is set to best of 3 rounds and each player has a chance to win.
Getting Started 
To run the game, simply open the index.html file in a web browser.
How to Play
Player1 starts by guessing and clicking the right button to match the image.
If player choice is correct the player earns a point, and the image randomly changes to a new sneaker. if the guess is incorrect the player earns a wrong score and is giving 3 chances before player 2 get a chance to play.
The game then switches to player 2 and follows the same rules as above.
Code explanation
The code uses a guess () function to handle the logic of the game. The function takes in a parameter name which represents the players guess.
The function checks if its is currently the first or second players turn using variable playerTurn.
If it is the first player's turn and their guess is correct, they earn a point and the image changes to a new sneaker. If their guess is incorrect, they earn a "wrong score" and can continue guessing until they reach the limit of 2 wrong guesses.
If it is the second player's turn, the game follows the same rules as above.
The if else conditions were used to set up player 2 and ensure it follows the same rules as the first.
The game keeps track of the scores and the number of wrong guesses using score and wrongScore variables
The location.reload()  method is used to reload the page when the "Refresh" button is clicked
The if else conditions were used to set up player 2 and ensure it follows the same rules as the first.
