let mysong = document.getElementById('mysong'); 
let icon = document.getElementById('icon');

icon.onclick = function(){
if(mysong.paused){
   mysong.play();
   icon.src = "./images/pause-circle.png";
}else{
  mysong.pause();
  icon.src = "./images/play-circle.png";
}
}