require('../css/index.styl')
import jump from 'jump.js'

function changeMenuFocus(e) {

    e.preventDefault()
    let lastbtn = document.querySelector('.active')
    if (lastbtn) {
        lastbtn.classList.remove('active');
    }
    e.target.className += "active";
    jump(e.target.hash,{duration: 250})
    window.location.href = e.target.hash;
}



(() => {
    document.querySelectorAll(".navbtn")
        .forEach(b => b.addEventListener("click", changeMenuFocus));

    window.onload = () => {
        setTimeout(() => {
            document.body.style.opacity = "100";
        }, 1);
    };

})()

