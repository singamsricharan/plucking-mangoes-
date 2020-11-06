class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
        }
        this.r=r;
        this.image=loadImage("images/stone.png")
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,40,40)
        ellipseMode(CENTER);
        ellipseMode(this.image,this.x,this.y,this.r)
    }
}