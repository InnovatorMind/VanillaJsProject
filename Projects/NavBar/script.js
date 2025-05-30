const hamburger = document.querySelector('#hamburger');
// console.log(hamburger)
const sideDiv = document.querySelector('#sideDiv');


hamburger.addEventListener('click', ()=> {
    // console.log("Clicked");
    if(sideDiv.style.display == 'block') {
        sideDiv.style.display = 'none'
    } else {
        sideDiv.style.display = 'block'
    }
    
});

