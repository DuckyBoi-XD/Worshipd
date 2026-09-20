const songlist = ["A Thousand Hallelujahs", "AMAZING!", "All Hail King Jesus", "All In", "All To You", "Alleluia", "Amazing Grace", "At The Altar", "At The Foot Of The Cross", "Awesome God", "Bless God", "Break Every Chain", "Build My Life", "Center", "Demons", "Drenched in Love", "FATHER'S HOUSE", "FREE!", "Fire In My Bones", "Firm Foundation", "For Good", "Freedom", "Fresh Wind", "GOOD DAY", "GOODBYE YESTERDAY", "Give Me Jesus", "Glorious Day", "God I'm Just Grateful", "God Of Revival", "God Rest Ye Merry Gentlemen", "God So Loved", "Good Good Father", "Goodness of God", "Gratitude", "Great Are You Lord", "Great Is", "Hands High", "Hard Fought Hallelujah", "He Tapu Te Ariki", "Heart Of Worship", "Here & Now", "Here I Am To Worship", "Holy Forever", "Holy Place", "Holy Spirit", "Hosanna", "House Of Miracles", "How Great Is Our God", "I Give You My Heart", "I Love You Lord", "I Speak Jesus", "I Surrender", "I Thank God", "I Will Exalt You", "In Christ Alone", "Is He Worthy", "Jesus At The Center", "Jesus Be The Name", "Jesus We Love You", "King Of Kings", "King of Glory", "LEMONADE", "Make Me New", "Make Me New 2", "Make Room", "Mighty Name Of Jesus", "My Redeemer Lives", "NEVER GET USED TO THIS", "Never Let You Go", "New Wine", "No Longer Slaves", "Nothing But The Blood", "Nothing Else", "O Come To The Altar", "On & On", "One Way", "Only In Jesus", "Open", "Over & Over", "Praise", "Prodigals", "Raise A Hallelujah", "Reckless Love", "Rest On Us", "Set A Fire", "Shout To The Lord", "State Of Mind", "Surrounded", "THANK GOD I'M FREE", "TRUTH", "Take You At Your Word", "Thank You Jesus For The Blood", "That's Who I Praise", "The Blood", "The Joy", "This Is Amazing Grace", "This Is Our God", "Trust In God", "Trust Song", "Tuhia", "Washed", "Waves", "Way Maker", "What A Beautiful Name", "What A God", "What An Awesome God", "Who Else", "Worthy", "Worthy Of It All", "You Are Good BM", "You Are Good IH", "Your Way", "Your Way's Better"];

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
    document.querySelector(".running-game.hidden").classList.remove("hidden");

    songTemplList = [...songlist];
    songGameList = []

    for (i = 0; i < 3; i++){
        songGrab = songTemplList[Math.floor(Math.random() * songTemplList.length)];

        index = songTemplList.indexOf(songGrab);
        songTemplList.splice(index, 1);

        songGameList.push(songGrab)
    };
    console.log(songGameList)
}

function filterFunction(){
    var input, filter, ul, li, button, i;
    input = document.querySelector(".search-bar");
    filter = input.value.toUpperCase();
    div = document.querySelector(".dropdownmenu")
    button = div.getElementsByTagName("button")

    for (i = 0; i < button.length; i++) {
    txtValue = button[i].textContent || button[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      button[i].style.display = "";} 
    else {
      button[i].style.display = "none";}
    }
}

function soundplay(){

}

document.querySelectorAll(".song-information ul li").forEach((item, index) => {
    item.style.animationDelay = `${Math.sin(45 * Math.PI / 180) * (index + 1) * 25}ms`;
});