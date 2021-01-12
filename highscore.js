// HighScores javascript created to help with separation of the reload functions
var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var clearHighScore = document.querySelector("#clearHighScore");

// Event listener to clear scores 
clearHighScore.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retreives localStorage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.setAttribute("id", "createLi");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Reference: https://www.w3schools.com/howto/howto_js_sort_list.asp
function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("createLi");
    switching = true;
