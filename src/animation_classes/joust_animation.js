const CONSTANTS = {
    SCORE_WIDTH: 30,
    SCORE_HEIGHT: 20,
    SMOKE_WIDTH: 30,
    SMOKE_HEIGHT: 50
}

class JoustAnimation {
    constructor(type,x,y,time){
        this.type = type;
        this.x = x;
        this.y = y;
        this.time = time;
        this.kill = false;


        //disable animation
        let that = this;
        setTimeout(() => {
            that.kill = true;
        }, that.time);
    }

    drawJoustAnimation(ctx){
        const ele = document.getElementById(this.type);
        ctx.drawImage(ele, this.x, this.y);
        
    }

    animate(ctx) {
        this.drawJoustAnimation(ctx);
    }

}

export default JoustAnimation;