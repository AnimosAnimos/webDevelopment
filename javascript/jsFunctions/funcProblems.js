// function for finding a number is even or odd
function isEven(n)
{
	if(n%2===0)
	{
		return true;
	}
	else{
		console.log('hi');
	}
	return false;
}

// function for finding factorial of a function
function factorial(n)
{
	var product=1;
	if(n===0)
	{
		return 1 ;
	}
	else
	{
		for(n;n>=1;n--)
		{
			product*=n;
		}	
	}
	return product;
	
}

//variable names from kebab to snake case
function kebabToSnake(string) {
	var length=string.length;
	var snakeString="";
	for(var i=0;i<length;i++){
		if(string[i]=="-"){
			snakeString+="_";
		}
		else{
			snakeString+=string[i];
		}
	}
	return snakeString;
}