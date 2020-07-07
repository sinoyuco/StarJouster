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
      var cvs = document.getElementById('joust'); // debugger;

      var score_submit_menu = document.getElementById('score-submit');
      score_submit_menu.style.zIndex = '5';
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
        });
        debugger;
        consol.log('can you read this?');
        debugger; // console.log('what about this?')
        //hide score submit menu

        score_submit_menu.style.zIndex = '1';
        cvs.style.zIndex = '2';
        debugger; //menu music

        var menu_music = document.getElementById('cantina');
        menu_music.play();
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
  canvas.style.zIndex = '4';
  easy_button.blur();
  canvas.focus();
  localStorage.setItem('game', 'easy');
  new _game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, 'easy');
});
medium_button.addEventListener('click', function () {
  menu_music.pause();
  canvas.style.zIndex = '4';
  medium_button.blur();
  canvas.focus();
  localStorage.setItem('game', 'medium');
  new _game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, 'medium');
});
hard_button.addEventListener('click', function () {
  menu_music.pause();
  canvas.style.zIndex = '4';
  hard_button.blur();
  canvas.focus();
  localStorage.setItem('game', 'hard');
  new _game__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, 'hard');
}); // new StarJouster(canvas,'easy');

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
          this.x_vel -= CONSTANTS.DRAG;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbl9jbGFzc2VzL2pvdXN0X2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWdnLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvam91c3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF2YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25wYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21lbnUuY3NzPzI5MjEiXSwibmFtZXMiOlsiQ09OU1RBTlRTIiwiU0NPUkVfV0lEVEgiLCJTQ09SRV9IRUlHSFQiLCJTTU9LRV9XSURUSCIsIlNNT0tFX0hFSUdIVCIsIkpvdXN0QW5pbWF0aW9uIiwidHlwZSIsIngiLCJ5IiwidGltZSIsImtpbGwiLCJ0aGF0Iiwic2V0VGltZW91dCIsImN0eCIsImVsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3SW1hZ2UiLCJkcmF3Sm91c3RBbmltYXRpb24iLCJHUkFWSVRZIiwiVEVSTUlOQUxfWV9WRUxPQ0lUWSIsIkVHR19XSURUSCIsIkVHR19IRUlHSFQiLCJFZ2ciLCJ3aWR0aCIsImhlaWdodCIsInlfdmVsIiwic3RhdHVzIiwicGljdHVyZSIsInJlc3Bhd24iLCJzZXRJbnRlcnZhbCIsIk1hdGgiLCJhYnMiLCJsaWdodHNhYmVyIiwiaW1hZ2UiLCJtb3ZlRWdnIiwiZHJhd0VnZyIsImpvdXN0ZXIiLCJjb25kaXRpb24xIiwiY29uZGl0aW9uMiIsImNvbmRpdGlvbjMiLCJjb25kaXRpb240IiwiTU9ERVMiLCJSRVNQQVdOX1RJTUVTIiwiU3RhckpvdXN0ZXIiLCJjYW52YXMiLCJkaWZmIiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJKb3VzdGVyIiwicnVubmluZyIsIk5QQ3MiLCJpIiwicHVzaCIsIk5QQyIsImZsb29yIiwicmFuZG9tIiwiYm90dG9tX2xlZGdlIiwiTGVkZ2UiLCJtaWRfb25lIiwibWlkX3R3byIsIm1pZF90aHJlZSIsInRvcF9vbmUiLCJ0b3BfdHdvIiwidG9wX3RocmVlIiwibGVkZ2VzIiwibGVmdF9sYXZhIiwiTGF2YSIsInJpZ2h0X2xhdmEiLCJsYXZhcyIsImVnZ3MiLCJhbmltYXRpb25zIiwic2NvcmUiLCJzdGFycyIsInJlZ2lzdGVyR2FtZUNvbnRyb2xzIiwicmVzdGFydCIsIm11c2ljIiwicGxheSIsIm5ld19ucGNfYW5pbWF0aW9uIiwibmV3X25wYyIsImFuaW1hdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpc0NvbXBvc2luZyIsImtleUNvZGUiLCJzcGFjZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiZXhpdFRvTWVudSIsImUiLCJmbHkiLCJkcmF3QmFja2dyb3VuZCIsImZvckVhY2giLCJsZWRnZSIsImxhdmEiLCJkcmF3U2NvcmUiLCJkcmF3TGl2ZXMiLCJucGMiLCJlZ2ciLCJhbmltYXRpb24iLCJjb2xsaXNpb25DaGVjayIsImVnZ1Jlc3Bhd24iLCJqb3VzdEFuaW1hdGlvbkRpc3BsYXkiLCJyZXEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsImN2cyIsInN0eWxlIiwiekluZGV4IiwibWVudV9tdXNpYyIsImdhbWVfb3Zlcl9zb3VuZCIsInNjb3JlX3N1Ym1pdF9tZW51Iiwic2NvcmVfc3VibWl0X2J1dHRvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ2YWx1ZSIsInNjb3JlYm9hcmRfbmFtZXMiLCJzY29yZWJvYXJkX3Njb3JlcyIsInNjb3JlcyIsImxlbmd0aCIsImluY2x1ZGVzIiwia2V5IiwicGFyc2VJbnQiLCJnZXRJdGVtIiwic29ydGVkX25hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZXZlcnNlIiwibmFtZSIsImxpbmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJsaXNjb3JlIiwiY29uc29sIiwibG9nIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdGFyIiwiY29sbGlkZWRXaXRoIiwiZXRoZXJlYWwiLCJjb2xsaWRlIiwic291bmRzIiwic2FtcGxlZF9zb3VuZCIsImNvbGxpc2lvbl9zb3VuZCIsInNwbGljZSIsImxpdmVzIiwiZ2FtZU92ZXIiLCJkZWFkIiwiY29sbGlzaW9uSGFuZGxlciIsImVnZ0NvbGxpc2lvbiIsInNvdW5kIiwibmV3TlBDIiwiYm94X3dpZHRoIiwiZm9udCIsInN0ciIsImZpbGxUZXh0IiwiaGVhcnQiLCJlYXN5X2J1dHRvbiIsIm1lZGl1bV9idXR0b24iLCJoYXJkX2J1dHRvbiIsIm11c2ljX2J1dHRvbiIsImJhY2tncm91bmRfbXVzaWMiLCJjb2xsaXNpb24xIiwiY29sbGlzaW9uMiIsImNvbGxpc2lvbjMiLCJwYWxwYXRpbmUiLCJkZWF0aCIsInBpY2t1cCIsInZvbHVtZSIsInNyYyIsImJsdXIiLCJmb2N1cyIsIkRSQUciLCJGTEFQX1NQRUVEIiwiTU9WRV9TUEVFRCIsIlRFUk1JTkFMX1hfVkVMT0NJVFkiLCJKT1VTVEVSX1dJRFRIIiwiSk9VU1RFUl9IRUlHSFQiLCJ4X3ZlbCIsImZhY2luZyIsIm1vdmVKb3VzdGVyIiwiZHJhd0pvdXN0ZXIiLCJkZWF0aF9zb3VuZCIsImRyYXdMYXZhIiwiY2hhciIsImRyYXdMZWRnZSIsIk5QQ19XSURUSCIsIk5QQ19IRUlHSFQiLCJtb3ZlTlBDIiwiZHJhd05QQyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FB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OztBQzlHQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgU0NPUkVfV0lEVEg6IDMwLFxuICAgIFNDT1JFX0hFSUdIVDogMjAsXG4gICAgU01PS0VfV0lEVEg6IDMwLFxuICAgIFNNT0tFX0hFSUdIVDogNTBcbn1cblxuY2xhc3MgSm91c3RBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUseCx5LHRpbWUpe1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmtpbGwgPSBmYWxzZTtcblxuXG4gICAgICAgIC8vZGlzYWJsZSBhbmltYXRpb25cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQua2lsbCA9IHRydWU7XG4gICAgICAgIH0sIHRoYXQudGltZSk7XG4gICAgfVxuXG4gICAgZHJhd0pvdXN0QW5pbWF0aW9uKGN0eCl7XG4gICAgICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudHlwZSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZWxlLCB0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0pvdXN0QW5pbWF0aW9uKGN0eCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvdXN0QW5pbWF0aW9uOyIsImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBHUkFWSVRZOiAwLjA1LFxuICAgIFRFUk1JTkFMX1lfVkVMT0NJVFk6IDUsXG4gICAgRUdHX1dJRFRIOiAzMCxcbiAgICBFR0dfSEVJR0hUOiAzMFxufTtcblxuY2xhc3MgRWdne1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpe1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gQ09OU1RBTlRTLkVHR19XSURUSDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBDT05TVEFOVFMuRUdHX0hFSUdIVDtcbiAgICAgICAgdGhpcy55X3ZlbCA9IDA7XG5cbiAgICAgICAgdGhpcy5zdGF0dXMgPSAndW5hdHRhaW5hYmxlJztcblxuICAgICAgICB0aGlzLnBpY3R1cmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJlc3Bhd24gPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQucGljdHVyZSA9ICF0aGF0LnBpY3R1cmU7XG4gICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgLy9lZ2cgc3dpdGNoXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5zdGF0dXMgPSAnYXR0YWluYWJsZSc7XG4gICAgICAgIH0sMjAwMCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnJlc3Bhd24gPSB0cnVlO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgbW92ZUVnZygpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMueV92ZWw7XG4gICAgICAgIHRoaXMueV92ZWwgKz0gQ09OU1RBTlRTLkdSQVZJVFk7XG5cblxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55X3ZlbCkgPiBDT05TVEFOVFMuVEVSTUlOQUxfWV9WRUxPQ0lUWSkge1xuICAgICAgICAgICAgaWYgKHRoaXMueV92ZWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55X3ZlbCA9IENPTlNUQU5UUy5URVJNSU5BTF9ZX1ZFTE9DSVRZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnlfdmVsID0gQ09OU1RBTlRTLlRFUk1JTkFMX1lfVkVMT0NJVFkgKiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFZ2coY3R4KSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbGlnaHRzYWJlcjtcbiAgICAgICAgaWYodGhpcy5zdGF0dXMgPT09ICd1bmF0dGFpbmFibGUnKXtcbiAgICAgICAgICAgIGxpZ2h0c2FiZXIgPSAnbGlnaHRzYWJlcic7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGlnaHRzYWJlciA9ICh0aGlzLnBpY3R1cmUgPyAnbGlnaHRzYWJlcicgOiAnbGlnaHRzYWJlci1mbGFzaGluZycpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpZ2h0c2FiZXIpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB0aGlzLngtNSwgdGhpcy55LTUsIHRoaXMud2lkdGgrMTAsIHRoaXMuaGVpZ2h0KzEwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLm1vdmVFZ2coKTtcbiAgICAgICAgdGhpcy5kcmF3RWdnKGN0eCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIGhhdGNoKCl7XG4gICAgLy8gICAgIFxuICAgIC8vIH1cblxuICAgIGNvbGxpc2lvbkhhbmRsZXIoam91c3Rlcil7XG4gICAgICAgIGxldCBjb25kaXRpb24xID0gKHRoaXMueCA8IChqb3VzdGVyLnggKyBqb3VzdGVyLndpZHRoKSk7XG4gICAgICAgIGxldCBjb25kaXRpb24yID0gKCh0aGlzLnggKyB0aGlzLndpZHRoKSA+IGpvdXN0ZXIueCk7XG4gICAgICAgIGxldCBjb25kaXRpb24zID0gKHRoaXMueSA8IChqb3VzdGVyLnkgKyBqb3VzdGVyLmhlaWdodCkpO1xuICAgICAgICBsZXQgY29uZGl0aW9uNCA9ICgodGhpcy55ICsgdGhpcy5oZWlnaHQpID4gam91c3Rlci55KTtcblxuICAgICAgICBpZiAoY29uZGl0aW9uMSAmJiBjb25kaXRpb24yICYmIGNvbmRpdGlvbjMgJiYgY29uZGl0aW9uNCkge1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0dXMgPT09ICdhdHRhaW5hYmxlJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWdnOyIsImltcG9ydCBKb3VzdGVyIGZyb20gJy4vam91c3Rlcic7XG5pbXBvcnQgTlBDIGZyb20gJy4vbnBjJztcbmltcG9ydCBMZWRnZSBmcm9tICcuL2xlZGdlJztcbmltcG9ydCBMYXZhIGZyb20gJy4vbGF2YSc7XG5pbXBvcnQgRWdnIGZyb20gJy4vZWdnJztcbmltcG9ydCBKb3VzdEFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbl9jbGFzc2VzL2pvdXN0X2FuaW1hdGlvbic7XG5cbmNvbnN0IE1PREVTID0ge1xuICAgICdlYXN5JzogNixcbiAgICAnbWVkaXVtJzogMTAsXG4gICAgJ2hhcmQnOiAxNVxufVxuXG5jb25zdCBSRVNQQVdOX1RJTUVTID0ge1xuICAgICdlYXN5JzoxMDAwMCxcbiAgICAnbWVkaXVtJzo4MDAwLFxuICAgICdoYXJkJzo1MDAwXG59XG5cbmNsYXNzIFN0YXJKb3VzdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGRpZmYpe1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMuSm91c3RlciA9IG5ldyBKb3VzdGVyKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuZGlmZiA9IGRpZmY7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG5cbiAgICAgICAgLy8gTlBDc1xuICAgICAgICB0aGlzLk5QQ3MgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCBNT0RFU1t0aGlzLmRpZmZdOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5OUENzLnB1c2gobmV3IE5QQyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpbWVuc2lvbnMud2lkdGgpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9MZWRnZXMgXG4gICAgICAgIGxldCBib3R0b21fbGVkZ2UgPSBuZXcgTGVkZ2Uoe3dpZHRoOiA1MDAsIGhlaWdodDogMzAsIHg6IDI1MCwgeTooNTAwLTMwKX0pO1xuICAgICAgICBsZXQgbWlkX29uZSA9IG5ldyBMZWRnZSh7IHdpZHRoOiAxNTAsIGhlaWdodDogMjAsIHg6IDUwLCB5OiAxMDAgfSk7XG4gICAgICAgIGxldCBtaWRfdHdvID0gbmV3IExlZGdlKHsgd2lkdGg6IDE1MCwgaGVpZ2h0OiAyMCwgeDogNDAwLCB5OiAxMjUgfSk7XG4gICAgICAgIGxldCBtaWRfdGhyZWUgPSBuZXcgTGVkZ2UoeyB3aWR0aDogMTUwLCBoZWlnaHQ6IDIwLCB4OiA4MDAsIHk6IDEwMCB9KTtcbiAgICAgICAgbGV0IHRvcF9vbmUgPSBuZXcgTGVkZ2UoeyB3aWR0aDogMTUwLCBoZWlnaHQ6IDIwLCB4OiA1MCwgeTogMzAwIH0pO1xuICAgICAgICBsZXQgdG9wX3R3byA9IG5ldyBMZWRnZSh7IHdpZHRoOiAxNTAsIGhlaWdodDogMjAsIHg6IDQwMCwgeTogMzI1IH0pO1xuICAgICAgICBsZXQgdG9wX3RocmVlID0gbmV3IExlZGdlKHsgd2lkdGg6IDE1MCwgaGVpZ2h0OiAyMCwgeDogODAwLCB5OiAzMDAgfSk7XG4gICAgICAgIHRoaXMubGVkZ2VzID0gW2JvdHRvbV9sZWRnZSwgbWlkX29uZSwgbWlkX3R3bywgbWlkX3RocmVlLCB0b3Bfb25lLCB0b3BfdHdvLCB0b3BfdGhyZWVdO1xuXG4gICAgICAgIC8vTGF2YVxuICAgICAgICBsZXQgbGVmdF9sYXZhID0gbmV3IExhdmEoeyB3aWR0aDogMjUwLCBoZWlnaHQ6IDIwLCB4OiAwLCB5OiAoNTAwIC0gMjApIH0pO1xuICAgICAgICBsZXQgcmlnaHRfbGF2YSA9IG5ldyBMYXZhKHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiAyMCwgeDogNzUwLCB5OiAoNTAwIC0gMjApIH0pO1xuICAgICAgICB0aGlzLmxhdmFzID0gW2xlZnRfbGF2YSwgcmlnaHRfbGF2YV07ICAgIFxuXG4gICAgICAgIC8vZWdnc1xuICAgICAgICB0aGlzLmVnZ3MgPSBbXTtcblxuICAgICAgICAvL2FuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG5cbiAgICAgICAgLy9TY29yZVxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgICAgICAvL2RyYXdpbmcgc3RhcnNcbiAgICAgICAgdGhpcy5zdGFycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJzLnB1c2goW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGltZW5zaW9ucy53aWR0aCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3N0YXJ0IGdhbWVcbiAgICAgICAgdGhpcy5yZWdpc3RlckdhbWVDb250cm9scygpO1xuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcblxuICAgICAgICAvL211c2ljXG4gICAgICAgIHRoaXMubXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1tdXNpYycpO1xuICAgICAgICB0aGlzLm11c2ljLnBsYXkoKTtcblxuICAgICAgICAvL25wYyBhZGRpdGlvbnNcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3X25wY19hbmltYXRpb24gPSBuZXcgSm91c3RBbmltYXRpb24oJ2xpZ2h0bmluZycsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoYXQuZGltZW5zaW9ucy53aWR0aCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoYXQuZGltZW5zaW9ucy5oZWlnaHQpLCAwKTtcbiAgICAgICAgICAgIHRoYXQuYW5pbWF0aW9ucy5wdXNoKG5ld19ucGNfYW5pbWF0aW9uKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld19ucGMgPSBuZXcgTlBDKG5ld19ucGNfYW5pbWF0aW9uLngsIG5ld19ucGNfYW5pbWF0aW9uLnkpO1xuICAgICAgICAgICAgICAgIHRoYXQuTlBDcy5wdXNoKG5ld19ucGMpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9LCBSRVNQQVdOX1RJTUVTW3RoaXMuZGlmZl0pO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlc3RhcnQoKXtcbiAgICAgICAgLy8gdGhpcy5Kb3VzdGVyID0gbmV3IEpvdXN0ZXIodGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlZ2lzdGVyR2FtZUNvbnRyb2xzKCl7XG4gICAgICAgIC8vIHRoaXMuc3BhY2VCaW5kZXIgPSB0aGlzLnNwYWNlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMubGVmdEJpbmRlciA9IHRoaXMubW92ZUxlZnQuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5yaWdodEJpbmRlciA9IHRoaXMubW92ZVJpZ2h0LmJpbmQodGhpcyk7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleUNvZGU9PT0zMil7XG4gICAgICAgICAgICAgICAgLy8gU3BhY2UgLSBmbHlcbiAgICAgICAgICAgICAgIHJldHVybiB0aGF0LnNwYWNlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleUNvZGU9PT0zNyl7XG4gICAgICAgICAgICAgICAgLy9hcnJvdyBsZWZ0XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQubW92ZUxlZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5Q29kZT09PTM5KXtcbiAgICAgICAgICAgICAgICAvL2Fycm93IHJpZ2h0XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleUNvZGUgPT09IDc3KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5leGl0VG9NZW51KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3BhY2UoZSl7XG4gICAgICAgIHRoaXMuSm91c3Rlci5mbHkoKTtcbiAgICB9XG5cbiAgICBtb3ZlTGVmdChlKXtcbiAgICAgICAgdGhpcy5Kb3VzdGVyLm1vdmVMZWZ0KCk7XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KGUpe1xuICAgICAgICB0aGlzLkpvdXN0ZXIubW92ZVJpZ2h0KCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCh0aGlzLmN0eCk7XG5cbiAgICAgICAgLy9MZWRnZXNcbiAgICAgICAgdGhpcy5sZWRnZXMuZm9yRWFjaChsZWRnZSA9PiB7XG4gICAgICAgICAgICBsZWRnZS5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9sYXZhXG4gICAgICAgIHRoaXMubGF2YXMuZm9yRWFjaChsYXZhID0+IHtcbiAgICAgICAgICAgIGxhdmEuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vc2NvcmVcbiAgICAgICAgdGhpcy5kcmF3U2NvcmUodGhpcy5jdHgpO1xuXG4gICAgICAgIC8vbGl2ZXNcbiAgICAgICAgdGhpcy5kcmF3TGl2ZXModGhpcy5jdHgpO1xuXG4gICAgICAgIC8vIEpvdXN0ZXIgYW5kIE5QQ3NcbiAgICAgICAgdGhpcy5Kb3VzdGVyLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICB0aGlzLk5QQ3MuZm9yRWFjaChucGMgPT4ge1xuICAgICAgICAgICAgbnBjLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2VnZ3NcbiAgICAgICAgdGhpcy5lZ2dzLmZvckVhY2goZWdnID0+e1xuICAgICAgICAgICAgZWdnLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2FuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb2xsaXNpb25DaGVjaygpO1xuICAgICAgICB0aGlzLmVnZ1Jlc3Bhd24oKTtcbiAgICAgICAgdGhpcy5qb3VzdEFuaW1hdGlvbkRpc3BsYXkoKTtcblxuICAgICAgICB0aGlzLnJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYoIXRoaXMucnVubmluZyl7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGl0VG9NZW51KCl7XG4gICAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnam91c3QnKTtcbiAgICAgICAgY3ZzLnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICAgICAgLy9tZW51IG11c2ljXG4gICAgICAgIGxldCBtZW51X211c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnRpbmEnKTtcbiAgICAgICAgbWVudV9tdXNpYy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgLy9zY29yZVxuICAgICAgICAvLyB0aGlzLnNjb3JlID0gMDtcblxuICAgICAgICAvL211c2ljXG4gICAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgICAgbGV0IGdhbWVfb3Zlcl9zb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxwYXRpbmUnKTtcbiAgICAgICAgZ2FtZV9vdmVyX3NvdW5kLnBsYXkoKTtcblxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvdXN0Jyk7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuXG4gICAgICAgIGNvbnN0IHNjb3JlX3N1Ym1pdF9tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlLXN1Ym1pdCcpO1xuICAgICAgICBzY29yZV9zdWJtaXRfbWVudS5zdHlsZS56SW5kZXggPSAnNSc7XG5cblxuICAgICAgICBjb25zdCBzY29yZV9zdWJtaXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlLXN1Ym1pdC1idXR0b24nKTtcblxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgc2NvcmVfc3VibWl0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgLy9zYXZlIHNjb3JlIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlLXN1Ym1pdC11c2VybmFtZScpLnZhbHVlLCB0aGF0LnNjb3JlKTtcblxuICAgICAgICAgICAgLy9wb3B1bGF0ZSBzY29yZWJvYXJkXG4gICAgICAgICAgICBjb25zdCBzY29yZWJvYXJkX25hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYWRlcmJvYXJkLW5hbWVzJyk7XG4gICAgICAgICAgICBjb25zdCBzY29yZWJvYXJkX3Njb3JlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC1zY29yZXMnKTtcbiAgICAgICAgICAgIGxldCBzY29yZXMgPSB7ICdTaW5hbic6IDE1MDAsICdBbCc6IDEyNTAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFbJ2dhbWUnLCdsb2dsZXZlbDp3ZWJwYWNrLWRldi1zZXJ2ZXInXS5pbmNsdWRlcyhsb2NhbFN0b3JhZ2Uua2V5KGkpKSl7XG4gICAgICAgICAgICAgICAgICAgIHNjb3Jlc1tsb2NhbFN0b3JhZ2Uua2V5KGkpXSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc29ydGVkX25hbWVzID0gT2JqZWN0LmtleXMoc2NvcmVzKS5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBzY29yZXNbeF0gLSBzY29yZXNbeV0gfSk7XG4gICAgICAgICAgICBzb3J0ZWRfbmFtZXMucmV2ZXJzZSgpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbGluYW1lLmlubmVySFRNTCA9IGAke25hbWV9YDtcbiAgICAgICAgICAgICAgICBzY29yZWJvYXJkX25hbWVzLmFwcGVuZChsaW5hbWUpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGxpc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpc2NvcmUuaW5uZXJIVE1MID0gYCR7c2NvcmVzW25hbWVdfWA7XG4gICAgICAgICAgICAgICAgc2NvcmVib2FyZF9zY29yZXMuYXBwZW5kKGxpc2NvcmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGNvbnNvbC5sb2coJ2NhbiB5b3UgcmVhZCB0aGlzPycpXG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3doYXQgYWJvdXQgdGhpcz8nKVxuICAgICAgICAgICAgLy9oaWRlIHNjb3JlIHN1Ym1pdCBtZW51XG4gICAgICAgICAgICBzY29yZV9zdWJtaXRfbWVudS5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgICAgICBjdnMuc3R5bGUuekluZGV4ID0gJzInO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIC8vbWVudSBtdXNpY1xuICAgICAgICAgICAgbGV0IG1lbnVfbXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudGluYScpO1xuICAgICAgICAgICAgbWVudV9tdXNpYy5wbGF5KCk7XG4gICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICAgIFxuICAgIH1cblxuXG4gICAgLy8gbWV0aG9kcyB0aGF0IGNhbiBiZSBsYXRlciBtb3ZlZCB0byBhIGNsYXNzIG9mIGl0cyBvd24uXG4gICAgZHJhd0JhY2tncm91bmQoY3R4KXtcbiAgICAgICAgY3R4LmZpbGxTdHlsZT0gXCIjMTkxOTE5XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5zdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChzdGFyWzBdLHN0YXJbMV0sMiwyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgY29sbGlzaW9uQ2hlY2soKXtcbiAgICAgICAgLy9OUENzXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5OUENzLmZvckVhY2goKG5wYyxpKSA9PiB7XG4gICAgICAgICAgICBpZihucGMuY29sbGlkZWRXaXRoKHRoYXQuSm91c3Rlcikpe1xuICAgICAgICAgICAgICAgIGlmKCF0aGF0LkpvdXN0ZXIuZXRoZXJlYWwpe1xuICAgICAgICAgICAgICAgICAgICBpZihucGMuY29sbGlkZSh0aGF0LkpvdXN0ZXIpKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvdW5kcyA9IFsnY29sbGlzaW9uMScsICdjb2xsaXNpb24yJywgJ2NvbGxpc2lvbjMnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVkX3NvdW5kID0gc291bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvdW5kcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xsaXNpb25fc291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzYW1wbGVkX3NvdW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbl9zb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlIG5wY1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5OUENzLnNwbGljZShpLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NwYXduIGVnZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5lZ2dzLnB1c2gobmV3IEVnZyhucGMueCwgbnBjLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQuSm91c3Rlci5saXZlcyA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5Kb3VzdGVyLmRlYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vbGVkZ2VzXG4gICAgICAgIHRoYXQubGVkZ2VzLmZvckVhY2goKGxlZGdlKSA9PiB7XG4gICAgICAgICAgICAvL3dpdGggam91c3RlclxuICAgICAgICAgICAgbGVkZ2UuY29sbGlzaW9uSGFuZGxlcih0aGF0LkpvdXN0ZXIpO1xuXG4gICAgICAgICAgICAvL3dpdGggZWdnc1xuICAgICAgICAgICAgdGhhdC5lZ2dzLmZvckVhY2goZWdnID0+IHtcbiAgICAgICAgICAgICAgICBsZWRnZS5lZ2dDb2xsaXNpb24oZWdnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2xhdmFcbiAgICAgICAgdGhhdC5sYXZhcy5mb3JFYWNoKChsYXZhKSA9PiB7XG4gICAgICAgICAgICAvL0pvdXN0ZXIgY29sbGlzaW9uXG4gICAgICAgICAgICBpZighdGhhdC5Kb3VzdGVyLmV0aGVyZWFsICYmIGxhdmEuY29sbGlzaW9uSGFuZGxlcih0aGF0LkpvdXN0ZXIpKXtcbiAgICAgICAgICAgICAgICBpZih0aGF0LkpvdXN0ZXIubGl2ZXM9PT0xKXtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGF0LkpvdXN0ZXIuZGVhZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9lZ2cgY29sbGlzaW9uXG4gICAgICAgICAgICB0aGF0LmVnZ3MuZm9yRWFjaChlZ2cgPT4ge1xuICAgICAgICAgICAgICAgIGxhdmEuZWdnQ29sbGlzaW9uKGVnZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9lZ2dzXG4gICAgICAgIHRoYXQuZWdncy5mb3JFYWNoKChlZ2csaSkgPT4ge1xuICAgICAgICAgICAgaWYoZWdnLmNvbGxpc2lvbkhhbmRsZXIodGhhdC5Kb3VzdGVyKSl7XG5cbiAgICAgICAgICAgICAgICAvL3NvdW5kXG4gICAgICAgICAgICAgICAgbGV0IHNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY2t1cCcpO1xuICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcbiAgXG4gICAgICAgICAgICAgICAgLy9pbmNyZWFzZSBzY29yZVxuICAgICAgICAgICAgICAgIHRoYXQuc2NvcmUgKz0gMTUwO1xuICAgICAgICAgICAgICAgIHRoYXQuYW5pbWF0aW9ucy5wdXNoKG5ldyBKb3VzdEFuaW1hdGlvbignc2NvcmUtdGFnJywgZWdnLngtMTAsIGVnZy55LTEwLCAxMDAwKSk7XG5cbiAgICAgICAgICAgICAgICAvL2RlbGV0ZSBlZ2dcbiAgICAgICAgICAgICAgICB0aGF0LmVnZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlZ2dSZXNwYXduKCl7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5lZ2dzLmZvckVhY2goKGVnZyxpKSA9PntcbiAgICAgICAgICAgIGlmKGVnZy5yZXNwYXduKXtcbiAgICAgICAgICAgICAgICB0aGF0LmVnZ3Muc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgdGhhdC5hbmltYXRpb25zLnB1c2gobmV3IEpvdXN0QW5pbWF0aW9uKCdsaWdodG5pbmcnLCBlZ2cueCAtIDUsIGVnZy55IC0gNSwgMzAwKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOUEMgPSBuZXcgTlBDKGVnZy54LCBlZ2cueSlcbiAgICAgICAgICAgICAgICB0aGF0Lk5QQ3MucHVzaChuZXdOUEMpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdOUEMueSAhPT0gZWdnLnkpIHsgdGhhdC5hbmltYXRpb25zLnB1c2gobmV3IEpvdXN0QW5pbWF0aW9uKCdsaWdodG5pbmcnLCBuZXdOUEMueCAtIDUsIG5ld05QQy55IC0gNSwgMzAwKSk7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBqb3VzdEFuaW1hdGlvbkRpc3BsYXkoKXtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuZm9yRWFjaCgoYW5pbWF0aW9uLGkpID0+IHtcbiAgICAgICAgICAgIGlmKGFuaW1hdGlvbi5raWxsKXtcbiAgICAgICAgICAgICAgICB0aGF0LmFuaW1hdGlvbnMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdTY29yZShjdHgpe1xuXG4gICAgICAgIGxldCBib3hfd2lkdGggPSAodGhpcy5zY29yZSA9PT0gIDAgPyA2NSA6IDkwKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoNTA2LCAxMywgYm94X3dpZHRoKzQsIDI0KTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMTkxOTE5XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MDgsMTUsYm94X3dpZHRoLDIwKTtcblxuXG4gICAgICAgIC8vdGV4dFxuICAgICAgICBjdHguZm9udCA9IFwiMThweCBTYW5zIFNlcmlmXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGxldCBzdHIgPSBgU2NvcmU6ICR7dGhpcy5zY29yZX1gO1xuICAgICAgICBjdHguZmlsbFRleHQoc3RyLCA1MTAsIDMwKTtcbiAgICB9XG5cbiAgICBkcmF3TGl2ZXMoY3R4KSB7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDM5NiwgMTMsIDU5LCAyNCk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzE5MTkxOVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMzk4LCAxNSwgNTUsIDIwKTtcblxuXG4gICAgICAgIC8vaGVhcnRcbiAgICAgICAgY29uc3QgaGVhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhcnQnKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShoZWFydCwgMzkzLCAxMCwgNDAsIDQwKTtcblxuICAgICAgICAvL3RleHRcbiAgICAgICAgY3R4LmZvbnQgPSBcIjE4cHggU2FucyBTZXJpZlwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBsZXQgc3RyID0gYHggJHt0aGlzLkpvdXN0ZXIubGl2ZXN9YDtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHN0ciwgNDI1LCAzMCk7XG4gICAgfVxuXG59XG5cbi8vIGZ1bmN0aW9uIHNvdW5kKHNyYykge1xuLy8gICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4vLyAgICAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XG4vLyAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbi8vICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbi8vICAgICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuLy8gICAgIHRoaXMucGxheSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4vLyAgICAgfVxuLy8gICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgU3RhckpvdXN0ZXI7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWVudS5jc3MnO1xuaW1wb3J0IFN0YXJKb3VzdGVyIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb3VzdCcpO1xuXG5jb25zdCBlYXN5X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXN5LWJ1dHRvbicpO1xuY29uc3QgbWVkaXVtX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWRpdW0tYnV0dG9uJyk7XG5jb25zdCBoYXJkX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXJkLWJ1dHRvbicpO1xuY29uc3QgbXVzaWNfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljLWJ1dHRvbicpO1xuXG5sZXQgYmFja2dyb3VuZF9tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLW11c2ljJyk7XG5sZXQgY29sbGlzaW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xsaXNpb24xJyk7XG5sZXQgY29sbGlzaW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xsaXNpb24yJyk7XG5sZXQgY29sbGlzaW9uMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xsaXNpb24zJyk7XG5sZXQgcGFscGF0aW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbHBhdGluZScpO1xubGV0IGRlYXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYXRoLXNvdW5kJyk7XG5sZXQgcGlja3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY2t1cCcpO1xuXG5sZXQgbWVudV9tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW50aW5hJyk7XG5tZW51X211c2ljLnZvbHVtZSA9IDAuMjtcbm1lbnVfbXVzaWMucGxheSgpO1xuXG5tdXNpY19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjb25zdCBzb3VuZHMgPSBbYmFja2dyb3VuZF9tdXNpYywgbWVudV9tdXNpYywgY29sbGlzaW9uMSwgY29sbGlzaW9uMiwgY29sbGlzaW9uMywgcGFscGF0aW5lLCBkZWF0aCwgcGlja3VwXTtcblxuICAgIGlmKG1lbnVfbXVzaWMudm9sdW1lID4gMCl7XG4gICAgICAgIHNvdW5kcy5mb3JFYWNoKHNvdW5kID0+IHNvdW5kLnZvbHVtZSA9IDApO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWMtYnV0dG9uLWltYWdlJykuc3JjID0gXCIuL3NyYy9pbWFnZXMvbXV0ZWQucG5nXCJcbiAgICB9ZWxzZXtcbiAgICAgICAgc291bmRzLmZvckVhY2goc291bmQgPT4gc291bmQudm9sdW1lID0gMC4zKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljLWJ1dHRvbi1pbWFnZScpLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3VubXV0ZWQucG5nXCJcbiAgICB9XG59KTtcblxuZWFzeV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWVudV9tdXNpYy5wYXVzZSgpO1xuICAgIGNhbnZhcy5zdHlsZS56SW5kZXggPSAnNCc7XG4gICAgZWFzeV9idXR0b24uYmx1cigpO1xuICAgIGNhbnZhcy5mb2N1cygpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWUnLCAnZWFzeScpO1xuXG4gICAgbmV3IFN0YXJKb3VzdGVyKGNhbnZhcywgJ2Vhc3knKTtcbiAgICBcbn0pO1xuXG5tZWRpdW1fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lbnVfbXVzaWMucGF1c2UoKTtcbiAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gJzQnO1xuXG4gICAgbWVkaXVtX2J1dHRvbi5ibHVyKCk7XG4gICAgY2FudmFzLmZvY3VzKCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZScsICdtZWRpdW0nKTtcblxuICAgIG5ldyBTdGFySm91c3RlcihjYW52YXMsICdtZWRpdW0nKTtcbiAgICBcbn0pO1xuXG5oYXJkX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51X211c2ljLnBhdXNlKCk7XG4gICAgY2FudmFzLnN0eWxlLnpJbmRleCA9ICc0JztcblxuICAgIGhhcmRfYnV0dG9uLmJsdXIoKTtcbiAgICBjYW52YXMuZm9jdXMoKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lJywgJ2hhcmQnKTtcblxuICAgIG5ldyBTdGFySm91c3RlcihjYW52YXMsICdoYXJkJylcbiAgICBcbn0pO1xuXG5cbi8vIG5ldyBTdGFySm91c3RlcihjYW52YXMsJ2Vhc3knKTtcblxuIiwiY29uc3QgQ09OU1RBTlRTPXtcbiAgICBHUkFWSVRZOiAwLjA1LFxuICAgIERSQUc6IDAuMDIsXG4gICAgRkxBUF9TUEVFRDogMS41LFxuICAgIE1PVkVfU1BFRUQ6IDEuNSxcbiAgICBURVJNSU5BTF9ZX1ZFTE9DSVRZOiA1LFxuICAgIFRFUk1JTkFMX1hfVkVMT0NJVFk6IDUsXG4gICAgSk9VU1RFUl9XSURUSDogMzAsXG4gICAgSk9VU1RFUl9IRUlHSFQ6IDUwXG59O1xuXG5cbmNsYXNzIEpvdXN0ZXJ7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucyl7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMueCA9IDQ1MDtcbiAgICAgICAgdGhpcy55ID0gMTYwO1xuICAgICAgICB0aGlzLnhfdmVsID0gMDtcbiAgICAgICAgdGhpcy55X3ZlbCA9IDA7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLndpZHRoID0gQ09OU1RBTlRTLkpPVVNURVJfV0lEVEg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQ09OU1RBTlRTLkpPVVNURVJfSEVJR0hUO1xuICAgICAgICB0aGlzLmxpdmVzID0gMztcbiAgICAgICAgdGhpcy5mYWNpbmcgPSAodGhpcy54X3ZlbCA+PSAwID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG5cbiAgICAgICAgLy9zcGF3blxuICAgICAgICB0aGlzLmV0aGVyZWFsID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQuZXRoZXJlYWwgPSBmYWxzZTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgZmx5KCl7XG4gICAgICAgIHRoaXMueV92ZWwgLT0gQ09OU1RBTlRTLkZMQVBfU1BFRUQ7XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKXtcbiAgICAgICAgdGhpcy54X3ZlbCAtPSBDT05TVEFOVFMuTU9WRV9TUEVFRDtcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMueF92ZWwgKz0gQ09OU1RBTlRTLk1PVkVfU1BFRUQ7XG4gICAgfVxuXG4gICAgbW92ZUpvdXN0ZXIoKXtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMueV92ZWw7XG4gICAgICAgIHRoaXMueV92ZWwgKz0gQ09OU1RBTlRTLkdSQVZJVFk7XG5cbiAgICAgICAgdGhpcy54ICs9IHRoaXMueF92ZWw7XG4gICAgICAgIGlmKHRoaXMueF92ZWwgPiAwKXtcbiAgICAgICAgICAgIGlmKHRoaXMueF92ZWwgPCBDT05TVEFOVFMuRFJBRyl7XG4gICAgICAgICAgICAgICAgdGhpcy54X3ZlbD0wO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnhfdmVsIC09IENPTlNUQU5UUy5EUkFHO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnhfdmVsIDwgMCl7XG4gICAgICAgICAgICBpZiAoLXRoaXMueF92ZWwgPCBDT05TVEFOVFMuRFJBRykge1xuICAgICAgICAgICAgICAgIHRoaXMueF92ZWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhfdmVsIC09IENPTlNUQU5UUy5EUkFHO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueF92ZWwpID4gQ09OU1RBTlRTLlRFUk1JTkFMX1hfVkVMT0NJVFkpe1xuICAgICAgICAgICAgaWYodGhpcy54X3ZlbCA+IDApe1xuICAgICAgICAgICAgICAgIHRoaXMueF92ZWwgPSBDT05TVEFOVFMuVEVSTUlOQUxfWF9WRUxPQ0lUWTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMueF92ZWwgPSBDT05TVEFOVFMuVEVSTUlOQUxfWF9WRUxPQ0lUWSAqIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55X3ZlbCkgPiBDT05TVEFOVFMuVEVSTUlOQUxfWV9WRUxPQ0lUWSkge1xuICAgICAgICAgICAgaWYgKHRoaXMueV92ZWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55X3ZlbCA9IENPTlNUQU5UUy5URVJNSU5BTF9ZX1ZFTE9DSVRZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnlfdmVsID0gQ09OU1RBTlRTLlRFUk1JTkFMX1lfVkVMT0NJVFkgKiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMueCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCl7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnggPCAwKXtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnkgPD0gMCl7XG4gICAgICAgICAgICB0aGlzLnkgPSAxO1xuICAgICAgICAgICAgdGhpcy55X3ZlbCA9IC0odGhpcy55X3ZlbC80KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdKb3VzdGVyKGN0eCl7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgQ09OU1RBTlRTLkpPVVNURVJfV0lEVEgsIENPTlNUQU5UUy5KT1VTVEVSX0hFSUdIVCk7XG4gICAgICAgIHRoaXMuZmFjaW5nID0gKHRoaXMueF92ZWwgPiAwID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgXG4gICAgICAgIGxldCBpbWFnZTtcbiAgICAgICAgaWYodGhpcy5mYWNpbmc9PT0nbGVmdCcpe1xuICAgICAgICAgICAgaWYgKHRoaXMuZXRoZXJlYWwpIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsdWtlLWxlZnQtZnJvemVuJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsdWtlLWxlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHRoaXMueCAtIDUsIHRoaXMueSAtIDEwLCBDT05TVEFOVFMuSk9VU1RFUl9XSURUSCArIDEwLCBDT05TVEFOVFMuSk9VU1RFUl9IRUlHSFQgKyAxNSk7XG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICBpZih0aGlzLmV0aGVyZWFsKXtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsdWtlLXJpZ2h0LWZyb3plbicpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHVrZS1yaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB0aGlzLngtNSwgdGhpcy55LTEwLCBDT05TVEFOVFMuSk9VU1RFUl9XSURUSCsxMCwgQ09OU1RBTlRTLkpPVVNURVJfSEVJR0hUKzE1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KXtcbiAgICAgICAgdGhpcy5tb3ZlSm91c3RlcigpO1xuICAgICAgICB0aGlzLmRyYXdKb3VzdGVyKGN0eCk7XG4gICAgfVxuXG4gICAgZGVhZCgpe1xuXG4gICAgICAgIGxldCBkZWF0aF9zb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWF0aC1zb3VuZCcpO1xuICAgICAgICBkZWF0aF9zb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgdGhpcy5saXZlcyAtPSAxO1xuICAgICAgICB0aGlzLnggPSAxNTAwO1xuICAgICAgICB0aGlzLnkgPSAxNTAwO1xuXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoYXQueCA9IDQ1MDtcbiAgICAgICAgdGhhdC55ID0gMTYwO1xuICAgICAgICB0aGF0LnhfdmVsID0gMDtcbiAgICAgICAgdGhhdC55X3ZlbCA9IDA7XG4gICAgICAgIHRoYXQuZXRoZXJlYWwgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQuZXRoZXJlYWwgPSBmYWxzZTtcbiAgICAgICAgfSwzMDAwKTtcbiAgICAgICAgfSwgMjAwMCk7XG5cblxuICAgIH1cbiAgICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBKb3VzdGVyOyIsImNsYXNzIExhdmEge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IGRpbWVuc2lvbnMueDtcbiAgICAgICAgdGhpcy55ID0gZGltZW5zaW9ucy55O1xuICAgIH1cblxuICAgIGRyYXdMYXZhKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRTI0QzAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMuZHJhd0xhdmEoY3R4KTtcbiAgICB9XG5cbiAgICBjb2xsaXNpb25IYW5kbGVyKGNoYXIpIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjEgPSAodGhpcy54IDwgKGNoYXIueCArIGNoYXIud2lkdGgpKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjIgPSAoKHRoaXMueCArIHRoaXMud2lkdGgpID4gY2hhci54KTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjMgPSAodGhpcy55IDwgKGNoYXIueSArIGNoYXIuaGVpZ2h0KSk7XG4gICAgICAgIGxldCBjb25kaXRpb240ID0gKCh0aGlzLnkgKyB0aGlzLmhlaWdodCkgPiBjaGFyLnkpO1xuXG4gICAgICAgIGlmIChjb25kaXRpb24xICYmIGNvbmRpdGlvbjIgJiYgY29uZGl0aW9uMyAmJiBjb25kaXRpb240KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZ2dDb2xsaXNpb24oZWdnKXtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjEgPSAodGhpcy54IDwgKGVnZy54ICsgZWdnLndpZHRoKSk7XG4gICAgICAgIGxldCBjb25kaXRpb24yID0gKCh0aGlzLnggKyB0aGlzLndpZHRoKSA+IGVnZy54KTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjMgPSAodGhpcy55IDwgKGVnZy55ICsgZWdnLmhlaWdodCkpO1xuICAgICAgICBsZXQgY29uZGl0aW9uNCA9ICgodGhpcy55ICsgdGhpcy5oZWlnaHQpID4gZWdnLnkpO1xuXG4gICAgICAgIGlmIChjb25kaXRpb24xICYmIGNvbmRpdGlvbjIgJiYgY29uZGl0aW9uMyAmJiBjb25kaXRpb240KSB7XG4gICAgICAgICAgICBlZ2cueV92ZWwgPSAwO1xuICAgICAgICAgICAgZWdnLnkgPSAodGhpcy55IC0gZWdnLmhlaWdodCAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGF2YTsiLCJcbmNsYXNzIExlZGdlIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKXtcbiAgICAgICAgdGhpcy53aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICAgIHRoaXMueCA9IGRpbWVuc2lvbnMueDtcbiAgICAgICAgdGhpcy55ID0gZGltZW5zaW9ucy55O1xuICAgIH1cblxuICAgIGRyYXdMZWRnZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzc4MzIwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICB0aGlzLmRyYXdMZWRnZShjdHgpO1xuICAgIH1cblxuICAgIGNvbGxpc2lvbkhhbmRsZXIoY2hhcil7XG4gICAgICAgIGxldCBjb25kaXRpb24xID0gKHRoaXMueCA8IChjaGFyLnggKyBjaGFyLndpZHRoKSk7XG4gICAgICAgIGxldCBjb25kaXRpb24yID0gKCh0aGlzLnggKyB0aGlzLndpZHRoKSA+IGNoYXIueCk7XG4gICAgICAgIGxldCBjb25kaXRpb24zID0gKHRoaXMueSA8IChjaGFyLnkgKyBjaGFyLmhlaWdodCkpO1xuICAgICAgICBsZXQgY29uZGl0aW9uNCA9ICgodGhpcy55ICsgdGhpcy5oZWlnaHQpID4gY2hhci55KTtcblxuICAgICAgIFxuICAgICAgICBpZihjb25kaXRpb24xICYmIGNvbmRpdGlvbjIgJiYgY29uZGl0aW9uMyAmJiBjb25kaXRpb240KXtcbiAgICAgICAgICAgIGlmKCgoY2hhci54K2NoYXIud2lkdGgpID49IHRoaXMueCkgfHwgY2hhci54IDw9ICh0aGlzLnggKyB0aGlzLndpZHRoKSl7XG4gICAgICAgICAgICAgICAgY2hhci54X3ZlbCA9IC0oY2hhci54X3ZlbCowLjc1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoKGNoYXIueSArIGNoYXIuaGVpZ2h0KSA+PSB0aGlzLnkpIHx8IGNoYXIueSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgY2hhci55X3ZlbCA9IC0oY2hhci55X3ZlbCowLjc1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVnZ0NvbGxpc2lvbihlZ2cpIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjEgPSAodGhpcy54IDwgKGVnZy54ICsgZWdnLndpZHRoKSk7XG4gICAgICAgIGxldCBjb25kaXRpb24yID0gKCh0aGlzLnggKyB0aGlzLndpZHRoKSA+IGVnZy54KTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjMgPSAodGhpcy55IDwgKGVnZy55ICsgZWdnLmhlaWdodCkpO1xuICAgICAgICBsZXQgY29uZGl0aW9uNCA9ICgodGhpcy55ICsgdGhpcy5oZWlnaHQpID4gZWdnLnkpO1xuXG4gICAgICAgIGlmIChjb25kaXRpb24xICYmIGNvbmRpdGlvbjIgJiYgY29uZGl0aW9uMyAmJiBjb25kaXRpb240KSB7XG4gICAgICAgICAgICAgICAgZWdnLnlfdmVsID0gMDtcbiAgICAgICAgICAgICAgICBlZ2cueSA9ICh0aGlzLnkgLSBlZ2cuaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExlZGdlOyIsImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBURVJNSU5BTF9ZX1ZFTE9DSVRZOiA1LFxuICAgIFRFUk1JTkFMX1hfVkVMT0NJVFk6IDIsXG4gICAgTlBDX1dJRFRIOiAzMCxcbiAgICBOUENfSEVJR0hUOiA1MFxufTtcblxuXG5jbGFzcyBOUEMge1xuICAgIGNvbnN0cnVjdG9yKHgseSkge1xuICAgICAgICAvLyB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnhfdmVsID0gKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAtMyA6IDMpO1xuICAgICAgICB0aGlzLnlfdmVsID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IENPTlNUQU5UUy5OUENfV0lEVEg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gQ09OU1RBTlRTLk5QQ19IRUlHSFQ7XG4gICAgICAgIHRoaXMuZmFjaW5nID0gKHRoaXMueF92ZWwgPj0gMCkgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICB9XG5cbiAgICBtb3ZlTlBDKCkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy55X3ZlbDtcbiAgICAgICAgLy8gdGhpcy55X3ZlbCArPSBDT05TVEFOVFMuR1JBVklUWTtcblxuICAgICAgICB0aGlzLnggKz0gdGhpcy54X3ZlbDtcbiAgICAgICAgLy8gaWYgKHRoaXMueF92ZWwgPiAwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnhfdmVsIC09IENPTlNUQU5UUy5EUkFHO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKHRoaXMueF92ZWwgPCAwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnhfdmVsICs9IENPTlNUQU5UUy5EUkFHO1xuICAgICAgICAvLyB9XG5cblxuICAgICAgICAvLyBpZiAoTWF0aC5hYnModGhpcy55X3ZlbCkgPiBDT05TVEFOVFMuVEVSTUlOQUxfWV9WRUxPQ0lUWSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMueV92ZWwgPiAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy55X3ZlbCA9IENPTlNUQU5UUy5URVJNSU5BTF9ZX1ZFTE9DSVRZO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnlfdmVsID0gQ09OU1RBTlRTLlRFUk1JTkFMX1lfVkVMT0NJVFkgKiAtMTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmICh0aGlzLnkgPiA0MDApIHtcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMueCA+IDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gMTAwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdOUEMoY3R4KSB7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIENPTlNUQU5UUy5OUENfV0lEVEgsIENPTlNUQU5UUy5OUENfSEVJR0hUKTtcblxuICAgICAgICBsZXQgaW1hZ2U7XG4gICAgICAgIGlmKHRoaXMuZmFjaW5nPT09J2xlZnQnKXtcbiAgICAgICAgICAgIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGgtbGVmdCcpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgdGhpcy54LTUsIHRoaXMueS0xMCwgQ09OU1RBTlRTLk5QQ19XSURUSCsxMCwgQ09OU1RBTlRTLk5QQ19IRUlHSFQrMTUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGgtcmlnaHQnKTtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHRoaXMueC01LCB0aGlzLnktMTAsIENPTlNUQU5UUy5OUENfV0lEVEgrMTAsIENPTlNUQU5UUy5OUENfSEVJR0hUKzE1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZU5QQygpO1xuICAgICAgICB0aGlzLmRyYXdOUEMoY3R4KTtcbiAgICB9XG5cbiAgICAvL2NvbGxpc2lvbiBtZXRob2RzXG5cbiAgICBjb2xsaWRlZFdpdGgoam91c3Rlcil7XG4gICAgICAgIGxldCBjb25kaXRpb24xID0gKHRoaXMueCA8IChqb3VzdGVyLnggKyBqb3VzdGVyLndpZHRoKSk7XG4gICAgICAgIGxldCBjb25kaXRpb24yID0gKCh0aGlzLnggKyB0aGlzLndpZHRoKSA+IGpvdXN0ZXIueCk7XG4gICAgICAgIGxldCBjb25kaXRpb24zID0gKHRoaXMueSA8IChqb3VzdGVyLnkgKyBqb3VzdGVyLmhlaWdodCkpO1xuICAgICAgICBsZXQgY29uZGl0aW9uNCA9ICgodGhpcy55ICsgdGhpcy5oZWlnaHQpID4gam91c3Rlci55KTtcblxuICAgICAgICBpZihjb25kaXRpb24xICYmIGNvbmRpdGlvbjIgJiYgY29uZGl0aW9uMyAmJiBjb25kaXRpb240KXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUoam91c3Rlcil7XG4gICAgICAgIGlmKHRoaXMuZmFjaW5nID09PSAnbGVmdCcgJiYgam91c3Rlci5mYWNpbmcgPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICBpZihqb3VzdGVyLnggPiB0aGlzLngpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmFjaW5nID09PSAncmlnaHQnICYmIGpvdXN0ZXIuZmFjaW5nID09PSAncmlnaHQnKXtcbiAgICAgICAgICAgIGlmIChqb3VzdGVyLnggPCB0aGlzLngpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBpZiAoam91c3Rlci55IDwgdGhpcy55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOUEM7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==