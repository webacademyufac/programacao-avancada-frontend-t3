// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

function generateCircle(circleName, circleCount) {
  return new ProgressBar.Circle(circleName, {
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

      var value = Math.round(circle.value() * circleCount);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });
}

function activeCircle(loader) {
  loader.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  loader.text.style.fontSize = "2rem";
  loader.animate(1.0); // Number from 0.0 to 1.0
}

function returnElementId(name) {
  return document.getElementById(name);
}

htmlIdArray = ["circleA", "circleB", "circleC", "circleD"];
circleInternSizeNumber = [400, 2121, 211, 22, 60];

for (let i = 0; i < htmlIdArray.length; i++) {
  activeCircle(
    generateCircle(returnElementId(htmlIdArray[i]), circleInternSizeNumber[i])
  );
}
