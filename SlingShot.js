class Rope{
    constructor(bodyA,pointB){
        var options={
            stiffness:0.2,
            length:150,
            bodyA:bodyA,
            pointB:pointB
        }
        this.rope = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.rope)
    }
    display(){
        push()
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4)
        stroke("white")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}