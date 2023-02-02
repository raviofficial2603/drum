for(i=0;i<document.querySelectorAll(".drum").length;i++){
    

    document.querySelectorAll(".drum")[i].addEventListener("mousedown",function(e){
    // console.log("clicked ",e)
    ap(this.innerHTML)
    ab(this.innerHTML)
})

}
for(i=0;i<document.querySelectorAll(".drum").length;i++){
    

    document.querySelectorAll(".drum")[i].addEventListener("mouseup",function(e){
    // console.log("clicked ",e)
    
    ab(this.innerHTML)
})

}
document.addEventListener("keypress",function(e){
    ab(e.key)
    ap(e.key);
})
document.addEventListener("keyup",function(e){
    ab(e.key)
    
})
function ap(letter){
    switch (letter) {
        case 'w':
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
            break; 
        case 'd':
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;

        default:
            break;
    }
}
function ab(letter) {
    document.querySelector('.'+letter).classList.toggle('pressed')
    
}