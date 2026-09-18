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
    
    oldbutton = document.querySelector(".nav-button-base")
    newbutton = document.createElement("button");
    
    newbutton.className = oldbutton.className
    newbutton.textContent ="BACK";
    newbutton.type = "button";
    newbutton.setAttribute("onclick", "backbutton()");

    oldbutton.replaceWith(newbutton);

};

function backbutton(){
    game.classList.add("hidden");
    maintitle.classList.remove("hidden");
    document.querySelector(".main-title").classList.remove("hidden");

    newbutton.replaceWith(oldbutton);
    
};

function gamerun(){
    game.classList.add("hidden");
}

document.querySelectorAll(".song-information ul li").forEach((item, index) => {
    item.style.animationDelay = `${Math.sin(45 * Math.PI / 180) * (index + 1) * 25}ms`;
});