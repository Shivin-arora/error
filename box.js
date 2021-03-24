class Box{

constructor(x,y,width,height){

    var option={
        restitution : 0.8,
        density : 1,
        friction :1
    }
    this.thanos = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    this.image=loadImage("sprites/wood1.png");
    World.add(world, this.thanos);

}


show(){

push();
var pos = this.thanos.position; 
var angle = this.thanos.angle;

translate(pos.x,pos.y);
rotate(angle);
stroke("white");
fill("brown");
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}

}