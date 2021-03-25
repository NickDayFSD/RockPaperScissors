## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## HTML
1) Header announcing the game
1.1) Rules (in sidebar as a stretch)
2) Rock Paper Scissors buttons
 - label with radio button for each option
3) Submit button
 - <button id=submit-button>Let's GO!</button>
4) Results message
5) Total Wins
6) Total tries
7) Reset Button

## What happens when...
1) Option is selected
 - Set user selection to userThrow
2) Submit is clicked
 - increment total games
 - Random selection for randomThrow
 - Compare userThrow to randomThrow
 - increment wins if applicable
 - display userThrow and randomThrow
 - display win or no win
3) Reset is clicked
 - clear totalWins
 - clear totalThrows