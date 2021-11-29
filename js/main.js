// NAVIGATION MENU

let menu = document.querySelector('.header__menu-btn');

menu.addEventListener('click', showMenu);

function showMenu(e) {
   let nav = document.querySelector('.nav');
   let navSc = document.querySelector('.nav-sc');

   nav.style.display = 'none';
   navSc.style.display = 'block';

   menu.style.display = 'none';
   menu2.style.display = 'block';
}

let menu2 = document.querySelector('.menu');
menu2.style.display = 'none';

menu2.addEventListener('click', breakMenu);

function breakMenu(e) {
   let nav = document.querySelector('.nav');
   let navSc = document.querySelector('.nav-sc');

   if (nav.style.display = 'none') {
      nav.style.display = 'block';
      navSc.style.display = 'none';  
   }
    
   menu.style.display = 'block';
   menu2.style.display = 'none';
}

// NAVIGATION MENU ----------------------------------------- //

// VOICE BTN

let voiceBtn = document.querySelector('.form__voice-btn');
let breakVoiceBtn = document.querySelector('.voice__inner-btn');

voiceBtn.addEventListener('click', showVoice);
breakVoiceBtn.addEventListener('click', breakVoice);

function showVoice(e) {
   let voiceInner = document.querySelector('.voice__inner');

   voiceInner.style.display = 'block';
}

function breakVoice(e) {
   let voiceInner = document.querySelector('.voice__inner');

   voiceInner.style.display = 'none';
}

// VOICE BTN ----------------------------------------- //

// VIDEO BTN

let videoBtn = document.querySelector('.account__video-btn');
let videoAdd = document.querySelector(".video");

videoBtn.addEventListener('click', showVideo);

function showVideo(e) {
   videoAdd.classList.toggle('open');
}

// VIDEO BTN ----------------------------------------- //

// TUBE BTN

let tubeBtn = document.querySelector('.account__tube-btn');
let tubeAdd = document.querySelector(".tube");

tubeBtn.addEventListener('click', showTube);

function showTube(e) {
   tubeAdd.classList.toggle('open');
}

// TUBE BTN ----------------------------------------- //

// NOTFILICATION BTN

let notflBtn = document.querySelector('.account__notfl-btn');
let notflAdd = document.querySelector(".notfl");

notflBtn.addEventListener('click', showNotfl);

function showNotfl(e) {
   notflAdd.classList.toggle('open');
}

// NOTFILICATION BTN ----------------------------------------- //