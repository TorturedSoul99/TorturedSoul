var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;

	if (prevScrollPos > currentScrollPos) {
		document.getElementById("mainHeader").style.height = "12vh";
		document.getElementById("logo").style.width = "3.8em";
		document.getElementById("submenu").style.top = "12vh";
	} else {
		document.getElementById("mainHeader").style.height = "8vh";
		document.getElementById("logo").style.width = "2.6em";
		document.getElementById("submenu").style.top = "10vh";
	}

	prevScrollPos = currentScrollPos;
}