var imageTags = ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10"]; //tags in the html
var blank = "images/match/img-01.png";
var imageArray = new Array();
var number1 = -1;
var number2 = -1;
var score = 0;
var allFound = 0;

var player = {"firstname":"", "lastname":"", "age":0, "score":0};


function printBlanks(){
  createImages();
  for(var i = 0; i < imageTags.length; i++){
    document.getElementById(imageTags[i]).src = blank; //setting the source to blank
  }
}

function createImages(){
  var images = ["images/match/img-02.png","images/match/img-03.png","images/match/img-04.png","images/match/img-05.png","images/match/img-06.png"];
  var count = [0,0,0,0,0];
  while(imageArray.length < 10){
    var randomNumber = Math.floor(Math.random() * images.length);
    if(count[randomNumber]< 2){
      imageArray.push(images[randomNumber])
      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}

function flipImage(number){
  //document.getElementById(imageTags[number]).src = imageArray[number];
  if(number1 >= 0){
    number2 = number;
    document.getElementById(imageTags[number]).src = imageArray[number2];
  }


  else if(number1 < 0){
   number1 = number;
    document.getElementById(imageTags[number1]).src=imageArray[number1];
  }


  if(imageArray[number2] != imageArray[number1] && number1 >= 0 && number2 >=0){
    score++;
    setTimeout(imagesDisappear,1000);
    }


  else if(imageArray[number2]==imageArray[number1] && number1 >= 0 && number2 >= 0) {
    score++;
    allFound++;

   number1 = -1;
   number2 = -1;

    if(allFound == imageArray.length/2){
      player.score = score;
      localStorage.setItem("playerInfo", JSON.stringify(player));
      window.location= "memoryOutro.html";
  }
  }
}

function imagesDisappear(){
  console.log("Number1: " + number1);
  console.log("Number2: " + number2)
  document.getElementById(imageTags[number1]).src = blank;
  document.getElementById(imageTags[number2]).src = blank;
    number1 = -1;
    number2 = -1;
}

function addToPlayer(){  //and switch pages
  var firstName = document.getElementById("txtFirstName").value;
  var lastName = document.getElementById("txtLastName").value;
  var age = document.getElementById("txtAge").value;

  player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "memory.html";
}
function playerInfo(){
  var playerInformation = localStorage.getItem("playerInfo");
  player = JSON.parse(playerInformation);
  var str = "Name: "+ player.firstname + " " + player.lastname + "<br>" + "Age: " + player.age +"<br>" + "Score: " + player.score;
  if(document.getElementById("endInformation") != null){
    document.getElementById("endInformation").innerHTML = str;
  }
}
function restart(){
  window.location = "memoryintro.html";
}
