// parent Class
class Baseclass{
    // whenever a new object is created constructor is called
    constructor(x,y,width,height){
        var options={
            restitution:0.8, // bouncing
            friction:1.0,
            density:1.0
        }
        // this keyword represent to object that uses this class 
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/base.png");
        World.add(world,this.body);
    }
    display(){
        // nameSpacing
        var pos=this.body.position;
        var angle=this.body.angle;
        // adding new properties
        push();
        // translating the orgin to the object center
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop(); //reverting properties
    }
}