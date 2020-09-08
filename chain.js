class chain
{
    constructor(bodyA,bodyB)
    {
        var options=
    {
        bodyA:bodyA,
        pointB:bodyB, 
        stiffness:2,
        lenght:5
    }
    this.pointB=bodyB;
    this. chain =  Matter.Constraint.create(options) 
    
    Matter.World.add(world,this.chain)
    }
    escape()
    {
        
        this.chain.bodyA=null

    }
    display()
    {
        push()
        if(this.chain.bodyA!=null)
        {
        var pointA=this.chain.bodyA.position;
      //  var pointB=this.chain.bodyB.position
       // var pointB=this.poi
       strokeWeight(5)
       stroke("white")
        

        line(pointA.x,pointA.y,100,50)
        }
        pop()

        //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.bodyB.position.x,this.body.position.y)
    }


}