function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

    // Initialise the variables.
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		if(mouseIsPressed){
            // -1 means not starting drawing yet.
			if(startMouseX == -1){
                // Set them to the current mouse position.
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                // Loads the pixels data for this image into the [pixels] attribute.
                // Without this function, the previous line the user drew will vanish whenever drawing the next line.
				loadPixels();
			}

            // Already drawing.
			else{
                // Updates the backing canvas for this image with the contents of the [pixels] array.
                // Without this function, so many lines appear between the start position and the current mouse position during pressing mouse.
				updatePixels();
                // Draw a line from the position when mouse is pressed to the position when mouse is unpressed.
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
            // Once a line has been drawn, resets those variables to the initial state.
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
