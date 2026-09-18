function startgame(mode) {

    maintitle = document.querySelector(".main-title");
    maintitle.classList.remove("pageload");
    maintitle.classList.add("hidden");

    if (mode == 1){
        game = document.querySelector(".game-space.Casual.hidden");}
    else if (mode == 2){
        game = document.querySelector(".game-space.Faithful.hidden");}
    else if (mode == 3){
            game = document.querySelector(".game-space.Worshiper.hidden");}

    game.classList.remove("hidden");
    
    button = document.querySelector(".nav-button-base");
    button.textContent = "BACK";
    button.removeAttribute("href");
    button.setAttribute("onclick", "backbutton()");

};

function backbutton(){
    game.classList.add("hidden");
    document.querySelector(".main-title").classList.remove("hidden");

    button = document.querySelector(".nav-button-base");
    button.textContent = "PLAY";
    button.removeAttribute("onclick");
    button.setAttribute("href", "index.html");
    
};

document.querySelectorAll(".song-information ul li").forEach((item, index) => {
    item.style.animationDelay = `${Math.sin(45 * Math.PI / 180) * (index + 1) * 25}ms`;
});