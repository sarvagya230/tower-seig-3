class hexa
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.radius=50;
        this.body= Matter.Bodies.circle(x, y,this.radius)
       Matter.World.add(world,this.body)

    }
    display(a)
    {
        this.a=a
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(a,pos.x,pos.y)
        

    }
}