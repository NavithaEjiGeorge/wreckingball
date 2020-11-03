class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.7,
            friction:1,
            density:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        
      var pos = this.body.position
      //var angle = this.body.angle
      push()
      rectMode(CENTER)
      //rotate(angle)
      translate(pos.x,pos.y)
      stroke("4")
      fill("black")
      rect(0,0,this.width,this.height)
      pop()
    }
}