class Pig extends Box{

    constructor(x,y,r){
   super(x,y,r,r);
   this.image=loadImage("sprites/enemy.png");



    }

    display(){
super.show();
    }
}