var canvas;			//The canvas holding variable;
var hero;			//The hero under the Player class
var platform;		//the platform under the Platform class

function setup(){
	canvas = createCanvas(560,560);				//Drawing the Canvas
	canvas.position(100,0);						//Positioning the canvas
	smooth();
	hero = new Player();						//making hero part of Player object

	platform = new Platform();					//making platform part of Platform


}



function draw(){
	background(175);
	hero.display();			//calling the display function on hero from Player object
	hero.move();			//calling display function on hero from Player object
	platform.display();		//calling the display function on platform from Platform object
	hero.col();				//calling the collision function on hero from Player object
	platform.redraw();		//calling the redraw function on redraw from Platform object
	hero.jump0();			//calling the jump0 function from Player object  
	platform.gameover();	//calling the gameover function on platform from Platform object
	hero.win();				//calling the win function on hero from Player object
	textSize(20);
	fill(78,46,152);
	rect(0,0,width,35);
	fill(255,255,255,150);

	text("The Real Hero",width/3+30,20);

}




function keyPressed(){				//Defining the movement of player of keyboard (MAIN GAME MOVEMENT)
	if(keyCode===RIGHT_ARROW){		//Function of Right Arrow
		hero.speed+=3.5;			
	}
	else if(keyCode===LEFT_ARROW){	//Function of Left Arrow
		hero.speed-=3.5;
	}
	else if(keyCode===UP_ARROW && hero.jumpcheck == true){		//Defining when the player can jump and ctrl to jump (BOLLEAN VALUE IN COLLISION FUNCTION)
		hero.jump-=8;	
	}
}

function keyReleased(){				//Defining the movement of player when key is released
	if(keyCode===RIGHT_ARROW){		//When you release the right arrow key
		hero.speed-=3.5;
	}
	if(keyCode===LEFT_ARROW){		//When you release the left arrow key
		hero.speed+=3.5;
	}
	if(keyCode===UP_ARROW){			//when you release the ctrl key
		if(hero.jump === -8){
			hero.jump+=8;
		}
	}
}

