
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

            // char.x
            const top_right = (((char.x + char.width) >= this.x && (char.x + char.width) <= (this.x + this.width)) && (char.y >= this.y && char.y <= (this.y + this.height)));
            const bot_right = (((char.x + char.width) >= this.x && (char.x + char.width) <= (this.x + this.width)) && ((char.y+char.height) >= this.y && (char.y+char.height) <= (this.y + this.height)));
            const top_left = ((char.x < (this.x + this.width) && char.x > this.x) && (char.y >= this.y && char.y <= (this.y + this.height)));
            const bot_left = ((char.x < (this.x + this.width) && char.x > this.x) && ((char.y + char.height) >= this.y && (char.y + char.height) <= (this.y + this.height)));


                if(top_left && top_right){
                    char.y = this.y+this.height+0.1;
                    char.y_vel = -(char.y_vel * 0.25);
                    
                }else if(bot_left && bot_right){
                    char.y = this.y - char.height - 0.1;
                    char.y_vel = -(char.y_vel * 0.25);

                }else if (top_left && bot_left){
                    char.x = this.x + this.width +1;
                    char.x_vel = -(char.x_vel * 0.25);

                }else if (top_right && bot_right){
                    char.x = this.x - char.width - 1;
                    char.x_vel = -(char.x_vel * 0.25);
                }else if(bot_left){
                    debugger;
                    if(((this.x+this.width)-char.x) < (char.y+char.height)-this.y){
                        debugger;
                        char.x = this.x + this.width + 1;
                        char.x_vel = -(char.x_vel * 0.25);
                    }else{
                        debugger;
                        char.y = this.y - char.height - 0.1;
                        char.y_vel = -(char.y_vel * 0.25);
                    }

                }else if(bot_right){
                    debugger;
                    if((char.x+char.width)-this.x < (char.y+char.height) - this.y){
                        debugger;
                        char.x = this.x - char.width - 1;
                        char.x_vel = -(char.x_vel * 0.25);
                    }else{
                        debugger;
                        char.y = this.y - char.height - 0.1;
                        char.y_vel = -(char.y_vel * 0.25);
                    }
                }else if(top_left){
                    debugger;
                    if(((this.x+this.width)-char.x) < (this.y+this.height)-char.y){
                        debugger;
                        char.x = this.x + this.width + 1;
                        char.x_vel = -(char.x_vel * 0.25);
                    }else{
                        debugger;
                        char.y = this.y + this.height + 0.1;
                        char.y_vel = -(char.y_vel * 0.25);
                    }

                }else if(top_right){
                    debugger;
                    if(((char.x + char.width)-this.x) < ((this.y+this.height)-char.y)){
                        debugger;
                        char.x = this.x - char.width - 1;
                        char.x_vel = -(char.x_vel * 0.25);
                    }else{
                        debugger;
                        char.y = this.y + this.height + 0.1;
                        char.y_vel = -(char.y_vel * 0.25);
                    }
                }else{
                    if(char.x > this.x){
                        char.x = this.x + this.width + 1;
                    }else{
                        char.x = this.x - char.width - 1;
                    }
                    char.x_vel = -(char.x_vel * 0.25);
                }

                // if(((char.x+char.width) >= this.x) || char.x <= (this.x + this.width)){
                //     char.x_vel = -(char.x_vel*0.75);
                // }
    
                // if (((char.y + char.height) >= this.y) || char.y <= (this.y + this.height)){
                //     char.y_vel = -(char.y_vel*0.75);
                // }
        }

    }
    

    eggCollision(egg) {
        let condition1 = (this.x < (egg.x + egg.width));
        let condition2 = ((this.x + this.width) > egg.x);
        let condition3 = (this.y < (egg.y + egg.height));
        let condition4 = ((this.y + this.height) > egg.y);

        if (condition1 && condition2 && condition3 && condition4) {
                egg.y_vel = 0;
                egg.y = (this.y - egg.height - 1);
            
        }
    }

}


export default Ledge;