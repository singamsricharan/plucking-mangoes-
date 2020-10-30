class Tree{
    constructor(x,y,width,height){
        options={
            isStatic:true,
        }
        this.image=loadImage("images/tree.png")
        this.body=Bodies.rect(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        image(this.image,this.x,this.y);
        imageMode();
        image(this.image,this.x,this.y,this.width,this.height)
    }
}