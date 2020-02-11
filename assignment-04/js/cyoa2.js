var lossCounter = 0;
var element= document.getElementById("axe");
var health =50;
var skelhealth =50;
var damage = 0;
var damage2 = 0;
var damage3 =0;
function adventure()
{
  var currentChoice = document.getElementById('txtBox').value;
  switch(currentChoice){
    case "jump":
    document.getElementById('chapterTitle').innerHTML = "Turbulent Sea!";
    document.getElementById('mainText').innerHTML = "You crash into the icy water. Waves immediately push you under. You resurface and see the lighthouse in the distance.";
    document.getElementById('choices').innerHTML = "You can either attempt to <b>swim</b> to the lighthouse or attempt to <b>grab</b> floating ship wreckage";
    document.getElementById('txtBox').value = "";
    break;

    case "extinguish":
    document.getElementById('chapterTitle').innerHTML = "Engulfed";
    document.getElementById('mainText').innerHTML = "You look for something to put the fire out with but find nothing. You are now surrounded by fire with no escape.";
    document.getElementById('choices').innerHTML = "You are burned alive.";
    replay();
    break;

    case "swim":
    document.getElementById('chapterTitle').innerHTML = "Drowned";
    document.getElementById('mainText').innerHTML = "You begin to swim towards the lighthouse but are battered by waves. You resurface only to be brought back down.";
    document.getElementById('choices').innerHTML = "Unable to resurface your lungs fill with water.";
    replay();
    break;

    case "grab":
    document.getElementById('chapterTitle').innerHTML = "Floating!";
    document.getElementById('mainText').innerHTML = "You grab hold of a floating plank and attempt to brace against the waves crashing upon you. One of your shipmates is struggling to swim nearby.";
    document.getElementById('choices').innerHTML = "Reach out to try and <b>save</b> your buddy or <b>leave</b> them to drown"
    document.getElementById('txtBox').value = "";
    break;

    case "leave":
    document.getElementById('chapterTitle').innerHTML = "Pulled down";
    document.getElementById('mainText').innerHTML = "You start swimming past your buddy but they panic as you pass and grab your leg. You lose your grasp on the plank and are pulled down with your shipmate.";
    document.getElementById('choices').innerHTML = "Sinking together into the depths. At least you didn't die alone";
    replay();
    break;

    case "save":
    document.getElementById('chapterTitle').innerHTML = "Swimming together";
    document.getElementById('mainText').innerHTML = "Both you and your buddy hold tight onto the plank and swim away from the wreckage towards the lighthouse. You reach the island and look back at the mostly sunk ship and bodies littering the waves";
    document.getElementById('choices').innerHTML = "The lighthouse looms over you. There must be someone manning the island. Do you <b>climb</b> towards the lightouse or <b>gather</b> supplies"
    document.getElementById('txtBox').value = "";
    break;

    case "gather":
    aquire()
    break;

    case "climb":
    document.getElementById('chapterTitle').innerHTML = "Skeletons!";
    document.getElementById('mainText').innerHTML = "As you get closer to the lighthouse you realize that it's attendants are actually bloodthristy skeletons";
    document.getElementById('choices').innerHTML = "<b>Fight</b>";
    document.getElementById('txtBox').value = "";
    break;

    case "fight":
    turn();
  }
}
function replay(){
  document.getElementById('chapterTitle').style.color ="red";
  document.getElementById('lblName').innerHTML = "";
  document.getElementById('txtBox').style.display = "none";
  document.getElementById('submit').innerHTML = "Restart";
  document.getElementById("submit").onclick = function() {
    rs();
  };
  function rs(){
    document.getElementById('chapterTitle').style.color = "black";
    document.getElementById('chapterTitle').innerHTML = "Fire! The ship is sinking!";
    document.getElementById('mainText').innerHTML = "Nearly at your destination and suddenly the ship is engulfed in flames.";
    document.getElementById('choices').innerHTML = "You can either <b>jump</b> or attempt to <b>extinguish</b> the fire.";
    document.getElementById('txtBox').style.display = "inline";
    document.getElementById('txtBox').value = "";
    document.getElementById('submit').innerHTML = "Submit";
    document.getElementById("submit").onclick = function(){
      adventure();
    };
    lossCounter=lossCounter+1;
    console.log(lossCounter);
    if (lossCounter==1){
    document.getElementById('lblName').innerHTML = "Make Better Choices";
  } else if (lossCounter==2){
    document.getElementById('lblName').innerHTML = "Its not that hard";
  } else if (lossCounter==3){
    document.getElementById('lblName').innerHTML = "Really?";
  } else if (lossCounter==4){
    document.getElementById('lblName').innerHTML = "...";
  } else if (lossCounter==5){
    document.getElementById('chapterTitle').style.color = "";
    document.getElementById('chapterTitle').innerHTML = "Game Over";
    document.getElementById('mainText').innerHTML = "";
    document.getElementById('choices').innerHTML = "";
    document.getElementById('txtBox').style.display = "none";
    document.getElementById('txtBox').value = "";
    document.getElementById('submit').innerHTML = "Restart";
    document.getElementById("submit").onclick = function(){
      location.reload();
    };
  }
}
}
function aquire(){
  var weapon=1;
  window.alert("axe get");
  document.getElementById('txtBox').value = "climb";
  document.getElementById('test').id = "axe";
  console.log(weapon);
}
function turn(){
  for(var health=50; health>0;health=health-damage){
    window.alert("You are stabbed. Take 5 damage");
    damage=5;
    window.alert("Health: "+ (health));
    if(document.body.contains(document.getElementById('axe'))){
      window.alert("You swing your axe and deal 10 damage");
      damage2=damage2+10;
      window.alert("Skeleton Health: "+(skelhealth-damage2));
      } else{
          window.alert('You punch the skeleton and deal 1 damage');
          damage2=damage2+1;
          window.alert("Skeleton Health: "+(skelhealth-damage2));
      }
      }
      if(skelhealth<=0){
        window.alert("you ded. Can't kill skeletons, brah"); //couldn't get this to work
      }
      else if(health==0){
        window.alert("you ded");
        replay();
    }
  }
