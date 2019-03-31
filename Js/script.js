//==== Business logic====//

$(document).ready(function() {
  $("#blankForm").submit(function(event) {
    event.preventDefault();
    var quiz1 = $("q1").val();
    var quiz2 = $("q2").val();
    var quiz3 = $("q3").val();
    var quiz4 = $("q4").val();
    var quiz5 = $("q5").val()

    var score = parseInt(q1+q2+q3+q4+q5);
    if (score>70){
     $("#input").text("Your score is: " + score + "you have passed");
    }
    else {
      $("#input").text("You failed please retake exam");
    }
  });
});
