/*Ekaterina Kalashnikova
 * CS290 HW1
 * Oct 23 2016
 */


function Automobile(year, make, model, type)
{
	this.year = year;
	this.make = make;
	this.model = model;
	this.type = type;
}

Automobile.prototype.logMe = function(x)
{
	if (x)
		console.log(this.year + " " + this.make + " " + this.model +  " " + this.type);
	
	else
		console.log(this.year + " " + this.make + " " + this.model);	
}



var automobiles = [
	new Automobile (1995, "Honda", "Accord", "Sedan"),
	new Automobile (1990, "Ford", "F-150", "Pickup"),
	new Automobile (2000, "GMC", "Tahoe", "SUV"),
	new Automobile (2010, "Toyota", "Tacoma", "Pickup"),
	new Automobile (2005, "Lotus", "Elise", "Roadster"),
	new Automobile (2008, "Subaru", "Outback", "Wagon")
	];

//Sorts arrays by using an arbitrary comparator 

function sortArr( comparator, array)
{

	function bubbleSort(array)
	{
		var swp;

		do{
			swp = false;		
			for (var i = 0; i < array.length - 1; i++)
			{
				if (comparator(array[i], array[i+1]))
				{
					var temp = array[i];
					array[i] = array[i+1];
					array[i+1] = temp;
					swp = true;	
				}
			}
		} while(swp);
	}

	bubbleSort(automobiles);
}


//Compares the year of two automobiles

function yearComparator(auto1, auto2)
{
	if (auto1.year > auto2.year)
		return true;
	else
		return false;

}

//Compares the make of two automobiles 

function makeComparator(auto1, auto2)
{
	//var auto_1 = auto1.make.toString();
	//var auto_2 = auto2.make.toString();
	
	var auto_1 = auto1.make.toLowerCase();
	var auto_2 = auto2.make.toLowerCase();
	
	if (auto_1.charCodeAt(0) > auto_2.charCodeAt(0))
		return true;

	else 
		return false;		

}


//Compares the type of two automobiles 

function typeComparator (auto1, auto2)
{

	function type(auto)
	{
		var a = auto.type.toString();
		a = a.toLowerCase();

		if (a  === 'roadster')
			return 5;

		else if (a === 'pickup')
			return 4;

		else if (a === 'suv')
			return 3;

		else if (a === 'wagon')
			return 2; 

		else
			return 1;
	}

	
	var auto_1 = type(auto1);
	var auto_2 = type(auto2);

	if (auto_1 < auto_2)
		return true;
	else if (auto_2 < auto_1)
		return false;
	else
		yearComparator(auto1, auto2);

}

//Calculates and prints arrays

function output(array)
{
	console.log("*****");
	console.log("The cars sorted by year are: ");
	sortArr(yearComparator, automobiles);
	
	for (var i = 0; i < array.length; i++)
	{
		var type = false;
		array[i].logMe(type);
	}

	console.log("\nThe cars sorted by make are: ");
	sortArr(makeComparator, automobiles);

	for (var i = 0; i < array.length; i++)
	{
		var type = false;
		array[i].logMe(type);
	}

	console.log("\nThe cars sorted by type are: ");
	sortArr(typeComparator, automobiles);

	for (var i = 0; i < array.length; i++)
	{
		var type = true;
		array[i].logMe(type);
	}

	console.log("*****");
}

output(automobiles);
