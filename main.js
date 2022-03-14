var a=[1,3,3,"salom", "dunyo", null, false,];

var elContainer=document.querySelector(".container")

function myFunction(){
    var newHeading= document.createElement("h1");
    if(Array.isArray(a)===true){
        newHeading.textContent="ha"
    }

    else{
        newHeading.textContent="yoq";
    }

    elContainer.appendChild(newHeading);
}

console.log(myFunction());