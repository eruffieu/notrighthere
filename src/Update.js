

function Update()
{
	var delta = clock.getDelta();

	requestAnimationFrame( Update );

	stats.update();

	composer.render(delta);

	TWEEN.update();
	Animate();
}
