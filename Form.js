class Form{
    constructor(){

    }
    
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);

        var input = createInput("Name");
        input.position(250, 160);

        var button = createButton("PLAY");
        button.position(310, 200);

        var greeting = createElement("h3");
      

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position(310, 160);
        })
    }
}