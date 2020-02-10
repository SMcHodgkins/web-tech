
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
    document.getElementById('choices').innerHTML = "<b>Reach out to try and save your buddy!</b>"
    timer();
    document.getElementById('txtBox').value = "";
    break;
  }
}
function replay(){
  document.getElementById('chapterTitle').style.color ="red";
  document.getElementById('lblName').innerHTML = "";
  document.getElementById('txtBox').style.display = "none";
  document.getElementById('submit').innerHTML = "Restart";
  document.getElementById('submit').id = "lose";
  document.getElementById("lose").onclick = function() {
    rs()
  };
  function rs(){
    location.reload();
    counter++;
  }
}
function timer(){ //trying to get it to count to 5 before it changes text from "save buddy" to "he's dead"
  var counter = 0;
  console.log(counter);
}
