class Ball{
    constructor(x,y){
        this.height = 20;
        this.width = 20;

        this.x = x;
        this.y = y;

        this.ball = Bodies.circle(this.x,this.y,this.height,this.width);
        World.add(world,this.ball);
    }

    display(){
        rectMode(CENTER);
        circle(this.ball.position.x,this.ball.position.y,this.height,this.width);
    }

    keyPressed(){
        if(keyCode === UP_ARROW){
            Matter.Body.applyForce(this.ball.body,this.ball.position,{x:85,y:-85});
        }
    }
}