function check() {
  var q1 = document.Quiz.q1.value;
  var q2 = document.Quiz.q2.value;
  var q3 = document.Quiz.q3.value;
  var q4 = document.Quiz.q4.value;
  var q5 = document.Quiz.q5.value;
  var right = 0;

// user interface
  if (q1 == "correct") {
      right = right + 20;
  };
  if (q2 == "correct") {
      right = right + 20;
  };
  if (q3 == "correct") {
      right = right + 20;
  };
  if (q4 == "correct") {
      right = right + 20;
  };
  if (q5 == "correct") {
      right = right + 20;
  };



  document.getElementById("fifth-p").style.visibility = "visible";
  document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "%";
  $(".container").fadeOut();

};
