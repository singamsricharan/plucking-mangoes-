class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.image=loadImage("images/tree.png")
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        image(this.image,this.x,this.y,600,600);
        rectMode(CENTER);
        rect(this.image,this.x,this.y,this.width,this.height)
    }
}