class Rope{

    constructor(BodyA,pointB){
var options={
    bodyA:BodyA,
    pointB:pointB,
    length:100,
    stiffness:0.004

}      
        this.attacher=Constraint.create(options);
        World.add(world,this.attacher);

     //this.p=pointB;
    }

asbv(){ 
    strokeWeight(4);
    console.log(this.attacher.pointB.x);
    line(this.attacher.bodyA.position.x,this.attacher.bodyA.position.y,this.attacher.pointB.x,this.attacher.pointB.y);
}
//this.attacher.pointB.x



}