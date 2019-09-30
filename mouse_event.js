
let imgObj= document.getElementById("Ball");
function init() {
    imgObj= document.getElementById("Ball");
    imgObj.style.position= 'relative';
    imgObj.style.left= '0px';
}
function moveRight() {
    imgObj.style.left= parseInt(imgObj.style.left) +10+'px';

}
window.onload=init;
