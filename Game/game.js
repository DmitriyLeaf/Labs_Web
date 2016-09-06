window.onload=init;

var map;
var ctxMap;

var pl;
var ctxPl;

var npsC;
var ctxNpsC;

var stats;
var ctxStats;

var end;
var ctxEnd;

var gameWidth = 800;
var gameHeight = 480;

var zpl = new Image();
zpl.src = "image/backgraund_2.jpg";

var bg = new Image();
bg.src = "image/bg.jpg"

var tiles = new Image();
tiles.src = "image/petrosyan.png"

var tiles_2 = new Image();
tiles_2.src = "image/grumpy.png"

var player;
//var nps;
var npsi = [];

var isPlaying;

var lvl;

var stistic;
var sthl = 0;

var drawX = 370;
var drawY = 200;

var requestAnimFrame = window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame||
						window.mozRequestAnimationFrame || 
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame;

function init()
{
	map = document.getElementById("map");
	ctxMap = map.getContext("2d");

	pl = document.getElementById("player");
	ctxPl = pl.getContext("2d");

	npsC = document.getElementById("nps");
	ctxNpsC = npsC.getContext("2d");

	stats = document.getElementById("stats");
	ctxStats = stats.getContext("2d");

	end = document.getElementById("endl");
	ctxEnd = end.getContext("2d");


	map.width = gameWidth;
	map.height = gameHeight;
	pl.width = gameWidth;
	pl.height = gameHeight;
	npsC.width = gameWidth;
	npsC.height = gameHeight;

	stats.width = gameWidth;
	stats.height = gameHeight;

	end.width = gameWidth;
	end.height = gameHeight;

	ctxStats.fillStyle = "#fff";
	ctxStats.font = "bold 15pt ALGERIAN";

	ctxEnd.fillStyle = "#000";
	ctxEnd.font = "bold 30pt ALGERIAN";

	player = new Player();
	//nps = new nps();

	lvl = 5;

	statistic = 0;

	drawBg();

	start();

	startLoop();
	spawnNps(lvl*4);

	document.addEventListener("keydown", checkKeyDown, false);
	document.addEventListener("keyup", checkKeyUp, false);
}

function start()
{
	lvl = prompt("Input lvl: ")
}

function loop()
{
	if(isPlaying)
	{
		sthl++;
		if (sthl == 20) statistic++, sthl = 0;
		draw();
		update();
		requestAnimFrame(loop);
	}
}

function startLoop()
{
	isPlaying = true;
	loop();
}

function stopLoop()
{
	isPlaying = false
}

function update()
{
	//nps.update();
	player.update();
	updateStats();
	for (var i=0; i<npsi.length; i++)
	{
		npsi[i].update();
	}
}

function draw()
{
	//nps.draw();
	player.draw();

	clearCtxNps();
	for (var i=0; i<npsi.length; i++)
	{
		npsi[i].draw();
	}
}

function spawnNps(count)
{
	for(var i=0; i<count; i++)
	{
		npsi[i] = new nps();
	}
}

function Player()
{
	this.srcX = 0;
	this.srcY = 0;
	drawX = 50;
	drawY = 200;
	this.width = 30;
	this.height = 30;

	this.isUp = false;
	this.isDown = false;
	this.isRight = false;
	this.isLeft = false;

	this.speed =4;
}

Player.prototype.draw = function()
{
	clearCtxPlayer();
	ctxPl.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, drawX, drawY, this.width, this.height);
}

Player.prototype.draw = function()
{
	clearCtxPlayer();
	ctxPl.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, drawX, drawY, this.width, this.height);
}

Player.prototype.update = function()
{
	this.chooseDir();
	for (var i = 0; i < npsi.length; i++) 
	{
		//if(drawX >= npsi[i].drawXn && 
		//	drawY >= npsi[i].drawYn && 
		//	drawX <= npsi[i].drawXn + npsi[i].width && 
		//	drawY <= npsi[i].drawYn + npsi[i].height)
		//	{
		//		isPlaying = false;
		//		updateEnd();
		//	}
		if (Math.abs((drawX+15)-(npsi[i].drawXn+15)) < 25 &&
			Math.abs((drawY+15)-(npsi[i].drawYn+15)) < 25)
			{
				isPlaying = false;
				updateEnd();
			}
	}
	//this.drawX += Math.floor(Math.random() * (1 - (-1) + 1)) + (-1);
	//this.drawY += Math.floor(Math.random() * (1 - (-1) + 1)) + (-1);
}

Player.prototype.chooseDir = function()
{
	if(this.isUp) drawY -=this.speed;
	if(this.isDown) drawY +=this.speed;
	if(this.isLeft) drawX -=this.speed;
	if(this.isRight) drawX +=this.speed;
	if(drawX<0) drawX=0;
	if(drawX>gameWidth-30) drawX=gameWidth-30;
	if(drawY<0) drawY=0;
	if(drawY>gameHeight-30) drawY=gameHeight-30;
}

function nps()
{
	this.srcXn = 0;
	this.srcYn = 0;
	//this.drawXn = Math.floor(Math.random() * gameWidth) + gameWidth;
	//this.drawYn = Math.floor(Math.random() * gameHeight-30);
	this.drawXn = Math.floor(Math.random() * ((gameWidth*2) - (gameWidth) + 1)) + (gameWidth);
	this.drawYn = Math.floor(Math.random() * ((gameHeight-30) - (0) + 1)) + (0);
	this.width = 30;
	this.height = 30;

	this.speedN =2;
}

nps.prototype.draw = function()
{
	//clearCtxNps();
	ctxNpsC.drawImage(tiles_2, this.srcXn, this.srcYn, this.width, this.height, this.drawXn, this.drawYn, this.width, this.height);
}

nps.prototype.update = function()
{
	this.drawXn -=lvl;
	if(this.drawXn < -50)
	{
		//this.drawXn = Math.floor(Math.random() * gameWidth) + gameWidth;
		//this.drawYn = Math.floor(Math.random() * gameWidth-30);
		this.drawXn = Math.floor(Math.random() * ((gameWidth*2) - (gameWidth) + 1)) + (gameWidth);
		this.drawYn = Math.floor(Math.random() * ((gameHeight-30) - (0) + 1)) + (0);

	}
    //if (this.drawXn-drawX<0 && this.drawYn-drawY<0) this.drawXn+=this.speedN, this.drawYn+=this.speedN;
         //else if (this.drawXn-drawX<0 && this.drawYn-drawY>0) this.drawXn+=this.speedN, this.drawYn-=this.speedN;
         //else if (this.drawXn-drawX<0 && this.drawYn-drawY==0) this.drawXn+=this.speedN;
         //else if (this.drawXn-drawX>0 && this.drawYn-drawY==0) this.drawXn-=this.speedN;
         //else if (this.drawXn-drawX>0 && this.drawYn-drawY<0) this.drawXn-=this.speedN, this.drawYn+=this.speedN;
         //else if (this.drawXn-drawX>0 && this.drawYn-drawY>0) this.drawXn-=this.speedN, this.drawYn-=this.speedN;
         //else if (this.drawXn-drawX==0 && this.drawYn-drawY>0) this.drawYn-=this.speedN;
         //else if (this.drawXn-drawX==0 && this.drawYn-drawY<0) this.drawYn+=this.speedN;
         //else this.drawXn=drawX, this.drawYn=drawY;
	//this.drawXn += Math.floor(Math.random() * (1 - (-1) + 1)) + (-1);
	//this.drawYn += Math.floor(Math.random() * (1 - (-1) + 1)) + (-1);
}

function checkKeyDown(e)
{
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);

	if(keyChar == "W")
	{
		player.isUp = true;
		e.preventDefault();
	}

	if(keyChar == "S")
	{
		player.isDown = true;
		e.preventDefault();
	}

	if(keyChar == "A")
	{
		player.isLeft = true;
		e.preventDefault();
	}

	if(keyChar == "D")
	{
		player.isRight = true;
		e.preventDefault();
	}
}

function checkKeyUp(e)
{
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);

	if(keyChar == "W")
	{
		player.isUp = false;
		e.preventDefault();
	}

	if(keyChar == "S")
	{
		player.isDown = false;
		e.preventDefault();
	}

	if(keyChar == "A")
	{
		player.isLeft = false;
		e.preventDefault();
	}

	if(keyChar == "D")
	{
		player.isRight = false;
		e.preventDefault();
	}
}

function drawBg()
{
	ctxMap.drawImage(bg, 0, 0, 800, 480, 0, 0, 800, 480);
}

function clearCtxNps()
{
	ctxNpsC.clearRect(0, 0, gameWidth, gameHeight);
}

function updateStats()
{
	ctxStats.clearRect(0, 0, gameWidth, gameHeight);
	ctxStats.fillText("Stats:" + statistic, 10, 20);
}

function updateEnd()
{
	ctxEnd.clearRect(0, 0, gameWidth, gameHeight);
	ctxEnd.fillText("Game over", 300, 250);
}


function clearCtxPlayer()
{
	ctxPl.clearRect(0, 0, gameWidth, gameHeight);
}