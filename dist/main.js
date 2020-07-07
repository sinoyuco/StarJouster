/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation_classes/joust_animation.js":
/*!**************************************************!*\
  !*** ./src/animation_classes/joust_animation.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  SCORE_WIDTH: 30,
  SCORE_HEIGHT: 20,
  SMOKE_WIDTH: 30,
  SMOKE_HEIGHT: 50
};

var JoustAnimation = /*#__PURE__*/function () {
  function JoustAnimation(type, x, y, time) {
    _classCallCheck(this, JoustAnimation);

    this.type = type;
    this.x = x;
    this.y = y;
    this.time = time;
    this.kill = false; //disable animation

    var that = this;
    setTimeout(function () {
      that.kill = true;
    }, that.time);
  }

  _createClass(JoustAnimation, [{
    key: "drawJoustAnimation",
    value: function drawJoustAnimation(ctx) {
      var ele = document.getElementById(this.type);
      ctx.drawImage(ele, this.x, this.y);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawJoustAnimation(ctx);
    }
  }]);

  return JoustAnimation;
}();

/* harmony default export */ __webpack_exports__["default"] = (JoustAnimation);

/***/ }),

/***/ "./src/egg.js":
/*!********************!*\
  !*** ./src/egg.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  GRAVITY: 0.05,
  TERMINAL_Y_VELOCITY: 5,
  EGG_WIDTH: 30,
  EGG_HEIGHT: 30
};

var Egg = /*#__PURE__*/function () {
  function Egg(x, y) {
    _classCallCheck(this, Egg);

    this.x = x;
    this.y = y;
    this.width = CONSTANTS.EGG_WIDTH;
    this.height = CONSTANTS.EGG_HEIGHT;
    this.y_vel = 0;
    this.status = 'unattainable';
    this.picture = false;
    this.respawn = false;
    var that = this;
    setInterval(function () {
      that.picture = !that.picture;
    }, 500); //egg switch

    setTimeout(function () {
      that.status = 'attainable';
    }, 2000);
    setTimeout(function () {
      that.respawn = true;
    }, 10000);
  }

  _createClass(Egg, [{
    key: "moveEgg",
    value: function moveEgg() {
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
  }, {
    key: "drawEgg",
    value: function drawEgg(ctx) {
      var lightsaber;

      if (this.status === 'unattainable') {
        lightsaber = 'lightsaber';
      } else {
        lightsaber = this.picture ? 'lightsaber' : 'lightsaber-flashing';
      }

      var image = document.getElementById(lightsaber);
      ctx.drawImage(image, this.x - 5, this.y - 5, this.width + 10, this.height + 10);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.moveEgg();
      this.drawEgg(ctx);
    } // hatch(){
    //     
    // }

  }, {
    key: "collisionHandler",
    value: function collisionHandler(jouster) {
      var condition1 = this.x < jouster.x + jouster.width;
      var condition2 = this.x + this.width > jouster.x;
      var condition3 = this.y < jouster.y + jouster.height;
      var condition4 = this.y + this.height > jouster.y;

      if (condition1 && condition2 && condition3 && condition4) {
        if (this.status === 'attainable') {
          return true;
        }
      } else {
        return false;
      }
    }
  }]);

  return Egg;
}();

/* harmony default export */ __webpack_exports__["default"] = (Egg);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jouster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jouster */ "./src/jouster.js");
/* harmony import */ var _npc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./npc */ "./src/npc.js");
/* harmony import */ var _ledge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ledge */ "./src/ledge.js");
/* harmony import */ var _lava__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lava */ "./src/lava.js");
/* harmony import */ var _egg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./egg */ "./src/egg.js");
/* harmony import */ var _animation_classes_joust_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation_classes/joust_animation */ "./src/animation_classes/joust_animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var MODES = {
  'easy': 6,
  'medium': 10,
  'hard': 15
};
var RESPAWN_TIMES = {
  'easy': 10000,
  'medium': 8000,
  'hard': 5000
};

var StarJouster = /*#__PURE__*/function () {
  function StarJouster(canvas, diff) {
    _classCallCheck(this, StarJouster);

    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.Jouster = new _jouster__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions);
    this.diff = diff;
    this.running = true; // NPCs

    this.NPCs = [];

    for (var i = 0; i < MODES[this.diff]; i++) {
      this.NPCs.push(new _npc__WEBPACK_IMPORTED_MODULE_1__["default"](Math.floor(Math.random() * this.dimensions.width), Math.floor(Math.random() * this.dimensions.height)));
    } //Ledges 


    var bottom_ledge = new _ledge__WEBPACK_IMPORTED_MODULE_2__["default"]({
      width: 500,
      height: 30,
      x: 250,
      y: 500 - 30
    });
    var mid_one = new _ledge__WEBPACK_IMPORTED_MODULE_2__["default"]({
      width: 150,
      height: 20,
      x: 50,
      y: 100
    });
    var mid_two = new _ledge__WEBPACK_IMPORTED_MODULE_2__["default"]({
      width: 150,
      height: 20,
      x: 400,
      y: 125
    });
    var mid_three = new _ledge__WEBPACK_IMPORTED_MODULE_2__["default"]({
      width: 150,
      height: 20,
      x: 800,
      y: 100
    });
    var top_one = new _ledge__WEBPACK_IMPORTED_MODULE_2__["default"]({
      width: 150,
      height: 20,
      x: 50,
      y: 300
    });
    var top_two = new _ledge__WEBPACK_IMPORTED_MODULE_2__["default"]({
      width: 150,
      height: 20,
      x: 400,
      y: 325
    });
    var top_three = new _ledge__WEBPACK_IMPORTED_MODULE_2__["default"]({
      width: 150,
      height: 20,
      x: 800,
      y: 300
    });
    this.ledges = [bottom_ledge, mid_one, mid_two, mid_three, top_one, top_two, top_three]; //Lava

    var left_lava = new _lava__WEBPACK_IMPORTED_MODULE_3__["default"]({
      width: 250,
      height: 20,
      x: 0,
      y: 500 - 20
    });
    var right_lava = new _lava__WEBPACK_IMPORTED_MODULE_3__["default"]({
      width: 250,
      height: 20,
      x: 750,
      y: 500 - 20
    });
    this.lavas = [left_lava, right_lava]; //eggs

    this.eggs = []; //animations

    this.animations = []; //Score

    this.score = 0; //drawing stars

    this.stars = [];

    for (var _i = 0; _i < 125; _i++) {
      this.stars.push([Math.floor(Math.random() * this.dimensions.width), Math.floor(Math.random() * this.dimensions.height)]);
    } //start game


    this.registerGameControls();
    this.restart(); //music

    this.music = document.getElementById('background-music');
    this.music.play(); //npc additions

    var that = this;
    setInterval(function () {
      var new_npc_animation = new _animation_classes_joust_animation__WEBPACK_IMPORTED_MODULE_5__["default"]('lightning', Math.floor(Math.random() * that.dimensions.width), Math.floor(Math.random() * that.dimensions.height), 0);
      that.animations.push(new_npc_animation);
      setTimeout(function () {
        var new_npc = new _npc__WEBPACK_IMPORTED_MODULE_1__["default"](new_npc_animation.x, new_npc_animation.y);
        that.NPCs.push(new_npc);
      }, 500);
    }, RESPAWN_TIMES[this.diff]);
  }

  _createClass(StarJouster, [{
    key: "restart",
    value: function restart() {
      // this.Jouster = new Jouster(this.dimensions);
      this.animate();
    }
  }, {
    key: "registerGameControls",
    value: function registerGameControls() {
      // this.spaceBinder = this.space.bind(this);
      // this.leftBinder = this.moveLeft.bind(this);
      // this.rightBinder = this.moveRight.bind(this);
      var that = this;
      document.addEventListener("keydown", function (event) {
        if (event.isComposing || event.keyCode === 32) {
          // Space - fly
          return that.space();
        } else if (event.isComposing || event.keyCode === 37) {
          //arrow left
          return that.moveLeft();
        } else if (event.isComposing || event.keyCode === 39) {
          //arrow right
          return that.moveRight();
        } else if (event.isComposing || event.keyCode === 77) {
          return that.exitToMenu();
        }
      });
    }
  }, {
    key: "space",
    value: function space(e) {
      this.Jouster.fly();
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(e) {
      this.Jouster.moveLeft();
    }
  }, {
    key: "moveRight",
    value: function moveRight(e) {
      this.Jouster.moveRight();
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      //background
      this.drawBackground(this.ctx); //Ledges

      this.ledges.forEach(function (ledge) {
        ledge.animate(_this.ctx);
      }); //lava

      this.lavas.forEach(function (lava) {
        lava.animate(_this.ctx);
      }); //score

      this.drawScore(this.ctx); //lives

      this.drawLives(this.ctx); // Jouster and NPCs

      this.Jouster.animate(this.ctx);
      this.NPCs.forEach(function (npc) {
        npc.animate(_this.ctx);
      }); //eggs

      this.eggs.forEach(function (egg) {
        egg.animate(_this.ctx);
      }); //animations

      this.animations.forEach(function (animation) {
        animation.animate(_this.ctx);
      });
      this.collisionCheck();
      this.eggRespawn();
      this.joustAnimationDisplay();
      this.req = requestAnimationFrame(this.animate.bind(this));

      if (!this.running) {
        cancelAnimationFrame(this.req);
      }
    }
  }, {
    key: "exitToMenu",
    value: function exitToMenu() {
      this.music.pause();
      this.running = false;
      var cvs = document.getElementById('joust');
      cvs.style.zIndex = '2'; //menu music

      var menu_music = document.getElementById('cantina');
      menu_music.play();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      //score
      // this.score = 0;
      //music
      this.music.pause();
      var game_over_sound = document.getElementById('palpatine');
      game_over_sound.play();
      this.running = false;
      var cvs = document.getElementById('joust');
      debugger;
      var score_submit_menu = document.getElementById('score-submit');
      score_submit_menu.style.zIndex = '6';
      var score_submit_button = document.getElementById('score-submit-button');
      var that = this;
      score_submit_button.addEventListener('click', function () {
        //save score to localStorage
        localStorage.setItem(document.getElementById('score-submit-username').value, that.score); //populate scoreboard

        var scoreboard_names = document.getElementById('leaderboard-names');
        var scoreboard_scores = document.getElementById('leaderboard-scores');
        var scores = {
          'Sinan': 1500,
          'Al': 1250
        };

        for (var i = 0; i < localStorage.length; i++) {
          if (!['game', 'loglevel:webpack-dev-server'].includes(localStorage.key(i))) {
            scores[localStorage.key(i)] = parseInt(localStorage.getItem(localStorage.key(i)));
          }
        }

        var sorted_names = Object.keys(scores).sort(function (x, y) {
          return scores[x] - scores[y];
        });
        sorted_names.reverse().forEach(function (name) {
          var liname = document.createElement('li');
          liname.innerHTML = "".concat(name);
          scoreboard_names.append(liname);
          var liscore = document.createElement('li');
          liscore.innerHTML = "".concat(scores[name]);
          scoreboard_scores.append(liscore);
        }); // console.log('what about this?')
        //hide score submit menu

        debugger;
        score_submit_menu.style.zIndex = '2';
        cvs.style.zIndex = '3';
        var leaderboard_pane = document.getElementById('leaderboard');
        leaderboard_pane.style.zIndex = '7';
        console.log('a'); //blur
        // score_submit_button.blur();
      });
    } // methods that can be later moved to a class of its own.

  }, {
    key: "drawBackground",
    value: function drawBackground(ctx) {
      ctx.fillStyle = "#191919";
      ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
      this.stars.forEach(function (star) {
        ctx.fillStyle = "white";
        ctx.fillRect(star[0], star[1], 2, 2);
      });
    }
  }, {
    key: "collisionCheck",
    value: function collisionCheck() {
      //NPCs
      var that = this;
      this.NPCs.forEach(function (npc, i) {
        if (npc.collidedWith(that.Jouster)) {
          if (!that.Jouster.ethereal) {
            if (npc.collide(that.Jouster)) {
              //sound
              var sounds = ['collision1', 'collision2', 'collision3'];
              var sampled_sound = sounds[Math.floor(Math.random() * sounds.length)];
              var collision_sound = document.getElementById(sampled_sound);
              collision_sound.play(); //delete npc

              that.NPCs.splice(i, 1); //spawn egg

              that.eggs.push(new _egg__WEBPACK_IMPORTED_MODULE_4__["default"](npc.x, npc.y));
            } else {
              if (that.Jouster.lives === 1) {
                that.gameOver();
              } else {
                that.Jouster.dead();
              }
            }

            ;
          }
        }
      }); //ledges

      that.ledges.forEach(function (ledge) {
        //with jouster
        ledge.collisionHandler(that.Jouster); //with eggs

        that.eggs.forEach(function (egg) {
          ledge.eggCollision(egg);
        });
      }); //lava

      that.lavas.forEach(function (lava) {
        //Jouster collision
        if (!that.Jouster.ethereal && lava.collisionHandler(that.Jouster)) {
          if (that.Jouster.lives === 1) {
            that.gameOver();
          } else {
            that.Jouster.dead();
          }
        } //egg collision


        that.eggs.forEach(function (egg) {
          lava.eggCollision(egg);
        });
      }); //eggs

      that.eggs.forEach(function (egg, i) {
        if (egg.collisionHandler(that.Jouster)) {
          //sound
          var sound = document.getElementById('pickup');
          sound.play(); //increase score

          that.score += 150;
          that.animations.push(new _animation_classes_joust_animation__WEBPACK_IMPORTED_MODULE_5__["default"]('score-tag', egg.x - 10, egg.y - 10, 1000)); //delete egg

          that.eggs.splice(i, 1);
        }
      });
    }
  }, {
    key: "eggRespawn",
    value: function eggRespawn() {
      var that = this;
      this.eggs.forEach(function (egg, i) {
        if (egg.respawn) {
          that.eggs.splice(i, 1);
          that.animations.push(new _animation_classes_joust_animation__WEBPACK_IMPORTED_MODULE_5__["default"]('lightning', egg.x - 5, egg.y - 5, 300));
          var newNPC = new _npc__WEBPACK_IMPORTED_MODULE_1__["default"](egg.x, egg.y);
          that.NPCs.push(newNPC);

          if (newNPC.y !== egg.y) {
            that.animations.push(new _animation_classes_joust_animation__WEBPACK_IMPORTED_MODULE_5__["default"]('lightning', newNPC.x - 5, newNPC.y - 5, 300));
          }
        }
      });
    }
  }, {
    key: "joustAnimationDisplay",
    value: function joustAnimationDisplay() {
      var that = this;
      this.animations.forEach(function (animation, i) {
        if (animation.kill) {
          that.animations.splice(i, 1);
        }
      });
    }
  }, {
    key: "drawScore",
    value: function drawScore(ctx) {
      var box_width = this.score === 0 ? 65 : 90;
      ctx.fillStyle = "white";
      ctx.fillRect(506, 13, box_width + 4, 24);
      ctx.fillStyle = "#191919";
      ctx.fillRect(508, 15, box_width, 20); //text

      ctx.font = "18px Sans Serif";
      ctx.fillStyle = "white";
      var str = "Score: ".concat(this.score);
      ctx.fillText(str, 510, 30);
    }
  }, {
    key: "drawLives",
    value: function drawLives(ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(396, 13, 59, 24);
      ctx.fillStyle = "#191919";
      ctx.fillRect(398, 15, 55, 20); //heart

      var heart = document.getElementById('heart');
      ctx.drawImage(heart, 393, 10, 40, 40); //text

      ctx.font = "18px Sans Serif";
      ctx.fillStyle = "white";
      var str = "x ".concat(this.Jouster.lives);
      ctx.fillText(str, 425, 30);
    }
  }]);

  return StarJouster;
}(); // function sound(src) {
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


/* harmony default export */ __webpack_exports__["default"] = (StarJouster);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");



var canvas = document.getElementById('joust');
var easy_button = document.getElementById('easy-button');
var medium_button = document.getElementById('medium-button');
var hard_button = document.getElementById('hard-button');
var music_button = document.getElementById('music-button');
var leaderboard_play_again = document.getElementById('leaderboard-play-again');
var leaderboard_back_to_menu = document.getElementById('leaderboard-back-to-menu');
var score_submit_button = document.getElementById('score-submit-button');
var background_music = document.getElementById('background-music');
var collision1 = document.getElementById('collision1');
var collision2 = document.getElementById('collision2');
var collision3 = document.getElementById('collision3');
var palpatine = document.getElementById('palpatine');
var death = document.getElementById('death-sound');
var pickup = document.getElementById('pickup');
var menu_music = document.getElementById('cantina');
menu_music.volume = 0.2;
menu_music.play();
music_button.addEventListener('click', function () {
  var sounds = [background_music, menu_music, collision1, collision2, collision3, palpatine, death, pickup];

  if (menu_music.volume > 0) {
    sounds.forEach(function (sound) {
      return sound.volume = 0;
    });
    document.getElementById('music-button-image').src = "./src/images/muted.png";
  } else {
    sounds.forEach(function (sound) {
      return sound.volume = 0.3;
    });
    document.getElementById('music-button-image').src = "./src/images/unmuted.png";
  }
});
easy_button.addEventListener('click', function () {
  menu_music.pause();
  canvas.style.zIndex = '5';
  easy_button.blur();
  canvas.focus();
  localStorage.setItem('game', 'easy');
  new _game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, 'easy');
});
medium_button.addEventListener('click', function () {
  menu_music.pause();
  canvas.style.zIndex = '5';
  medium_button.blur();
  canvas.focus();
  localStorage.setItem('game', 'medium');
  new _game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, 'medium');
});
hard_button.addEventListener('click', function () {
  menu_music.pause();
  canvas.style.zIndex = '5';
  hard_button.blur();
  canvas.focus();
  localStorage.setItem('game', 'hard');
  new _game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, 'hard');
});
leaderboard_play_again.addEventListener('click', function () {
  var leaderboard_pane = document.getElementById('leaderboard');
  leaderboard_pane.style.zIndex = '1';
  canvas.style.zIndex = '5';
  leaderboard_play_again.blur();
  canvas.focus();
  new _game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, localStorage.getItem('game'));
});
leaderboard_back_to_menu.addEventListener('click', function () {
  var leaderboard_pane = document.getElementById('leaderboard');
  leaderboard_pane.style.zIndex = '1'; //blur

  leaderboard_back_to_menu.blur(); //menu music

  var menu_music = document.getElementById('cantina');
  menu_music.play();
}); // new StarJouster(canvas,'easy');
// const score_submit_menu = document.getElementById('score-submit');
// score_submit_button.addEventListener('click', () => {
//     //save score to localStorage
//     localStorage.setItem(document.getElementById('score-submit-username').value, 500);
//     //populate scoreboard
//     const scoreboard_names = document.getElementById('leaderboard-names');
//     const scoreboard_scores = document.getElementById('leaderboard-scores');
//     let scores = { 'Sinan': 1500, 'Al': 1250 };
//     for (let i = 0; i < localStorage.length; i++) {
//         if (!['game', 'loglevel:webpack-dev-server'].includes(localStorage.key(i))) {
//             scores[localStorage.key(i)] = parseInt(localStorage.getItem(localStorage.key(i)));
//         }
//     }
//     let sorted_names = Object.keys(scores).sort(function (x, y) { return scores[x] - scores[y] });
//     debugger;
//     sorted_names.reverse().forEach(name => {
//         let liname = document.createElement('li');
//         liname.innerHTML = `${name}`;
//         scoreboard_names.append(liname);
//         let liscore = document.createElement('li');
//         liscore.innerHTML = `${scores[name]}`;
//         scoreboard_scores.append(liscore);
//     });
//     // console.log('what about this?')
//     //hide score submit menu
//     debugger;
//     score_submit_menu.style.zIndex = '2';
//     canvas.style.zIndex = '3';
//     debugger;
//     const leaderboard_pane = document.getElementById('leaderboard');
//     leaderboard_pane.style.zIndex = '7';
//     console.log('a');
//     //blur
//     score_submit_button.blur();
// });

/***/ }),

/***/ "./src/jouster.js":
/*!************************!*\
  !*** ./src/jouster.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  GRAVITY: 0.05,
  DRAG: 0.02,
  FLAP_SPEED: 1.5,
  MOVE_SPEED: 1.5,
  TERMINAL_Y_VELOCITY: 5,
  TERMINAL_X_VELOCITY: 5,
  JOUSTER_WIDTH: 30,
  JOUSTER_HEIGHT: 50
};

var Jouster = /*#__PURE__*/function () {
  function Jouster(dimensions) {
    _classCallCheck(this, Jouster);

    this.dimensions = dimensions;
    this.x = 450;
    this.y = 160;
    this.x_vel = 0;
    this.y_vel = 0; // debugger;

    this.width = CONSTANTS.JOUSTER_WIDTH;
    this.height = CONSTANTS.JOUSTER_HEIGHT;
    this.lives = 3;
    this.facing = this.x_vel >= 0 ? 'right' : 'left'; //spawn

    this.ethereal = true;
    var that = this;
    setTimeout(function () {
      that.ethereal = false;
    }, 3000);
  }

  _createClass(Jouster, [{
    key: "fly",
    value: function fly() {
      this.y_vel -= CONSTANTS.FLAP_SPEED;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.x_vel -= CONSTANTS.MOVE_SPEED;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.x_vel += CONSTANTS.MOVE_SPEED;
    }
  }, {
    key: "moveJouster",
    value: function moveJouster() {
      this.y += this.y_vel;
      this.y_vel += CONSTANTS.GRAVITY;
      this.x += this.x_vel;

      if (this.x_vel > 0) {
        if (this.x_vel < CONSTANTS.DRAG) {
          this.x_vel = 0;
        } else {
          this.x_vel -= CONSTANTS.DRAG;
        }
      } else if (this.x_vel < 0) {
        if (-this.x_vel < CONSTANTS.DRAG) {
          this.x_vel = 0;
        } else {
          this.x_vel += CONSTANTS.DRAG;
        }
      }

      if (Math.abs(this.x_vel) > CONSTANTS.TERMINAL_X_VELOCITY) {
        if (this.x_vel > 0) {
          this.x_vel = CONSTANTS.TERMINAL_X_VELOCITY;
        } else {
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

      if (this.x > this.dimensions.width) {
        this.x = 0;
      } else if (this.x < 0) {
        this.x = this.dimensions.width;
      }

      if (this.y <= 0) {
        this.y = 1;
        this.y_vel = -(this.y_vel / 4);
      }
    }
  }, {
    key: "drawJouster",
    value: function drawJouster(ctx) {
      // ctx.fillStyle = "green";
      // ctx.fillRect(this.x, this.y, CONSTANTS.JOUSTER_WIDTH, CONSTANTS.JOUSTER_HEIGHT);
      this.facing = this.x_vel > 0 ? 'right' : 'left';
      var image;

      if (this.facing === 'left') {
        if (this.ethereal) {
          image = document.getElementById('luke-left-frozen');
        } else {
          image = document.getElementById('luke-left');
        }

        ctx.drawImage(image, this.x - 5, this.y - 10, CONSTANTS.JOUSTER_WIDTH + 10, CONSTANTS.JOUSTER_HEIGHT + 15);
      } else {
        if (this.ethereal) {
          image = document.getElementById('luke-right-frozen');
        } else {
          image = document.getElementById('luke-right');
        }

        ctx.drawImage(image, this.x - 5, this.y - 10, CONSTANTS.JOUSTER_WIDTH + 10, CONSTANTS.JOUSTER_HEIGHT + 15);
      }
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.moveJouster();
      this.drawJouster(ctx);
    }
  }, {
    key: "dead",
    value: function dead() {
      var death_sound = document.getElementById('death-sound');
      death_sound.play();
      this.lives -= 1;
      this.x = 1500;
      this.y = 1500;
      var that = this;
      setTimeout(function () {
        that.x = 450;
        that.y = 160;
        that.x_vel = 0;
        that.y_vel = 0;
        that.ethereal = true;
        setTimeout(function () {
          that.ethereal = false;
        }, 3000);
      }, 2000);
    }
  }]);

  return Jouster;
}();

/* harmony default export */ __webpack_exports__["default"] = (Jouster);

/***/ }),

/***/ "./src/lava.js":
/*!*********************!*\
  !*** ./src/lava.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lava = /*#__PURE__*/function () {
  function Lava(dimensions) {
    _classCallCheck(this, Lava);

    this.width = dimensions.width;
    this.height = dimensions.height;
    this.x = dimensions.x;
    this.y = dimensions.y;
  }

  _createClass(Lava, [{
    key: "drawLava",
    value: function drawLava(ctx) {
      ctx.fillStyle = "#E24C00";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawLava(ctx);
    }
  }, {
    key: "collisionHandler",
    value: function collisionHandler(char) {
      var condition1 = this.x < char.x + char.width;
      var condition2 = this.x + this.width > char.x;
      var condition3 = this.y < char.y + char.height;
      var condition4 = this.y + this.height > char.y;

      if (condition1 && condition2 && condition3 && condition4) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "eggCollision",
    value: function eggCollision(egg) {
      var condition1 = this.x < egg.x + egg.width;
      var condition2 = this.x + this.width > egg.x;
      var condition3 = this.y < egg.y + egg.height;
      var condition4 = this.y + this.height > egg.y;

      if (condition1 && condition2 && condition3 && condition4) {
        egg.y_vel = 0;
        egg.y = this.y - egg.height - 1;
      }
    }
  }]);

  return Lava;
}();

/* harmony default export */ __webpack_exports__["default"] = (Lava);

/***/ }),

/***/ "./src/ledge.js":
/*!**********************!*\
  !*** ./src/ledge.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ledge = /*#__PURE__*/function () {
  function Ledge(dimensions) {
    _classCallCheck(this, Ledge);

    this.width = dimensions.width;
    this.height = dimensions.height;
    this.x = dimensions.x;
    this.y = dimensions.y;
  }

  _createClass(Ledge, [{
    key: "drawLedge",
    value: function drawLedge(ctx) {
      ctx.fillStyle = "#783200";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawLedge(ctx);
    }
  }, {
    key: "collisionHandler",
    value: function collisionHandler(char) {
      var condition1 = this.x < char.x + char.width;
      var condition2 = this.x + this.width > char.x;
      var condition3 = this.y < char.y + char.height;
      var condition4 = this.y + this.height > char.y;

      if (condition1 && condition2 && condition3 && condition4) {
        if (char.x + char.width >= this.x || char.x <= this.x + this.width) {
          char.x_vel = -(char.x_vel * 0.75);
        }

        if (char.y + char.height >= this.y || char.y <= this.y + this.height) {
          char.y_vel = -(char.y_vel * 0.75);
        }
      }
    }
  }, {
    key: "eggCollision",
    value: function eggCollision(egg) {
      var condition1 = this.x < egg.x + egg.width;
      var condition2 = this.x + this.width > egg.x;
      var condition3 = this.y < egg.y + egg.height;
      var condition4 = this.y + this.height > egg.y;

      if (condition1 && condition2 && condition3 && condition4) {
        egg.y_vel = 0;
        egg.y = this.y - egg.height - 1;
      }
    }
  }]);

  return Ledge;
}();

/* harmony default export */ __webpack_exports__["default"] = (Ledge);

/***/ }),

/***/ "./src/npc.js":
/*!********************!*\
  !*** ./src/npc.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  TERMINAL_Y_VELOCITY: 5,
  TERMINAL_X_VELOCITY: 2,
  NPC_WIDTH: 30,
  NPC_HEIGHT: 50
};

var NPC = /*#__PURE__*/function () {
  function NPC(x, y) {
    _classCallCheck(this, NPC);

    // this.dimensions = dimensions;
    this.x = x;
    this.y = y;
    this.x_vel = Math.random() < 0.5 ? -3 : 3;
    this.y_vel = 0;
    this.width = CONSTANTS.NPC_WIDTH;
    this.height = CONSTANTS.NPC_HEIGHT;
    this.facing = this.x_vel >= 0 ? 'right' : 'left'; // debugger;
  }

  _createClass(NPC, [{
    key: "moveNPC",
    value: function moveNPC() {
      this.y += this.y_vel; // this.y_vel += CONSTANTS.GRAVITY;

      this.x += this.x_vel; // if (this.x_vel > 0) {
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
        this.y = Math.floor(Math.random() * 400);
      }

      if (this.x > 1000) {
        this.x = 0;
      } else if (this.x < 0) {
        this.x = 1000;
      }
    }
  }, {
    key: "drawNPC",
    value: function drawNPC(ctx) {
      // ctx.fillStyle = "red";
      // ctx.fillRect(this.x, this.y, CONSTANTS.NPC_WIDTH, CONSTANTS.NPC_HEIGHT);
      var image;

      if (this.facing === 'left') {
        image = document.getElementById('sith-left');
        ctx.drawImage(image, this.x - 5, this.y - 10, CONSTANTS.NPC_WIDTH + 10, CONSTANTS.NPC_HEIGHT + 15);
      } else {
        image = document.getElementById('sith-right');
        ctx.drawImage(image, this.x - 5, this.y - 10, CONSTANTS.NPC_WIDTH + 10, CONSTANTS.NPC_HEIGHT + 15);
      }
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.moveNPC();
      this.drawNPC(ctx);
    } //collision methods

  }, {
    key: "collidedWith",
    value: function collidedWith(jouster) {
      var condition1 = this.x < jouster.x + jouster.width;
      var condition2 = this.x + this.width > jouster.x;
      var condition3 = this.y < jouster.y + jouster.height;
      var condition4 = this.y + this.height > jouster.y;

      if (condition1 && condition2 && condition3 && condition4) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "collide",
    value: function collide(jouster) {
      if (this.facing === 'left' && jouster.facing === 'left') {
        if (jouster.x > this.x) {
          return true;
        } else {
          return false;
        }
      } else if (this.facing === 'right' && jouster.facing === 'right') {
        if (jouster.x < this.x) {
          return true;
        } else {
          return false;
        }
      } else {
        if (jouster.y < this.y) {
          return true;
        } else {
          return false;
        }
      }
    }
  }]);

  return NPC;
}();

/* harmony default export */ __webpack_exports__["default"] = (NPC);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbl9jbGFzc2VzL2pvdXN0X2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWdnLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam91c3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF2YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25wYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21lbnUuY3NzPzI5MjEiXSwibmFtZXMiOlsiQ09OU1RBTlRTIiwiU0NPUkVfV0lEVEgiLCJTQ09SRV9IRUlHSFQiLCJTTU9LRV9XSURUSCIsIlNNT0tFX0hFSUdIVCIsIkpvdXN0QW5pbWF0aW9uIiwidHlwZSIsIngiLCJ5IiwidGltZSIsImtpbGwiLCJ0aGF0Iiwic2V0VGltZW91dCIsImN0eCIsImVsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3SW1hZ2UiLCJkcmF3Sm91c3RBbmltYXRpb24iLCJHUkFWSVRZIiwiVEVSTUlOQUxfWV9WRUxPQ0lUWSIsIkVHR19XSURUSCIsIkVHR19IRUlHSFQiLCJFZ2ciLCJ3aWR0aCIsImhlaWdodCIsInlfdmVsIiwic3RhdHVzIiwicGljdHVyZSIsInJlc3Bhd24iLCJzZXRJbnRlcnZhbCIsIk1hdGgiLCJhYnMiLCJsaWdodHNhYmVyIiwiaW1hZ2UiLCJtb3ZlRWdnIiwiZHJhd0VnZyIsImpvdXN0ZXIiLCJjb25kaXRpb24xIiwiY29uZGl0aW9uMiIsImNvbmRpdGlvbjMiLCJjb25kaXRpb240IiwiTU9ERVMiLCJSRVNQQVdOX1RJTUVTIiwiU3RhckpvdXN0ZXIiLCJjYW52YXMiLCJkaWZmIiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJKb3VzdGVyIiwicnVubmluZyIsIk5QQ3MiLCJpIiwicHVzaCIsIk5QQyIsImZsb29yIiwicmFuZG9tIiwiYm90dG9tX2xlZGdlIiwiTGVkZ2UiLCJtaWRfb25lIiwibWlkX3R3byIsIm1pZF90aHJlZSIsInRvcF9vbmUiLCJ0b3BfdHdvIiwidG9wX3RocmVlIiwibGVkZ2VzIiwibGVmdF9sYXZhIiwiTGF2YSIsInJpZ2h0X2xhdmEiLCJsYXZhcyIsImVnZ3MiLCJhbmltYXRpb25zIiwic2NvcmUiLCJzdGFycyIsInJlZ2lzdGVyR2FtZUNvbnRyb2xzIiwicmVzdGFydCIsIm11c2ljIiwicGxheSIsIm5ld19ucGNfYW5pbWF0aW9uIiwibmV3X25wYyIsImFuaW1hdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpc0NvbXBvc2luZyIsImtleUNvZGUiLCJzcGFjZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiZXhpdFRvTWVudSIsImUiLCJmbHkiLCJkcmF3QmFja2dyb3VuZCIsImZvckVhY2giLCJsZWRnZSIsImxhdmEiLCJkcmF3U2NvcmUiLCJkcmF3TGl2ZXMiLCJucGMiLCJlZ2ciLCJhbmltYXRpb24iLCJjb2xsaXNpb25DaGVjayIsImVnZ1Jlc3Bhd24iLCJqb3VzdEFuaW1hdGlvbkRpc3BsYXkiLCJyZXEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsImN2cyIsInN0eWxlIiwiekluZGV4IiwibWVudV9tdXNpYyIsImdhbWVfb3Zlcl9zb3VuZCIsInNjb3JlX3N1Ym1pdF9tZW51Iiwic2NvcmVfc3VibWl0X2J1dHRvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ2YWx1ZSIsInNjb3JlYm9hcmRfbmFtZXMiLCJzY29yZWJvYXJkX3Njb3JlcyIsInNjb3JlcyIsImxlbmd0aCIsImluY2x1ZGVzIiwia2V5IiwicGFyc2VJbnQiLCJnZXRJdGVtIiwic29ydGVkX25hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZXZlcnNlIiwibmFtZSIsImxpbmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJsaXNjb3JlIiwibGVhZGVyYm9hcmRfcGFuZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0YXIiLCJjb2xsaWRlZFdpdGgiLCJldGhlcmVhbCIsImNvbGxpZGUiLCJzb3VuZHMiLCJzYW1wbGVkX3NvdW5kIiwiY29sbGlzaW9uX3NvdW5kIiwic3BsaWNlIiwibGl2ZXMiLCJnYW1lT3ZlciIsImRlYWQiLCJjb2xsaXNpb25IYW5kbGVyIiwiZWdnQ29sbGlzaW9uIiwic291bmQiLCJuZXdOUEMiLCJib3hfd2lkdGgiLCJmb250Iiwic3RyIiwiZmlsbFRleHQiLCJoZWFydCIsImVhc3lfYnV0dG9uIiwibWVkaXVtX2J1dHRvbiIsImhhcmRfYnV0dG9uIiwibXVzaWNfYnV0dG9uIiwibGVhZGVyYm9hcmRfcGxheV9hZ2FpbiIsImxlYWRlcmJvYXJkX2JhY2tfdG9fbWVudSIsImJhY2tncm91bmRfbXVzaWMiLCJjb2xsaXNpb24xIiwiY29sbGlzaW9uMiIsImNvbGxpc2lvbjMiLCJwYWxwYXRpbmUiLCJkZWF0aCIsInBpY2t1cCIsInZvbHVtZSIsInNyYyIsImJsdXIiLCJmb2N1cyIsIkRSQUciLCJGTEFQX1NQRUVEIiwiTU9WRV9TUEVFRCIsIlRFUk1JTkFMX1hfVkVMT0NJVFkiLCJKT1VTVEVSX1dJRFRIIiwiSk9VU1RFUl9IRUlHSFQiLCJ4X3ZlbCIsImZhY2luZyIsIm1vdmVKb3VzdGVyIiwiZHJhd0pvdXN0ZXIiLCJkZWF0aF9zb3VuZCIsImRyYXdMYXZhIiwiY2hhciIsImRyYXdMZWRnZSIsIk5QQ19XSURUSCIsIk5QQ19IRUlHSFQiLCJtb3ZlTlBDIiwiZHJhd05QQyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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UDtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFPLEtBQVA7QUFDSDtBQUNKLE9BTk0sTUFNRDtBQUNGLFlBQUk4QixPQUFPLENBQUM3QixDQUFSLEdBQVksS0FBS0EsQ0FBckIsRUFBd0I7QUFDcEIsaUJBQU8sSUFBUDtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0o7Ozs7OztBQUlVOEMsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUM5R0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIFNDT1JFX1dJRFRIOiAzMCxcbiAgICBTQ09SRV9IRUlHSFQ6IDIwLFxuICAgIFNNT0tFX1dJRFRIOiAzMCxcbiAgICBTTU9LRV9IRUlHSFQ6IDUwXG59XG5cbmNsYXNzIEpvdXN0QW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLHgseSx0aW1lKXtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5raWxsID0gZmFsc2U7XG5cblxuICAgICAgICAvL2Rpc2FibGUgYW5pbWF0aW9uXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LmtpbGwgPSB0cnVlO1xuICAgICAgICB9LCB0aGF0LnRpbWUpO1xuICAgIH1cblxuICAgIGRyYXdKb3VzdEFuaW1hdGlvbihjdHgpe1xuICAgICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnR5cGUpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGVsZSwgdGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdKb3VzdEFuaW1hdGlvbihjdHgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBKb3VzdEFuaW1hdGlvbjsiLCJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgR1JBVklUWTogMC4wNSxcbiAgICBURVJNSU5BTF9ZX1ZFTE9DSVRZOiA1LFxuICAgIEVHR19XSURUSDogMzAsXG4gICAgRUdHX0hFSUdIVDogMzBcbn07XG5cbmNsYXNzIEVnZ3tcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KXtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IENPTlNUQU5UUy5FR0dfV0lEVEg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQ09OU1RBTlRTLkVHR19IRUlHSFQ7XG4gICAgICAgIHRoaXMueV92ZWwgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ3VuYXR0YWluYWJsZSc7XG5cbiAgICAgICAgdGhpcy5waWN0dXJlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5yZXNwYXduID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnBpY3R1cmUgPSAhdGhhdC5waWN0dXJlO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIC8vZWdnIHN3aXRjaFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQuc3RhdHVzID0gJ2F0dGFpbmFibGUnO1xuICAgICAgICB9LDIwMDApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5yZXNwYXduID0gdHJ1ZTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH1cblxuICAgIG1vdmVFZ2coKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlfdmVsO1xuICAgICAgICB0aGlzLnlfdmVsICs9IENPTlNUQU5UUy5HUkFWSVRZO1xuXG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueV92ZWwpID4gQ09OU1RBTlRTLlRFUk1JTkFMX1lfVkVMT0NJVFkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnlfdmVsID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMueV92ZWwgPSBDT05TVEFOVFMuVEVSTUlOQUxfWV9WRUxPQ0lUWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy55X3ZlbCA9IENPTlNUQU5UUy5URVJNSU5BTF9ZX1ZFTE9DSVRZICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RWdnKGN0eCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGxpZ2h0c2FiZXI7XG4gICAgICAgIGlmKHRoaXMuc3RhdHVzID09PSAndW5hdHRhaW5hYmxlJyl7XG4gICAgICAgICAgICBsaWdodHNhYmVyID0gJ2xpZ2h0c2FiZXInO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxpZ2h0c2FiZXIgPSAodGhpcy5waWN0dXJlID8gJ2xpZ2h0c2FiZXInIDogJ2xpZ2h0c2FiZXItZmxhc2hpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaWdodHNhYmVyKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgdGhpcy54LTUsIHRoaXMueS01LCB0aGlzLndpZHRoKzEwLCB0aGlzLmhlaWdodCsxMCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlRWdnKCk7XG4gICAgICAgIHRoaXMuZHJhd0VnZyhjdHgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBoYXRjaCgpe1xuICAgIC8vICAgICBcbiAgICAvLyB9XG5cbiAgICBjb2xsaXNpb25IYW5kbGVyKGpvdXN0ZXIpe1xuICAgICAgICBsZXQgY29uZGl0aW9uMSA9ICh0aGlzLnggPCAoam91c3Rlci54ICsgam91c3Rlci53aWR0aCkpO1xuICAgICAgICBsZXQgY29uZGl0aW9uMiA9ICgodGhpcy54ICsgdGhpcy53aWR0aCkgPiBqb3VzdGVyLngpO1xuICAgICAgICBsZXQgY29uZGl0aW9uMyA9ICh0aGlzLnkgPCAoam91c3Rlci55ICsgam91c3Rlci5oZWlnaHQpKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjQgPSAoKHRoaXMueSArIHRoaXMuaGVpZ2h0KSA+IGpvdXN0ZXIueSk7XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbjEgJiYgY29uZGl0aW9uMiAmJiBjb25kaXRpb24zICYmIGNvbmRpdGlvbjQpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzID09PSAnYXR0YWluYWJsZScpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVnZzsiLCJpbXBvcnQgSm91c3RlciBmcm9tICcuL2pvdXN0ZXInO1xuaW1wb3J0IE5QQyBmcm9tICcuL25wYyc7XG5pbXBvcnQgTGVkZ2UgZnJvbSAnLi9sZWRnZSc7XG5pbXBvcnQgTGF2YSBmcm9tICcuL2xhdmEnO1xuaW1wb3J0IEVnZyBmcm9tICcuL2VnZyc7XG5pbXBvcnQgSm91c3RBbmltYXRpb24gZnJvbSAnLi9hbmltYXRpb25fY2xhc3Nlcy9qb3VzdF9hbmltYXRpb24nO1xuXG5jb25zdCBNT0RFUyA9IHtcbiAgICAnZWFzeSc6IDYsXG4gICAgJ21lZGl1bSc6IDEwLFxuICAgICdoYXJkJzogMTVcbn1cblxuY29uc3QgUkVTUEFXTl9USU1FUyA9IHtcbiAgICAnZWFzeSc6MTAwMDAsXG4gICAgJ21lZGl1bSc6ODAwMCxcbiAgICAnaGFyZCc6NTAwMFxufVxuXG5jbGFzcyBTdGFySm91c3RlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBkaWZmKXtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLkpvdXN0ZXIgPSBuZXcgSm91c3Rlcih0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLmRpZmYgPSBkaWZmO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIE5QQ3NcbiAgICAgICAgdGhpcy5OUENzID0gW107XG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgTU9ERVNbdGhpcy5kaWZmXTsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuTlBDcy5wdXNoKG5ldyBOUEMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kaW1lbnNpb25zLndpZHRoKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kaW1lbnNpb25zLmhlaWdodCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTGVkZ2VzIFxuICAgICAgICBsZXQgYm90dG9tX2xlZGdlID0gbmV3IExlZGdlKHt3aWR0aDogNTAwLCBoZWlnaHQ6IDMwLCB4OiAyNTAsIHk6KDUwMC0zMCl9KTtcbiAgICAgICAgbGV0IG1pZF9vbmUgPSBuZXcgTGVkZ2UoeyB3aWR0aDogMTUwLCBoZWlnaHQ6IDIwLCB4OiA1MCwgeTogMTAwIH0pO1xuICAgICAgICBsZXQgbWlkX3R3byA9IG5ldyBMZWRnZSh7IHdpZHRoOiAxNTAsIGhlaWdodDogMjAsIHg6IDQwMCwgeTogMTI1IH0pO1xuICAgICAgICBsZXQgbWlkX3RocmVlID0gbmV3IExlZGdlKHsgd2lkdGg6IDE1MCwgaGVpZ2h0OiAyMCwgeDogODAwLCB5OiAxMDAgfSk7XG4gICAgICAgIGxldCB0b3Bfb25lID0gbmV3IExlZGdlKHsgd2lkdGg6IDE1MCwgaGVpZ2h0OiAyMCwgeDogNTAsIHk6IDMwMCB9KTtcbiAgICAgICAgbGV0IHRvcF90d28gPSBuZXcgTGVkZ2UoeyB3aWR0aDogMTUwLCBoZWlnaHQ6IDIwLCB4OiA0MDAsIHk6IDMyNSB9KTtcbiAgICAgICAgbGV0IHRvcF90aHJlZSA9IG5ldyBMZWRnZSh7IHdpZHRoOiAxNTAsIGhlaWdodDogMjAsIHg6IDgwMCwgeTogMzAwIH0pO1xuICAgICAgICB0aGlzLmxlZGdlcyA9IFtib3R0b21fbGVkZ2UsIG1pZF9vbmUsIG1pZF90d28sIG1pZF90aHJlZSwgdG9wX29uZSwgdG9wX3R3bywgdG9wX3RocmVlXTtcblxuICAgICAgICAvL0xhdmFcbiAgICAgICAgbGV0IGxlZnRfbGF2YSA9IG5ldyBMYXZhKHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiAyMCwgeDogMCwgeTogKDUwMCAtIDIwKSB9KTtcbiAgICAgICAgbGV0IHJpZ2h0X2xhdmEgPSBuZXcgTGF2YSh7IHdpZHRoOiAyNTAsIGhlaWdodDogMjAsIHg6IDc1MCwgeTogKDUwMCAtIDIwKSB9KTtcbiAgICAgICAgdGhpcy5sYXZhcyA9IFtsZWZ0X2xhdmEsIHJpZ2h0X2xhdmFdOyAgICBcblxuICAgICAgICAvL2VnZ3NcbiAgICAgICAgdGhpcy5lZ2dzID0gW107XG5cbiAgICAgICAgLy9hbmltYXRpb25zXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuXG4gICAgICAgIC8vU2NvcmVcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG5cbiAgICAgICAgLy9kcmF3aW5nIHN0YXJzXG4gICAgICAgIHRoaXMuc3RhcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdGFycy5wdXNoKFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpbWVuc2lvbnMud2lkdGgpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zdGFydCBnYW1lXG4gICAgICAgIHRoaXMucmVnaXN0ZXJHYW1lQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG5cbiAgICAgICAgLy9tdXNpY1xuICAgICAgICB0aGlzLm11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQtbXVzaWMnKTtcbiAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCk7XG5cbiAgICAgICAgLy9ucGMgYWRkaXRpb25zXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld19ucGNfYW5pbWF0aW9uID0gbmV3IEpvdXN0QW5pbWF0aW9uKCdsaWdodG5pbmcnLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGF0LmRpbWVuc2lvbnMud2lkdGgpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGF0LmRpbWVuc2lvbnMuaGVpZ2h0KSwgMCk7XG4gICAgICAgICAgICB0aGF0LmFuaW1hdGlvbnMucHVzaChuZXdfbnBjX2FuaW1hdGlvbik7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdfbnBjID0gbmV3IE5QQyhuZXdfbnBjX2FuaW1hdGlvbi54LCBuZXdfbnBjX2FuaW1hdGlvbi55KTtcbiAgICAgICAgICAgICAgICB0aGF0Lk5QQ3MucHVzaChuZXdfbnBjKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgUkVTUEFXTl9USU1FU1t0aGlzLmRpZmZdKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICByZXN0YXJ0KCl7XG4gICAgICAgIC8vIHRoaXMuSm91c3RlciA9IG5ldyBKb3VzdGVyKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZWdpc3RlckdhbWVDb250cm9scygpe1xuICAgICAgICAvLyB0aGlzLnNwYWNlQmluZGVyID0gdGhpcy5zcGFjZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmxlZnRCaW5kZXIgPSB0aGlzLm1vdmVMZWZ0LmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMucmlnaHRCaW5kZXIgPSB0aGlzLm1vdmVSaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBpZihldmVudC5pc0NvbXBvc2luZyB8fCBldmVudC5rZXlDb2RlPT09MzIpe1xuICAgICAgICAgICAgICAgIC8vIFNwYWNlIC0gZmx5XG4gICAgICAgICAgICAgICByZXR1cm4gdGhhdC5zcGFjZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5pc0NvbXBvc2luZyB8fCBldmVudC5rZXlDb2RlPT09Mzcpe1xuICAgICAgICAgICAgICAgIC8vYXJyb3cgbGVmdFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleUNvZGU9PT0zOSl7XG4gICAgICAgICAgICAgICAgLy9hcnJvdyByaWdodFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5pc0NvbXBvc2luZyB8fCBldmVudC5rZXlDb2RlID09PSA3Nyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuZXhpdFRvTWVudSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNwYWNlKGUpe1xuICAgICAgICB0aGlzLkpvdXN0ZXIuZmx5KCk7XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoZSl7XG4gICAgICAgIHRoaXMuSm91c3Rlci5tb3ZlTGVmdCgpO1xuICAgIH1cblxuICAgIG1vdmVSaWdodChlKXtcbiAgICAgICAgdGhpcy5Kb3VzdGVyLm1vdmVSaWdodCgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKXtcbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xuXG4gICAgICAgIC8vTGVkZ2VzXG4gICAgICAgIHRoaXMubGVkZ2VzLmZvckVhY2gobGVkZ2UgPT4ge1xuICAgICAgICAgICAgbGVkZ2UuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vbGF2YVxuICAgICAgICB0aGlzLmxhdmFzLmZvckVhY2gobGF2YSA9PiB7XG4gICAgICAgICAgICBsYXZhLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL3Njb3JlXG4gICAgICAgIHRoaXMuZHJhd1Njb3JlKHRoaXMuY3R4KTtcblxuICAgICAgICAvL2xpdmVzXG4gICAgICAgIHRoaXMuZHJhd0xpdmVzKHRoaXMuY3R4KTtcblxuICAgICAgICAvLyBKb3VzdGVyIGFuZCBOUENzXG4gICAgICAgIHRoaXMuSm91c3Rlci5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5OUENzLmZvckVhY2gobnBjID0+IHtcbiAgICAgICAgICAgIG5wYy5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9lZ2dzXG4gICAgICAgIHRoaXMuZWdncy5mb3JFYWNoKGVnZyA9PntcbiAgICAgICAgICAgIGVnZy5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9hbmltYXRpb25zXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgICAgICBhbmltYXRpb24uYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29sbGlzaW9uQ2hlY2soKTtcbiAgICAgICAgdGhpcy5lZ2dSZXNwYXduKCk7XG4gICAgICAgIHRoaXMuam91c3RBbmltYXRpb25EaXNwbGF5KCk7XG5cbiAgICAgICAgdGhpcy5yZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpe1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpdFRvTWVudSgpe1xuICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvdXN0Jyk7XG4gICAgICAgIGN2cy5zdHlsZS56SW5kZXggPSAnMic7XG4gICAgICAgIC8vbWVudSBtdXNpY1xuICAgICAgICBsZXQgbWVudV9tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW50aW5hJyk7XG4gICAgICAgIG1lbnVfbXVzaWMucGxheSgpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIC8vc2NvcmVcbiAgICAgICAgLy8gdGhpcy5zY29yZSA9IDA7XG5cbiAgICAgICAgLy9tdXNpY1xuICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICAgIGxldCBnYW1lX292ZXJfc291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFscGF0aW5lJyk7XG4gICAgICAgIGdhbWVfb3Zlcl9zb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb3VzdCcpO1xuICAgICAgICBkZWJ1Z2dlcjtcblxuICAgICAgICBjb25zdCBzY29yZV9zdWJtaXRfbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZS1zdWJtaXQnKTtcbiAgICAgICAgc2NvcmVfc3VibWl0X21lbnUuc3R5bGUuekluZGV4ID0gJzYnO1xuXG5cbiAgICAgICAgY29uc3Qgc2NvcmVfc3VibWl0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZS1zdWJtaXQtYnV0dG9uJyk7XG5cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIHNjb3JlX3N1Ym1pdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vc2F2ZSBzY29yZSB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZS1zdWJtaXQtdXNlcm5hbWUnKS52YWx1ZSwgdGhhdC5zY29yZSk7XG5cbiAgICAgICAgICAgIC8vcG9wdWxhdGUgc2NvcmVib2FyZFxuICAgICAgICAgICAgY29uc3Qgc2NvcmVib2FyZF9uYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC1uYW1lcycpO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVib2FyZF9zY29yZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQtc2NvcmVzJyk7XG4gICAgICAgICAgICBsZXQgc2NvcmVzID0geyAnU2luYW4nOiAxNTAwLCAnQWwnOiAxMjUwIH07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghWydnYW1lJywnbG9nbGV2ZWw6d2VicGFjay1kZXYtc2VydmVyJ10uaW5jbHVkZXMobG9jYWxTdG9yYWdlLmtleShpKSkpe1xuICAgICAgICAgICAgICAgICAgICBzY29yZXNbbG9jYWxTdG9yYWdlLmtleShpKV0gPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNvcnRlZF9uYW1lcyA9IE9iamVjdC5rZXlzKHNjb3Jlcykuc29ydChmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4gc2NvcmVzW3hdIC0gc2NvcmVzW3ldIH0pO1xuICAgICAgICAgICAgc29ydGVkX25hbWVzLnJldmVyc2UoKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpbmFtZS5pbm5lckhUTUwgPSBgJHtuYW1lfWA7XG4gICAgICAgICAgICAgICAgc2NvcmVib2FyZF9uYW1lcy5hcHBlbmQobGluYW1lKTtcblxuICAgICAgICAgICAgICAgIGxldCBsaXNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBsaXNjb3JlLmlubmVySFRNTCA9IGAke3Njb3Jlc1tuYW1lXX1gO1xuICAgICAgICAgICAgICAgIHNjb3JlYm9hcmRfc2NvcmVzLmFwcGVuZChsaXNjb3JlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3doYXQgYWJvdXQgdGhpcz8nKVxuICAgICAgICAgICAgLy9oaWRlIHNjb3JlIHN1Ym1pdCBtZW51XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIHNjb3JlX3N1Ym1pdF9tZW51LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgICAgIGN2cy5zdHlsZS56SW5kZXggPSAnMyc7XG5cbiAgICAgICAgICAgIGNvbnN0IGxlYWRlcmJvYXJkX3BhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQnKTtcbiAgICAgICAgICAgIGxlYWRlcmJvYXJkX3BhbmUuc3R5bGUuekluZGV4ID0gJzcnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EnKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAvL2JsdXJcbiAgICAgICAgICAgIC8vIHNjb3JlX3N1Ym1pdF9idXR0b24uYmx1cigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gbWV0aG9kcyB0aGF0IGNhbiBiZSBsYXRlciBtb3ZlZCB0byBhIGNsYXNzIG9mIGl0cyBvd24uXG4gICAgZHJhd0JhY2tncm91bmQoY3R4KXtcbiAgICAgICAgY3R4LmZpbGxTdHlsZT0gXCIjMTkxOTE5XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5zdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChzdGFyWzBdLHN0YXJbMV0sMiwyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgY29sbGlzaW9uQ2hlY2soKXtcbiAgICAgICAgLy9OUENzXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5OUENzLmZvckVhY2goKG5wYyxpKSA9PiB7XG4gICAgICAgICAgICBpZihucGMuY29sbGlkZWRXaXRoKHRoYXQuSm91c3Rlcikpe1xuICAgICAgICAgICAgICAgIGlmKCF0aGF0LkpvdXN0ZXIuZXRoZXJlYWwpe1xuICAgICAgICAgICAgICAgICAgICBpZihucGMuY29sbGlkZSh0aGF0LkpvdXN0ZXIpKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvdW5kcyA9IFsnY29sbGlzaW9uMScsICdjb2xsaXNpb24yJywgJ2NvbGxpc2lvbjMnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVkX3NvdW5kID0gc291bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvdW5kcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xsaXNpb25fc291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzYW1wbGVkX3NvdW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbl9zb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlIG5wY1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5OUENzLnNwbGljZShpLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NwYXduIGVnZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lZ2dzLnB1c2gobmV3IEVnZyhucGMueCwgbnBjLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQuSm91c3Rlci5saXZlcyA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5Kb3VzdGVyLmRlYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vbGVkZ2VzXG4gICAgICAgIHRoYXQubGVkZ2VzLmZvckVhY2goKGxlZGdlKSA9PiB7XG4gICAgICAgICAgICAvL3dpdGggam91c3RlclxuICAgICAgICAgICAgbGVkZ2UuY29sbGlzaW9uSGFuZGxlcih0aGF0LkpvdXN0ZXIpO1xuXG4gICAgICAgICAgICAvL3dpdGggZWdnc1xuICAgICAgICAgICAgdGhhdC5lZ2dzLmZvckVhY2goZWdnID0+IHtcbiAgICAgICAgICAgICAgICBsZWRnZS5lZ2dDb2xsaXNpb24oZWdnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2xhdmFcbiAgICAgICAgdGhhdC5sYXZhcy5mb3JFYWNoKChsYXZhKSA9PiB7XG4gICAgICAgICAgICAvL0pvdXN0ZXIgY29sbGlzaW9uXG4gICAgICAgICAgICBpZighdGhhdC5Kb3VzdGVyLmV0aGVyZWFsICYmIGxhdmEuY29sbGlzaW9uSGFuZGxlcih0aGF0LkpvdXN0ZXIpKXtcbiAgICAgICAgICAgICAgICBpZih0aGF0LkpvdXN0ZXIubGl2ZXM9PT0xKXtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGF0LkpvdXN0ZXIuZGVhZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9lZ2cgY29sbGlzaW9uXG4gICAgICAgICAgICB0aGF0LmVnZ3MuZm9yRWFjaChlZ2cgPT4ge1xuICAgICAgICAgICAgICAgIGxhdmEuZWdnQ29sbGlzaW9uKGVnZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9lZ2dzXG4gICAgICAgIHRoYXQuZWdncy5mb3JFYWNoKChlZ2csaSkgPT4ge1xuICAgICAgICAgICAgaWYoZWdnLmNvbGxpc2lvbkhhbmRsZXIodGhhdC5Kb3VzdGVyKSl7XG5cbiAgICAgICAgICAgICAgICAvL3NvdW5kXG4gICAgICAgICAgICAgICAgbGV0IHNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY2t1cCcpO1xuICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcbiAgXG4gICAgICAgICAgICAgICAgLy9pbmNyZWFzZSBzY29yZVxuICAgICAgICAgICAgICAgIHRoYXQuc2NvcmUgKz0gMTUwO1xuICAgICAgICAgICAgICAgIHRoYXQuYW5pbWF0aW9ucy5wdXNoKG5ldyBKb3VzdEFuaW1hdGlvbignc2NvcmUtdGFnJywgZWdnLngtMTAsIGVnZy55LTEwLCAxMDAwKSk7XG5cbiAgICAgICAgICAgICAgICAvL2RlbGV0ZSBlZ2dcbiAgICAgICAgICAgICAgICB0aGF0LmVnZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlZ2dSZXNwYXduKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5lZ2dzLmZvckVhY2goKGVnZyxpKSA9PntcbiAgICAgICAgICAgIGlmKGVnZy5yZXNwYXduKXtcbiAgICAgICAgICAgICAgICB0aGF0LmVnZ3Muc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgdGhhdC5hbmltYXRpb25zLnB1c2gobmV3IEpvdXN0QW5pbWF0aW9uKCdsaWdodG5pbmcnLCBlZ2cueCAtIDUsIGVnZy55IC0gNSwgMzAwKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOUEMgPSBuZXcgTlBDKGVnZy54LCBlZ2cueSlcbiAgICAgICAgICAgICAgICB0aGF0Lk5QQ3MucHVzaChuZXdOUEMpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdOUEMueSAhPT0gZWdnLnkpIHsgdGhhdC5hbmltYXRpb25zLnB1c2gobmV3IEpvdXN0QW5pbWF0aW9uKCdsaWdodG5pbmcnLCBuZXdOUEMueCAtIDUsIG5ld05QQy55IC0gNSwgMzAwKSk7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBqb3VzdEFuaW1hdGlvbkRpc3BsYXkoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uLGkpID0+IHtcbiAgICAgICAgICAgIGlmKGFuaW1hdGlvbi5raWxsKXtcbiAgICAgICAgICAgICAgICB0aGF0LmFuaW1hdGlvbnMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdTY29yZShjdHgpe1xuXG4gICAgICAgIGxldCBib3hfd2lkdGggPSAodGhpcy5zY29yZSA9PT0gIDAgPyA2NSA6IDkwKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoNTA2LCAxMywgYm94X3dpZHRoKzQsIDI0KTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMTkxOTE5XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MDgsMTUsYm94X3dpZHRoLDIwKTtcblxuXG4gICAgICAgIC8vdGV4dFxuICAgICAgICBjdHguZm9udCA9IFwiMThweCBTYW5zIFNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGxldCBzdHIgPSBgU2NvcmU6ICR7dGhpcy5zY29yZX1gO1xuICAgICAgICBjdHguZmlsbFRleHQoc3RyLCA1MTAsIDMwKTtcbiAgICB9XG5cbiAgICBkcmF3TGl2ZXMoY3R4KSB7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDM5NiwgMTMsIDU5LCAyNCk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzE5MTkxOVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMzk4LCAxNSwgNTUsIDIwKTtcblxuXG4gICAgICAgIC8vaGVhcnRcbiAgICAgICAgY29uc3QgaGVhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhcnQnKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShoZWFydCwgMzkzLCAxMCwgNDAsIDQwKTtcblxuICAgICAgICAvL3RleHRcbiAgICAgICAgY3R4LmZvbnQgPSBcIjE4cHggU2FucyBTZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBsZXQgc3RyID0gYHggJHt0aGlzLkpvdXN0ZXIubGl2ZXN9YDtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHN0ciwgNDI1LCAzMCk7XG4gICAgfVxuXG59XG5cbi8vIGZ1bmN0aW9uIHNvdW5kKHNyYykge1xuLy8gICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4vLyAgICAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XG4vLyAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbi8vICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbi8vICAgICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuLy8gICAgIHRoaXMucGxheSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4vLyAgICAgfVxuLy8gICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgU3RhckpvdXN0ZXI7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWVudS5jc3MnO1xuaW1wb3J0IFN0YXJKb3VzdGVyIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb3VzdCcpO1xuXG5jb25zdCBlYXN5X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXN5LWJ1dHRvbicpO1xuY29uc3QgbWVkaXVtX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWRpdW0tYnV0dG9uJyk7XG5jb25zdCBoYXJkX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXJkLWJ1dHRvbicpO1xuY29uc3QgbXVzaWNfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljLWJ1dHRvbicpO1xuXG5jb25zdCBsZWFkZXJib2FyZF9wbGF5X2FnYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYWRlcmJvYXJkLXBsYXktYWdhaW4nKTtcbmNvbnN0IGxlYWRlcmJvYXJkX2JhY2tfdG9fbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC1iYWNrLXRvLW1lbnUnKTtcbmNvbnN0IHNjb3JlX3N1Ym1pdF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUtc3VibWl0LWJ1dHRvbicpO1xuXG5sZXQgYmFja2dyb3VuZF9tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW11c2ljJyk7XG5sZXQgY29sbGlzaW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xsaXNpb24xJyk7XG5sZXQgY29sbGlzaW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xsaXNpb24yJyk7XG5sZXQgY29sbGlzaW9uMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xsaXNpb24zJyk7XG5sZXQgcGFscGF0aW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbHBhdGluZScpO1xubGV0IGRlYXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYXRoLXNvdW5kJyk7XG5sZXQgcGlja3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY2t1cCcpO1xuXG5sZXQgbWVudV9tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW50aW5hJyk7XG5tZW51X211c2ljLnZvbHVtZSA9IDAuMjtcbm1lbnVfbXVzaWMucGxheSgpO1xuXG5tdXNpY19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjb25zdCBzb3VuZHMgPSBbYmFja2dyb3VuZF9tdXNpYywgbWVudV9tdXNpYywgY29sbGlzaW9uMSwgY29sbGlzaW9uMiwgY29sbGlzaW9uMywgcGFscGF0aW5lLCBkZWF0aCwgcGlja3VwXTtcblxuICAgIGlmKG1lbnVfbXVzaWMudm9sdW1lID4gMCl7XG4gICAgICAgIHNvdW5kcy5mb3JFYWNoKHNvdW5kID0+IHNvdW5kLnZvbHVtZSA9IDApO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWMtYnV0dG9uLWltYWdlJykuc3JjID0gXCIuL3NyYy9pbWFnZXMvbXV0ZWQucG5nXCJcbiAgICB9ZWxzZXtcbiAgICAgICAgc291bmRzLmZvckVhY2goc291bmQgPT4gc291bmQudm9sdW1lID0gMC4zKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljLWJ1dHRvbi1pbWFnZScpLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3VubXV0ZWQucG5nXCJcbiAgICB9XG59KTtcblxuZWFzeV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWVudV9tdXNpYy5wYXVzZSgpO1xuICAgIGNhbnZhcy5zdHlsZS56SW5kZXggPSAnNSc7XG4gICAgZWFzeV9idXR0b24uYmx1cigpO1xuICAgIGNhbnZhcy5mb2N1cygpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWUnLCAnZWFzeScpO1xuXG4gICAgbmV3IFN0YXJKb3VzdGVyKGNhbnZhcywgJ2Vhc3knKTtcbiAgICBcbn0pO1xuXG5tZWRpdW1fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lbnVfbXVzaWMucGF1c2UoKTtcbiAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gJzUnO1xuXG4gICAgbWVkaXVtX2J1dHRvbi5ibHVyKCk7XG4gICAgY2FudmFzLmZvY3VzKCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZScsICdtZWRpdW0nKTtcblxuICAgIG5ldyBTdGFySm91c3RlcihjYW52YXMsICdtZWRpdW0nKTtcbiAgICBcbn0pO1xuXG5oYXJkX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51X211c2ljLnBhdXNlKCk7XG4gICAgY2FudmFzLnN0eWxlLnpJbmRleCA9ICc1JztcblxuICAgIGhhcmRfYnV0dG9uLmJsdXIoKTtcbiAgICBjYW52YXMuZm9jdXMoKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lJywgJ2hhcmQnKTtcblxuICAgIG5ldyBTdGFySm91c3RlcihjYW52YXMsICdoYXJkJylcblxufSk7XG5cblxubGVhZGVyYm9hcmRfcGxheV9hZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBsZWFkZXJib2FyZF9wYW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYWRlcmJvYXJkJyk7XG4gICAgbGVhZGVyYm9hcmRfcGFuZS5zdHlsZS56SW5kZXggPSAnMSc7XG5cbiAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gJzUnO1xuICAgIGxlYWRlcmJvYXJkX3BsYXlfYWdhaW4uYmx1cigpO1xuICAgIGNhbnZhcy5mb2N1cygpO1xuXG4gICAgbmV3IFN0YXJKb3VzdGVyKGNhbnZhcywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWUnKSk7XG59KTtcblxubGVhZGVyYm9hcmRfYmFja190b19tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGxlYWRlcmJvYXJkX3BhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQnKTtcbiAgICBsZWFkZXJib2FyZF9wYW5lLnN0eWxlLnpJbmRleCA9ICcxJztcblxuICAgIC8vYmx1clxuICAgIGxlYWRlcmJvYXJkX2JhY2tfdG9fbWVudS5ibHVyKCk7XG5cbiAgICAvL21lbnUgbXVzaWNcbiAgICBsZXQgbWVudV9tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW50aW5hJyk7XG4gICAgbWVudV9tdXNpYy5wbGF5KCk7XG59KTtcblxuLy8gbmV3IFN0YXJKb3VzdGVyKGNhbnZhcywnZWFzeScpO1xuLy8gY29uc3Qgc2NvcmVfc3VibWl0X21lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUtc3VibWl0Jyk7XG5cbi8vIHNjb3JlX3N1Ym1pdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbi8vICAgICAvL3NhdmUgc2NvcmUgdG8gbG9jYWxTdG9yYWdlXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlLXN1Ym1pdC11c2VybmFtZScpLnZhbHVlLCA1MDApO1xuXG4vLyAgICAgLy9wb3B1bGF0ZSBzY29yZWJvYXJkXG4vLyAgICAgY29uc3Qgc2NvcmVib2FyZF9uYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC1uYW1lcycpO1xuLy8gICAgIGNvbnN0IHNjb3JlYm9hcmRfc2NvcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYWRlcmJvYXJkLXNjb3JlcycpO1xuLy8gICAgIGxldCBzY29yZXMgPSB7ICdTaW5hbic6IDE1MDAsICdBbCc6IDEyNTAgfTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICBpZiAoIVsnZ2FtZScsICdsb2dsZXZlbDp3ZWJwYWNrLWRldi1zZXJ2ZXInXS5pbmNsdWRlcyhsb2NhbFN0b3JhZ2Uua2V5KGkpKSkge1xuLy8gICAgICAgICAgICAgc2NvcmVzW2xvY2FsU3RvcmFnZS5rZXkoaSldID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGxldCBzb3J0ZWRfbmFtZXMgPSBPYmplY3Qua2V5cyhzY29yZXMpLnNvcnQoZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIHNjb3Jlc1t4XSAtIHNjb3Jlc1t5XSB9KTtcblxuLy8gICAgIGRlYnVnZ2VyO1xuXG4vLyAgICAgc29ydGVkX25hbWVzLnJldmVyc2UoKS5mb3JFYWNoKG5hbWUgPT4ge1xuLy8gICAgICAgICBsZXQgbGluYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbi8vICAgICAgICAgbGluYW1lLmlubmVySFRNTCA9IGAke25hbWV9YDtcbi8vICAgICAgICAgc2NvcmVib2FyZF9uYW1lcy5hcHBlbmQobGluYW1lKTtcblxuLy8gICAgICAgICBsZXQgbGlzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4vLyAgICAgICAgIGxpc2NvcmUuaW5uZXJIVE1MID0gYCR7c2NvcmVzW25hbWVdfWA7XG4vLyAgICAgICAgIHNjb3JlYm9hcmRfc2NvcmVzLmFwcGVuZChsaXNjb3JlKTtcbi8vICAgICB9KTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnd2hhdCBhYm91dCB0aGlzPycpXG4vLyAgICAgLy9oaWRlIHNjb3JlIHN1Ym1pdCBtZW51XG4vLyAgICAgZGVidWdnZXI7XG4vLyAgICAgc2NvcmVfc3VibWl0X21lbnUuc3R5bGUuekluZGV4ID0gJzInO1xuLy8gICAgIGNhbnZhcy5zdHlsZS56SW5kZXggPSAnMyc7XG5cblxuLy8gICAgIGRlYnVnZ2VyO1xuLy8gICAgIGNvbnN0IGxlYWRlcmJvYXJkX3BhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQnKTtcbi8vICAgICBsZWFkZXJib2FyZF9wYW5lLnN0eWxlLnpJbmRleCA9ICc3Jztcbi8vICAgICBjb25zb2xlLmxvZygnYScpO1xuXG4vLyAgICAgLy9ibHVyXG4vLyAgICAgc2NvcmVfc3VibWl0X2J1dHRvbi5ibHVyKCk7XG4vLyB9KTsiLCJjb25zdCBDT05TVEFOVFM9e1xuICAgIEdSQVZJVFk6IDAuMDUsXG4gICAgRFJBRzogMC4wMixcbiAgICBGTEFQX1NQRUVEOiAxLjUsXG4gICAgTU9WRV9TUEVFRDogMS41LFxuICAgIFRFUk1JTkFMX1lfVkVMT0NJVFk6IDUsXG4gICAgVEVSTUlOQUxfWF9WRUxPQ0lUWTogNSxcbiAgICBKT1VTVEVSX1dJRFRIOiAzMCxcbiAgICBKT1VTVEVSX0hFSUdIVDogNTBcbn07XG5cblxuY2xhc3MgSm91c3RlcntcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKXtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy54ID0gNDUwO1xuICAgICAgICB0aGlzLnkgPSAxNjA7XG4gICAgICAgIHRoaXMueF92ZWwgPSAwO1xuICAgICAgICB0aGlzLnlfdmVsID0gMDtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIHRoaXMud2lkdGggPSBDT05TVEFOVFMuSk9VU1RFUl9XSURUSDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBDT05TVEFOVFMuSk9VU1RFUl9IRUlHSFQ7XG4gICAgICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgICAgICB0aGlzLmZhY2luZyA9ICh0aGlzLnhfdmVsID49IDAgPyAncmlnaHQnIDogJ2xlZnQnKTtcblxuICAgICAgICAvL3NwYXduXG4gICAgICAgIHRoaXMuZXRoZXJlYWwgPSB0cnVlO1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5ldGhlcmVhbCA9IGZhbHNlO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBmbHkoKXtcbiAgICAgICAgdGhpcy55X3ZlbCAtPSBDT05TVEFOVFMuRkxBUF9TUEVFRDtcbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpe1xuICAgICAgICB0aGlzLnhfdmVsIC09IENPTlNUQU5UUy5NT1ZFX1NQRUVEO1xuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy54X3ZlbCArPSBDT05TVEFOVFMuTU9WRV9TUEVFRDtcbiAgICB9XG5cbiAgICBtb3ZlSm91c3Rlcigpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy55X3ZlbDtcbiAgICAgICAgdGhpcy55X3ZlbCArPSBDT05TVEFOVFMuR1JBVklUWTtcblxuICAgICAgICB0aGlzLnggKz0gdGhpcy54X3ZlbDtcbiAgICAgICAgaWYodGhpcy54X3ZlbCA+IDApe1xuICAgICAgICAgICAgaWYodGhpcy54X3ZlbCA8IENPTlNUQU5UUy5EUkFHKXtcbiAgICAgICAgICAgICAgICB0aGlzLnhfdmVsPTA7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMueF92ZWwgLT0gQ09OU1RBTlRTLkRSQUc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMueF92ZWwgPCAwKXtcbiAgICAgICAgICAgIGlmICgtdGhpcy54X3ZlbCA8IENPTlNUQU5UUy5EUkFHKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54X3ZlbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueF92ZWwgKz0gQ09OU1RBTlRTLkRSQUc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54X3ZlbCkgPiBDT05TVEFOVFMuVEVSTUlOQUxfWF9WRUxPQ0lUWSl7XG4gICAgICAgICAgICBpZih0aGlzLnhfdmVsID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy54X3ZlbCA9IENPTlNUQU5UUy5URVJNSU5BTF9YX1ZFTE9DSVRZO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy54X3ZlbCA9IENPTlNUQU5UUy5URVJNSU5BTF9YX1ZFTE9DSVRZICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnlfdmVsKSA+IENPTlNUQU5UUy5URVJNSU5BTF9ZX1ZFTE9DSVRZKSB7XG4gICAgICAgICAgICBpZiAodGhpcy55X3ZlbCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnlfdmVsID0gQ09OU1RBTlRTLlRFUk1JTkFMX1lfVkVMT0NJVFk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueV92ZWwgPSBDT05TVEFOVFMuVEVSTUlOQUxfWV9WRUxPQ0lUWSAqIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy54ID4gdGhpcy5kaW1lbnNpb25zLndpZHRoKXtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMueCA8IDApe1xuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMueSA8PSAwKXtcbiAgICAgICAgICAgIHRoaXMueSA9IDE7XG4gICAgICAgICAgICB0aGlzLnlfdmVsID0gLSh0aGlzLnlfdmVsLzQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0pvdXN0ZXIoY3R4KXtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCBDT05TVEFOVFMuSk9VU1RFUl9XSURUSCwgQ09OU1RBTlRTLkpPVVNURVJfSEVJR0hUKTtcbiAgICAgICAgdGhpcy5mYWNpbmcgPSAodGhpcy54X3ZlbCA+IDAgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICBcbiAgICAgICAgbGV0IGltYWdlO1xuICAgICAgICBpZih0aGlzLmZhY2luZz09PSdsZWZ0Jyl7XG4gICAgICAgICAgICBpZiAodGhpcy5ldGhlcmVhbCkge1xuICAgICAgICAgICAgICAgIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2x1a2UtbGVmdC1mcm96ZW4nKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2x1a2UtbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgdGhpcy54IC0gNSwgdGhpcy55IC0gMTAsIENPTlNUQU5UUy5KT1VTVEVSX1dJRFRIICsgMTAsIENPTlNUQU5UUy5KT1VTVEVSX0hFSUdIVCArIDE1KTtcbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuZXRoZXJlYWwpe1xuICAgICAgICAgICAgICAgIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2x1a2UtcmlnaHQtZnJvemVuJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsdWtlLXJpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHRoaXMueC01LCB0aGlzLnktMTAsIENPTlNUQU5UUy5KT1VTVEVSX1dJRFRIKzEwLCBDT05TVEFOVFMuSk9VU1RFUl9IRUlHSFQrMTUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpe1xuICAgICAgICB0aGlzLm1vdmVKb3VzdGVyKCk7XG4gICAgICAgIHRoaXMuZHJhd0pvdXN0ZXIoY3R4KTtcbiAgICB9XG5cbiAgICBkZWFkKCl7XG5cbiAgICAgICAgbGV0IGRlYXRoX3NvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYXRoLXNvdW5kJyk7XG4gICAgICAgIGRlYXRoX3NvdW5kLnBsYXkoKTtcblxuICAgICAgICB0aGlzLmxpdmVzIC09IDE7XG4gICAgICAgIHRoaXMueCA9IDE1MDA7XG4gICAgICAgIHRoaXMueSA9IDE1MDA7XG5cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhhdC54ID0gNDUwO1xuICAgICAgICB0aGF0LnkgPSAxNjA7XG4gICAgICAgIHRoYXQueF92ZWwgPSAwO1xuICAgICAgICB0aGF0LnlfdmVsID0gMDtcbiAgICAgICAgdGhhdC5ldGhlcmVhbCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5ldGhlcmVhbCA9IGZhbHNlO1xuICAgICAgICB9LDMwMDApO1xuICAgICAgICB9LCAyMDAwKTtcblxuXG4gICAgfVxuICAgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvdXN0ZXI7IiwiY2xhc3MgTGF2YSB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLndpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgdGhpcy54ID0gZGltZW5zaW9ucy54O1xuICAgICAgICB0aGlzLnkgPSBkaW1lbnNpb25zLnk7XG4gICAgfVxuXG4gICAgZHJhd0xhdmEoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNFMjRDMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5kcmF3TGF2YShjdHgpO1xuICAgIH1cblxuICAgIGNvbGxpc2lvbkhhbmRsZXIoY2hhcikge1xuICAgICAgICBsZXQgY29uZGl0aW9uMSA9ICh0aGlzLnggPCAoY2hhci54ICsgY2hhci53aWR0aCkpO1xuICAgICAgICBsZXQgY29uZGl0aW9uMiA9ICgodGhpcy54ICsgdGhpcy53aWR0aCkgPiBjaGFyLngpO1xuICAgICAgICBsZXQgY29uZGl0aW9uMyA9ICh0aGlzLnkgPCAoY2hhci55ICsgY2hhci5oZWlnaHQpKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjQgPSAoKHRoaXMueSArIHRoaXMuaGVpZ2h0KSA+IGNoYXIueSk7XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbjEgJiYgY29uZGl0aW9uMiAmJiBjb25kaXRpb24zICYmIGNvbmRpdGlvbjQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVnZ0NvbGxpc2lvbihlZ2cpe1xuICAgICAgICBsZXQgY29uZGl0aW9uMSA9ICh0aGlzLnggPCAoZWdnLnggKyBlZ2cud2lkdGgpKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjIgPSAoKHRoaXMueCArIHRoaXMud2lkdGgpID4gZWdnLngpO1xuICAgICAgICBsZXQgY29uZGl0aW9uMyA9ICh0aGlzLnkgPCAoZWdnLnkgKyBlZ2cuaGVpZ2h0KSk7XG4gICAgICAgIGxldCBjb25kaXRpb240ID0gKCh0aGlzLnkgKyB0aGlzLmhlaWdodCkgPiBlZ2cueSk7XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbjEgJiYgY29uZGl0aW9uMiAmJiBjb25kaXRpb24zICYmIGNvbmRpdGlvbjQpIHtcbiAgICAgICAgICAgIGVnZy55X3ZlbCA9IDA7XG4gICAgICAgICAgICBlZ2cueSA9ICh0aGlzLnkgLSBlZ2cuaGVpZ2h0IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMYXZhOyIsIlxuY2xhc3MgTGVkZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpe1xuICAgICAgICB0aGlzLndpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgdGhpcy54ID0gZGltZW5zaW9ucy54O1xuICAgICAgICB0aGlzLnkgPSBkaW1lbnNpb25zLnk7XG4gICAgfVxuXG4gICAgZHJhd0xlZGdlKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjNzgzMjAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0xlZGdlKGN0eCk7XG4gICAgfVxuXG4gICAgY29sbGlzaW9uSGFuZGxlcihjaGFyKXtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjEgPSAodGhpcy54IDwgKGNoYXIueCArIGNoYXIud2lkdGgpKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjIgPSAoKHRoaXMueCArIHRoaXMud2lkdGgpID4gY2hhci54KTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjMgPSAodGhpcy55IDwgKGNoYXIueSArIGNoYXIuaGVpZ2h0KSk7XG4gICAgICAgIGxldCBjb25kaXRpb240ID0gKCh0aGlzLnkgKyB0aGlzLmhlaWdodCkgPiBjaGFyLnkpO1xuXG4gICAgICAgXG4gICAgICAgIGlmKGNvbmRpdGlvbjEgJiYgY29uZGl0aW9uMiAmJiBjb25kaXRpb24zICYmIGNvbmRpdGlvbjQpe1xuICAgICAgICAgICAgaWYoKChjaGFyLngrY2hhci53aWR0aCkgPj0gdGhpcy54KSB8fCBjaGFyLnggPD0gKHRoaXMueCArIHRoaXMud2lkdGgpKXtcbiAgICAgICAgICAgICAgICBjaGFyLnhfdmVsID0gLShjaGFyLnhfdmVsKjAuNzUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgoY2hhci55ICsgY2hhci5oZWlnaHQpID49IHRoaXMueSkgfHwgY2hhci55IDw9ICh0aGlzLnkgKyB0aGlzLmhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBjaGFyLnlfdmVsID0gLShjaGFyLnlfdmVsKjAuNzUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWdnQ29sbGlzaW9uKGVnZykge1xuICAgICAgICBsZXQgY29uZGl0aW9uMSA9ICh0aGlzLnggPCAoZWdnLnggKyBlZ2cud2lkdGgpKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjIgPSAoKHRoaXMueCArIHRoaXMud2lkdGgpID4gZWdnLngpO1xuICAgICAgICBsZXQgY29uZGl0aW9uMyA9ICh0aGlzLnkgPCAoZWdnLnkgKyBlZ2cuaGVpZ2h0KSk7XG4gICAgICAgIGxldCBjb25kaXRpb240ID0gKCh0aGlzLnkgKyB0aGlzLmhlaWdodCkgPiBlZ2cueSk7XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbjEgJiYgY29uZGl0aW9uMiAmJiBjb25kaXRpb24zICYmIGNvbmRpdGlvbjQpIHtcbiAgICAgICAgICAgICAgICBlZ2cueV92ZWwgPSAwO1xuICAgICAgICAgICAgICAgIGVnZy55ID0gKHRoaXMueSAtIGVnZy5oZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGVkZ2U7IiwiY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIFRFUk1JTkFMX1lfVkVMT0NJVFk6IDUsXG4gICAgVEVSTUlOQUxfWF9WRUxPQ0lUWTogMixcbiAgICBOUENfV0lEVEg6IDMwLFxuICAgIE5QQ19IRUlHSFQ6IDUwXG59O1xuXG5cbmNsYXNzIE5QQyB7XG4gICAgY29uc3RydWN0b3IoeCx5KSB7XG4gICAgICAgIC8vIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMueF92ZWwgPSAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IC0zIDogMyk7XG4gICAgICAgIHRoaXMueV92ZWwgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gQ09OU1RBTlRTLk5QQ19XSURUSDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBDT05TVEFOVFMuTlBDX0hFSUdIVDtcbiAgICAgICAgdGhpcy5mYWNpbmcgPSAodGhpcy54X3ZlbCA+PSAwKSA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgIH1cblxuICAgIG1vdmVOUEMoKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnlfdmVsO1xuICAgICAgICAvLyB0aGlzLnlfdmVsICs9IENPTlNUQU5UUy5HUkFWSVRZO1xuXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnhfdmVsO1xuICAgICAgICAvLyBpZiAodGhpcy54X3ZlbCA+IDApIHtcbiAgICAgICAgLy8gICAgIHRoaXMueF92ZWwgLT0gQ09OU1RBTlRTLkRSQUc7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy54X3ZlbCA8IDApIHtcbiAgICAgICAgLy8gICAgIHRoaXMueF92ZWwgKz0gQ09OU1RBTlRTLkRSQUc7XG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIC8vIGlmIChNYXRoLmFicyh0aGlzLnlfdmVsKSA+IENPTlNUQU5UUy5URVJNSU5BTF9ZX1ZFTE9DSVRZKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy55X3ZlbCA+IDApIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnlfdmVsID0gQ09OU1RBTlRTLlRFUk1JTkFMX1lfVkVMT0NJVFk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMueV92ZWwgPSBDT05TVEFOVFMuVEVSTUlOQUxfWV9WRUxPQ0lUWSAqIC0xO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHRoaXMueSA+IDQwMCkge1xuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy54ID4gMTAwMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAxMDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd05QQyhjdHgpIHtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgQ09OU1RBTlRTLk5QQ19XSURUSCwgQ09OU1RBTlRTLk5QQ19IRUlHSFQpO1xuXG4gICAgICAgIGxldCBpbWFnZTtcbiAgICAgICAgaWYodGhpcy5mYWNpbmc9PT0nbGVmdCcpe1xuICAgICAgICAgICAgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0aC1sZWZ0Jyk7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB0aGlzLngtNSwgdGhpcy55LTEwLCBDT05TVEFOVFMuTlBDX1dJRFRIKzEwLCBDT05TVEFOVFMuTlBDX0hFSUdIVCsxNSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0aC1yaWdodCcpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgdGhpcy54LTUsIHRoaXMueS0xMCwgQ09OU1RBTlRTLk5QQ19XSURUSCsxMCwgQ09OU1RBTlRTLk5QQ19IRUlHSFQrMTUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgpIHtcbiAgICAgICAgdGhpcy5tb3ZlTlBDKCk7XG4gICAgICAgIHRoaXMuZHJhd05QQyhjdHgpO1xuICAgIH1cblxuICAgIC8vY29sbGlzaW9uIG1ldGhvZHNcblxuICAgIGNvbGxpZGVkV2l0aChqb3VzdGVyKXtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjEgPSAodGhpcy54IDwgKGpvdXN0ZXIueCArIGpvdXN0ZXIud2lkdGgpKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjIgPSAoKHRoaXMueCArIHRoaXMud2lkdGgpID4gam91c3Rlci54KTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjMgPSAodGhpcy55IDwgKGpvdXN0ZXIueSArIGpvdXN0ZXIuaGVpZ2h0KSk7XG4gICAgICAgIGxldCBjb25kaXRpb240ID0gKCh0aGlzLnkgKyB0aGlzLmhlaWdodCkgPiBqb3VzdGVyLnkpO1xuXG4gICAgICAgIGlmKGNvbmRpdGlvbjEgJiYgY29uZGl0aW9uMiAmJiBjb25kaXRpb24zICYmIGNvbmRpdGlvbjQpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZShqb3VzdGVyKXtcbiAgICAgICAgaWYodGhpcy5mYWNpbmcgPT09ICdsZWZ0JyAmJiBqb3VzdGVyLmZhY2luZyA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgIGlmKGpvdXN0ZXIueCA+IHRoaXMueCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mYWNpbmcgPT09ICdyaWdodCcgJiYgam91c3Rlci5mYWNpbmcgPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgaWYgKGpvdXN0ZXIueCA8IHRoaXMueCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGlmIChqb3VzdGVyLnkgPCB0aGlzLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5QQzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9