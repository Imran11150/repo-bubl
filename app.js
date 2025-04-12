let img = document.getElementById("image");



function turn_on() {
    img.src = './image/pic_bulbon.gif';
    document.body.style.backgroundColor = "white"
}


function turn_off() {
    img.src = "./image/pic_bulboff_off.gif"
    document.body.style.backgroundColor = "black";
}
function turn_on_off() {


}
function turn_on_off() {
    if (document.getElementById("image")) {
        turn_off(); 
    } else {
        turn_on(); 
    }
}











