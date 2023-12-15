$(document).ready(function() {
    $("#but1").on("click", function(){
        window.open('https://www.youtube.com', '_blank');
    })
})
$(".img-fluid").on("mouseover", function(){
    var audio=document.getElementById("meow");
    audio.play();
})
