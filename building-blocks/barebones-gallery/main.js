const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <=5; i++) {
    const newImage = document.createElement('img');
    newImage.addEventListener('click', displayImg);
    imgSrc = `images/pic${i}.jpg`;
    newImage.setAttribute('src', imgSrc);
    thumbBar.appendChild(newImage);
} 

function displayImg() {
    clickedImg = this.getAttribute("src");
    displayedImage.setAttribute('src', clickedImg);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', darkenLighten);

function darkenLighten() {
    if (btn.getAttribute("class") === "dark") {
        console.log("MAKE IT DARK!");
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        btn.setAttribute('class', 'light');
        btn.innerHTML = 'Lighten';
    }
    else {
        console.log("LET THERE BE LIGHT!");
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        btn.setAttribute('class', 'dark');
        btn.innerHTML = 'Darken';
    }
}