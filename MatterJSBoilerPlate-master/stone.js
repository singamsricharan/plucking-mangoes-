class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x; 
        this.y=y;
        this.r=r;
        this.image=loadImage("images/stone.png")
        this.body=circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        image(this.image,200,200)
        ellipseMode(CENTER);
        circle(x,y,r)
    }
}