import './styles/index.scss';
import './styles/menu.css';
import StarJouster from './game';

const canvas = document.getElementById('joust');

const easy_button = document.getElementById('easy-button');
const medium_button = document.getElementById('medium-button');
const hard_button = document.getElementById('hard-button');
const music_button = document.getElementById('music-button');

let background_music = document.getElementById('background-music');
let collision1 = document.getElementById('collision1');
let collision2 = document.getElementById('collision2');
let collision3 = document.getElementById('collision3');
let palpatine = document.getElementById('palpatine');
let death = document.getElementById('death-sound');
let pickup = document.getElementById('pickup');

let menu_music = document.getElementById('cantina');
menu_music.volume = 0.2;
menu_music.play();

music_button.addEventListener('click', () => {

    const sounds = [background_music, menu_music, collision1, collision2, collision3, palpatine, death, pickup];

    if(menu_music.volume > 0){
        sounds.forEach(sound => sound.volume = 0);
        document.getElementById('music-button-image').src = "./src/images/muted.png"
    }else{
        sounds.forEach(sound => sound.volume = 0.3);
        document.getElementById('music-button-image').src = "./src/images/unmuted.png"
    }
});

easy_button.addEventListener('click', () => {
    menu_music.pause();
    canvas.style.zIndex = '4';
    music_button.style.zIndex = '50';
    easy_button.blur();
    canvas.focus();

    new StarJouster(canvas, 'easy');
});

medium_button.addEventListener('click', () => {
    menu_music.pause();
    canvas.style.zIndex = '4';

    medium_button.blur();
    canvas.focus();

    new StarJouster(canvas, 'medium')
});

hard_button.addEventListener('click', () => {
    menu_music.pause();
    canvas.style.zIndex = '4';

    hard_button.blur();
    canvas.focus();

    new StarJouster(canvas, 'hard')
});


// new StarJouster(canvas,'easy');

