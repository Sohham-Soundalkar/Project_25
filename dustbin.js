class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height;
        this.body.image = loadImage("dustbin.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.body.image, 980, 270, this.width, 220);
    }
}