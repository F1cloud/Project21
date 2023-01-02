class Ground {
    constructor(x,y,width,height){
       this.x = x
       this.y = y
       this.width = width
       this.height = height

      var option = {
        isStatic: true
       }

       this.body = Bodies.rectangle(x, y, width, height, option)
       World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        rect(pos.x, pos.y, this.width, this.height)
    }
}