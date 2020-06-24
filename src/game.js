import Jouster from './jouster';
import NPC from './npc';
import Ledge from './ledge';
import Lava from './lava';

const MODES = {
    'EASY': 3,
    'MEDIUM': 6,
    'HARD': 10
}

class StarJouster {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.Jouster = new Jouster(this.dimensions);

        // NPCs
        this.NPCs = [];
        for(let i=0; i < MODES['MEDIUM']; i++){
            this.NPCs.push(new NPC(this.dimensions));
        }

        //Ledges 
        let bottom_ledge = new Ledge({width: 500, height: 30, x: 250, y:(500-30)});
        let mid_one = new Ledge({ width: 150, height: 20, x: 50, y: 100 });
        let mid_two = new Ledge({ width: 150, height: 20, x: 400, y: 125 });
        let mid_three = new Ledge({ width: 150, height: 20, x: 800, y: 100 });
        let top_one = new Ledge({ width: 150, height: 20, x: 50, y: 300 });
        let top_two = new Ledge({ width: 150, height: 20, x: 400, y: 325 });
        let top_three = new Ledge({ width: 150, height: 20, x: 800, y: 300 });
        this.ledges = [bottom_ledge, mid_one, mid_two, mid_three, top_one, top_two, top_three];

        //Lava
        let left_lava = new Lava({ width: 250, height: 20, x: 0, y: (500 - 20) });
        let right_lava = new Lava({ width: 250, height: 20, x: 750, y: (500 - 20) });
        this.lavas = [left_lava, right_lava];    

        //Score
        this.score = 0;

        this.registerGameControls();
        this.restart();

        //music
        this.music = document.getElementById('background-music');
        this.music.play();
    }

    restart(){
        // this.Jouster = new Jouster(this.dimensions);
        this.animate();
        
    }

    registerGameControls(){
        // this.spaceBinder = this.space.bind(this);
        // this.leftBinder = this.moveLeft.bind(this);
        // this.rightBinder = this.moveRight.bind(this);
        let that = this;

        document.addEventListener("keydown", event => {

            if(event.isComposing || event.keyCode===32){
                // Space - fly
               return that.space();
            } else if (event.isComposing || event.keyCode===37){
                //arrow left
                return that.moveLeft();
            } else if (event.isComposing || event.keyCode===39){
                //arrow right
                return that.moveRight();
            }

        });
    }

    space(e){
        this.Jouster.fly();
    }

    moveLeft(e){
        this.Jouster.moveLeft();
    }

    moveRight(e){
        this.Jouster.moveRight();
    }

    animate(){
        //background
        this.drawBackground(this.ctx);

        //Ledges
        this.ledges.forEach(ledge => {
            ledge.animate(this.ctx);
        });

        //lava
        this.lavas.forEach(lava => {
            lava.animate(this.ctx);
        });

        // Jouster and NPCs
        this.Jouster.animate(this.ctx);
        this.NPCs.forEach(npc => {
            npc.animate(this.ctx);
        });
        this.collisionCheck();

        requestAnimationFrame(this.animate.bind(this));
    }

    gameOver(){
        this.music.pause();
        let game_over_sound = document.getElementById('palpatine');
        game_over_sound.play();
    }


    // methods that can be later moved to a class of its own.
    drawBackground(ctx){
        ctx.fillStyle= "#191919";
        ctx.fillRect(0,0, this.dimensions.width, this.dimensions.height);
    }

    collisionCheck(){
        //NPCs
        this.NPCs.forEach((npc,i) => {
            if(npc.collidedWith(this.Jouster)){
                if(npc.collide(this.Jouster)){

                    //sound
                    let sounds = ['collision1', 'collision2', 'collision3'];
                    let sampled_sound = sounds[Math.floor(Math.random() * sounds.length)];
                    let collision_sound = document.getElementById(sampled_sound);
                    collision_sound.play();

                    //delete npc
                    this.NPCs.splice(i,1);
                }else{

                    if(this.Jouster.lives === 1){
                        this.gameOver();
                    }else{
                        this.Jouster.dead();
                    }
                };
            }
        });

        //ledges
        this.ledges.forEach((ledge) => {
            ledge.collisionHandler(this.Jouster);
        });

        //lava
        this.lavas.forEach((lava) => {
            if(lava.collisionHandler(this.Jouster)){
                if(this.Jouster.lives===1){
                    this.gameOver();
                }else{
                    this.Jouster.dead();
                }

            }
        });
    }

}

// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function () {
//         this.sound.play();
//     }
//     this.stop = function () {
//         this.sound.pause();
//     }
// }

export default StarJouster;