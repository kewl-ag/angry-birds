class Bird extends Parent {
    constructor(x, y, width, height) {
    super(x,y,width,height);

    this.image = loadImage("sprites/bird.png");

    }
    display(){
     // this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();

    }
  };
  