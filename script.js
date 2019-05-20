// Functionality 1bis: Adds a click and show it in the console
var footerEl = document.querySelector("footer");
var clickValue = 0
var onFooterClick = function() {
	clickValue++;
	console.clear();
	console.log("click number " + clickValue);
};
footerEl.addEventListener("click", onFooterClick);

// Functionality 2: Makes the navbar interactive on click (scroll down)
var navbar = document.querySelector("button");
var hamburger = document.getElementById('navbarHeader');
var onNavbarClick = function() {
	hamburger.classList.toggle("collapse");
};
navbar.addEventListener("click", onNavbarClick);

// Functionality 3: Changes the card text to red on click of the "Edit" button 
var card = document.getElementsByClassName("card mb-4")[0];
var edit = document.querySelectorAll("button")[2];
var onEditclick = function() {
	this.style.color = 'red';
}
card.addEventListener("click", onEditclick);

// Functionality 4: Changes the card text to green on click of the "Edit" button, then back to normal when clicked again
var card2 = document.getElementsByClassName("card mb-4")[1];
var edit2 = document.querySelectorAll("button")[4];
var onEdit2click = function() {
	if (card2.style.color === 'green') {
		this.style.color = '';}
	else {card2.style.color = 'green';}

};
card2.addEventListener("click", onEdit2click);

// Functionality 5: Bootstrap disappears when the navbar is double-clicked, then back when double-clicked again
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

// Functionality 6: Reduces any card on the page, and goes back to normal when mouseover again
var viewButton = document.querySelectorAll(".btn-success");
var cardText = document.getElementsByClassName("card-text");
var cardImage = document.getElementsByClassName("card-img-top");
var cardStatus = false

for(let i = 0; i <= viewButton.length-1; i++) {
	function reduce() {
	if (cardStatus === false) {
		cardText[i].style.display = "none";
    	cardImage[i].style.width = "20%";
    	cardStatus = true;}
    else {
    	cardText[i].style.display = "initial";
    	cardImage[i].style.width = "100%";
    	cardStatus = false;}
    	}
    	viewButton[i].addEventListener("mouseover", reduce);
    }
// Functionality 7: When the user clicks on the grey button '==>', Card 6 takes the place of the first card
