//asking for numbers and badge
var first = parseInt(prompt("Input first number"));
var znak = prompt("Enter the math badge(/, *, + or -)");
var second = parseInt(prompt("Input second number"));
//check is numbers realy numbers
//if number not number - number = 0
if (isNaN(first)==true) first=0;
if (isNaN(second)==true) second=0;

//look, what badge inputed
switch (znak) {
  case "+": 
     plus();
     break;
  case "-": 
     minus();
     break;
	   case "*": 
     mnoj();
     break;
  case "/": 
    del();
     break;
  default: 
  //if badge not badge - ask for retry page
     var isRetry = confirm("An error... Retry?");
     if(isRetry == 1){
     	//reload page for retry
        location.reload();
    }else{
       console.log("Badge error");
       //go back
       history.back();
    }
}
//count and output
function plus() {
result = first + second;
document.write(first); //znak second "=" result)
document.write(znak);
document.write(second);
document.write("=");
document.write(result);
}
function minus() {
result = first-second;
document.write(first); //znak second "=" result)
document.write(znak);
document.write(second);
document.write("=");
document.write(result);
}
function mnoj() {
result = first*second;
document.write(first); //znak second "=" result)
document.write(znak);
document.write(second);
document.write("=");
document.write(result);
}
function del() {
if (second=0) {
   alert("Делить на 0 нельзя");
   //vvod()
}
result = first/second;
document.write(first); //znak second "=" result)
document.write(znak);
document.write(second);
document.write("=");
document.write(result);
}