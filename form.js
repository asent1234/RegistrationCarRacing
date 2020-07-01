class Form{
    constructor(){
    }
    display(){
        var title = createElement("h2")
        title.html("Multiplayer Car Racing Game")
        title.position(130, 0) 
        
        var inputbox = createInput("Enter Your Name")
        inputbox.position(130, 160)

        var button = createButton("Register/Submit")
        button.position(250, 200)

        var greeting = createElement("h3")

        button.mousePressed(function(){
            var name = inputbox.value();
            inputbox.hide();
            button.hide();
            playerCount = playerCount + 1
            player.updatePC(playerCount)
            player.updateName(name) 
            greeting.html("Hello Player"+ playerCount+ ", "+ name)
            greeting.position(130,160)
        })
    }
}