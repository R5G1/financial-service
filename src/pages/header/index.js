/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

let defaultOpen = document.getElementById('defaultOpen').click();

function openBtn(evt, btnName) {
  let i; let tabcontent; let tablinks;
  console.log(document.getElementsByClassName('tabcontent'));
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(btnName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
