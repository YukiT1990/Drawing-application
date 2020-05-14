function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                // Loads the pixels data for this image into the [pixels] attribute.
                // Without this function, the previous line you drew will vanish whenever drawing the next line.
				loadPixels();
			}

			else{
                // Updates the backing canvas for this image with the contents of the [pixels] array.
                // Without this function, so many lines appear between the start position and the current mouse position during pressing mouse.
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
