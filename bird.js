class Bird extends Box{

    constructor(x,y,r){
   super (x,y,r,r);
   this.image=loadImage("sprites/bird.png");
   
    }
display(){
this.thanos.position.x=mouseX;
this.thanos.position.y=mouseY;
super.show();

}
  }