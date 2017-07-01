
function InitPostsList() {
	PostsList = ["post", "post2", "post3"];
}

function LoadPost(name) {

	$( "#postsCanvas" ).load( name +".html" );
	UIPosts.scrollTop = 0;
	FormPlane();
}

function LoadMenu(name) {

	$( "#menuCanvas" ).load( name +".html" );
}