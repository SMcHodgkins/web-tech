let speed=1;
class Square {
  constructor(x,y,height,width,color) {
    this.x= x;
    this.y= y;
    this.height= height;
    this.width= width;
    this.color= color;
  }
  get squareX(){
    return this.x;
  }
  set squareX(x){
    this.x = x;
  }
  get squareY(){
    return this.y;
  }
  set squareY(y){
    this.y = y;
  }
  get squareHeight(){
    return this.height;
  }
  set squareHeight(height){
    this.height = height;
  }
  get squareWidth(){
    return this.width;
  }
  set squareWidth(width){
    this.width = width;
  }
  get squareColor(){
    return this.color;
  }
  set squareColor(color){
    this.color = color;
  }
  display(){
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.fillStyle= this.color;
  }
  move(){
    this.x=this.x+speed;
    if(this.x>=750||this.x<=0){
      speed=speed*-1;
    }
  }
  moveUp(){
    this.y-=10;
}
  moveDown(){
    this.y+=10;
  }
  moveLeft(){
    this.x-=10;
  }
  moveRight(){
    this.x+=10;
  }
}

var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            $(document).ready(function(){
                $(this).keypress(function(event){
                    getKey(event);
                });
            });
            //var x = 50;
            //var y = 50;
            //ctx.fillStyle = "#889cbd";
            let square1= new Square(50,55,50,50,"#889cbd");
            let square2= new Square(50,100,50,50,"#497dd2");
            setInterval(update, 1000/60);

            function update()
            {
                drawSquare1();
                drawSquare2();
                ctx.clearRect(0,0,800,600);
                drawSquare1();
                drawSquare2();
                hasCollided();
            }
            function drawSquare1()
            {
              square1.display();
              //console.log(square1.color);
              square1.move();
            }
            function drawSquare2(){
              square2.display();
            }

            function getKey(event)
            {
                var char = event.which || event.keyCode;
                var actualLetter = String.fromCharCode(char);
                if(actualLetter == "w")
                {
                    square2.moveUp();
                }
                if(actualLetter == "s"){
                  square2.moveDown();
                }
                if(actualLetter == "a"){
                  square2.moveLeft();
                }
                if(actualLetter == "d"){
                  square2.moveRight();
                }
            }
            function hasCollided(square2, square1) {
              return !(
              ((square1.y + square1.height) < (square2.y)) ||
              (square1.y > (square2.y + square2.height)) ||
              ((square1.x + square1.width) < square2.x) ||
              (square1.x > (square2.x + square2.width))
            );}
