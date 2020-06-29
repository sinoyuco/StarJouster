import './styles/index.scss';
import './styles/menu.css';
import StarJouster from './game';

const canvas = document.getElementById('joust');

const easy_button = document.getElementById('easy-button');
const medium_button = document.getElementById('medium-button');
const hard_button = document.getElementById('hard-button');

let menu_music = document.getElementById('cantina');
menu_music.volume = 0.2;
menu_music.play();

easy_button.addEventListener('click', () => {
    menu_music.pause();
    canvas.style.zIndex = '4';

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

