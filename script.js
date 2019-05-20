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