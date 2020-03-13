window.addEventListener("keydown", playDrum);
function playDrum (e){
    let keys = document.querySelectorAll(".keys__key");
    let aud = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    let key = document.querySelector(`.keys__key[data-key = "${e.keyCode}"]`);
    if(!aud) return;
    aud.currentTime = 0;
    aud.play();
    key.classList.add("playing");

    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
    function removeTransition(e){
        if(e.propertyName !== "transform") return ;
        this.classList.remove("playing");
    }
}

