class Slingshot{

    constructor(A,ptB){
        var options = {
            bodyA:A,
            pointB:ptB,
            length: 10,
            stiffness: 0.5
        }
this.sling1 = loadImage("sprites/sling1.png");
this.sling2 = loadImage("sprites/sling2.png")
this.sling3 = loadImage("sprites/sling3.png");

        

        
        this.pointB = ptB
        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling);
        
    }
  
attach(body){

this.sling.bodyA = body;

}

fly(){

    this.sling.bodyA = null;
}

display(){
image(this.sling1,200,30);
image(this.sling2,175,30);

if(this.sling.bodyA){




    var posA = this.sling.bodyA.position;
    var posB = this.pointB
    push()
    strokeWeight(4);
    stroke(84,39,15);
    if(posA.x <220){
    line(posA.x-25,posA.y,posB.x,posB.y);
 line(posA.x-25,posA.y,posB.x+20,posB.y);
 image(this.sling3,posA.x-25,posA.y-10,15,30);
    }
    else{
        line(posA.x+25,posA.y,posB.x,posB.y);
 line(posA.x+25,posA.y,posB.x+20,posB.y);
 image(this.sling3,posA.x+25,posA.y-10,15,30);

    }
    pop();
}
}

    
   
}