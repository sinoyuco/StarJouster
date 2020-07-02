# STAR JOUSTER

## Background:
Star Jouster is a recreation of the popular arcade game Joust set in a more technologically advanced setting. This is a platform game in which a player controls a character with a spear(lightsaber) and aims to score points by defeating other npc characters in joust battles and looting the eggs that they leave after they are defeated, similar to the original Joust game. If eggs are not picked up in a limited given time, NPCs will respawn and hence the game will get more difficult.

Joust collision outcomes are based on the direction they are facing when they collide, and their vertical positions if both are facing each other.

The character is both able to move horizontally and vertically. 


## Functionality and MVPs
* Start a new game, or pause / exit the current game.
* Choose a level of difficulty from the three available: Easy, Regular or Hard.
* Move around the game grid to defeat enemies and earn points.
* The game is not beatable, and will go on forever until the player dies.

* A greeting modal to the game that provides information about the game, provides customizable game settings (difficulty, sound, etc...) and a leaderboard.
* A production READ.ME

## Wireframe	

The game will consist of a static 2D grid with platforms in the center. Above the game grid is a pane where there are controls to pause or exit a game, and a setting button to manipulate sound/music preferences. Character controls will be using keystrokes, and therefore are not included in the below diagram.

## Architecture and Technologies
* Javascript for the game logic.
* Foo.js for effects

`<game.js>`: this script will handle the logic for creating and updating the necessary Foo.js elements and rendering them to the DOM.

`<jouster.js>`: this script will handle the logic behind the game character (or NPCs) in creating a velocity and acceleration values and 

## Implementation Road Map - Day by Day

### Day 1:

Setup all necessary Node modules, including getting webpack up and running and Foo.js installed. Write a basic entry file. Learn the basics of Foo.js. Goals for the day:
* Get a green bundle with Browserify
* Learn enough Foo.js to render an object to the HTML5 Baz element
* Build out the game grid.

### Day 2:

* Start working on the JS game logic. Figure out how to add velocity and accelerations to characters, figure out how to create NPC characters.
* Work on creating the pre-game modal with the leaderboard, settings and help panes.

### Day 3:

* Create extra game functionality for the ‘Hard’ difficulty mode (This can consist of new and more powerful jouster NPCs, as well as a different game grid that is more difficult than before).

### Day 4:

* Style the front end of the game further to make it look presentable.
* Build out the control pane above the game grid to pause or exit game, or to change certain settings.

### Bonus Feature:
* Create a mode for a 2-player game, where there will be 2 players playing on the same laptop with/without NPCs on the screen.
