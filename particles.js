class Particles{
    constructor(x,y){
        var options = {
            isStatic: false,
            density: 0.5
        }
        this.r= r;
        this.body=Bodies.circle(x,y,r);
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER)
        ellipse(x,y,this.r,this.r);
        fill(255);
    }
}