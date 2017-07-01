
function MenuClicked(post) {
	if (UIMenuAlreadyClicked)
		return;
	UIMenuAlreadyClicked = true;
	setTimeout(
		function() {
		    LoadPost("posts/"+post);
	}, 222);
	ExplodePlane();
}