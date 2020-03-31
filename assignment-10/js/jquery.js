    $(document).ready(function () {
            $("button").click(function () {
                moveSquare();
                setInterval(imageManipulation,10000);
                setInterval(test,10000);
            });
        });
function moveSquare(){
  $(".square").animate({left:500}).animate({top:500}).animate({left:200}).animate({top:300});
  $("#sqr2").animate({left:400}).animate({top:500});
  $("#sqr3").animate({left:600}).animate({top:700});
  $("#sqr4").animate({left:800}).animate({top:900});
}
function imageManipulation(){
  $("#vfImage").fadeOut("slow");
  $("#vfImage").attr("src","images/vf/skull.png")
  $("#vfImage").fadeIn("slow");
}
function test(){
  $("#description").fadeOut("slow").text("What is art").fadeIn();
  $("#author").fadeOut("slow").text("Who is art").fadeIn();
  $("#year").fadeOut("slow").text("When is art").fadeIn();
  $("#title").fadeOut("slow").text("TITLE").fadeIn();
}
