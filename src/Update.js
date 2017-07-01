

function Update()
{
	var delta = clock.getDelta();

	requestAnimationFrame( Update );

	stats.update();

	composer.render(delta);

	if (loaded)
	{
		TWEEN.update();
		Animate();
	}
}
