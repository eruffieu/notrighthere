function InitParticles(sizes) {

	var particles = new THREE.BufferGeometry();
	var particlePositions = new Float32Array( sizes.length * 3 );

	var particlesData = [];

	var pMaterial = new THREE.PointsMaterial( {
					color: 0x000000,
					size: 1,
					blending: THREE.AdditiveBlending,
					transparent: false,
					sizeAttenuation: false
				} );

	for (var y = 0; y < yLen; y++)
	{
		for (var x = 0; x < xLen; x++)
		{
			var size = sizes[y*x + x];
			if (size > 9)
			{
				var posy = (y-yLen/2)/10;
				var posx = ((x-xLen/2)/10) - 15;
				particlePositions[ (y*x + x) * 3     ] = posx;
				particlePositions[ (y*x + x) * 3 + 1 ] = posy;
				particlePositions[ (y*x + x) * 3 + 2 ] =  0;
			}
			else
			{
				particlePositions[ (y*x + x) * 3     ] = -1000;
				particlePositions[ (y*x + x) * 3 + 1 ] = -1000;
				particlePositions[ (y*x + x) * 3 + 2 ] =  0;
			}
		}
	}
	console.log(particlePositions);

	particles.setDrawRange( 0, 15000 );
	particles.addAttribute( 'position', new THREE.BufferAttribute( particlePositions, 3 ).setDynamic( false ) );
	pointCloud = new THREE.Points( particles, pMaterial );
	scene.add(pointCloud);
}