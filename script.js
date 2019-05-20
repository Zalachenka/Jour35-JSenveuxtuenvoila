// var footerEl = document.querySelector("footer");
// var clickValue = parseInt(footerEl).value
// 	clickValue = isNaN(clickValue) ? 0 : clickValue;

// var onFooterClick = function() {
// 	  clickValue++;
//     document.querySelector("footer").value = clickValue
// 	console.log("click number " + clickValue);

// };
// footerEl.addEventListener("click", onFooterClick);
var footerEl = document.querySelector("footer");
var clickValue = 0
var onFooterClick = function() {
	clickValue++;
	console.clear();
	console.log("click number " + clickValue);
};
footerEl.addEventListener("click", onFooterClick);
