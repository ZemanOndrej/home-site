require('../css/index.styl');
import jump from 'jump.js';

// const sections = document.querySelectorAll('.navbtn');
// var activeSection = window.location.href;

function changeMenuFocus(e) {
  e.preventDefault();
  let lastbtn = document.querySelector('.active');
  if (lastbtn) {
    lastbtn.classList.remove('active');
  }
  e.target.className += 'active';
  jump(e.target.hash, {
    duration: 250,
    offset: -50
  });
  window.location.href = e.target.hash;
}

function changeActiveSection(section) {
  let lastbtn = document.querySelector('.active');
  if (lastbtn && `#${lastbtn.id}` === section) return;
  if (lastbtn) {
    lastbtn.classList.remove('active');
  }

  let btn = document.querySelector(section);
  console.log(btn, section);
  if (btn === null) {
    history.pushState(null, null, `#Home`);
    document.querySelector('#btn-home').className += 'active';
    return;
  }
  btn.className += 'active';
  history.pushState(null, null, `#${btn.href.split('#')[1]}`);
}
function getIdFromHref() {
  let tmp = window.location.href.split('#');
  if (tmp.length === 1) {
    return '#btn-home';
  }
  return `#btn-${tmp[1].toLowerCase()}`;
}

(() => {
  changeActiveSection(getIdFromHref());

  document
    .querySelectorAll('.navbtn')
    .forEach(b => b.addEventListener('click', changeMenuFocus));

  window.onload = () => {
    setTimeout(() => {
      document.body.style.opacity = '100';
    }, 1);
  };
  window.onscroll = () => {
    if (checkFullyVisible('#About')) {
      changeActiveSection('#btn-about');
    } else if (checkFullyVisible('#Contact')) {
      changeActiveSection('#btn-contact');
    } else if (checkFullyVisible('#Home')) {
      changeActiveSection('#btn-home');
    } else if (checkFullyVisible('#MyStuff')) {
      changeActiveSection('#btn-mystuff');
    }
    //doesnt work mystuff
  };
})();
function checkFullyVisible(elm) {
  var rect = document.querySelector(elm).getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );

  // if(elm.id==="Home")console.log(rect, elm,viewHeight)
  return (
    (rect.top >= 50 && rect.top <= viewHeight - rect.height) ||
    (rect.height >= viewHeight &&
      (rect.top <= 50 && rect.top >= viewHeight - rect.height))
  ); //this is bad

  // return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
