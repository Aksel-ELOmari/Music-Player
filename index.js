let Song = document.getElementById('main-Song');
let Progress = document.querySelector('input');
let ControlBtn = document.querySelector('.cont-2');
let songTitle = document.querySelector('Details h1');
let songDetails = document.querySelector('Details span');

let routh = document.querySelector('source').src;

// ControlBtn.onclick  = () =>{if(Song.pause()){Song.play();console.log('playing')}else{Song.pause();}}
Song.onloadedmetadata = function(){
	Progress.max = Song.ondurationchange;
	Progress.value = Song.currentTime;
	songTitle.innerHTML = routh.slice(74,-4).split('%20').join(' ');
	songDetails.nnerText = document.querySelector('source').src;
	songDetails.nnerinnerHTML = document.querySelector('source').src;
}
function playPause(){
    if(ControlBtn.classList.contains('fa-pause')){
		Song.puase();
		ControlBtn.classList.remove('fa-pause');
		ControlBtn.classList.add('fa-play');
	}else{
		Song.play();
		ControlBtn.classList.add('fa-pause');
		ControlBtn.classList.remove('fa-play');
	}
}
if(Song.play()){
	setInterval(() => {
		Progress.value = Song.currentTime;
	}, 500);
}
Progress.onchange = function(){
	Song.play();
	Song.currentTime = Progress.value;
	ControlBtn.classList.add('fa-pause');
	ControlBtn.classList.remove('fa-play');
}

