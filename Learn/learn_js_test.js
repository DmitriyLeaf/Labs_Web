window.onload=init;

var npsC;
var ctxNpsC;

var tiles0 = new Image();
tiles0.src = "image/abc_test/a.png";
var tiles1 = new Image();
tiles1.src = "image/abc_test/b.png";
var tiles2 = new Image();
tiles2.src = "image/abc_test/w.png";
var tiles3 = new Image();
tiles3.src = "image/abc_test/g.png";
var tiles4 = new Image();
tiles4.src = "image/abc_test/d.png";
var tiles5 = new Image();
tiles5.src = "image/abc_test/e.png";
var tiles6 = new Image();
tiles6.src = "image/abc_test/ee.png";
var tiles7 = new Image();
tiles7.src = "image/abc_test/gi.png";
var tiles8 = new Image();
tiles8.src = "image/abc_test/z.png";
var tiles9 = new Image();
tiles9.src = "image/abc_test/ii.png";
var tiles10 = new Image();
tiles10.src = "image/abc_test/i.png";
var tiles11 = new Image();
tiles11.src = "image/abc_test/iii.png";
var tiles12 = new Image();
tiles12.src = "image/abc_test/uu.png";
var tiles13 = new Image();
tiles13.src = "image/abc_test/k.png";
var tiles14 = new Image();
tiles14.src = "image/abc_test/l.png";
var tiles15 = new Image();
tiles15.src = "image/abc_test/m.png";
var tiles16 = new Image();
tiles16.src = "image/abc_test/n.png";
var tiles17 = new Image();
tiles17.src = "image/abc_test/o.png";
var tiles18 = new Image();
tiles18.src = "image/abc_test/p.png";
var tiles19 = new Image();
tiles19.src = "image/abc_test/r.png";
var tiles20 = new Image();
tiles20.src = "image/abc_test/s.png";
var tiles21 = new Image();
tiles21.src = "image/abc_test/t.png";
var tiles22 = new Image();
tiles22.src = "image/abc_test/u.png";
var tiles23 = new Image();
tiles23.src = "image/abc_test/f.png";
var tiles24 = new Image();
tiles24.src = "image/abc_test/h.png";
var tiles25 = new Image();
tiles25.src = "image/abc_test/c.png";
var tiles26 = new Image();
tiles26.src = "image/abc_test/ch.png";
var tiles27 = new Image();
tiles27.src = "image/abc_test/sh.png";
var tiles28 = new Image();
tiles28.src = "image/abc_test/sch.png";
var tiles29 = new Image();
tiles29.src = "image/abc_test/yo.png";
var tiles30 = new Image();
tiles30.src = "image/abc_test/ya.png";
var tiles31 = new Image();
tiles31.src = "image/abc_test/q.png";

var bl;

var btn1;
var btn2;
var btn3;
var btn4;


function init()
{

	npsC = document.getElementById("nps");
	ctxNpsC = npsC.getContext("2d");

	randImg();

	document.addEventListener("keydown", checkKeyDown, false);

}

function randImg()
{
	bl = Math.floor(Math.random()*32 + 0);
	
	if(bl == 0) drawCtxNps0();
	if(bl == 1) drawCtxNps1();
	if(bl == 2) drawCtxNps2();
	if(bl == 3) drawCtxNps3();
	if(bl == 4) drawCtxNps4();
	if(bl == 5) drawCtxNps5();
	if(bl == 6) drawCtxNps6();
	if(bl == 7) drawCtxNps7();	
	if(bl == 8) drawCtxNps8();
	if(bl == 9) drawCtxNps9();
	if(bl == 10) drawCtxNps10();
	if(bl == 11) drawCtxNps11();
	if(bl == 12) drawCtxNps12();
	if(bl == 13) drawCtxNps13();
	if(bl == 14) drawCtxNps14();
	if(bl == 15) drawCtxNps15();
	if(bl == 16) drawCtxNps16();
	if(bl == 17) drawCtxNps17();
	if(bl == 18) drawCtxNps18();
	if(bl == 19) drawCtxNps19();
	if(bl == 20) drawCtxNps20();
	if(bl == 21) drawCtxNps21();
	if(bl == 22) drawCtxNps22();
	if(bl == 23) drawCtxNps23();
	if(bl == 24) drawCtxNps24();
	if(bl == 25) drawCtxNps25();
	if(bl == 26) drawCtxNps26();
	if(bl == 27) drawCtxNps27();
	if(bl == 28) drawCtxNps28();
	if(bl == 29) drawCtxNps29();
	if(bl == 30) drawCtxNps30();
	if(bl == 31) drawCtxNps31();
}

function checkKeyDown(e)
{
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);

	if(bl == 0 && keyChar == "F") alert("Right!"), randImg();
	if(bl == 1 && keyChar == ",") alert("Right!"), randImg();
	if(bl == 2 && keyChar == "D") alert("Right!"), randImg();
	if(bl == 3 && keyChar == "U") alert("Right!"), randImg();
	if(bl == 4 && keyChar == "L") alert("Right!"), randImg();
	if(bl == 5 && keyChar == "T") alert("Right!"), randImg();
	if(bl == 6 && keyChar == "'") alert("Right!"), randImg();
	if(bl == 7 && keyChar == ";") alert("Right!"), randImg();
	if(bl == 8 && keyChar == "P") alert("Right!"), randImg();
	if(bl == 9 && keyChar == "B") alert("Right!"), randImg();
	if(bl == 10 && keyChar == "S") alert("Right!"), randImg();
	if(bl == 11 && keyChar == "]") alert("Right!"), randImg();
	if(bl == 12 && keyChar == "Q") alert("Right!"), randImg();
	if(bl == 13 && keyChar == "R") alert("Right!"), randImg();
	if(bl == 14 && keyChar == "K") alert("Right!"), randImg();
	if(bl == 15 && keyChar == "V") alert("Right!"), randImg();
	if(bl == 16 && keyChar == "Y") alert("Right!"), randImg();
	if(bl == 17 && keyChar == "J") alert("Right!"), randImg();
	if(bl == 18 && keyChar == "G") alert("Right!"), randImg();
	if(bl == 19 && keyChar == "H") alert("Right!"), randImg();
	if(bl == 20 && keyChar == "C") alert("Right!"), randImg();
	if(bl == 21 && keyChar == "N") alert("Right!"), randImg();
	if(bl == 22 && keyChar == "E") alert("Right!"), randImg();
	if(bl == 23 && keyChar == "A") alert("Right!"), randImg();
	if(bl == 24 && keyChar == "[") alert("Right!"), randImg();
	if(bl == 25 && keyChar == "W") alert("Right!"), randImg();
	if(bl == 26 && keyChar == "X") alert("Right!"), randImg();
	if(bl == 27 && keyChar == "I") alert("Right!"), randImg();
	if(bl == 28 && keyChar == "O") alert("Right!"), randImg();
	if(bl == 29 && keyChar == ".") alert("Right!"), randImg();
	if(bl == 30 && keyChar == "Z") alert("Right!"), randImg();
	if(bl == 31 && keyChar == "M") alert("Right!"), randImg();

}

function drawCtxNps0()
{
	ctxNpsC.drawImage(tiles0, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps1()
{
	ctxNpsC.drawImage(tiles1, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps2()
{
	ctxNpsC.drawImage(tiles2, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps3()
{
	ctxNpsC.drawImage(tiles3, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps4()
{
	ctxNpsC.drawImage(tiles4, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps5()
{
	ctxNpsC.drawImage(tiles5, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps6()
{
	ctxNpsC.drawImage(tiles6, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps7()
{
	ctxNpsC.drawImage(tiles7, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps8()
{
	ctxNpsC.drawImage(tiles8, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps9()
{
	ctxNpsC.drawImage(tiles9, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps10()
{
	ctxNpsC.drawImage(tiles10, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps11()
{
	ctxNpsC.drawImage(tiles11, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps12()
{
	ctxNpsC.drawImage(tiles12, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps13()
{
	ctxNpsC.drawImage(tiles13, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps14()
{
	ctxNpsC.drawImage(tiles14, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps15()
{
	ctxNpsC.drawImage(tiles15, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps16()
{
	ctxNpsC.drawImage(tiles16, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps17()
{
	ctxNpsC.drawImage(tiles17, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps18()
{
	ctxNpsC.drawImage(tiles18, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps19()
{
	ctxNpsC.drawImage(tiles19, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps20()
{
	ctxNpsC.drawImage(tiles20, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps21()
{
	ctxNpsC.drawImage(tiles21, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps22()
{
	ctxNpsC.drawImage(tiles22, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps23()
{
	ctxNpsC.drawImage(tiles23, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps24()
{
	ctxNpsC.drawImage(tiles24, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps25()
{
	ctxNpsC.drawImage(tiles25, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps26()
{
	ctxNpsC.drawImage(tiles26, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps27()
{
	ctxNpsC.drawImage(tiles27, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps28()
{
	ctxNpsC.drawImage(tiles28, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps29()
{
	ctxNpsC.drawImage(tiles29, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps30()
{
	ctxNpsC.drawImage(tiles30, 0, 0, 170, 160, 70, 10, 170, 160);
}

function drawCtxNps31()
{
	ctxNpsC.drawImage(tiles31, 0, 0, 170, 160, 70, 10, 170, 160);
}

function clearCtxNps()
{
	ctxNpsC.clearRect(0, 0, 170, 160);
}