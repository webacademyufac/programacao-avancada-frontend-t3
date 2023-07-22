// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

htmlIdArray = ["circleA", "circleB", "circleC", "circleD"];
circleInternSizeNumber = [27, 66, 4, 22, 60];

createCirclesUsingArrays(htmlIdArray, circleInternSizeNumber);

function createCirclesUsingArrays(htmlIdArray, circleInternSizeNumber) {
    for (let i = 0; i < htmlIdArray.length; i++) {
      activeCircle(
        generateCircle(returnElementId(htmlIdArray[i]), circleInternSizeNumber[i])
      );
    }
}

function activeCircle(loader) {
    loader.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    loader.text.style.fontSize = "2rem";
    loader.animate(1.0); // Number from 0.0 to 1.0
  }
  
function generateCircle(circleName, internSize) {
  return new ProgressBar.Circle(circleName, returnCircleObj(internSize));
}

function returnCircleObj(internSize){
    return {
        color: "#aaa",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 1400,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#333", width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color);
            circle.path.setAttribute("stroke-width", state.width);
      
            let value = Math.round(circle.value() * internSize);
            if (value === 0) {
              circle.setText("");
            } else {
              circle.setText(value);
            }
          }}   
}    

function returnElementId(name) {
  return document.getElementById(name);
}

/*Paralax */

$("#apply-img").parallax({ Image: "images/paralax.png" });
$("#data-area").parallax({imageSrc: "images/background-paralax.png"});