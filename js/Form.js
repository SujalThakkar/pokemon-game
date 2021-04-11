class Form {

  constructor() {
    this.input = createInput("Name");
   // this.button = createButton('Play');
    this.title = createElement('h1');
    this.charli = createButton('Charlizard');
    this.blast = createButton('Blastoise');
    this.snor = createButton('Snorlax');
    this.pika = createButton('Pikachu');
    this.venu = createButton('Venusaur');
    this.reset = createButton('reset');
    this.greeting = createElement('h1');
  }
  hide(){
    this.title.hide();
  //  this.button.hide();
  //this.reset.hide();
    this.input.hide();
    this.charli.hide();
    this.blast.hide();
    this.snor.hide();
    this.pika.hide();
    this.venu.hide();
    this.greeting.hide();
  }

  display(){
    this.title.html("Choose your Pokemon");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    //this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth - 100 , 20);
    this.charli.position(displayWidth/2 + 200 , displayHeight/2 );
    this.blast.position(displayWidth/2  , displayHeight/2 + 100);
    this.snor.position(displayWidth/2 + 110 , displayHeight/2 + 200);
    this.pika.position(displayWidth/2 + 210 , displayHeight/2 + 100);
    this.venu.position(displayWidth/2  , displayHeight/2);

    this.charli.mousePressed(()=>{
      this.input.hide();
      this.charli.hide();
      this.blast.hide();
      this.pika.hide();
      this.snor.hide();
      this.venu.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.venu.mousePressed(()=>{
      this.input.hide();
      this.venu.hide();
      this.blast.hide();
      this.pika.hide();
      this.snor.hide();
      this.charli.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.snor.mousePressed(()=>{
      this.input.hide();
      this.snor.hide();
      this.blast.hide();
      this.pika.hide();
      this.charli.hide();
      this.venu.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.pika.mousePressed(()=>{
      this.input.hide();
      this.pika.hide();
      this.blast.hide();
      this.charli.hide();
      this.snor.hide();
      this.venu.hide();
      this.title.hide();
      player.name = this.input.value();
      player.pokemon = "pika";
      ani = "pikachu";
      sujal = player.pokemon;
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.blast.mousePressed(()=>{
      this.input.hide();
      this.blast.hide();
      this.charli.hide();
      this.pika.hide();
      this.snor.hide();
      this.venu.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      Player.updateCarsEnd(0);
      location.reload();
    })

  }
}
