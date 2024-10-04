// document.getElementById("submit").addEventListener("click", function () {
    $("#submit").click(function(){
        // var score = document.getElementById("score").value;
          var score = $("#score").val();
      
        var grade, explanation;
        if (score >= 90 && score <= 100) {
          grade = "A+";
          explanation = "Outstanding";
        } else if (score >= 80 && score < 90) {
          grade = "A";
          explanation = "Excellent";
        } else if (score >= 70 && score < 80) {
          grade = "B+";
          explanation = "Very Good";
        } else if (score >= 60 && score < 70) {
          grade = "B";
          explanation = "Good";
        } else if (score >= 50 && score < 60) {
          grade = "C+";
          explanation = "Satisfactory";
        } else if (score >= 40 && score < 50) {
          grade = "C";
          explanation = "Acceptable";
        } else if (score >= 35 && score < 40) {
          grade = "D";
          explanation = "Basic";
        } else if (score >= 0 && score < 35) {
          grade = "NG";
          explanation = "Not Graded";
        } else {
          grade = "N/A";
          explanation = "Out of range";
        }
      
        alert("Your grade is: " + grade + ". " + explanation);
      });
      