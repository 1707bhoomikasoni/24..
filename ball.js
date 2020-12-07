class paper{
   constructor(x,y){
       var ballOption={
           isStatic:false,
           density:1.2,
           friction:0.5,
           restitution:0.4
           

       }
       this.body=Bodies.circle(x,y,50,ballOption)
  World.add(world,this.body)
    } 

display(){
       ellipseMode(CENTER)
       fill("pink")
        ellipse(this.body.position.x,this.body.position.y,50)
}

}