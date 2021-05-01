//extend keyword is to create the child class inherit the parent
class Bird extends Baseclass {
    constructor(x, y) {
      // super keyword is to transfer all the properties from the parent to the child 
      super(x,y,50,50);
      this.image=loadImage("sprites/bird.png");
      
    };
    display(){
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      super.display();
    }
  };
  