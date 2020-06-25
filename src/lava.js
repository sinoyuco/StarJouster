class Lava {
    constructor(dimensions) {
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.x = dimensions.x;
        this.y = dimensions.y;
    }

    drawLava(ctx) {
        ctx.fillStyle = "#E24C00";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    animate(ctx) {
        this.drawLava(ctx);
    }

    collisionHandler(char) {
        let condition1 = (this.x < (char.x + char.width));
        let condition2 = ((this.x + this.width) > char.x);
        let condition3 = (this.y < (char.y + char.height));
        let condition4 = ((this.y + this.height) > char.y);

        if (condition1 && condition2 && condition3 && condition4) {
            return true;
        }else{
            return false;
        }
    }

    eggCollision(egg){
        let condition1 = (this.x < (egg.x + egg.width));
        let condition2 = ((this.x + this.width) > egg.x);
        let condition3 = (this.y < (egg.y + egg.height));
        let condition4 = ((this.y + this.height) > egg.y);

        if (condition1 && condition2 && condition3 && condition4) {
            if (egg.y <= (this.y + this.height)) {
                egg.y_vel = 0;
                egg.y = (this.y - egg.height - 1);
            }
        }
    }

}


export default Lava;