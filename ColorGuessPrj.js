function gen_0_num(num) {
	return Math.floor((Math.random() * num));
}

function genColor() {
	var color = "rgb(";
	
	for(var i = 0; i < 3; i++) {
		color = color.concat(gen_0_num(255) + ",");
	}

	color = color.replace(/,$/, "") + ")";
	color = color.replace(/,/g, ", ");
	//console.log(color);
	return color;
}

function compColorVal() {
	var colorPic = this.style.backgroundColor;

	// console.log("colorPic: " + colorPic);
	// console.log("colors[colorInxPic]: " + colors[colorInxPic]);

	if(colorPic === colors[colorInxPic]) {
		console.log("correct");
		alert("correct");
	}
	else {
		console.log("Wrong");
		this.style.backgroundColor = "rgb(0,0,0)";		
	}
	
}

function colorBuild(colorNum) {
	colors = [];
	for(var i = 0; i < colorNum; i++) {
		colors.push(genColor());
	}
	console.log(colors);
	colorInxPic = gen_0_num(colorNum - 1);
	colorValueDis.textContent = colors[colorInxPic].toUpperCase();

	squares = document.querySelectorAll(".square");
	for(var i = 0; i < colorNum; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", compColorVal);
	}
}

function gameBuild(sqrNum) {
	var content = "";

	// None responsive version
	// for(var i = 0; i < sqrNum ; i++) {
	// 	content = content.concat("<div class=\"square\"></div>");
	// }


	content = content.concat("<div class=\"row\">");
	for(var j = 0; j < sqrNum ; j++) {
		content = content.concat("<div class=\"col-md-4 col-sm-4 col-xs-6\">");
		content = content.concat("<div class=\"thumbnail_container\">");
		content = content.concat("<div class=\"square\">");
		content = content.concat("<img/> </div> </div> </div>");
	}

	content = content.concat("</div>");

	sqrContainer.innerHTML = content;
	colorBuild(sqrNum);
}

function init() {
	colorValueDis = document.querySelector("#colorValueDis"); 
	sqrContainer = document.querySelector("#sqrContainer");

	gameBuild(6);
}

var colors = null;
var colorValueDis = null;
var colorInxPic = null;
var squares = null;
var sqrContainer = null;

init();

var resetBt = document.querySelector("#reset");
resetBt.addEventListener("click", function() {
	location.reload();
})

var easyBt = document.querySelector("#easyGame");
easyBt.addEventListener("click", function() {
	gameBuild(3)
});

var hardBt = document.querySelector("#hardGame");
hardBt.addEventListener("click", function() {
	gameBuild(6);
})
