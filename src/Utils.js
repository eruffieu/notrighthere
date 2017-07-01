
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function GetVertexCenter(vertices) {
	var x, y, z;

	x = (vertices[0].x + vertices[1].x + vertices[2].x) / 3;
	y = (vertices[0].y + vertices[1].y + vertices[2].y) / 3;
	z = (vertices[0].z + vertices[1].z + vertices[2].z) / 3;

	return new THREE.Vector3( x, y, z );
}

function SphereSplit(sphere) {

	var geometry;
	var mesh;
	var face;

	var sphereGeometry = new THREE.Geometry().fromBufferGeometry( sphere.geometry );
	var sphereVertices = sphereGeometry.vertices;

	// Create material for every vertex of the sphere
	var material = new THREE.MeshStandardMaterial({color : 0xffffff, side: THREE.DoubleSide});

	// Init sphere center, parent of all vertexes
	sphereCenter = new THREE.Object3D();
	sphereCenter.position = new THREE.Vector3( 0, 0, 0 );
	scene.add(sphereCenter);

	for (var i = 0; i < sphereVertices.length; i+=3)
	{
		// Creates the new mesh geometry
		geometry = new THREE.Geometry();

		// add vertices to the geometry
		geometry.vertices.push(sphereVertices[i]);
		geometry.vertices.push(sphereVertices[i + 1]);
		geometry.vertices.push(sphereVertices[i + 2]);

		// add the face to the geometry
		face = new THREE.Face3(0, 1, 2);
		geometry.faces.push(face);

		// computes the center of the new mesh
		var centerPosition = GetVertexCenter([sphereVertices[i], sphereVertices[i+1], sphereVertices[i+2]]);

		// set the center of the new mesh
		geometry.translate(-centerPosition.x, -centerPosition.y, -centerPosition.z);

		// dunno lol
		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		// creates the new mesh
		mesh = new THREE.Mesh(geometry, material);

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		// sets the position of the new mesh
		var modifier = 2.5;
		mesh.position.x = centerPosition.x * modifier;
		mesh.position.y = centerPosition.y * modifier;
		mesh.position.z = centerPosition.z * modifier;

		// scaling the sphere
		mesh.scale.set(2.5,2.5,2.5);

		// add the mesh reference to the array(s)
		sphereVertex.push(mesh);
		fillOrderFallingArray(sphereVertex.length-1, mesh.position.y);
		sphereVertexZeroPosition.push([mesh.position.x, mesh.position.y, mesh.position.z]);

		// add the sphere to the scene via parent
		sphereCenter.add(mesh);
	}
	ExplosionRandomsInit();
}

function PlaneInit(objl) {

	var geometry;
	var mesh;
	var face;
	var centerPosition;

	var planeGeometry = new THREE.Geometry().fromBufferGeometry( objl.geometry );
	var planeVertices = planeGeometry.vertices;
	var material = new THREE.MeshStandardMaterial({color : 0xffffff, side: THREE.DoubleSide});

	for (var i = 0; i < planeVertices.length; i+=3)
	{
		// Creates the new mesh geometry
		geometry = new THREE.Geometry();

		// add vertices to the geometry
		geometry.vertices.push(planeVertices[i]);
		geometry.vertices.push(planeVertices[i + 1]);
		geometry.vertices.push(planeVertices[i + 2]);

		// add the face to the geometry
		face = new THREE.Face3(0, 1, 2);
		geometry.faces.push(face);

		// computes the center of the new mesh
		centerPosition = GetVertexCenter([planeVertices[i], planeVertices[i+1], planeVertices[i+2]]);

		// set the center of the new mesh
		geometry.translate(-centerPosition.x, -centerPosition.y, -centerPosition.z);

		// sets normals
		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		// creates the new mesh
		mesh = new THREE.Mesh(geometry, material);

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		// sets the position of the new mesh
		var modifier = 4;
		mesh.position.x = (centerPosition.x * modifier);
		mesh.position.y = (centerPosition.y * modifier) - 57;
		mesh.position.z = (centerPosition.z * modifier);

		// scaling the sphere
		mesh.scale.set(4,4,4);

		// add the mesh reference to the array(s)
		planeVertex.push(mesh);

		planeVertexPositions.push(mesh.position.clone());

		// add the sphere to the scene via parent
		scene.add(mesh);
	}
}


function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onDocumentMouseWheel(event) {

	UIPosts.scrollTop += event.deltaY * 8;

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function fillOrderFallingArray(index, posY)
{
	var added = false;
	if (indexArray.length == 0)
	{
		indexArray.push([index, posY]);
		return;
	}
	for (var i = 0; i < indexArray.length; i++)
	{
		if (posY < indexArray[i][1])
		{
			added = true;
			indexArray.splice(i, 0, [index, posY]);
			break;
		}
	}
	if (added == false)
		indexArray.push([index, posY]);

}