function RenderersInit()
{

	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0x000000, 0 );
	//renderer.setClearColor( 0xffffff, 0.1 );
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = 0;
	renderer.domElement.style.zIndex = "1";
	document.body.appendChild( renderer.domElement );

	document.addEventListener( 'wheel', onDocumentMouseWheel, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function CameraInit()
{

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 13;
}

function SceneInit()
{

	scene = new THREE.Scene();
}

function LightsInit()
{

	lights = [];

	lights[0] = new THREE.DirectionalLight( 0xffffff);
	lights[0].position.set( 1, 1, 1 );
	lights[0].intensity = 0.8;

	lights[1] = new THREE.AmbientLight( 0xffffff , 0.10 );

	// Add all lights to the scene
	lights.forEach(function(light) {
		scene.add(light);
	});
}

function CameraEffectsInit()
{
	effects = [];

	composer = new THREE.EffectComposer( renderer );
	composer.renderTarget1.stencilBuffer = true;
    composer.renderTarget2.stencilBuffer = true;
	composer.addPass( new THREE.RenderPass( scene, camera ) );

	effects[0] = new THREE.UnrealBloomPass(256, 0.01, 1, 0.9);

	effects[1] = new THREE.ShaderPass( THREE.SepiaShader );
	effects[1].uniforms[ 'amount' ].value = 1.5;

	effects[2] = new THREE.ShaderPass( THREE.FXAAShader );
	effects[2].uniforms[ 'resolution' ].value = new THREE.Vector2( 1/window.innerWidth, 1/window.innerHeight );

	effects[3] = new THREE.ShaderPass( THREE.HueSaturationShader );
	effects[3].uniforms[ 'saturation' ].value = 0.2;
	effects[3].renderToScreen = true;


	effects.forEach(function(effect) {
		composer.addPass(effect);
	});
}

function onWindowResize(event) {
	camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function StatsInit()
{

	stats = new Stats();
	document.body.appendChild( stats.dom );
}

function ResizeWindowInit()
{

	window.addEventListener( 'resize', onWindowResize, false );
}

function ClockInit()
{

	clock = new THREE.Clock();
}

function SphereInit()
{

	var loader = new THREE.ObjectLoader(loaderManager);

	loader.load(
		'obj/model.json',

		 function ( object ) {
			SphereSplit(object);
	    },

	    // Function called when download progresses
	    function ( xhr ) {
	        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	    },

	    // Function called when download errors
	    function ( xhr ) {
	        console.error( 'An error happened' );
	    }
	);

	loader.load(
		'obj/plane.json',

		 function ( object ) {
			PlaneInit(object);
	    },

	    // Function called when download progresses
	    function ( xhr ) {
	        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	    },

	    // Function called when download errors
	    function ( xhr ) {
	        console.error( 'An error happened' );
	    }
	);
}

function ExplosionRandomsInit()
{

	var randomPosition;
	var vectorPosition; THREE.Vector3();
	for (var i = 0; i < sphereVertex.length; i++)
	{
		fallingSpeeds[i] = 0;
		randomPosition = getRandomInt(50, 100) * explosionForce;
		vectorPosition = new THREE.Vector3(sphereVertex[i].position.x, sphereVertex[i].position.y, sphereVertex[i].position.z);
		vectorPosition.normalize();
		meshRandomForceValues[i] = [vectorPosition.x * randomPosition, vectorPosition.y * randomPosition, vectorPosition.z * randomPosition];
		meshRandomRotationValues[i] = [Math.random() * explosionRotationForce, Math.random() * explosionRotationForce, Math.random() * explosionRotationForce];
	}
	loaded = true;
}

function ArrayUtilsInit() {
	Array.prototype.swap = function (x,y) {
		var b = this[x];
		this[x] = this[y];
		this[y] = b;
		return this;
	}
}

function FloorCeilInit() {
	var geometry = new THREE.PlaneGeometry( 100000, 100000, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
	floor = new THREE.Mesh( geometry, material );
	ceil = new THREE.Mesh( geometry, material );
	
	floor.rotation.x =  -1.5708;
	floor.position.y = -5050;

	ceil.rotation.x =  1.5708;
	ceil.position.y = 5050;

	scene.add(floor);
	scene.add(ceil);

}

function VideoBackgroundInit() {
	var geometry = new THREE.PlaneGeometry( 2000, 500, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('textures/me.jpg') } );
	//var material = new THREE.MeshBasicMaterial({color: 0x555555});

	videoPlane = new THREE.Mesh( geometry, material );

	videoPlane.position.z = -420;
	scene.add(videoPlane);
}

function LoadingManagerLoader()
{
	loaderManager = new THREE.LoadingManager();
	loaderManager.onStart = function ( url, itemsLoaded, itemsTotal ) {

	};

	loaderManager.onLoad = function ( ) {

	};


	loaderManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
		loadingBar.animate(Math.floor(itemsLoaded /itemsTotal));

	};

	loaderManager.onError = function ( url ) {

		console.log( 'There was an error loading ' + url );

	};
}

function Init()
{
	LoadingScreenInit();
	LoadingManagerLoader();

	ArrayUtilsInit();
	RenderersInit();

	CameraInit();
	SceneInit();
	StatsInit();
	ClockInit();
	ResizeWindowInit();

	LightsInit();

	CameraEffectsInit();

	FloorCeilInit();

	//VideoBackgroundInit();

	InitTitleText();
	InitTitleRoundButton();
	InitTitleRoundButtonFakie();
	InitHeaderstext();
	InitPostsList();
	InitBackgroundtext();

	SphereInit();
}