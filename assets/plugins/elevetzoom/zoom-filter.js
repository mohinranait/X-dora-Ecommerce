
// product image gallery 
let bigImg  = document.getElementById('bigImg');
let smallImg  = document.querySelectorAll('.smallImg');
for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onmouseover = function(){
        bigImg.src = smallImg[i].src;
        var urls = smallImg[i].src;
        let zoomWindow = document.querySelector('.zoomWindow');
        zoomWindow.style.backgroundImage  = 'url('+urls+')';
    } 
}


// eleveteZoom JS
$('#bigImg').elevateZoom({
    zoomType: "inner",
    cursor: "crosshair",
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 750
});  