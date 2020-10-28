class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.addImage("'plucking mangoes'/mango.png");
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body)
    }
}