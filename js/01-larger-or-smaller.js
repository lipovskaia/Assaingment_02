/*eslint-env browser*/

/*Larger or Smaller?
Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.
*/

var one = parseInt(window.prompt("Enter first number"), 10);
var two = parseInt(window.prompt("Enter second number"), 10);
if ( one > two) {
    document.write("Number " + one + " is greater");
} else if ( one < two) {
    document.write("Number " + two + " is greater");
} else if ( one === two) {
    document.write( one + " is equal to " + two);
}