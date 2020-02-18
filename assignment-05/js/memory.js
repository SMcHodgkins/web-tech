var imageTags = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10"]; //tags in the html
var blank = "images/match/img-01.png";
var imageArray = new Array();

function printBlanks(){
  //createImages();
  for(var i = 0; i < imageTags.length; i++){
    document.getElementById(imageTags[i]).src = blank; //setting the source to blank
  }
}

/*function createImages(){
  var images = ["images/match/img-02","images/match/img-03","images/match/img-04","images/match/img-05","images/match/img-06"]
  var count = [0,0];

  while(imageArray.length < 10){
    var randomNumber = Math.floor(Math.random() * images.length)
    if(count[randomNumber]< 2){
      imageArray.push(images[randomNumber])
      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}*/

function flipImage(number){
  document.getElementById(imageTags[number]).src = images[number];
}
