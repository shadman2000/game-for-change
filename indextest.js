var bubbles=[];

function setup(){
	createCanvas(500,500);
	smooth();
	for(var i = 0;i<400;i++){
		bubbles[i] =  {
			x:random(0,width),
			y:random(0,height),
			width:10,
			height:10,

			display: function(){
				noFill();
				stroke(255);
				ellipse(this.x,this.y,this.width,this.height);
			},

			move: function(){
				this.x = this.x+random(-1,1);
				this.y = this.y+random(-1,1);
			}
		}
	}
}

function draw(){
	background(0);
	for(var i =0;i<bubbles.length;i++){
		bubbles[i].display();
		bubbles[i].move();
	}
}
