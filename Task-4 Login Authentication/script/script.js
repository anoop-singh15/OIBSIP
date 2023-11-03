
let front = document.getElementById('front-card');
let back = document.getElementById('back-card');
front.addEventListener('click', (e) => {
    if (e.target.tagName == "A") {

        console.log(e.target);
        front.style = "display:none;";
        back.style = "display:block;";
    }
});
back.addEventListener('click', (e) => {
    if (e.target.tagName == "A") {

        console.log(e.target);
        back.style = "display:none;";
        front.style = "display:block;";
    }

});



