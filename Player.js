function Player(){			//The Player object function
	this.x = 55;			//Content of the player
	this.y = 25;			//Content of the player
	this.height = 20;		//Content of the player
	this.width = 20;		//Content of the player
	this.gravity = 5;		//Content of the player gravity to pull the character down
	this.speed = 0;			//Content of the player this variable determines how fast the player can move(CHANGES IT"S VALUE WHEN KEYPRESSED FUNCTION IN index.js)
	this.jump = 0;			//Content of the player this variable creates the jump speed (CHANGES IT"S VALUE WHEN KEYPRESSED FUNCTION IN index.js)		
	this.curx;				//This variable let's the player jump a certain amount of the platform
	this.jumpcheck = false;	//This boolean value let's the player to jump only when it's on a platform.

	this.display = function(){		//The display function of the player to display itself and it's functionalities.
		fill(0);
		ellipse(this.x+2,this.y+20,this.width,this.height);		//Drawing the Player
		fill(0,255,random(0,255));
		rect(this.x-6,this.y+32,this.width-2,this.height+20);
		fill(0,0,0);
		rect(this.x,this.y+30,this.width-15,this.height+20);
		line(this.x,this.y+35,this.x-10,this.y+55);
		line(this.x+2,this.y+35,this.x+14,this.y+55);
		line(this.x,this.y+65,this.x+10,this.y+80);
		line(this.x+2,this.y+65,this.x-10,this.y+80);
		fill(0,255,0)
		this.y+=this.gravity;
		
	}

	this.win = function(){		//Defining the win function
		if(this.y <= -10){
			window.location.href="win.html";	//Conditional statement when it becomes true it opens another html page called win.html
		}
	}

	this.move = function(){						//2nd half of the movement of the player (1st HLAF IN index.js)
	this.x+=this.speed;
	this.y+=this.jump;
		if(this.speed === 3){
			this.speed-=1;
		}
		else if(this.speed === -3){
			this.speed+=1;
		}	
	}

	this.col = function(){						//Collision detection function
		if(this.y+60+this.height >= platform.y0-2 && this.y+60+this.height <= platform.y0+platform.height0 && this.x+this.width >= platform.x0 && this.x <= platform.x0+platform.width0){
			this.gravity = 0;
			this.y = platform.y0-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}


		else if(this.y+60+this.height >= platform.y-2 && this.y+60+this.height <= platform.y+platform.height && this.x+this.width >= platform.x && this.x <= platform.x+platform.width){
			this.gravity = 0;
			this.y = platform.y-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}

		else if(this.y+60+this.height >= platform.y2-2 && this.y+60+this.height <= platform.y2+platform.height2 && this.x+this.width >= platform.x2 && this.x <= platform.x2+platform.width2){
			this.gravity = 0;
			this.y = platform.y2-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}

		else if(this.y+60+this.height >= platform.y3-2 && this.y+60+this.height <= platform.y3+platform.height3 && this.x+this.width >= platform.x3 && this.x <= platform.x3+platform.width3){
			this.gravity = 0;
			this.y = platform.y3-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}	

		else if(this.y+60+this.height >= platform.y4-2 && this.y+60+this.height <= platform.y4+platform.height4 && this.x+this.width >= platform.x4 && this.x <= platform.x4+platform.width4){
			this.gravity = 0;
			this.y = platform.y4-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}

		else if(this.y+60+this.height >= platform.y5-2 && this.y+60+this.height <= platform.y5+platform.height5 && this.x+this.width >= platform.x5 && this.x <= platform.x5+platform.width5){
			this.gravity = 0;
			this.y = platform.y5-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}

		else if(this.y+60+this.height >= platform.y6-2 && this.y+60+this.height <= platform.y6+platform.height6 && this.x+this.width >= platform.x6 && this.x <= platform.x6+platform.width6){
			this.gravity = 0;
			this.y = platform.y6-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}

		else if(this.y+60+this.height >= platform.y7-2 && this.y+60+this.height <= platform.y7+platform.height7 && this.x+this.width >= platform.x7 && this.x <= platform.x7+platform.width7){
			this.gravity = 0;
			this.y = platform.y7-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}

		else if(this.y+60+this.height >= platform.y8-2 && this.y+60+this.height <= platform.y8+platform.height8 && this.x+this.width >= platform.x8 && this.x <= platform.x8+platform.width8){
			this.gravity = 0; 
			this.y = platform.y8-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}
		else if(this.y+60+this.height >= platform.y99-2 && this.y+60+this.height <= platform.y99+platform.height99 && this.x+this.width >= platform.x99 && this.x <= platform.x99+platform.width99){
			this.gravity = 0; 
			this.y = platform.y99-this.height-60;
			this.curx=this.y;
			this.jumpcheck = true;
		}

		else {
			this.jumpcheck = false;
			this.gravity = 5;
		}
	}


		this.botcol = function(){ //IGNORE!!
		if(this.y === platform.y+platform.height && this.x >= platform.x+platform.height && this.x <= platform.x+platform.width){
			hero.jump = 0;
		}
		if(this.y === platform.y0+platform.height0 && this.x >= platform.x0+platform.height0 && this.x <= platform.x0+platform.width0){
			hero.jump = 0;
		}
		if(this.y === platform.y2+platform.height2 && this.x >= platform.x2+platform.height2 && this.x <= platform.x2+platform.width2){
			hero.jump = 0;
		}
		if(this.y === platform.y3+platform.height3 && this.x >= platform.x3+platform.height3 && this.x <= platform.x3+platform.width3){
			hero.jump = 0;
		}
		if(this.y === platform.y4+platform.height4 && this.x >= platform.x4+platform.height4 && this.x <= platform.x4+platform.width4){
			hero.jump = 0;
		}
		if(this.y === platform.y5+platform.height5 && this.x >= platform.x5+platform.height5 && this.x <= platform.x5+platform.width5){
			hero.jump = 0;
		}
		if(this.y === platform.y6+platform.height6 && this.x >= platform.x6+platform.height6 && this.x <= platform.x6+platform.width6){
			hero.jump = 0;
		}
		if(this.y === platform.y7+platform.height7 && this.x >= platform.x7+platform.height7 && this.x <= platform.x7+platform.width7){
			hero.jump = 0;
		}
		if(this.y === platform.y8+platform.height8 && this.x >= platform.x8+platform.height8 && this.x <= platform.x8+platform.width8){
			hero.jump = 0;
		}
		if(this.y === platform.y9+platform.height9 && this.x >= platform.x9+platform.height9 && this.x <= platform.x9+platform.width9){
			hero.jump = 0;
		}
	}

	this.jump0 = function(){		//jump0 function allows the player to jump only a certain height of a platform
		if(this.y === this.curx){
		this.y+=this.jump;
		}
		if(this.y <= this.curx-60){
			this.jump=0;
		}
		if(this.y === platform.y0+platform.height0 && this.x+this.width >= platform.x0 && this.x <= platform.x0+platform.width0){
			this.jump=0;
		}

		if(this.y === platform.y+platform.height && this.x+this.width >= platform.x && this.x <= platform.x+platform.width){
			this.jump=0;
		}

		if(this.y === platform.y2+platform.height2 && this.x+this.width >= platform.x2 && this.x <= platform.x2+platform.width2){
			this.jump=0;
		}
		if(this.y === platform.y3+platform.height3 && this.x+this.width >= platform.x3 && this.x <= platform.x3+platform.width3){
			this.jump=0;
		}
		if(this.y === platform.y4+platform.height4 && this.x+this.width >= platform.x4 && this.x <= platform.x4+platform.width4){
			this.jump=0;
		}
		if(this.y === platform.y5+platform.height5 && this.x+this.width >= platform.x5 && this.x <= platform.x5+platform.width5){
			this.jump=0;
		}
		if(this.y === platform.y6+platform.height6 && this.x+this.width >= platform.x6 && this.x <= platform.x6+platform.width6){
			this.jump=0;
		}
		if(this.y === platform.y7+platform.height7 && this.x+this.width >= platform.x7 && this.x <= platform.x7+platform.width7){
			this.jump=0;
		}
		if(this.y === platform.y8+platform.height8 && this.x+this.width >= platform.x8 && this.x <= platform.x8+platform.width8){
			this.jump=0;
		}
		if(this.y === platform.y9+platform.height9 && this.x+this.width >= platform.x9 && this.x <= platform.x9+platform.width9){
			this.jump=0;
		}
	}
}