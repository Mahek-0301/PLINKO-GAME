class Division{
    constructor(x,y){
        var options ={
         isStatic:true
        }

        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
    }

    display(){
     var pos = this.body.position
     fill(255);
     rectMode(CENTER)
     rect(pos.x,pos.y,this.width,this.height)
    }
    
}