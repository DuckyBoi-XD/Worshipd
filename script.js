function startgame(mode) {
    document.querySelector(".main-title").classList.add("hidden")
    const game = document.querySelector(".game-space.hidden")

    game.classList.remove("hidden")
}

document.querySelectorAll(".song-information ul li").forEach((item, index) => {
    item.style.animationDelay = `${Math.sin(45 * Math.PI / 180) * (index + 1) * 50}ms`;
});