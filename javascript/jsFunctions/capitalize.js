function capitalize(string)
{
	return string.charAt(0).toUpperCase() + string.slice(1);
}

var name=prompt("Enter your name");
alert('your capitalized name is  '+capitalize(name));