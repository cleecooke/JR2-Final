document.onclick = function(event) {  //listening for a click on anywhere on page

    const target = event.target;  // whatever is clicked is now known as the "target"
    console.log("Yep", event);

   
//************  1ST TRY *************
//************  Not Working *************/
//     if (target.className === "cat__buttons") {  //if the target is one of the category images/text
//         content.classList.add("green-border");   //...add class of "greed-border" (which will toggle class name)
//     }

//     if (target.className === "green-border") {
//         content.classList.remove("green-border");
//     }
// }

 // well crap... not working...
 // not targeting the div, so maybe target img and p tag, and get parent div elemtn somehow?

//************  2ND TRY *************/
//************  change images green too? Added 3 new img assets *************/

    if (target.tagName.toLowerCase() === "img" || "p") {  //if the target is a image
        // const section = event.target.parentElement;  //Should targets the section clicked
        // console.log("parentElement", parentElement)  // hmmm ReferenceError: parentElement is not defined ??????
        // const content = section.nextElementSibling;  //Should targets the content
        let currentElement = target;
        let target = target.parentElement;
        const targetCatBtnElement = document.getElementsByClassName("")
        parentElement.classList.add("greenify");   //...add class of "greed-border" (which will toggle class name)
    }

// change img scr to same but add "_Green" to img selected to use alternate image
    // CHANGE BACK?
    if (target.class === "greenify") {
        const content = target.parentElement;
        content.classList.remove("greenify");

    }
}
}

// let catImgType = "purple";
//     let image = document.getElementById("image");
//     console.log("img", image)
//     if (image === "study") {
//         image.getChildElemnt.scr = "assets/Study_Green.svg";
//         // catImgType = "green";
//     } else if (image === "meditate__img") {
//         image.scr = "assets/Meditate_Green.svg";
//         // catImgType = "green";
//     } else if (image === "excercise__img") {
//         image.scr = "assets/Excersice_Green.svg";
//         // catImgType = "green";
//     }
// }



// create error message if form not filled
 function displayError(incomplete){


 }
