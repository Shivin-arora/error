class Log extends Box{

    constructor(x,y,w,h,angle){
   super(x,y,w,h,angle);
   this.image= loadImage("sprites/wood2.png");   
   Matter.Body.setAngle(this.thanos,angle);
    }

display(){
    super.show();
}


}