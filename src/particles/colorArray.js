

function GetColorArray(imagePath)
{
	var nuances = 10;
	var returnArray = [];
	var c = document.getElementById("imageCanvas");
	var ctx = c.getContext("2d");
	var img = new Image();
	img.onload = function () {

		ctx.drawImage(img,0,0);

		var imgData = ctx.getImageData(0,0,c.width,c.height);
		console.log(c.width + " " + c.height)

		xLen = c.width;
		yLen = c.height;



		for (var y = 0; y < c.height; y++)
		{
			for (var x = 0; x < c.width * 4; x += 4)
			{
				var r = imgData.data[(y*c.width*4) + x];
				var g = imgData.data[(y*c.width*4) + x+1];
				var b = imgData.data[(y*c.width*4) + x+2];
				var a = imgData.data[(y*c.width*4) + x+3];
				returnArray[y*c.width + x/4] = nuances - parseInt( ((r + g + b) / 3) * nuances / 255 );
			}
		}
		console.log(returnArray);
		
		InitParticles(returnArray);
	}
	img.src = imagePath;
}