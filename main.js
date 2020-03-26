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

let keys = document.querySelectorAll(".keys__key");
for(key of keys){
    key.addEventListener("click", function(e){
        let charcode = e.target.innerHTML.charCodeAt(0);
        let aud = document.querySelector(`audio[data-key = "${charcode}"]`);
        aud.currentTime = 0;
        aud.play();
        this.classList.add("playing");
        
        keys.forEach(key => {
            key.addEventListener("transitionend", function(e){
                if(e.propertyName !== "transform") return ;
                this.classList.remove("playing")
                
            })
        })
        
    })
}