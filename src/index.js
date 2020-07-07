import './styles/index.scss';
import './styles/menu.css';
import StarJouster from './game';

const canvas = document.getElementById('joust');

const easy_button = document.getElementById('easy-button');
const medium_button = document.getElementById('medium-button');
const hard_button = document.getElementById('hard-button');
const music_button = document.getElementById('music-button');

const leaderboard_play_again = document.getElementById('leaderboard-play-again');
const leaderboard_back_to_menu = document.getElementById('leaderboard-back-to-menu');
const score_submit_button = document.getElementById('score-submit-button');

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
    canvas.style.zIndex = '5';
    easy_button.blur();
    canvas.focus();

    localStorage.setItem('game', 'easy');

    new StarJouster(canvas, 'easy');
    
});

medium_button.addEventListener('click', () => {
    menu_music.pause();
    canvas.style.zIndex = '5';

    medium_button.blur();
    canvas.focus();

    localStorage.setItem('game', 'medium');

    new StarJouster(canvas, 'medium');
    
});

hard_button.addEventListener('click', () => {
    menu_music.pause();
    canvas.style.zIndex = '5';

    hard_button.blur();
    canvas.focus();

    localStorage.setItem('game', 'hard');

    new StarJouster(canvas, 'hard')

});


leaderboard_play_again.addEventListener('click', () => {
    const leaderboard_pane = document.getElementById('leaderboard');
    leaderboard_pane.style.zIndex = '1';

    canvas.style.zIndex = '5';
    leaderboard_play_again.blur();
    canvas.focus();

    new StarJouster(canvas, localStorage.getItem('game'));
});

leaderboard_back_to_menu.addEventListener('click', () => {
    const leaderboard_pane = document.getElementById('leaderboard');
    leaderboard_pane.style.zIndex = '1';

    //blur
    leaderboard_back_to_menu.blur();

    //menu music
    let menu_music = document.getElementById('cantina');
    menu_music.play();
});

// new StarJouster(canvas,'easy');
// const score_submit_menu = document.getElementById('score-submit');

// score_submit_button.addEventListener('click', () => {

//     //save score to localStorage
//     localStorage.setItem(document.getElementById('score-submit-username').value, 500);

//     //populate scoreboard
//     const scoreboard_names = document.getElementById('leaderboard-names');
//     const scoreboard_scores = document.getElementById('leaderboard-scores');
//     let scores = { 'Sinan': 1500, 'Al': 1250 };
//     for (let i = 0; i < localStorage.length; i++) {
//         if (!['game', 'loglevel:webpack-dev-server'].includes(localStorage.key(i))) {
//             scores[localStorage.key(i)] = parseInt(localStorage.getItem(localStorage.key(i)));
//         }
//     }
//     let sorted_names = Object.keys(scores).sort(function (x, y) { return scores[x] - scores[y] });

//     debugger;

//     sorted_names.reverse().forEach(name => {
//         let liname = document.createElement('li');
//         liname.innerHTML = `${name}`;
//         scoreboard_names.append(liname);

//         let liscore = document.createElement('li');
//         liscore.innerHTML = `${scores[name]}`;
//         scoreboard_scores.append(liscore);
//     });
//     // console.log('what about this?')
//     //hide score submit menu
//     debugger;
//     score_submit_menu.style.zIndex = '2';
//     canvas.style.zIndex = '3';


//     debugger;
//     const leaderboard_pane = document.getElementById('leaderboard');
//     leaderboard_pane.style.zIndex = '7';
//     console.log('a');

//     //blur
//     score_submit_button.blur();
// });