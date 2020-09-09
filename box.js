class box
{
    var score =0
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.width=50
        this.height=80
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,{restitution:0.3,isStatic:false})
        this.visibility=255
        this.score=0
        Matter.World.add(world,this.body)

    }
    display(color)
    {
        var pos = this.body.position 
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        if (this.body.speed>5)
        {
            Matter.World.remove(world,this.body)
            this.visibility=this.visibility-5
            push()
            tint(255,this.visibility)
            this.score=this.score+1
            rectMode(CENTER)
            rect(0,0,this.width,this.height)
            pop()
        }
        if (color===a)
        {
            fill(156, 150, 250)
        }
        else 
        {

        fill(color)
        }
        rect(0,0,this.width,this.height)
        text(score,200,200)
        pop()


    }
     score (score)
    {
        if(this.visibility>0 && this.visibility<-105)
        {
             score = score+1
            
        }
    }
}
