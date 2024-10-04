document.getElementById("btn").addEventListener("click",function(){

    $("#get-bmi").click(function(){
        // var weight = document.getElementById("weight").value;
            var weight = $("#weight").val();
          // var height = document.getElementById("height").value;
                var height = $("#height").val();

    var BMI = wt / (ht*ht);
   // alert("Your BMI is " + BMI);

   if(BMI < 18.5){
    weight_value= "You are underweight.";
}
else if(BMI >= 18.5 && BMI < 25){
    weight_value = "You are of normal weight.";
}
else if (BMI >= 25 && BMI < 30){
    weight_value = "You are overweight.";
}
else if(BMI >= 30){
    weight_value = "You are obese.";
}
alert("Your BMI is " + BMI + " .You are " + weight_value);

document.getElementById("btn").innerText = "Your BMI is " + BMI + "." + weight_value;

})