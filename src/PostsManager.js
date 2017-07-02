
function InitPostsList() {
	PostsList = ["post", "post2", "post3"];
}

function LoadPost(name) {
	loadedPostName = name;
	$( "#postsCanvas" ).load( name +".html" );
	UIPosts.scrollTop = 0;
	FormPlane();
}

function LoadNextPost() {

	var nextPost = "old_" + (parseInt(loadedPostName.split("_")[1]) - 1).toString();
	setTimeout(
		function() {
		    LoadPost("posts/"+nextPost);
	}, 222);
	ExplodePlane();
}

function LoadPrevPost() {

	var prevPost = "old_" + (parseInt(loadedPostName.split("_")[1]) + 1).toString();
	setTimeout(
		function() {
		    LoadPost("posts/"+prevPost);
	}, 222);
	ExplodePlane();
}


function LoadMenu(name) {

	$( "#menuCanvas" ).load( name +".html" );
}