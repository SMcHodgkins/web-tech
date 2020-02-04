var badchoice = 0;
document.getElementById("escape1").onclick = function() {
  windows()
};

function windows() {
  document.getElementById('mainText').innerHTML = "You climb out the window. The bird is sitting on a branch.<br> Do you go....";
  document.getElementById('chapterTitle').innerHTML = "Chapter 2: The tree branch";
  document.getElementById('escape1').id = "left";
  document.getElementById('left').innerHTML = "left";
  document.getElementById('escape2').id = "right";
  document.getElementById('right').innerHTML = "right";
  document.getElementById("left").onclick = function() {
    left()
  };
  function left() {
    document.getElementById('mainText').innerHTML = "You jump onto the left branch. It begins to crack under your weight. <br> Do you....";
    document.getElementById('chapterTitle').innerHTML = "Chapter 3: The branch breaks";
    document.getElementById('left').innerHTML = "Jump";
    document.getElementById('left').id = "Jump";
    document.getElementById('right').innerHTML = "Stay";
    document.getElementById('right').id = "Stay";
    if(badchoice<3){
      badchoice++;
      console.log(badchoice);
    }

    document.getElementById("Jump").onclick = function() {
      jump()
    };
    function jump() {
      document.getElementById('mainText').innerHTML = "You leap backward and land on the windowsill";
      document.getElementById('chapterTitle').innerHTML = "End: You didn't die";
      document.getElementById('Jump').innerHTML = "Restart";
      document.getElementById('Jump').id = "rs";
      document.getElementById('Stay').innerHTML = "Restart";
      document.getElementById('Stay').id = "rs1";
      document.getElementById("rs").onclick = function() {
        restart()
      };
      document.getElementById("rs1").onclick = function() {
        restart()
      };
      function restart() {
        location.reload();

      }
    }
    document.getElementById("Stay").onclick = function() {
      stay()
    };
    function stay() {
      document.getElementById('mainText').innerHTML = "You cling desperately to the tree branch as it plumets down";
      document.getElementById('chapterTitle').innerHTML = "End: You died";
      document.getElementById('Jump').innerHTML = "Restart";
      document.getElementById('Jump').id = "rs";
      document.getElementById('Stay').innerHTML = "Restart";
      document.getElementById('Stay').id = "rs1";
      if(badchoice<3){
        badchoice++;
        console.log(badchoice);
      }
      document.getElementById("rs").onclick = function() {
        restart()
      };
      document.getElementById("rs1").onclick = function() {
        restart()
      };
      function restart() {
        location.reload();

      }
    }
  }
  document.getElementById("right").onclick = function() {
    right()
  };
  function right(){
    document.getElementById('mainText').innerHTML = "You jump onto the right branch. The bird is within leaping distance. <br> Do you....";
    document.getElementById('chapterTitle').innerHTML = "Chapter 3: The bird is in reach";
    document.getElementById('left').innerHTML = "Pounce";
    document.getElementById('left').id = "Pounce";
    document.getElementById('right').innerHTML = "Meow";
    document.getElementById('right').id = "Meow";
    document.getElementById("Pounce").onclick = function() {
      pounce()
    };
    function pounce() {
      document.getElementById('mainText').innerHTML = "You leap forward and catch the bird in your paws";
      document.getElementById('chapterTitle').innerHTML = "End: You win!";
      document.getElementById('Pounce').innerHTML = "Restart";
      document.getElementById('Pounce').id = "rs";
      document.getElementById('Meow').innerHTML = "Restart";
      document.getElementById('Meow').id = "rs1";
      document.getElementById("rs").onclick = function() {
        restart()
      };
      document.getElementById("rs1").onclick = function() {
        restart()
      };
      function restart() {
        location.reload();

      }
    }
    document.getElementById("Meow").onclick = function() {
      meow()
    };
    function meow() {
      document.getElementById('mainText').innerHTML = "You meow at the bird and it flies away.";
      document.getElementById('chapterTitle').innerHTML = "End: You didn't die";
      document.getElementById('Pounce').innerHTML = "Restart";
      document.getElementById('Pounce').id = "rs";
      document.getElementById('Meow').innerHTML = "Restart";
      document.getElementById('Meow').id = "rs1";
      document.getElementById("rs").onclick = function() {
        restart()
      };
      document.getElementById("rs1").onclick = function() {
        restart()
      };
      function restart() {
        location.reload();

      }
    }
  }
}
document.getElementById("escape2").onclick = function() {
  door()
};

function door() {
  document.getElementById('mainText').innerHTML = "You run out the front door but you were seen. They are in pursuit. <br> Do you go....";
  document.getElementById('chapterTitle').innerHTML = "Chapter 2: The front yard";
  document.getElementById('escape1').innerHTML = "left";
  document.getElementById('escape1').id = "left1";
  document.getElementById('escape2').innerHTML = "right";
  document.getElementById('escape2').id = "right1";
  if(badchoice<3){
    badchoice++;
    console.log(badchoice);
  }
  document.getElementById("left1").onclick = function() {
    left1()
  };
  function left1(){
    document.getElementById('mainText').innerHTML = "You juke those silly fuckers and climb onto the fence. The bird is within leaping distance. <br> Do you....";
    document.getElementById('chapterTitle').innerHTML = "Chapter 3: The bird is in reach";
    document.getElementById('left1').innerHTML = "Pounce";
    document.getElementById('left1').id = "Pounce";
    document.getElementById('right1').innerHTML = "Meow";
    document.getElementById('right1').id = "Meow";
    document.getElementById("Pounce").onclick = function() {
      pounce()
    };
    function pounce() {
      document.getElementById('mainText').innerHTML = "You leap forward and....fall short. The bird flies away cawing at you mockingly.";
      document.getElementById('chapterTitle').innerHTML = "End: You didn't die";
      document.getElementById('Pounce').innerHTML = "Restart";
      document.getElementById('Pounce').id = "rs";
      document.getElementById('Meow').innerHTML = "Restart";
      document.getElementById('Meow').id = "rs1";
      if(badchoice<3){
        badchoice++;
        console.log(badchoice);
      }
      document.getElementById("rs").onclick = function() {
        restart()
      };
      document.getElementById("rs1").onclick = function() {
        restart()
      };
      function restart() {
        location.reload();

      }
    }
    document.getElementById("Meow").onclick = function() {
      meow()
    };
    function meow() {
      document.getElementById('mainText').innerHTML = "You meow at the bird and it flies away.";
      document.getElementById('chapterTitle').innerHTML = "End: You didn't die";
      document.getElementById('Pounce').innerHTML = "Restart";
      document.getElementById('Pounce').id = "rs";
      document.getElementById('Meow').innerHTML = "Restart";
      document.getElementById('Meow').id = "rs1";
      document.getElementById("rs").onclick = function() {
        restart()
      };
      document.getElementById("rs1").onclick = function() {
        restart()
      };
      function restart() {
        location.reload();

      }
    }
  }
  document.getElementById("right1").onclick = function() {
    right1()
  };
  function right1(){
    document.getElementById('mainText').innerHTML = "You attempt to run but are immediately picked up. <br> Do you....";
    document.getElementById('chapterTitle').innerHTML = "Chapter 3: Snatched";
    document.getElementById('left1').innerHTML = "Struggle";
    document.getElementById('left1').id = "struggle";
    document.getElementById('right1').innerHTML = "Meow";
    document.getElementById('right1').id = "Meow";
    if(badchoice<3){
      badchoice++;
      console.log(badchoice);
    }
    document.getElementById("struggle").onclick = function() {
      struggle()
    };
    function struggle() {
      document.getElementById('mainText').innerHTML = "You wiggle your little cat body and in response they squeeze you tighter.";
      document.getElementById('chapterTitle').innerHTML = "End: You didn't die";
      document.getElementById('struggle').innerHTML = "Restart";
      document.getElementById('struggle').id = "rs";
      document.getElementById('Meow').innerHTML = "Restart";
      document.getElementById('Meow').id = "rs1";
      if(badchoice<3){
        badchoice++;
        console.log(badchoice);
        if(badchoice==3){
          document.getElementById('choice').innerHTML = "Worst Ending";
          console.log(badchoice+(" Nice try, bub"));
        }
      }
      document.getElementById("rs").onclick = function() {
        restart()
      };
      document.getElementById("rs1").onclick = function() {
        restart()
      };
      function restart() {
        location.reload();

      }
    }
    document.getElementById("Meow").onclick = function() {
      meow()
    };
    function meow() {
      document.getElementById('mainText').innerHTML = "You meow and after they carry you inside they give you a treat";
      document.getElementById('chapterTitle').innerHTML = "End: You win!";
      document.getElementById('struggle').innerHTML = "Restart";
      document.getElementById('struggle').id = "rs";
      document.getElementById('Meow').innerHTML = "Restart";
      document.getElementById('Meow').id = "rs1";
      document.getElementById("rs").onclick = function() {
        restart()
      };
      document.getElementById("rs1").onclick = function() {
        restart()
      };
      function restart() {
        location.reload();

      }
    }
}
}
