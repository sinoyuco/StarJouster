const CONSTANTS={
    GRAVITY: 0.05,
    DRAG: 0.02,
    FLAP_SPEED: 1.5,
    MOVE_SPEED: 1.5,
    TERMINAL_Y_VELOCITY: 5,
    TERMINAL_X_VELOCITY: 5,
    JOUSTER_WIDTH: 30,
    JOUSTER_HEIGHT: 50
};


class Jouster{
    constructor(dimensions){
        this.dimensions = dimensions;
        this.x = 450;
        this.y = 160;
        this.x_vel = 0;
        this.y_vel = 0;
        // debugger;
        this.width = CONSTANTS.JOUSTER_WIDTH;
        this.height = CONSTANTS.JOUSTER_HEIGHT;
        this.lives = 3;
        this.facing = (this.x_vel >= 0 ? 'right' : 'left');

        //spawn
        this.ethereal = true;
        let that = this;
        setTimeout(() => {
            that.ethereal = false;
        }, 3000);
    }

    fly(){
        this.y_vel -= CONSTANTS.FLAP_SPEED;
    }

    moveLeft(){
        this.x_vel -= CONSTANTS.MOVE_SPEED;
    }

    moveRight() {
        this.x_vel += CONSTANTS.MOVE_SPEED;
    }

    moveJouster(){
        this.y += this.y_vel;
        this.y_vel += CONSTANTS.GRAVITY;

        this.x += this.x_vel;
        if(this.x_vel > 0){
            if(this.x_vel < CONSTANTS.DRAG){
                this.x_vel=0;
            }else{
            this.x_vel -= CONSTANTS.DRAG;
            }
        }else if(this.x_vel < 0){
            if (-this.x_vel < CONSTANTS.DRAG) {
                this.x_vel = 0;
            } else {
                this.x_vel += CONSTANTS.DRAG;
            }
        }

        if (Math.abs(this.x_vel) > CONSTANTS.TERMINAL_X_VELOCITY){
            if(this.x_vel > 0){
                this.x_vel = CONSTANTS.TERMINAL_X_VELOCITY;
            }else{
                this.x_vel = CONSTANTS.TERMINAL_X_VELOCITY * -1;
            }
        }


        if (Math.abs(this.y_vel) > CONSTANTS.TERMINAL_Y_VELOCITY) {
            if (this.y_vel > 0) {
                this.y_vel = CONSTANTS.TERMINAL_Y_VELOCITY;
            } else {
                this.y_vel = CONSTANTS.TERMINAL_Y_VELOCITY * -1;
            }
        }

        if(this.x > this.dimensions.width){
            this.x = 0;
        }else if(this.x < 0){
            this.x = this.dimensions.width;
        }

        if (this.y <= 0){
            this.y = 1;
            this.y_vel = -(this.y_vel/4);
        }
    }

    drawJouster(ctx){
        // ctx.fillStyle = "green";
        // ctx.fillRect(this.x, this.y, CONSTANTS.JOUSTER_WIDTH, CONSTANTS.JOUSTER_HEIGHT);
        this.facing = (this.x_vel > 0 ? 'right' : 'left');
    
        let image;
        if(this.facing==='left'){
            if (this.ethereal) {
                image = document.getElementById('luke-left-frozen');
            }else{
                image = document.getElementById('luke-left');
            }
            ctx.drawImage(image, this.x - 5, this.y - 10, CONSTANTS.JOUSTER_WIDTH + 10, CONSTANTS.JOUSTER_HEIGHT + 15);
        }else{

            if(this.ethereal){
                image = document.getElementById('luke-right-frozen');
            }else{
                image = document.getElementById('luke-right');
            }
        ctx.drawImage(image, this.x-5, this.y-10, CONSTANTS.JOUSTER_WIDTH+10, CONSTANTS.JOUSTER_HEIGHT+15);
        }
    }

    animate(ctx){
        this.moveJouster();
        this.drawJouster(ctx);
    }

    dead(){

        let death_sound = document.getElementById('death-sound');
        death_sound.play();

        this.lives -= 1;
        this.x = 1500;
        this.y = 1500;

        let that = this;
        setTimeout(() => {
        that.x = 450;
        that.y = 160;
        that.x_vel = 0;
        that.y_vel = 0;
        that.ethereal = true;
        setTimeout(() => {
            that.ethereal = false;
        },3000);
        }, 2000);


    }
    

}

export default Jouster;