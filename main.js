var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var greencar_width = 75;
var greencar_height = 100;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

var greencar_x = 5;
var greencar_y = 225;

function add() {
 var background_imgTag = new Image();
 background_imgTag.onload = uploadBackground; 
 background_imgTag.src = background_image;
    
var green_imgTag = new Image();
green_imgTag.onload = uploadgreencar;
green_imgTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(green_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0)
        {
            greencar_y = greencar_y - 10;
            console.log("When Up arrow is pressed,  X = " + greencar_x + "| Y = " + greencar_y);
            uploadBackground();
            uploadgreencar();
        }
}

function down()
{
		if(greencar_y >= 300)
        {
            greencar_y = greencar_y + 10;
            console.log("When Down arrow is pressed,  X = " + greencar_x + "| Y = " + greencar_y);
            uploadBackground();
            uploadgreencar();
        }
}

function left()
{
		if(greencar_x >= 0)
        {
            greencar_x = greencar_x - 10;
            console.log("When Left arrow is pressed,  X = " + greencar_x + "| Y = " + greencar_y);
            uploadBackground();
            uploadgreencar();
        }
}

function right()
{
	if(greencar_x >= 725)
        {
            greencar_x = greencar_x - 10;
            console.log("When Right arrow is pressed,  X = " + greencar_x + "| Y = " + greencar_y);
            uploadBackground();
            uploadgreencar();
        }
}
