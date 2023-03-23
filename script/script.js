 var video = document.getElementById("video");
 var count = 0;

function play() {
	if (count == 0) {
		count = 1;
		video.play();
 	} 
 }

 document.querySelector('.btn-video-play').addEventListener('click', function(e) {
 	e.target.closest('.btn-video-play').classList.toggle('btn-video-play--toggle');
  })
