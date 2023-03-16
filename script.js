let mysong = document.getElementById('mysong'); 
let icon = document.getElementById('icon');

icon.onclick = function(){
if(mysong.paused){
   mysong.play();
   icon.scr = "./images/pause-circle.png";
}else{
  mysong.pause();
  icon.scr = "./images/play-circle.png";
}
}