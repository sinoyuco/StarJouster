
class Ledge {
    constructor(dimensions){
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.x = dimensions.x;
        this.y = dimensions.y;
    }

    drawLedge(ctx) {
        ctx.fillStyle = "#783200";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    animate(ctx) {
        this.drawLedge(ctx);
    }

    collisionHandler(char){
        let condition1 = (this.x < (char.x + char.width));
        let condition2 = ((this.x + this.width) > char.x);
        let condition3 = (this.y < (char.y + char.height));
        let condition4 = ((this.y + this.height) > char.y);

        if(condition1 && condition2 && condition3 && condition4){
            if(((char.x+char.width) >= this.x) || char.x <= (this.x + this.width)){
                // debugger;
                char.x_vel = -(char.x_vel*0.75);
            }
            if (((char.y + char.height) >= this.y) || char.y <= (this.y + this.height)) {
                // debugger;
                char.y_vel = -(char.y_vel*0.75);
            }
        }
    }

}


export default Ledge;