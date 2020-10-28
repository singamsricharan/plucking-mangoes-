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
        this.addImage("images/stone.png")
        this.body=rect.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(x,y,r)
    }
}