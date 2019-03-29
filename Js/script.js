//==== Business logic====//

$(document).ready(function() {
  $("#blankForm").submit(function(event) {
    var quiz1 = $("q1").val();
    var quiz2 = $("q2").val();
    var quiz3 = $("q3").val();
    var quiz4 = $("q4").val();
    var quiz5 = $("q5").val()

    var resultScore = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5)
    $("#finish").text("You SCored: " + resultScore + " out of 100");


    //==== User Interface ====//
    $("#finish").show();
    event.preventDefault();
  });

});
