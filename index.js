var l= document.querySelectorAll("button").length;

for(var i=0; i<l;i++)
{

  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}




function handleClick() {
  //alert("I got smadhed");
  var buttonInnerHtml=this.innerHTML;
 // this.style.color = "white";
 // var audio= new Audio('sounds/tom-1.mp3');
  //audio.play();

caseCheck(buttonInnerHtml);
addAnimation(buttonInnerHtml);

}


document.addEventListener("keydown",function(e) {
caseCheck(e.key);
addAnimation(e.key);
});

function caseCheck(pressKey)
{
  
  switch(pressKey)
  {
    case "w":
       var audio= new Audio('sounds/crash.mp3');
      audio.play();
    break;
    case "a":
      var audio= new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;
    case "s":
      var audio= new Audio('sounds/snare.mp3');
      audio.play();
    break;
    case "d":
      var audio= new Audio('sounds/tom-1.mp3');
      audio.play();
    break;
    case "j":
      var audio= new Audio('sounds/tom-2.mp3');
      audio.play();
    break;
    case "k":
      var audio= new Audio('sounds/tom-3.mp3');
      audio.play();
    break;
    case "l":
      var audio= new Audio('sounds/tom-4.mp3');
      audio.play();
    break;    
    
    default: 
    console.log(pressKey);

 }
}


function addAnimation(caseCheck)
{
 var button= document.querySelector("."+caseCheck);
 button.classList.add("pressed");

setTimeout(function(){
  button.classList.remove("pressed");
},100)

 //button.classList.remove("pressed");
}