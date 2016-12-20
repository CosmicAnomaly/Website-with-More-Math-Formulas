"use strict"
//The line below this indicates that all the code inside the code block is to initiate/load on the page loading. 
$(document).ready(function() {
	//Variables for all functions and fields are declared here.
	var basicMathOne, basicMathTwo, result, averageResult, averageOne, averageTwo, averageThree, averageFour, averageFive;
	var averageSix, averageSeven, averageEight, averageNine, averageTen;
	var squareSide, rectangleSideA, rectangleSideB, paraBase, paraHeight, trapBaseA, trapBaseB, trapHeight, circleRadius, ellipseAxisA, ellipseAxisB, triangleBase, triangleHeight;
	var squareAnswer, rectangleAnswer, paraAnswer, trapAnswer, circleAnswer, ellipseAnswer, triangleAnswer;
	var rectangleLength, rectangleWidth, triangleSideA, triangleBase, triangleSideC, circleRadius;
	var cubeSideA, rectPrismLength, rectPrismWidth, rectPrismHeight, sphereRadius, cylinderRadius, cylinderHeight;
	var cubeRadius, irrPrismBaseArea, irrPrismHeight, cylinderRadius, cylinderHeight, pyramidLength, pyramidHeight, pyramidWidth, coneRadius, coneHeight, sphereRadius, ellipAxisA, ellipAxisB, ellipAxisC;
	
	//Function that when called sets the values for the basic Math page.
	function setValues()
	{
		basicMathOne = Number(document.getElementById("basicMathOne").value);
		basicMathTwo = Number(document.getElementById("basicMathTwo").value);
	}
	//Function that when called sets the values for the Averages page.
	function setAverageValues()
	{
		averageOne = Number(document.getElementById("averageOne").value);
		averageTwo = Number(document.getElementById("averageTwo").value);
		averageThree = Number(document.getElementById("averageThree").value);
		averageFour = Number(document.getElementById("averageFour").value);
		averageFive = Number(document.getElementById("averageFive").value);
		averageSix = Number(document.getElementById("averageSix").value);
		averageSeven = Number(document.getElementById("averageSeven").value);
		averageEight = Number(document.getElementById("averageEight").value);
		averageNine = Number(document.getElementById("averageNine").value);
		averageTen = Number(document.getElementById("averageTen").value);
	}
	
	//Function that when called sets the values for the Area page.
	function setAreaValues()
	{
		squareSide = Number(document.getElementById("squareSide").value);
		rectangleSideA = Number(document.getElementById("rectangleSideA").value);
		rectangleSideB = Number(document.getElementById("rectangleSideB").value);
		paraBase = Number(document.getElementById("paraBase").value);
		paraHeight = Number(document.getElementById("paraHeight").value);
		trapBaseA = Number(document.getElementById("trapBaseA").value);
		trapBaseB = Number(document.getElementById("trapBaseB").value);
		trapHeight = Number(document.getElementById("trapHeight").value);
		circleRadius = Number(document.getElementById("circleRadius").value);
		ellipseAxisA = Number(document.getElementById("ellipseAxisA").value);
		ellipseAxisB = Number(document.getElementById("ellipseAxisB").value);
		triangleBase = Number(document.getElementById("triangleBase").value);
		triangleHeight = Number(document.getElementById("triangleHeight").value);		
	}
	
	//Function that when called sets the values for the Perimeter page.
	function setPerimeterValues()
	{
		squareSide = Number(document.getElementById("squareSide").value);
		rectangleLength = Number(document.getElementById("rectangleLength").value);
		rectangleWidth = Number(document.getElementById("rectangleWidth").value);
		triangleSideA = Number(document.getElementById("triangleSideA").value);
		triangleBase = Number(document.getElementById("triangleBase").value);
		triangleSideC = Number(document.getElementById("triangleSideC").value);
		circleRadius = Number(document.getElementById("circleRadius").value);		
	}
	
	//Function that when called sets the values for the Surface Area page.
	function setSurfaceAreaValues()
	{
		cubeSideA = Number(document.getElementById("cubeSideA").value);
		rectPrismLength = Number(document.getElementById("rectPrismLength").value);
		rectPrismWidth = Number(document.getElementById("rectPrismWidth").value);
		rectPrismHeight = Number(document.getElementById("rectPrismHeight").value);
		sphereRadius = Number(document.getElementById("sphereRadius").value);
		cylinderRadius = Number(document.getElementById("cylinderRadius").value);
		cylinderHeight = Number(document.getElementById("cylinderHeight").value);
	}
	
	//Function that when called sets the values for the Volumes page.
	function setVolumesValues()
	{
		cubeRadius = Number(document.getElementById("cubeRadius").value);
		rectPrismLength = Number(document.getElementById("rectPrismLength").value);
		rectPrismWidth = Number(document.getElementById("rectPrismWidth").value);
		rectPrismHeight = Number(document.getElementById("rectPrismHeight").value);
		irrPrismBaseArea = Number(document.getElementById("irrPrismBaseArea").value);
		irrPrismHeight = Number(document.getElementById("irrPrismHeight").value);
		cylinderRadius = Number(document.getElementById("cylinderRadius").value);
		cylinderHeight = Number(document.getElementById("cylinderHeight").value);
		pyramidLength = Number(document.getElementById("pyramidLength").value);
		pyramidHeight = Number(document.getElementById("pyramidHeight").value);
		pyramidWidth = Number(document.getElementById("pyramidWidth").value);
		coneRadius = Number(document.getElementById("coneRadius").value);
		coneHeight = Number(document.getElementById("coneHeight").value);
		sphereRadius = Number(document.getElementById("sphereRadius").value);
		ellipAxisA = Number(document.getElementById("ellipAxisA").value);
		ellipAxisB = Number(document.getElementById("ellipAxisB").value);
		ellipAxisC = Number(document.getElementById("ellipAxisC").value);
	}
	
	/*
	 * Each function that proceeds after this comment uses the same structure. 
	 * There is first an on click event calling the specified button from each page to denote which calculation to perform.
	 * Followed by a data validation(if statement using NaN(not a number)) to verify that each text field is only populated with a number.
	 * An alert is displayed on screen if there is an invalid character entered.
	 * If all numbers are entered the specified calculation is performed based on which fields were populated with data.
	 * Finally an alert is displayed on screen showing the ending value of the calculation.
	 */
	
	//On click event to find the Sum. 
	$("#sum").click(function() {
		setValues();
		if (isNaN(basicMathOne) || isNaN(basicMathTwo))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = basicMathOne+basicMathTwo;
		alert("The sum is: "+result);	
		}	
	});
	
	//On click event to find the Remainder. 
	$("#subtract").click(function() {
		setValues();
		if (isNaN(basicMathOne) || isNaN(basicMathTwo))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = basicMathOne-basicMathTwo;
		alert("The remainder is: "+result);		
		}
	});
	
	//On click event to find the Product. 
	$("#multiply").click(function() {
		setValues();
		if (isNaN(basicMathOne) || isNaN(basicMathTwo))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = basicMathOne*basicMathTwo;
		alert("The product is: "+result);
		}		
	});
	
	//On click event to find the Quotient.
	$("#divide").click(function() {
		setValues();
		if (isNaN(basicMathOne) || isNaN(basicMathTwo))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = basicMathOne/basicMathTwo;
		alert("The quotient is: "+result);	
		}	
	});
	
	//On click event to find the Average of all numbers inside the form.
	$("#average").click(function() {
		setAverageValues();
				if (isNaN(averageOne) || isNaN(averageTwo) || isNaN(averageThree) || isNaN(averageFour) || isNaN(averageFive) || isNaN(averageSix) || isNaN(averageSeven) || isNaN(averageEight) || isNaN(averageNine) 
				|| isNaN(averageTen))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		averageResult = ((averageOne+averageTwo+averageThree+averageFour+averageFive+averageSix+averageSeven+averageEight+averageNine+averageTen)/10)
		alert(averageResult);
		}
	});
	
	//On click event to find the Area of a Square.
	$("#squareArea").click(function() {
		setAreaValues();
		if (isNaN(squareSide))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		squareAnswer = squareSide*squareSide;
		alert("The area of your Square is: "+squareAnswer);		
		}
	});
	
	//On click event to find the Area of a Rectangle.
	$("#rectangleArea").click(function() {
		setAreaValues();
		if (isNaN(rectangleSideA) || isNaN(rectangleSideB))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		rectangleAnswer = rectangleSideA*rectangleSideB;
		alert("The area of your Rectangle is: "+rectangleAnswer);
		}		
	});
	
	//On click event to find the Area of a Parallelogram.
	$("#paraArea").click(function() {
		setAreaValues();
		if (isNaN(paraBase) || isNaN(paraHeight))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		paraAnswer = paraBase*paraHeight;
		alert("The area of your Parallelohram is: "+paraAnswer);	
		}	
	});
	
	//On click event to find the Area of a Trapezoid.
	$("#trapArea").click(function() {
		setAreaValues();
		if (isNaN(trapBaseA) || isNaN(trapBaseB) || isNaN(trapHeight))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		trapAnswer = ((trapBaseA+trapBaseB)/2) * trapHeight;
		alert("The area of your Trapezoid is: "+trapAnswer);	
		}	
	});
	
	//On click event to find the Area of a Circle.
	$("#circleArea").click(function() {
		setAreaValues();
		if (isNaN(circleRadius))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		circleAnswer = (circleRadius*circleRadius) * 3.14159265359;
		alert("The area of your Circle is: "+circleAnswer);		
		}
	});
	
	//On click event to find the Area of an Ellipse.
	$("#ellipseArea").click(function() {
		setAreaValues();
		if (isNaN(ellipseAxisA) || isNaN(ellipseAxisB))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		ellipseAnswer = (ellipseAxisA*ellipseAxisB) * 3.14159265359;
		alert("The area of your Ellipse is: "+ellipseAnswer);	
		}	
	});
	
	//On click event to find the Area of a Triangle.
	$("#triangleArea").click(function() {
		setAreaValues();
		if (isNaN(triangleBase) || isNaN(triangleHeight))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		triangleAnswer = ((triangleBase*triangleHeight)/2);
		alert("The area of your Triangle is: "+triangleAnswer);
		}		
	});
	
	//On click event to find the Perimeter of a Square.
	$("#squarePerimeter").click(function() {
		setPerimeterValues();
		if (isNaN(squareSide))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = squareSide*4;
		alert("The Perimeter of your Square is:  "+result);	
		}	
	});
	
	//On click event to find the Perimeter of a Rectangle.
	$("#rectanglePerimeter").click(function() {
		setPerimeterValues();
		if (isNaN(rectangleLength) || isNaN(rectangleWidth))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = ((rectangleLength+rectangleWidth) * 2);
		alert("The Perimeter of your Rectangle is:  "+result);	
		}	
	});
	
	//On click event to find the Perimeter of a Triangle.
	$("#trianglePerimeter").click(function() {
		setPerimeterValues();
		if (isNaN(triangleSideA) || isNaN(triangleBase) || isNaN(triangleSideC))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = (triangleSideA+triangleBase+triangleSideC);
		alert("The Perimeter of your Triangle is:  "+result);
		}		
	});
	
	//On click event to find the Perimeter of a Circle.
	$("#circlePerimeter").click(function() {
		setPerimeterValues();
		if (isNaN(circleRadius))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = (2 * 3.14159265359 * circleRadius);
		alert("The Perimeter of your Circle is:  "+result);	
		}	
	});
	
	//On click event to find the Surface Area of a Cube.
	$("#cubeSurfaceArea").click(function() {
		setSurfaceAreaValues();
		if (isNaN(cubeSideA))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = ((cubeSideA*cubeSideA) * 6);
		alert("The Surface Area of your Cube is:  "+result);
		}		
	});
	
	//On click event to find the Surface Area of a Rectangular Prism.
	$("#rectPrismSurfaceArea").click(function() {
		setSurfaceAreaValues();
		if (isNaN(rectPrismWidth) || isNaN(rectPrismHeight) || isNaN(rectPrismLength))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = ((rectPrismLength*rectPrismWidth + rectPrismHeight*rectPrismLength + rectPrismHeight*rectPrismWidth) * 2);
		alert("The Surface Area of your Rectangular Prism is:  "+result);	
		}	
	});
	
	//On click event to find the Surface Area of a Sphere.
	$("#sphereSurfaceArea").click(function() {
		setSurfaceAreaValues();
		if (isNaN(sphereRadius))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = (4 * 3.14159265359 * sphereRadius * sphereRadius);
		alert("The Surface Area of your Sphere is:  "+result);	
		}	
	});
	
	//On click event to find the Surface Area of a Cylinder.
	$("#cylinderSurfaceArea").click(function() {
		setSurfaceAreaValues();
		if (isNaN(cylinderRadius) || isNaN(cylinderHeight))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = (2 * 3.14159265359 * cylinderRadius * cylinderHeight) + (2 * 3.14159265359 * cylinderRadius * cylinderRadius);
		alert("The Surface Area of your Cylinder is:  "+result);
		}		
	});
	
	//On click event to find the Volume of a Cube.
		$("#cubeVolume").click(function() {
		setVolumesValues();
		if (isNaN(cubeRadius))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = cubeRadius*cubeRadius*cubeRadius;
		alert("The Volume of your Cube is: "+result);
		}			
	});
	
	//On click event to find the Volume of a Rectangular Prism.
		$("#rectPrismVolume").click(function() {
		setVolumesValues();
		if (isNaN(rectPrismLength) || isNaN(rectPrismWidth) || isNaN(rectPrismHeight))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = rectPrismLength*rectPrismWidth*rectPrismHeight;
		alert("The Volume of your Rectnagular Prism is: "+result);	
		}		
	});
	
	//On click event to find the Volume of a Irregular prism.
		$("#irrPrismVolume").click(function() {
		setVolumesValues();
		if (isNaN(irrPrismBaseArea) || isNaN(irrPrismHeight))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = irrPrismBaseArea*irrPrismHeight;
		alert("The Volume of your Irregular Prism is: "+result);	
		}		
	});
	
	//On click event to find the Volume of a Cylinder.
		$("#cylinderVolume").click(function() {
		setVolumesValues();		
		if (isNaN(cylinderRadius))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = cylinderHeight * 3.14159265359 * cylinderRadius * cylinderRadius;
		alert("The Volume of your Cylinder is: "+result);	
		}	
	});
	
	//On click event to find the Volume of a Pyramid.
		$("#pyramidVolume").click(function() {
		setVolumesValues();
		if (isNaN(pyramidLength) || isNaN(pyramidHeight) || isNaN(pyramidWidth))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = (pyramidLength*pyramidHeight*pyramidWidth)/3;
		alert("The Volume of your Pyramid is: "+result);
		}		
	});
	
	//On click event to find the Volume of a Cone.
		$("#coneVolume").click(function() {
		setVolumesValues();
		if (isNaN(coneRadius) || isNaN(coneHeight))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = (1.0/3.0) * 3.14159265359 * coneRadius * coneRadius * coneHeight;
		alert("The Volume of your Cone is: "+result);	
		}	
	});
	
	//On click event to find the Volume of a Sphere.
		$("#sphereVolume").click(function() {
		setVolumesValues();
		if (isNaN(sphereRadius))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = (4.0/3.0) * 3.14159265359 * sphereRadius * sphereRadius * sphereRadius;
		alert("The Volume of your Sphere is: "+result);	
		}	
	});
	
	//On click event to find the Volume of a Ellipsoid.
		$("#ellipVolume").click(function() {
		setVolumesValues();
		if (isNaN(ellipAxisA) || isNaN(ellipAxisB) || isNaN(ellipAxisC))
		{
			alert("You failed to enter only numbers, please try again.");
		}
		else
		{
		result = (4.0/3.0) * 3.14159265359 * ellipAxisA * ellipAxisB * ellipAxisC;
		alert("The Volume of your Ellipsoid is: "+result);
		}		
	});
});
