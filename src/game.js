import Jouster from './jouster';
import NPC from './npc';
import Ledge from './ledge';
import Lava from './lava';
import Egg from './egg';
import JoustAnimation from './animation_classes/joust_animation';

const MODES = {
    'easy': 6,
    'medium': 10,
    'hard': 15
}

class StarJouster {
    constructor(canvas, diff){
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.Jouster = new Jouster(this.dimensions);
        this.diff = diff;
        this.running = true;

        // NPCs
        this.NPCs = [];
        for(let i=0; i < MODES[this.diff]; i++){
            this.NPCs.push(new NPC(Math.floor(Math.random() * this.dimensions.width), Math.floor(Math.random() * this.dimensions.height)));
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

        //eggs
        this.eggs = [];

        //animations
        this.animations = [];

        //Score
        this.score = 0;

        //drawing stars
        this.stars = [];
        for (let i = 0; i < 125; i++) {
            this.stars.push([Math.floor(Math.random() * this.dimensions.width), Math.floor(Math.random() * this.dimensions.height)]);
        }

        //start game
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

        //eggs
        this.eggs.forEach(egg =>{
            egg.animate(this.ctx);
        });

        //animations
        this.animations.forEach(animation => {
            animation.animate(this.ctx);
        });

        this.collisionCheck();
        this.eggRespawn();
        this.joustAnimationDisplay();

        this.req = requestAnimationFrame(this.animate.bind(this));

        if(!this.running){
            cancelAnimationFrame(this.req);
        }
    }

    gameOver(){
        //score
        // this.score = 0;
        //music
        this.music.pause();
        let game_over_sound = document.getElementById('palpatine');
        game_over_sound.play();

        this.running = false;
        // debugger;
    }


    // methods that can be later moved to a class of its own.
    drawBackground(ctx){
        ctx.fillStyle= "#191919";
        ctx.fillRect(0,0, this.dimensions.width, this.dimensions.height);

        this.stars.forEach(star => {
            ctx.fillStyle = "white";
            ctx.fillRect(star[0],star[1],2,2);
        });
        

    }

    collisionCheck(){
        //NPCs
        let that = this;
        this.NPCs.forEach((npc,i) => {
            if(npc.collidedWith(that.Jouster)){
                if(!that.Jouster.ethereal){
                    if(npc.collide(that.Jouster)){

                        //sound
                        let sounds = ['collision1', 'collision2', 'collision3'];
                        let sampled_sound = sounds[Math.floor(Math.random() * sounds.length)];
                        let collision_sound = document.getElementById(sampled_sound);
                        collision_sound.play();

                        //delete npc
                        that.NPCs.splice(i,1);

                        //spawn egg
                    
                        that.eggs.push(new Egg(npc.x, npc.y));
                    }else{

                        if(that.Jouster.lives === 1){
                            that.gameOver();
                        }else{
                            that.Jouster.dead();
                        }
                    };
                }
            }
        });

        //ledges
        that.ledges.forEach((ledge) => {
            //with jouster
            ledge.collisionHandler(that.Jouster);
            //with eggs
            that.eggs.forEach(egg =>{
                ledge.collisionHandler(egg);
            });
            
        });

        //lava
        that.lavas.forEach((lava) => {
            //Jouster collision
            if(!that.Jouster.ethereal && lava.collisionHandler(that.Jouster)){
                if(that.Jouster.lives===1){
                    that.gameOver();
                }else{
                    that.Jouster.dead();
                }
            }

            //egg collision
            that.eggs.forEach(egg => {
                lava.eggCollision(egg);
            });
        });

        //eggs
        that.eggs.forEach((egg,i) => {
            if(egg.collisionHandler(that.Jouster)){

                //sound
                let sound = document.getElementById('pickup');
                sound.play();
  
                //increase score
                that.score += 150;
                that.animations.push(new JoustAnimation('score-tag', egg.x-10, egg.y-10, 1000));

                //delete egg
                that.eggs.splice(i, 1);
            }
        });
    }

    eggRespawn(){
        let that = this;
        this.eggs.forEach((egg,i) =>{
            if(egg.respawn){
                that.eggs.splice(i,1);
                that.animations.push(new JoustAnimation('lightning', egg.x - 5, egg.y - 5, 300));

                const newNPC = new NPC(egg.x, egg.y)
                that.NPCs.push(newNPC);
                if (newNPC.y !== egg.y) { that.animations.push(new JoustAnimation('lightning', newNPC.x - 5, newNPC.y - 5, 300));}
            }
        });
    }

    joustAnimationDisplay(){
        let that = this;
        this.animations.forEach((animation,i) => {
            if(animation.kill){
                that.animations.splice(i,1);
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