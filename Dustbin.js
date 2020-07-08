class Dustbin{
    constructor(x,y){
        this.width = 100;
        this.height = 75;
        this.thickness = 10;

        this.x = x;
        this.y = y;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic: true});
        
        this.leftBody = Bodies.rectangle(this.x - this.width/2,this.y - this.height/2,this.thickness,this.height,{isStatic:true});

        this.rightBody = Bodies.rectangle(this.x + this.width/2,this.y - this.height/2,this.thickness,this.height,{isStatic:true});

        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }

    

    display(){
        var bottomPos = this.bottomBody.position;
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;
        rectMode(CENTER);
        rect(bottomPos.x,bottomPos.y,this.width,this.thickness);
        rect(leftPos.x,leftPos.y,this.thickness,this.height);
        rect(rightPos.x,rightPos.y,this.thickness,this.height);
    }
}