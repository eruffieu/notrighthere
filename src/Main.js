if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera;
var scene;
var renderer;
var cssRenderer;
var composer;
var stats;
var clock;

var loaded = false;

var lights;

var effects;

var shader;

var started = false;

// Sphere references
var sphereCenter;
var sphereVertex = [];
var sphereVertexZeroPosition = [];
var meshRandomForceValues = [];
var meshRandomRotationValues = [];

// lowIco references
var planeVertex = [];
var planeVertexPositions = [];
var planeVertexGroundPositions = [];
var planeVertexDirections = [];
var planeAbortVertexDirections = [];

// Loader
var loaderManager;
var loadingScreen;
var loaderButton;
var LoaderPulseTimer;
var loaderLoaded = false;

// Background refs
var floor;
var ceil;
var videoPlane;
var backgroundText;

var animationsStatus = 0;


// Explosion Utils
var explosionForce = 0.0001;
var explosionRotationForce = 0.0005;
var explosionTimeSpeed = 0;
var explosionFrame = 0;

// Animation Utils
var RotateSphereSpeed = 0.005;
var FramestoFormPlane = 30;
var ShouldRotateSphere = true;
var ShouldExplode = true;
var ShouldFallDown = false;
var ArrangePlan = false; //TEM¨p
var indexArray = [];
var fallingSpeeds = [];
var quarterMinusVertexLen;
var ShouldAnimatePlaneVertex = false;
var PlanevertexDirections = 1;

// UI Utils refs
var UITitleText;
var UITitleSubText;
var UITitleDefText;
var UITitleRoundButton;
var UIFakeTitleRoundButton;
var UIMouseOver = false;
var UINoRespect;
var InitialExpandingRoundButton = null;
var collapsingRoundButton = null;
var expandingRoundButton = null;
var UIPosts;
var UIMenu;
var UIMenuAlreadyClicked = false;
var PostsList = [];

Init();

function StartAnimate()
{
	if (!loaded)
	{
		return;
	}
	else if (!started)
	{
		started = true;
		Update();
		StartTitleAnimation();
		UnloadFake();
	}
}