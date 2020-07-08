class Ground{
    constructor(x,y){
        this.thickness = 10;
        this.width = 800;

        this.x = x;
        this.y = y;

        this.ground = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});

        World.add(world,this.ground);
    }

    display(){
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.thickness);
    }
}