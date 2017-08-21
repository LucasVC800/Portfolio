function getArr(num1, num2, stepNum){
    var numbers =[];
    for(var i = num1; i < num2; i += stepNum ) {
        if (i % 2 == 0 ){
            numbers.push(i);
         }
    }
    return numbers;
   document.getElementById("results").innerText = numbers;
}