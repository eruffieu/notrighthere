
function ExplodeAnimation() {

	// if sphere already at initial state, return
	if (explosionFrame <= 0 && explosionTimeSpeed <= 0)
	{
		explosionFrame = 0;
		return;
	}

	// compute new explosion frame with explosionTimeSpeed
	explosionFrame += explosionTimeSpeed;

	// compute new position/rotation of each mesh this frame
	for (var i = 0; i < sphereVertex.length; i++)
	{
		sphereVertex[i].position.x += meshRandomForceValues[i][0] * explosionTimeSpeed;
		sphereVertex[i].position.y += meshRandomForceValues[i][1] * explosionTimeSpeed;
		sphereVertex[i].position.z += meshRandomForceValues[i][2] * explosionTimeSpeed;

		sphereVertex[i].rotation.x += meshRandomRotationValues[i][0] * explosionTimeSpeed;
		sphereVertex[i].rotation.y += meshRandomRotationValues[i][1] * explosionTimeSpeed;
		sphereVertex[i].rotation.z += meshRandomRotationValues[i][2] * explosionTimeSpeed;
	}

	// reset positions to initial exact position
	if (explosionFrame <= 0)
	{
		explosionFrame = 0;
		for (var i = 0; i < sphereVertex.length; i++)
		{
			sphereVertex[i].position.z = sphereVertexZeroPosition[i][2];
			sphereVertex[i].position.x = sphereVertexZeroPosition[i][0];
			sphereVertex[i].position.y = sphereVertexZeroPosition[i][1];

			sphereVertex[i].rotation.x = 0;
			sphereVertex[i].rotation.y = 0;
			sphereVertex[i].rotation.z = 0;
		}
	}
}

function RemoveSphereMesh() 
{
	for (var i = 0; i < sphereVertex.length; i++)
	{
		scene.remove(sphereVertex[i]);
		sphereVertex[i].geometry.dispose();
		sphereVertex[i].material.dispose();
	}
	scene.remove(sphereCenter);
}

function FallingAnimation() {

	var onFloorCount = 0;
	for (var i = 0; i < sphereVertex.length; i++)
	{
		if (sphereVertex[i].position.y > -90)
		{
			sphereVertex[i].position.y -= fallingSpeeds[i];
			if (fallingSpeeds[i] > 0)
				fallingSpeeds[i] += 0.02;
		}
		else
		{
			onFloorCount++;
			sphereVertex[i].position.y;
		}
	}
	if (onFloorCount == sphereVertex.length)
	{
		ShouldFallDown = false;		
		ShowMenu();
	}
}

function SphereRotateAnimation() {

	sphereCenter.rotateY(RotateSphereSpeed);
}

function SlowlyStopSphereRotation(decreaseVal) {
	this.savedRotateSpeed = RotateSphereSpeed;
	var timer = setInterval(function () {

		RotateSphereSpeed -= decreaseVal;
		if (RotateSphereSpeed <= 0){
			RotateSphereSpeed = 0;
			ShouldRotateSphere = false;
			clearInterval(timer);
		}

	}, 100);
}

function DefaultAnimation() {

	return;
}

function Animate() {
	if (ShouldExplode)
		ExplodeAnimation();
	if (ShouldRotateSphere)
		SphereRotateAnimation();
	if (ShouldFallDown)
		FallingAnimation();
	if (ShouldAnimatePlaneVertex)
		PlaneAnimation();


}

function ExpandTitleSphere() {

	if (explosionFrame <= 100)
	{
		explosionTimeSpeed = 20;
	}
	else
	{
		explosionTimeSpeed = 0;
	}
}

function CollapseTitleSphere() {

	if (explosionFrame > 0)
	{
		explosionTimeSpeed = -20;
	}
	else
	{
		explosionTimeSpeed = 0;
	}
}

function ShowUITitle()
{
	explosionTimeSpeed = 0;
	ShowTitleText()
	setTimeout(
		function() {
		    HideTitleText();
	}, 1000);

	setTimeout(
		function() {
	    	var timer = setInterval(function () {
				explosionTimeSpeed -= 2;
				if (explosionTimeSpeed <= -100){
					explosionTimeSpeed = 0;
    				ShowTitleRoundButton();
					clearInterval(timer);
				}
			}, 40);
	}, 1500);
}

async function StartTitleAnimation() {
	
	setTimeout(
	    function() {
	    	explosionTimeSpeed = 100;
	    	var timer = setInterval(function () {
					explosionTimeSpeed -= 4;
					if (explosionTimeSpeed <= 0){
						explosionTimeSpeed = 0;
						ShowUITitle();
						clearInterval(timer);
					}
			    }, 40);
	    }, 2000);
}

function CameraTweenTitle() {

	this.cameraTweenPosition = new TWEEN.Tween(camera.position).to(this.cameraTargetPosition, 2000).easing(TWEEN.Easing.Sinusoidal.InOut).start();
	this.cameraTweenRotation = new TWEEN.Tween(camera.rotation).to(this.cameraTargetRotation, 2000).easing(TWEEN.Easing.Sinusoidal.InOut).start();
}

function Fall() {
	quarterMinusVertexLen = Math.floor((sphereVertex.length/4)*3);
	for (var i = 0; i < sphereVertex.length; i++)
	{
		THREE.SceneUtils.detach(sphereVertex[i], sphereCenter, scene);
	}
	ShouldExplode = false;
	ShouldFallDown = true;
	var timer = setInterval(function () {
		for (var x = 0; x < 4; x++)
		{
			if (this.fallingMesh < indexArray.length)
				fallingSpeeds[indexArray[this.fallingMesh][0]] = 0.02;
			this.fallingMesh += 1;
		}
		if (this.fallingMesh == quarterMinusVertexLen)
		{
			setupLightsPlane();
			CameraTweenTitle();
		}
		if (this.fallingMesh == sphereVertex.length-1) {
			clearInterval(timer);
		}
	}, 30);
}

async function FallDownAnimation() {

	//local vars
	var rad90 = Math.PI * .5;
	this.fallingMesh = 0;

	this.cameraTweenPosition = null;
	this.cameraTargetPosition = new THREE.Vector3(0, -50, 0);
	this.cameraTweenRotation = null;
	this.cameraTargetRotation = new THREE.Vector3(-rad90, 0, 0);

	//stop sphere rotation
	SlowlyStopSphereRotation(0.001);

	//explode
	explosionTimeSpeed = 200;
	var timer = setInterval(function () {
			explosionTimeSpeed -= 10;
			if (explosionTimeSpeed <= 0){
				explosionTimeSpeed = 0;

				// Explodes plane mesh
				ExplodePlane();

				Fall();
				clearInterval(timer);
			}
	    }, 40);

}

function setupLightsPlane()
{
	// Adds directional Light : not added in init so we save perfs. Also removes spotlight

	lights[2] = new THREE.DirectionalLight( 0xffffff, 0 );
	lights[2].target.position.set(-1, 3, 0);
	scene.add(lights[2]);

	var turn = 0;

	var timer = setInterval(function () {

			lights[2].intensity += 0.025;
			lights[0].intensity -= 0.05;
			if (turn == 9)
			{
				lights[0].intensity -= 0.05;
				lights[0].position.set( 1, 1, 0 );
				clearInterval(timer);
			}
			turn += 1;
	    }, 50);
}


function PlaneAnimation() {


	for (var i = 0; i < planeVertex.length; i++)
	{
		planeVertex[i].position.add(planeVertexDirections[i]);
		if (PlanevertexDirections == 1)
		{
			if (this.frameFromForming > 0)
			{
				planeVertex[i].rotation.x += meshRandomRotationValues[i][0] * 100;
				planeVertex[i].rotation.y += meshRandomRotationValues[i][1] * 100;
				planeVertex[i].rotation.z += meshRandomRotationValues[i][2] * 100;
			}
			else
			{
				ShowPosts();
				planeVertex[i].rotation.x = 0;
				planeVertex[i].rotation.y = 0;
				planeVertex[i].rotation.z = 0;
			}
		}
		else
		{
			planeVertex[i].rotation.x -= meshRandomRotationValues[i][0] * 100;
			planeVertex[i].rotation.y -= meshRandomRotationValues[i][1] * 100;
			planeVertex[i].rotation.z -= meshRandomRotationValues[i][2] * 100;
		}
	}
	SetPlaneVertexDirections();
	if (this.frameFromForming == -1)
	{
		this.frameFromForming = 0;
		ShouldAnimatePlaneVertex = false;
	}
}


// Called when need to form plane 
function SetPlaneVertexDirections() {

	var tempVector;

	if (PlanevertexDirections == 1)
	{
		for (var i = 0; i < planeVertex.length; i++)
		{
			tempVector = new THREE.Vector3().subVectors(planeVertexPositions[i], planeVertex[i].position);
			tempVector.x /= this.frameFromForming;
			tempVector.y /= this.frameFromForming;
			tempVector.z /= this.frameFromForming;
			planeVertexDirections[i] = tempVector;
		}

		this.frameFromForming -= 1;
	}
	else if (PlanevertexDirections == 2)
	{
		this.frameFromForming -= 1;
	}
	else if (PlanevertexDirections == 3)
	{
		for (var i = 0; i < planeVertex.length; i++)
		{
			tempVector = new THREE.Vector3().subVectors(planeVertexGroundPositions[i], planeVertex[i].position);
			tempVector.x /= this.frameFromForming;
			tempVector.y /= this.frameFromForming;
			tempVector.z /= this.frameFromForming;
			planeVertexDirections[i] = tempVector;
		}

		this.frameFromForming -= 1;
	}
}

// if only those tweens werent that eager to eat cpu power...
function FormPlane() {

	if (PlanevertexDirections == 1)
		return;

	// number of frames to accomplish the form
	if (this.frameFromForming > 0)
	{
		this.frameFromForming = FramestoFormPlane - this.frameFromForming - 1;
	}
	else
		this.frameFromForming = FramestoFormPlane;


	PlanevertexDirections = 1;

	SetPlaneVertexDirections();

	// Launch plane certex animation
	ShouldAnimatePlaneVertex = true;
}

function AbortFormPlane() {

	if (PlanevertexDirections == 2)
		return;

	// number of frames to go to the ground (same as already done to form the plane)
	if (this.frameFromForming > 0)
		this.frameFromForming = FramestoFormPlane - this.frameFromForming - 1;
	else
		this.frameFromForming = FramestoFormPlane;

	PlanevertexDirections = 2;

	// Abort don't need to be recalculated so we precalc directions and just decrease counter in SetPlaneVertexDirections
	SetPlaneAbortDirections();

	SetPlaneVertexDirections();

	// Launch plane vertex animation
	ShouldAnimatePlaneVertex = true;
}

function ExplodePlane() {
	HidePosts();
	if (PlanevertexDirections != 1)
		return;

	if (this.frameFromForming > 0)
	{
		AbortFormPlane();
		return;
	}

	// same number of frames that it took to form
	this.frameFromForming = FramestoFormPlane;

	PlanevertexDirections = 3;

	SetPlanevertexGroundPosition();

	SetPlaneVertexDirections();

	// Launch plane certex animation
	ShouldAnimatePlaneVertex = true;
}

function SetPlanevertexGroundPosition()
{
	for (var i = 0; i < planeVertex.length; i++)
	{
		planeVertexGroundPositions[i] = new THREE.Vector3(getRandomInt(-35, 35), -90, getRandomInt(-35, 35));
	}
}

function SetPlaneAbortDirections()
{
	for (var i = 0; i < planeVertex.length; i++)
	{
		planeVertexDirections[i].x = -planeVertexDirections[i].x;
		planeVertexDirections[i].y = -planeVertexDirections[i].y;
		planeVertexDirections[i].z = -planeVertexDirections[i].z;
	}
}