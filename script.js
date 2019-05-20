// Adds a click and show it in the console
var footerEl = document.querySelector("footer");
var clickValue = 0
var onFooterClick = function() {
	clickValue++;
	console.clear();
	console.log("click number " + clickValue);
};
footerEl.addEventListener("click", onFooterClick);

// Makes the navbar interactive on click (scroll down)
var navbar = document.querySelector("button");
var hamburger = document.getElementById('navbarHeader');
var onNavbarClick = function() {
	hamburger.classList.toggle("collapse");
};
navbar.addEventListener("click", onNavbarClick);

// Changes the card text to red on click of the "Edit" button 
var card = document.getElementsByClassName("card mb-4")[0];
var edit = document.querySelectorAll("button")[2];
var onEditclick = function() {
	this.style.color = 'red';
}
card.addEventListener("click", onEditclick);

// Changes the card text to green on click of the "Edit" button, then back to normal when clicked again
var card2 = document.getElementsByClassName("card mb-4")[1];
var edit2 = document.querySelectorAll("button")[4];
var onEdit2click = function() {
	if (card2.style.color === 'green') {
		this.style.color = '';}
	else {card2.style.color = 'green';}

};
card2.addEventListener("click", onEdit2click);

// Bootstrap disappears when the navbar is double-clicked, then back when double-clicked again
var navbar2 = document.getElementsByClassName("navbar")[0];
var noCss = function() {
	if (document.styleSheets[0].disabled === false) {
		document.styleSheets[0].disabled = true;
	}
	else if (document.styleSheets[0].disabled = false) {
		var headID = document.getElementsByTagName("head")[0];
		var x = document.createElement("link");
		headID.appendChild(x)
		x.href ='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
	}
};
navbar2.addEventListener("dblclick", noCss);
