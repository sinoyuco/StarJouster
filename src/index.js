import './styles/index.scss';
import './styles/menu.css';
import StarJouster from './game';

const canvas = document.getElementById('joust');

const easy_button = document.getElementById('easy-button');
const medium_button = document.getElementById('medium-button');
const hard_button = document.getElementById('hard-button');

easy_button.addEventListener('click', () => {
    new StarJouster(canvas, 'easy')
});

medium_button.addEventListener('click', () => {
    new StarJouster(canvas, 'medium')
});

hard_button.addEventListener('click', () => {
    new StarJouster(canvas, 'hard')
});


// new StarJouster(canvas,'easy');

