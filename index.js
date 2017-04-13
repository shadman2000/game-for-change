var canvas;			//The canvas holding variable;
var hero;			//The hero under the Player class
var platform;		//the platform under the Platform class
var img;

function setup(){
	canvas = createCanvas(560,560);				//Drawing the Canvas
	canvas.position(100,0);	//Positioning the canvas
	smooth();
	img=loadImage("bg.jpg");
	hero = new Player();

	platform = new Platform();


}



function draw(){
	background(175);
	hero.display();
	hero.move();			//calling display function on hero
	platform.display();
	hero.col();	
	platform.redraw();
	hero.jump0();
	platform.gameover();
	hero.win();
	textSize(20);
	fill(78,46,152);
	rect(0,0,width,35);
	fill(255,255,255,150);

	text("The Real Hero",width/3+30,20);
	console.log(hero.jumpcheck);

}




function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		hero.speed+=3.5;
	}
	else if(keyCode===LEFT_ARROW){
		hero.speed-=3.5;
	}
	else if(keyCode===CONTROL && hero.jumpcheck == true){
		hero.jump-=8;	
	}
}

function keyReleased(){
	if(keyCode===RIGHT_ARROW){
		hero.speed-=3.5;
	}
	if(keyCode===LEFT_ARROW){
		hero.speed+=3.5;
	}
	if(keyCode===CONTROL){
		if(hero.jump === -8){
			hero.jump+=8;
		}
	}
}

