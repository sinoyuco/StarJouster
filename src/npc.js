const CONSTANTS = {
    TERMINAL_Y_VELOCITY: 5,
    TERMINAL_X_VELOCITY: 2,
    NPC_WIDTH: 30,
    NPC_HEIGHT: 50
};


class NPC {
    constructor(x,y) {
        // this.dimensions = dimensions;
        this.x = x;
        this.y = y;
        this.x_vel = (Math.random() < 0.5 ? -3 : 3);
        this.y_vel = 0;
        this.width = CONSTANTS.NPC_WIDTH;
        this.height = CONSTANTS.NPC_HEIGHT;
        this.facing = (this.x_vel >= 0) ? 'right' : 'left';
        // debugger;
    }

    moveNPC() {
        this.y += this.y_vel;
        // this.y_vel += CONSTANTS.GRAVITY;

        this.x += this.x_vel;
        // if (this.x_vel > 0) {
        //     this.x_vel -= CONSTANTS.DRAG;
        // } else if (this.x_vel < 0) {
        //     this.x_vel += CONSTANTS.DRAG;
        // }


        // if (Math.abs(this.y_vel) > CONSTANTS.TERMINAL_Y_VELOCITY) {
        //     if (this.y_vel > 0) {
        //         this.y_vel = CONSTANTS.TERMINAL_Y_VELOCITY;
        //     } else {
        //         this.y_vel = CONSTANTS.TERMINAL_Y_VELOCITY * -1;
        //     }
        // }

        if (this.y > 400) {
            this.y = Math.floor(Math.random()*400);
        }

        if (this.x > 1000) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = 1000;
        }
    }

    drawNPC(ctx) {
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, CONSTANTS.NPC_WIDTH, CONSTANTS.NPC_HEIGHT);

        let image;
        if(this.facing==='left'){
            image = document.getElementById('sith-left');
            ctx.drawImage(image, this.x-5, this.y-10, CONSTANTS.NPC_WIDTH+10, CONSTANTS.NPC_HEIGHT+15);
        }else{
            image = document.getElementById('sith-right');
            ctx.drawImage(image, this.x-5, this.y-10, CONSTANTS.NPC_WIDTH+10, CONSTANTS.NPC_HEIGHT+15);
        }
    }

    animate(ctx) {
        this.moveNPC();
        this.drawNPC(ctx);
    }

    //collision methods

    collidedWith(jouster){
        let condition1 = (this.x < (jouster.x + jouster.width));
        let condition2 = ((this.x + this.width) > jouster.x);
        let condition3 = (this.y < (jouster.y + jouster.height));
        let condition4 = ((this.y + this.height) > jouster.y);

        if(condition1 && condition2 && condition3 && condition4){
            return true;
        }else{
            return false;
        }
    }

    collide(jouster){
        if(this.facing === 'left' && jouster.facing === 'left'){
            if(jouster.x > this.x){
                return true;
            }else{
                return false;
            }
        } else if (this.facing === 'right' && jouster.facing === 'right'){
            if (jouster.x < this.x) {
                return true;
            } else {
                return false;
            }
        } else{
            if (jouster.y < this.y) {
                return true;
            } else {
                return false;
            }
        }
    }

}

export default NPC;