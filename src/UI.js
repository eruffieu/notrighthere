//------------------------------------------------------------------------------------------------- Title texts ↓
function InitTitleText() {

	UITitleText = document.createElement('div');
	UITitleText.id = "UITitleTextId";
	UITitleText.innerHTML = "ETIENNE  RUFFIEUX";
	UITitleText.classList.add('titleText');
	document.body.appendChild(UITitleText);

	InitTitleSubText();

	InitTitleDefText();

	InitPosts();

	InitNoRespect();
}

function InitTitleSubText() {

	UITitleSubText = document.createElement('div');
	UITitleSubText.id = "UITitleSubTextId";
	UITitleSubText.innerHTML = "DEVELOPER";
	UITitleSubText.classList.add('subTitleText');
	document.body.appendChild(UITitleSubText);
}

function InitTitleDefText() {

	UITitleDefText = document.createElement('div');
	UITitleDefText.id = "UITitleDefTextId";
	UITitleDefText.innerHTML = "GRAPHICS / UI / VR / AR";
	UITitleDefText.classList.add('subDefTitleText');
	document.body.appendChild(UITitleDefText);
}

function InitPosts() {
	UIPosts = document.createElement('div');
	//UIPosts.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor quis elit in sodales. Praesent a egestas leo. Fusce ultrices rutrum diam, sed rutrum sapien lacinia et. Aliquam ut pretium ex. Nam a eleifend lorem. Phasellus a risus lacus. Nulla molestie aliquam ipsum eget aliquam.Vivamus id eros consectetur, eleifend libero at, vulputate arcu. Duis arcu felis, condimentum eget placerat eget, eleifend non libero. Sed dapibus orci a massa venenatis aliquam. Aenean fermentum ultricies vestibulum. In tempor neque vel dui facilisis aliquet. Cras imperdiet sapien nibh, a tristique eros dignissim eu. Nam et diam elementum, viverra turpis in, aliquam augue. Phasellus rutrum convallis vulputate.Duis id elit iaculis, bibendum urna ac, sollicitudin turpis. Curabitur vulputate, enim ac ullamcorper auctor, enim ex convallis augue, id pharetra tortor orci vitae nulla. Curabitur porta, tortor eu lacinia pellentesque, dolor nulla viverra odio, eget pretium leo velit eget ex. Phasellus viverra odio at nulla posuere tempus. Nam quis leo in velit lacinia posuere. Pellentesque ultricies purus nulla, id molestie quam sollicitudin ac. Duis luctus augue massa, sed laoreet urna sodales eu. Suspendisse neque lorem, fringilla sed purus vitae, rhoncus ultrices odio. Fusce facilisis nisi nec pellentesque egestas.Duis posuere nisl sodales est rhoncus gravida eget lacinia mi. Mauris sagittis quam in eleifend feugiat. Vestibulum ac maximus nibh. Vestibulum auctor mattis lorem in finibus. Pellentesque orci leo, tempus sit amet varius sit amet, fermentum quis tortor. Curabitur eget magna justo. Vivamus vehicula eu lectus a maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim, ex a pulvinar auctor, arcu tortor ornare dolor, in ornare turpis magna vel ligula. Donec sed scelerisque nulla. Phasellus dapibus vehicula lectus ut placerat. Donec pellentesque imperdiet dolor, vel tincidunt nibh euismod eget. Quisque varius, purus sit amet pretium scelerisque, nibh augue vulputate nulla, eu commodo dui mauris dapibus risus.Curabitur in pretium leo, eu sollicitudin diam. Donec turpis tellus, mattis at congue ac, venenatis ac enim. Nunc eu libero ac odio dictum lobortis. Praesent eleifend, dolor fringilla interdum fringilla, dui sapien luctus enim, sit amet suscipit nulla arcu ut metus. In magna neque, sollicitudin placerat urna eget, sollicitudin lobortis libero. Morbi aliquet convallis tellus eu iaculis. Phasellus sagittis commodo eros. Sed rhoncus gravida metus, at pellentesque enim condimentum pretium. Sed aliquam cursus quam nec eleifend. Maecenas consectetur posuere ipsum vel fermentum. Sed vestibulum quam nisl, a pulvinar turpis commodo sed. Vivamus a purus hendrerit dolor accumsan eleifend a sit amet sapien. Maecenas eget luctus felis. Vestibulum eleifend gravida eros eu faucibus. Donec maximus eu odio eu hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor quis elit in sodales. Praesent a egestas leo. Fusce ultrices rutrum diam, sed rutrum sapien lacinia et. Aliquam ut pretium ex. Nam a eleifend lorem. Phasellus a risus lacus. Nulla molestie aliquam ipsum eget aliquam.Vivamus id eros consectetur, eleifend libero at, vulputate arcu. Duis arcu felis, condimentum eget placerat eget, eleifend non libero. Sed dapibus orci a massa venenatis aliquam. Aenean fermentum ultricies vestibulum. In tempor neque vel dui facilisis aliquet. Cras imperdiet sapien nibh, a tristique eros dignissim eu. Nam et diam elementum, viverra turpis in, aliquam augue. Phasellus rutrum convallis vulputate.Duis id elit iaculis, bibendum urna ac, sollicitudin turpis. Curabitur vulputate, enim ac ullamcorper auctor, enim ex convallis augue, id pharetra tortor orci vitae nulla. Curabitur porta, tortor eu lacinia pellentesque, dolor nulla viverra odio, eget pretium leo velit eget ex. Phasellus viverra odio at nulla posuere tempus. Nam quis leo in velit lacinia posuere. Pellentesque ultricies purus nulla, id molestie quam sollicitudin ac. Duis luctus augue massa, sed laoreet urna sodales eu. Suspendisse neque lorem, fringilla sed purus vitae, rhoncus ultrices odio. Fusce facilisis nisi nec pellentesque egestas.Duis posuere nisl sodales est rhoncus gravida eget lacinia mi. Mauris sagittis quam in eleifend feugiat. Vestibulum ac maximus nibh. Vestibulum auctor mattis lorem in finibus. Pellentesque orci leo, tempus sit amet varius sit amet, fermentum quis tortor. Curabitur eget magna justo. Vivamus vehicula eu lectus a maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim, ex a pulvinar auctor, arcu tortor ornare dolor, in ornare turpis magna vel ligula. Donec sed scelerisque nulla. Phasellus dapibus vehicula lectus ut placerat. Donec pellentesque imperdiet dolor, vel tincidunt nibh euismod eget. Quisque varius, purus sit amet pretium scelerisque, nibh augue vulputate nulla, eu commodo dui mauris dapibus risus.Curabitur in pretium leo, eu sollicitudin diam. Donec turpis tellus, mattis at congue ac, venenatis ac enim. Nunc eu libero ac odio dictum lobortis. Praesent eleifend, dolor fringilla interdum fringilla, dui sapien luctus enim, sit amet suscipit nulla arcu ut metus. In magna neque, sollicitudin placerat urna eget, sollicitudin lobortis libero. Morbi aliquet convallis tellus eu iaculis. Phasellus sagittis commodo eros. Sed rhoncus gravida metus, at pellentesque enim condimentum pretium. Sed aliquam cursus quam nec eleifend. Maecenas consectetur posuere ipsum vel fermentum. Sed vestibulum quam nisl, a pulvinar turpis commodo sed. Vivamus a purus hendrerit dolor accumsan eleifend a sit amet sapien. Maecenas eget luctus felis. Vestibulum eleifend gravida eros eu faucibus. Donec maximus eu odio eu hendrerit.";
	UIPosts.classList.add('postHandler');
	UIPosts.id = "postsCanvas";
	document.body.appendChild(UIPosts);
	//LoadPost("posts/post");


	UIMenu = document.createElement('div');
	UIMenu.classList.add('menu');
	UIMenu.id = "menuCanvas";
	document.body.appendChild(UIMenu);
	LoadMenu("menu/menu");

}

function InitNoRespect() {
	UINoRespect = document.createElement('div');
	UINoRespect.innerHTML = "REALLY ?";
	UINoRespect.classList.add('noRespect');
	document.body.appendChild(UINoRespect);
}

function ShowTitleText() {
	$("#UITitleTextId").fadeIn("slow");

	setTimeout(
	    function() {
	    	$("#UITitleSubTextId").fadeIn("slow");
	 }, 125);

	setTimeout(
	    function() {
	    	$("#UITitleDefTextId").fadeIn("slow");
	 }, 250);
}

function HideTitleText() {
	$("#UITitleDefTextId").fadeOut("slow");

	setTimeout(
	    function() {
	    	$("#UITitleSubTextId").fadeOut("slow");
	 }, 125);

	setTimeout(
	    function() {
	    	$("#UITitleTextId").fadeOut("slow");
	 }, 250);
}
//------------------------------------------------------------------------------------------------- Title texts ↑


//------------------------------------------------------------------------------------------------- Round button Title ↓

function HideTitleRoundButton() {

	UITitleRoundButton.removeEventListener("mouseover", HandleMouseOver, false);
	UITitleRoundButton.removeEventListener("mouseout", HandleMouseOut, false);
	window.clearInterval(expandingRoundButton);
	window.clearInterval(collapsingRoundButton);
	window.clearInterval(InitialExpandingRoundButton);
	UITitleRoundButton.style.visibility = "hidden";
	UITitleRoundButton.style.display = "none";
}

function ShowTitleRoundButton() {

	UITitleRoundButton.style.visibility = "visible";
	$("#UITitleRoundButtonId").animate({opacity: 1, top: "52%"}, 500);
	$("#UITitleRoundButtonId").animate({top: "50%"}, 200);


	setTimeout(
	    function() {
			$("#fakeUITitleRoundButtonId").remove();
    		UITitleRoundButton.addEventListener("mouseover", HandleMouseOver, false);
			UITitleRoundButton.addEventListener("mouseout",  HandleMouseOut, false);
			UITitleRoundButton.addEventListener("click",  function(){
				HideTitleRoundButton();
				FallDownAnimation();
			}, false);
			if (UIMouseOver)
				InitialMouseOver();
	 }, 700);
}

function InitialMouseOver() {

	$("#UITitleRoundButtonId").clearQueue();
	$("#UITitleRoundButtonId").stop();
	$("#UITitleRoundButtonId").animate({width: "8vh", height: "8vh", marginLeft: "-4vh", marginTop: "-4vh"}, 200);

	InitialExpandingRoundButton = window.setInterval(function() {
		ExpandTitleSphere();
	}, 50);
}

function HandleMouseOver() {

	$("#UITitleRoundButtonId").clearQueue();
	$("#UITitleRoundButtonId").stop();
	$("#UITitleRoundButtonId").animate({width: "8vh", height: "8vh", marginLeft: "-4vh", marginTop: "-4vh"}, 200);

	collapsingRoundButton && window.clearInterval(collapsingRoundButton);

	InitialExpandingRoundButton && window.clearInterval(InitialExpandingRoundButton);

	expandingRoundButton = window.setInterval(function() {
		ExpandTitleSphere();
	}, 50);
}

function HandleMouseOut() {

	$("#UITitleRoundButtonId").clearQueue();
	$("#UITitleRoundButtonId").stop();
	$("#UITitleRoundButtonId").animate({width: "10vh", height: "10vh", marginLeft: "-5vh", marginTop: "-5vh"}, 200);

	expandingRoundButton && window.clearInterval(expandingRoundButton);

	InitialExpandingRoundButton && window.clearInterval(InitialExpandingRoundButton);

	collapsingRoundButton = window.setInterval(function() {
		CollapseTitleSphere();
	}, 50);
}

function InitTitleRoundButton() {

	UITitleRoundButton = document.createElement("IMG");
	UITitleRoundButton.classList.add('roundButtonTitle');
	UITitleRoundButton.id = "UITitleRoundButtonId";
	UITitleRoundButton.src = "textures/arrow.png";
	document.body.appendChild(UITitleRoundButton);
}

function InitTitleRoundButtonFakie() {

	UIFakeTitleRoundButton = document.createElement("div");
	UIFakeTitleRoundButton.classList.add('fakeRoundButtonTitle');
	UIFakeTitleRoundButton.id = "fakeUITitleRoundButtonId";
	document.body.appendChild(UIFakeTitleRoundButton);

	UIFakeTitleRoundButton.addEventListener("mouseover", function(){UIMouseOver = true}, false);
	UIFakeTitleRoundButton.addEventListener("mouseout",  function(){UIMouseOver = false}, false);
}

//------------------------------------------------------------------------------------------------- Background Text ↓

function InitBackgroundtext() {

	var background = document.createElement('div');
	background.classList.add('backgroundDiv');
	background.id = "backgroundDivId";
    document.body.appendChild(background);

	backgroundText = document.createElement('div');
	backgroundText.classList.add('backgroundText');
	backgroundText.id = "backgroundTextId";
	background.appendChild(backgroundText);
	$( "#backgroundTextId" ).load( "txt/script.html" );
}

//------------------------------------------------------------------------------------------------- Background Text ↑

//------------------------------------------------------------------------------------------------- Loading Screen ↓
var hided = false;
function LoadingScreenInit()
{
	loadingScreen = document.createElement('div');
	loadingScreen.classList.add('loadingScreenClass');
	loadingScreen.id = "loadingScreenId";
    document.body.appendChild(loadingScreen);
    $( "#loadingScreenId" ).load( "loading/loading.html" );
}

function HideLoadingScreen()
{
	$("#loadingScreenId").fadeOut("slow");
}

function UnloadFake()
{
	hided = true;
	loadingBar.animate(0.0, {
    	duration: 1000
	});
}

function LoaderPulse()
{
	var op = 1;
	var goDown = true;
    var timer = setInterval(function () {
    	if (hided)
    	{
    		clearInterval(timer);
    		return;
    	}
        if (op < 0.4 || op > 0.95){
        	if (op < 0.4)
        		op = 0.4;
        	else
        		op = 0.95;
        	goDown = !goDown;
            return;
        }
        loaderButton.style.opacity = op;
        loaderButton.style.filter = 'alpha(opacity=' + op * 100 + ")";
        if (goDown)
        	op -= op * 0.01;
        else
        	op += op * 0.01;
    }, 10);
}

function LoaderMouseOver()
{

}
//------------------------------------------------------------------------------------------------- Loading Screen ↑

//------------------------------------------------------------------------------------------------- Headers Text ↓

function InitHeaderstext() {

	var headers = document.createElement('div');
	headers.classList.add('headersClass');
	headers.id = "headersId";
    document.body.appendChild(headers);
	$( "#headersId" ).load( "headers/headers.html" );
}

//------------------------------------------------------------------------------------------------- Headers Text ↑


function ShowPosts() {

	// Prevent retard clicking on menu
	UIMenuAlreadyClicked = false;

	UIPosts.style.opacity = 1;
}

function HidePosts() {
	UIPosts.style.opacity = 0;
}

function ShowMenu() {
	$("#menuCanvas").animate({opacity: 0.85, marginTop: "0px"});
}

function HideMenu() {
	$("#menuCanvas").animate({opacity: 0, marginTop: "-30px"});
}