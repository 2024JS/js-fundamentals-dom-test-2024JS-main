// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles

function applyStyles() {
    const bigHeader = document.getElementById('title');

    const parFirst = document.getElementById('myDiv').children[0];
    const parSecond = document.getElementById('myDiv').children[1];
    const parThird = document.getElementById('myDiv').children[2];
    const parFourth = document.getElementById('myDiv').children[3];

    const listHorizontal = document.getElementById('myList');
    const invisible = document.getElementsByTagName("span")[0];
    
    bigHeader.style.backgroundColor = "lightgreen";
    parFirst.style.fontWeight = "700";
    parSecond.style.color = "red";
    parThird.style.textDecoration = "underline";
    parFourth.style.fontStyle = "italic";
    listHorizontal.style.display = "flex";
    listHorizontal.style.listStyle = "none";
    invisible.style.display = ("none");
}

applyStyles();
module.exports = applyStyles;
