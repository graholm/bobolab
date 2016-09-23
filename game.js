var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13

  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");
  }  
})



function parseText(text) {  
  text=text.toLowerCase()

  switch (text) {

    case "hello":
      gameOutput.html("HI!");
      break;

    case "hey":
      gameOutput.html("heyyy!");
      break;

    case "what's your name": 
    case "what is your name":
      gameOutput.html("bob!");
      break;

    case "random":
      var responses = [
        "IDK",
        "who am i",
        "David rocks",
        "stop",
      ]
      var response = responses[Math.floor(Math.random()*responses.length)];
      gameOutput.html(response);    
      break;



    case "show me a dog": 
      var stuff = '<img id="imagedog" src="http://www.dogster.com/wp-content/uploads/2015/05/bernese-mountain-dog-puppies-04.jpg"/>'
      console.log(stuff)
      gameOutput.html(stuff);
      break;





    default: gameOutput.html("Sorry, I didn't catch that, could you please be more clear?");
  }
}





