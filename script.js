function startgame(mode) {
    document.querySelector(".main-title").classList.add("hidden")

    if (mode == 1){
        game = document.querySelector(".game-space.Casual.hidden")}
    else if (mode == 2){
        game = document.querySelector(".game-space.Faithful.hidden")}
    else if (mode == 3){
            game = document.querySelector(".game-space.Worshiper.hidden")}

    game.classList.remove("hidden")
}

document.querySelectorAll(".song-information ul li").forEach((item, index) => {
    item.style.animationDelay = `${Math.sin(45 * Math.PI / 180) * (index + 1) * 50}ms`;
});