### StarJouster
StarJouster is a 2D arcade clone of the popular arcade platform game 'Joust' with a Star Wars Theme. 
The main purpose of the game is to score as many points as possible, by defeating sith lords in joust battles and looting their lightsabers.
The player can control their character using the arrow keys to give direction, and by hitting the space key to fly.
If lightsabers are not looted, sith lords will respawn and soon the player will be overwhelmed.

[Live](https://sinoyuco.github.io/StarJouster/)

## Technologies Used
The game functionality was primarily built on a canvas element, using plain old JavaScript. Using a multitude of classes that represent different elements in the game like the Jouster, sith lords, ledges, lightsabers and lava, the game was bundled together using webpack.


## Technical Challenges
The main technical challenge within this game was correctly constructing the interactions between the different classes within the game outlined above. The Jouster will collide with sith lords and a winner will emerge based on the directions the characters are facing and their relative vertical positions. Jousters need to bounce of off ledges, while lightsabers need to stay on the ledge (or lava) they fall on. 

```
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
```

The above code snippet depicts the interactions between ledges (this) and lightsabers (dubbed eggs as per the original game).
Essentially, all objects are rectangles on the canvas, periodically rendered every utilizing `<Window.requestAnimationFrame>` on the animation method that moves objects and checks for collisions. For them to collide, all of the 4 conditions depicted above must be met. Since lightsabers only have a y-velocity produced by gravity, we expect all collisions to be on the ledges' upper side.

When a lightsaber collides with a ledge, the y-velocity of the lightsaber is resetted to 0, and the y-position is resetted to the ledges y-position subtracted by the egg's height + 1, essentially so that in the re-render, there will be only 1 pixel seperating the two rectangles. Upon re-render, gravity will reapply to the lightsaber, and the repeating collisions will transfer the lightsaber back to the position stated above, in the most visually pleasing way possible.

To briefly touch on the animation methods, almost all classes (aside from the immovable ones) have the move, draw and animate methods, which are responsible for moving the position of the objects and redrawing them. The game's animate method than calls on the collision check methods and animate methods of the various classes, passing in the context.

```
 moveEgg() {
        this.y += this.y_vel;
        this.y_vel += CONSTANTS.GRAVITY;


        if (Math.abs(this.y_vel) > CONSTANTS.TERMINAL_Y_VELOCITY) {
            if (this.y_vel > 0) {
                this.y_vel = CONSTANTS.TERMINAL_Y_VELOCITY;
            } else {
                this.y_vel = CONSTANTS.TERMINAL_Y_VELOCITY * -1;
            }
        }
    }

    drawEgg(ctx) {
        
        let lightsaber;
        if(this.status === 'unattainable'){
            lightsaber = 'lightsaber';
        }else{
            lightsaber = (this.picture ? 'lightsaber' : 'lightsaber-flashing');
        }
        let image = document.getElementById(lightsaber);
        ctx.drawImage(image, this.x-5, this.y-5, this.width+10, this.height+10);
    }

    animate(ctx) {
        this.moveEgg();
        this.drawEgg(ctx);
    }
```