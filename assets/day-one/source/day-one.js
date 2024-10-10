// AIGLE
//classes to use : key, audio-files
function addAudioWhenKeyDown(e)
{
    let audio = document.querySelector(`audio[data-key=${e.code}]`);
    let key = document.querySelector(`.key[data-key="${e.code}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    
    console.log(key);
    key.classList.add('trans');
}

function removeTransitionEffect(e)
{
    let keyDone = document.querySelector(`.key[data-key="${e.code}"]`);
    keyDone.classList.remove('trans'); 
}

window.addEventListener('keydown', addAudioWhenKeyDown);
window.addEventListener('keyup', removeTransitionEffect);