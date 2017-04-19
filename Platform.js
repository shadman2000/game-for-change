function Platform(){				//Start of Platform object function

	this.r = random(0,255);			//the random value of r (r,g,b) for platform color
	this.g =  random(0,255);		//the random value of g (r,g,b) for platform color
	this.b = random(0,255);			//the random value of b (r,g,b) for platform color

	this.platformgravity=1.95;		
	this.platformgravityspeed=0.0009;

	this.gravity=2.5;				//The speed in which the platforms are going to come down.

	this.x99 = 55;					//defining each platform's contents.
	this.y99 = 275;
	this.width99 = 118;
	this.height99 = 10;

	this.x0=295;					//defining each platform's contents.
	this.y0=500;
	this.width0=118;
	this.height0=10;

	this.x=219;						//defining each platform's contents.
	this.y=438;
	this.width=118;
	this.height=10;

	this.x2=75;						//defining each platform's contents.
	this.y2=374;
	this.width2=118;
	this.height2=10;

	this.x3=228;					//defining each platform's contents.
	this.y3=310;
	this.width3=118;
	this.height3=10;

	this.x4=372;					//defining each platform's contents.
	this.y4=245;
	this.width4=118;
	this.height4=10;

	this.x5=228;					//defining each platform's contents.
	this.y5=180;
	this.width5=118;
	this.height5=10;

	this.x6=115;					//defining each platform's contents.
	this.y6=118;
	this.width6=118;
	this.height6=10;

	this.x7=221;					//defining each platform's contents.
	this.y7=56;
	this.width7=118;
	this.height7=10;

	this.x8=340;					//defining each platform's contents.
	this.y8=1;
	this.width8=118;
	this.height8=10;

	this.x9=330;					//defining each platform's contents.
	this.y9=549;
	this.width9=118;
	this.height9=10;


	this.gameover = function(){		//The gameover function
		if(hero.y >= 450){			//Conditional statement when the position of hero(y) goes more than 450
			window.location.href="lose.html";	//Opens another html page named lose.html
	this.x99 = 55;
	this.y99 = 25;
	this.width99 = 0;
	this.height99 = 0;

	this.x0=295;
	this.y0=500;
	this.width0=0;
	this.height0=0;

	this.x=219;
	this.y=438;
	this.width=0;
	this.height=0;

	this.x2=75;
	this.y2=374;
	this.width2=0;
	this.height2=0;

	this.x3=228;
	this.y3=310;
	this.width3=0;
	this.height3=0;

	this.x4=372;
	this.y4=245;
	this.width4=0;
	this.height4=0;

	this.x5=228;
	this.y5=180;
	this.width5=0;
	this.height5=0;

	this.x6=115;
	this.y6=118;
	this.width6=0;
	this.height6=0;

	this.x7=221;
	this.y7=56;
	this.width7=0;
	this.height7=0;

	this.x8=340;
	this.y8=1;
	this.width8=0;
	this.height8=0;

	this.x9=330;
	this.y9=549;
	this.width9=118;
	this.height9=10;
	hero.score=0;
	hero.score+=hero.scorespeed;
			
		}
	}

	this.display = function(){				//Function to display the platform and it's functionality

		this.y0+=this.platformgravity;		//Adding gravity to the platform
		this.y+=this.platformgravity;		//Adding gravity to the platform
		this.y2+=this.platformgravity;		//Adding gravity to the platform
		this.y3+=this.platformgravity;		//Adding gravity to the platform
		this.y4+=this.platformgravity;		//Adding gravity to the platform
		this.y5+=this.platformgravity;		//Adding gravity to the platform
		this.y6+=this.platformgravity;		//Adding gravity to the platform
		this.y7+=this.platformgravity;		//Adding gravity to the platform
		this.y8+=this.platformgravity;		//Adding gravity to the platform
		this.y9+=this.platformgravity;		//Adding gravity to the platform
		this.y99+=this.platformgravity;		//Adding gravity to the platform
		fill(random(0,255),random(0,255),random(0,255));		//Adding color to the platforms
		rect(this.x0,this.y0,this.width0,this.height0);			//Drawing the platforms
		rect(this.x,this.y,this.width,this.height);				//Drawing the platforms
		rect(this.x2,this.y2,this.width2,this.height2);			//Drawing the platforms
		rect(this.x3,this.y3,this.width3,this.height3);			//Drawing the platforms
		rect(this.x4,this.y4,this.width4,this.height4);			//Drawing the platforms
		rect(this.x5,this.y5,this.width5,this.height5);			//Drawing the platforms
		rect(this.x6,this.y6,this.width6,this.height6);			//Drawing the platforms
		rect(this.x7,this.y7,this.width7,this.height7);			//Drawing the platforms
		rect(this.x8,this.y8,this.width8,this.height8);			//Drawing the platforms
		rect(this.x99,this.y99,this.width99,this.height99); 	//extra platform


	}

	this.redraw = function(){			//Function to draw the platforms again when it reaches bottom of the screen
		if(platform.y >= height){
			platform.y = 0;
			//platform.x = platform.y+random(120,430);
		}

		if(platform.y1 >= height){
			platform.y1 = 0;
			//platform.x1 = platform.y+random(120,320);
		}

		if(platform.y2 >= height){
			platform.y2 = 0;
			//platform.x2 = platform.y+random(120,320);
		}

		if(platform.y3 >= height){
			platform.y3 = 0;
			//platform.x3 = platform.y+random(120,320);
		}

		if(platform.y4 >= height){
			platform.y4 = 0;
			//platform.x4 = platform.y+random(120,320);
		}

		if(platform.y5 >= height){
			platform.y5 = 0;
			//platform.x5 = platform.y+random(120,320);
		}

		if(platform.y6 >= height){
			platform.y6 = 0;
			//platform.x6 = platform.y+random(120,320);
		}

		if(platform.y7 >= height){
			platform.y7 = 0;
			//platform.x7 = platform.y+random(120,320);
		}
		if(platform.y8 >= height){
			platform.y8 = 0;
			//platform.x8 = platform.y+random(120,320);
		}
		if(platform.y0 >= height){
			platform.y0 = 0;
			//platform.x0 = platform.y+random(120,320);
		}
	}
}
