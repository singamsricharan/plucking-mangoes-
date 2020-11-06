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
        this.image=loadImage("images/mango.png");
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body)
    }
    display(){
        image(this.image,this.x,this.y,60,60)
        ellipseMode(RADIUS);
        ellipse(this.image,this.x,this.y,this.r)
    }
}