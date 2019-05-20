var footerEl = document.querySelector("footer");
var clickValue = 0
var onFooterClick = function() {
	clickValue++;
	console.clear();
	console.log("click number " + clickValue);
};
footerEl.addEventListener("click", onFooterClick);


var navbar = document.querySelector("button");
var hamburger = document.getElementById('navbarHeader');
var onNavbarClick = function() {
	hamburger.classList.toggle("collapse");
};
navbar.addEventListener("click", onNavbarClick);

var card = document.getElementsByClassName("card mb-4")[0];
var edit = document.querySelectorAll("button")[2];
var onEditclick = function() {
	this.style.color = 'red';
}
card.addEventListener("click", onEditclick);

var card2 = document.getElementsByClassName("card mb-4")[1];
var edit2 = document.querySelectorAll("button")[4];
var onEdit2click = function() {
	if (card2.style.color === 'green') {
		this.style.color = '';}
	else {card2.style.color = 'green';}

};
card2.addEventListener("click", onEdit2click);

