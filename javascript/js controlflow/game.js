var secretNumber =7;
var guess =Number(prompt("Enter your guess"));
if (guess===secretNumber){
	alert("Wow !! you guessed it");
}
else if (guess<secretNumber){
	alert("too low give it another try");
}
else{
	alert("Too high give it another try");
}