const CONSTANTS = {
    GRAVITY: 0.05,
    TERMINAL_Y_VELOCITY: 5,
    EGG_WIDTH: 30,
    EGG_HEIGHT: 30
};

class Egg{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = CONSTANTS.EGG_WIDTH;
        this.height = CONSTANTS.EGG_HEIGHT;
        this.y_vel = 0;
        this.status = 'unattainable';
        this.picture = false;
        let that = this;
        setInterval(() => {
            that.picture = !that.picture;
        }, 500);

        //egg switch
        setTimeout(() => {
            that.status = 'attainable';
        },2000);
    }

    moveEgg() {
        this.y += this.y_vel;
        this.y_vel += CONSTANTS.GRAVITY;

        // if (this.x > CONSTANTS.EGG_WIDTH) {
        //     this.x = 0;
        // } else if (this.x < 0) {
        //     this.x = CONSTANTS.EGG_WIDTH;
        // }

        if (Math.abs(this.y_vel) > CONSTANTS.TERMINAL_Y_VELOCITY) {
            if (this.y_vel > 0) {
                this.y_vel = CONSTANTS.TERMINAL_Y_VELOCITY;
            } else {
                this.y_vel = CONSTANTS.TERMINAL_Y_VELOCITY * -1;
            }
        }
    }

    drawEgg(ctx) {
        // let clr = (this.status === 'unattainable' ? 'orange' : 'black');
        // ctx.fillStyle = clr;
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        
        let lightsaber;
        if(this.status === 'unattainable'){
            lightsaber = 'lightsaber';
        }else{
            lightsaber = (this.picture ? 'lightsaber' : 'lightsaber-flashing');
        }
        console.log(this.picture);
        let image = document.getElementById(lightsaber);
        ctx.drawImage(image, this.x-5, this.y-5, this.width+10, this.height+10);
    }

    animate(ctx) {
        this.moveEgg();
        this.drawEgg(ctx);
        
    }

    // hatch(){
    //     
    // }

    collisionHandler(jouster){
        let condition1 = (this.x < (jouster.x + jouster.width));
        let condition2 = ((this.x + this.width) > jouster.x);
        let condition3 = (this.y < (jouster.y + jouster.height));
        let condition4 = ((this.y + this.height) > jouster.y);

        if (condition1 && condition2 && condition3 && condition4) {
            if(this.status === 'attainable'){
                return true;
            }
        }else{
            return false;
        }
    }


    
}

export default Egg;