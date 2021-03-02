/* Problem description: we need to create a page that contains 5 sections , when we  click over any section it get wider and we can see the full background image.

user input : clicking
desired output : background image git wider and full title of section appear.
How to get the desired output : we probably need to adjust width of each section when hovering using js.

Pseudo-code : 
WHEN USER HOVER OVER SECTION
    BACKGROUND IMAGE GET WIDER 
    REST OF THE SECTION TITLE APPEAR IN TOP AND BOTTOM {
        UP TITLE appear from the top side
        CENTER TITLE GET bigger 
        DOWN TitLE from down to up
        }
        


*/
// let panels = document.getElementsByClassName('panel');
// panels = Array.from(panels);

// for (let i = 1; i < 6; i++) {
//     panels.forEach((panel) => {
//         panel.style.backgroundImage = `url(./images/${i}.jpg)`;
//         console.log(panel);

//     })
// };

// let panels = document.getElementsByClassName('panel');
// panels = Array.from(panel);

// select all panels as HTML COLLECTION
const panels = document.querySelectorAll('.panel');
/* .f=>upText .l=>downText .open=>makeWider 
 */
//console.log(panels);

// trigger class .open
function makeWider() {
    this.classList.toggle('open');
}

//trigger class .f
function upText() {
    this.classList.toggle('f');
}

//trigger class .l
function downText() {
    this.classList.toggle('l');
}

// remove all triggered classes 
function backNormal() {
    this.classList.remove('open');
    this.classList.remove('l');
    this.classList.remove('f');
}
// add specified classes for each panel
panels.forEach(
    function(panel) {
        panel.addEventListener('click', makeWider);
        panel.addEventListener('click', upText);
        panel.addEventListener('click', downText);
    }
)
panels.forEach(
    function(panel) {
        panel.addEventListener('mouseout', backNormal);
    }
)