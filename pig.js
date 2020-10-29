class Pig extends Parent {
    constructor(x, y, width, height) {
    super(x,y,width,height);

    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;

    }

display(){

if(this.body.speed < 2){

super.display();

}

else{
push()
  this.visiblity = this.visiblity - 5;
  tint(255,this.visiblity);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
World.remove(world,this.body);

}

}


  };
 