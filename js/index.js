require('../css/index.styl')

function changeMenuFocus(e) {

    let lastbtn = document.querySelector('.active')
    if (lastbtn) {
        lastbtn.classList.remove('active');
    }
    e.target.className += "active"

}
(() => {
    document.querySelectorAll(".navbtn")
        .forEach(b => b.addEventListener("click", changeMenuFocus));
})()