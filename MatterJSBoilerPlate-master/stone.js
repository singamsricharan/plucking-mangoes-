class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=addImage("images/stone.png")
        this.body=rect(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(x,y,width,height)
    }
}