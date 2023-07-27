// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

htmlIdArray = ["circleA", "circleB", "circleC", "circleD"];
circleInternSizeNumber = [4449, 46665, 44, 22, 60,434];

//if(returnHtmlElementId("card-five").offsetWidth > 50){

  createCirclesUsingArrays(htmlIdArray, circleInternSizeNumber);
//}



function createCirclesUsingArrays(htmlIdArray, circleInternSizeNumber) {
    for (let i = 0; i < htmlIdArray.length; i++) {
      activeCircle(
        returnNewProgressBarObj(returnHtmlElementId(htmlIdArray[i]), circleInternSizeNumber[i])
      );
    }
}

function activeCircle(progressBar) {
    progressBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    progressBar.text.style.fontSize = "2rem";
    progressBar.animate(1.0); // Number from 0.0 to 1.0
  }
  
function returnNewProgressBarObj(circleName, internSize) {
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

function returnHtmlElementId(name) {
  return document.getElementById(name);
}

/*Paralax */

let arrayIdForUseParallax = ["data-area", "apply-content"];
let arrayImagesForParalax =["images/cidadeparallax.png","images/cidadeparallax"];


function generateParalax(){
  for (let i = 0; i < arrayIdForUseParallax.length; i++) {
    paralaxActive(returnHtmlElementId(arrayIdForUseParallax[i]),arrayImagesForParalax[i]);
  }
}

generateParalax();

function paralaxActive(documentId,image){
  $(documentId).parallax({imageSrc: image});
}


/*Get buttons and images for filter in nossos projetos area */

let buttonsForFilter = document.querySelectorAll(".project-buttons button");
let projectImages = document.querySelectorAll(".project-image");

/*Create events do filter */
buttonsForFilter[0].addEventListener("click", () =>{
  
  setForBlackColor(buttonsForFilter[0]);
  showElementsAfterHidden(projectImages);
  
})

buttonsForFilter[1].addEventListener("click", ()=>{
      hiddenProjectImageElements(projectImages);
      showElementsAfterHidden([projectImages[0],projectImages[4]]);
     
      
})

buttonsForFilter[2].addEventListener("click", ()=>{
  hiddenProjectImageElements(projectImages);
  showElementsAfterHidden([projectImages[1],projectImages[5]]);
 
  
})

buttonsForFilter[3].addEventListener("click", ()=>{
  hiddenProjectImageElements(projectImages);
  showElementsAfterHidden([projectImages[2],projectImages[3]]);
 
  
})
/* functions for hiddin or visibite iamges */


function hiddenProjectImageElements(elements){
  
  for(let i = 0; i < elements.length; i++){
    elements[i].style.visibility = "hidden"
  }
}

function showElementsAfterHidden(elements){
  for(let i = 0; i < elements.length; i++){
    elements[i].style.visibility = "visible";
  }
}

