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