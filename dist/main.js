!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0);function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=.05,h=.02,a=1.5,o=1.5,r=5,l=5,u=30,c=50,f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dimensions=e,this.x=450,this.y=160,this.x_vel=0,this.y_vel=0,this.width=u,this.height=c,this.lives=3,this.facing=this.x_vel>=0?"right":"left",this.ethereal=!0;var i=this;setTimeout((function(){i.ethereal=!1}),3e3)}var e,i,f;return e=t,(i=[{key:"fly",value:function(){this.y_vel-=a}},{key:"moveLeft",value:function(){this.x_vel-=o}},{key:"moveRight",value:function(){this.x_vel+=o}},{key:"moveJouster",value:function(){this.y+=this.y_vel,this.y_vel+=s,this.x+=this.x_vel,this.x_vel>0?this.x_vel<h?this.x_vel=0:this.x_vel-=h:this.x_vel<0&&(-this.x_vel<h?this.x_vel=0:this.x_vel-=h),Math.abs(this.x_vel)>l&&(this.x_vel>0?this.x_vel=l:this.x_vel=-1*l),Math.abs(this.y_vel)>r&&(this.y_vel>0?this.y_vel=r:this.y_vel=-1*r),this.x>this.dimensions.width?this.x=0:this.x<0&&(this.x=this.dimensions.width),this.y<=0&&(this.y=1,this.y_vel=-this.y_vel/4)}},{key:"drawJouster",value:function(t){var e;this.facing=this.x_vel>0?"right":"left","left"===this.facing?(e=this.ethereal?document.getElementById("luke-left-frozen"):document.getElementById("luke-left"),t.drawImage(e,this.x-5,this.y-10,u+10,c+15)):(e=this.ethereal?document.getElementById("luke-right-frozen"):document.getElementById("luke-right"),t.drawImage(e,this.x-5,this.y-10,u+10,c+15))}},{key:"animate",value:function(t){this.moveJouster(),this.drawJouster(t)}},{key:"dead",value:function(){document.getElementById("death-sound").play(),this.lives-=1,this.x=1500,this.y=1500;var t=this;setTimeout((function(){t.x=450,t.y=160,t.x_vel=0,t.y_vel=0,t.ethereal=!0,setTimeout((function(){t.ethereal=!1}),3e3)}),2e3)}}])&&n(e.prototype,i),f&&n(e,f),t}();function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var d=30,v=50,g=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.x_vel=Math.random()<.5?-3:3,this.y_vel=0,this.width=d,this.height=v,this.facing=this.x_vel>=0?"right":"left"}var e,i,n;return e=t,(i=[{key:"moveNPC",value:function(){this.y+=this.y_vel,this.x+=this.x_vel,this.y>400&&(this.y=Math.floor(400*Math.random())),this.x>1e3?this.x=0:this.x<0&&(this.x=1e3)}},{key:"drawNPC",value:function(t){var e;"left"===this.facing?(e=document.getElementById("sith-left"),t.drawImage(e,this.x-5,this.y-10,d+10,v+15)):(e=document.getElementById("sith-right"),t.drawImage(e,this.x-5,this.y-10,d+10,v+15))}},{key:"animate",value:function(t){this.moveNPC(),this.drawNPC(t)}},{key:"collidedWith",value:function(t){var e=this.x<t.x+t.width,i=this.x+this.width>t.x,n=this.y<t.y+t.height,s=this.y+this.height>t.y;return!!(e&&i&&n&&s)}},{key:"collide",value:function(t){return"left"===this.facing&&"left"===t.facing?t.x>this.x:"right"===this.facing&&"right"===t.facing?t.x<this.x:t.y<this.y}}])&&y(e.prototype,i),n&&y(e,n),t}();function m(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e.width,this.height=e.height,this.x=e.x,this.y=e.y}var e,i,n;return e=t,(i=[{key:"drawLedge",value:function(t){t.fillStyle="#783200",t.fillRect(this.x,this.y,this.width,this.height)}},{key:"animate",value:function(t){this.drawLedge(t)}},{key:"collisionHandler",value:function(t){var e=this.x<t.x+t.width,i=this.x+this.width>t.x,n=this.y<t.y+t.height,s=this.y+this.height>t.y;"Jouster"===t.constructor.name&&e&&i&&n&&s&&((t.x+t.width>=this.x||t.x<=this.x+this.width)&&(t.x_vel=-.75*t.x_vel),(t.y+t.height>=this.y||t.y<=this.y+this.height)&&(t.y_vel=-.75*t.y_vel)),"Egg"===t.constructor.name&&e&&i&&n&&s&&t.y<=this.y+this.height&&(t.y_vel=0,t.y=this.y-t.height-1)}}])&&m(e.prototype,i),n&&m(e,n),t}();function w(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e.width,this.height=e.height,this.x=e.x,this.y=e.y}var e,i,n;return e=t,(i=[{key:"drawLava",value:function(t){t.fillStyle="#E24C00",t.fillRect(this.x,this.y,this.width,this.height)}},{key:"animate",value:function(t){this.drawLava(t)}},{key:"collisionHandler",value:function(t){var e=this.x<t.x+t.width,i=this.x+this.width>t.x,n=this.y<t.y+t.height,s=this.y+this.height>t.y;return!!(e&&i&&n&&s)}},{key:"eggCollision",value:function(t){var e=this.x<t.x+t.width,i=this.x+this.width>t.x,n=this.y<t.y+t.height,s=this.y+this.height>t.y;e&&i&&n&&s&&t.y<=this.y+this.height&&(t.y_vel=0,t.y=this.y-t.height-1)}}])&&w(e.prototype,i),n&&w(e,n),t}();function k(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var b=.05,_=5,E=30,C=30,I=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.width=E,this.height=C,this.y_vel=0,this.status="unattainable",this.picture=!1,this.respawn=!1;var n=this;setInterval((function(){n.picture=!n.picture}),500),setTimeout((function(){n.status="attainable"}),2e3),setTimeout((function(){n.respawn=!0}),1e4)}var e,i,n;return e=t,(i=[{key:"moveEgg",value:function(){this.y+=this.y_vel,this.y_vel+=b,Math.abs(this.y_vel)>_&&(this.y_vel>0?this.y_vel=_:this.y_vel=-1*_)}},{key:"drawEgg",value:function(t){var e;e="unattainable"===this.status||this.picture?"lightsaber":"lightsaber-flashing";var i=document.getElementById(e);t.drawImage(i,this.x-5,this.y-5,this.width+10,this.height+10)}},{key:"animate",value:function(t){this.moveEgg(),this.drawEgg(t)}},{key:"collisionHandler",value:function(t){var e=this.x<t.x+t.width,i=this.x+this.width>t.x,n=this.y<t.y+t.height,s=this.y+this.height>t.y;return!!(e&&i&&n&&s)&&("attainable"===this.status||void 0)}}])&&k(e.prototype,i),n&&k(e,n),t}();function J(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var P=function(){function t(e,i,n,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=e,this.x=i,this.y=n,this.time=s,this.kill=!1;var h=this;setTimeout((function(){h.kill=!0}),h.time)}var e,i,n;return e=t,(i=[{key:"drawJoustAnimation",value:function(t){var e=document.getElementById(this.type);t.drawImage(e,this.x,this.y)}},{key:"animate",value:function(t){this.drawJoustAnimation(t)}}])&&J(e.prototype,i),n&&J(e,n),t}();function M(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var B={easy:6,medium:10,hard:15},j=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e.getContext("2d"),this.dimensions={width:e.width,height:e.height},this.Jouster=new f(this.dimensions),this.diff=i,this.running=!0,this.NPCs=[];for(var n=0;n<B[this.diff];n++)this.NPCs.push(new g(Math.floor(Math.random()*this.dimensions.width),Math.floor(Math.random()*this.dimensions.height)));var s=new x({width:500,height:30,x:250,y:470}),h=new x({width:150,height:20,x:50,y:100}),a=new x({width:150,height:20,x:400,y:125}),o=new x({width:150,height:20,x:800,y:100}),r=new x({width:150,height:20,x:50,y:300}),l=new x({width:150,height:20,x:400,y:325}),u=new x({width:150,height:20,x:800,y:300});this.ledges=[s,h,a,o,r,l,u];var c=new p({width:250,height:20,x:0,y:480}),y=new p({width:250,height:20,x:750,y:480});this.lavas=[c,y],this.eggs=[],this.animations=[],this.score=0,this.stars=[];for(var d=0;d<125;d++)this.stars.push([Math.floor(Math.random()*this.dimensions.width),Math.floor(Math.random()*this.dimensions.height)]);this.registerGameControls(),this.restart(),this.music=document.getElementById("background-music"),this.music.play()}var e,i,n;return e=t,(i=[{key:"restart",value:function(){this.animate()}},{key:"registerGameControls",value:function(){var t=this;document.addEventListener("keydown",(function(e){return e.isComposing||32===e.keyCode?t.space():e.isComposing||37===e.keyCode?t.moveLeft():e.isComposing||39===e.keyCode?t.moveRight():void 0}))}},{key:"space",value:function(t){this.Jouster.fly()}},{key:"moveLeft",value:function(t){this.Jouster.moveLeft()}},{key:"moveRight",value:function(t){this.Jouster.moveRight()}},{key:"animate",value:function(){var t=this;this.drawBackground(this.ctx),this.ledges.forEach((function(e){e.animate(t.ctx)})),this.lavas.forEach((function(e){e.animate(t.ctx)})),this.Jouster.animate(this.ctx),this.NPCs.forEach((function(e){e.animate(t.ctx)})),this.eggs.forEach((function(e){e.animate(t.ctx)})),this.animations.forEach((function(e){e.animate(t.ctx)})),this.collisionCheck(),this.eggRespawn(),this.joustAnimationDisplay(),this.req=requestAnimationFrame(this.animate.bind(this)),this.running||cancelAnimationFrame(this.req)}},{key:"gameOver",value:function(){this.music.pause(),document.getElementById("palpatine").play(),this.running=!1}},{key:"drawBackground",value:function(t){t.fillStyle="#191919",t.fillRect(0,0,this.dimensions.width,this.dimensions.height),this.stars.forEach((function(e){t.fillStyle="white",t.fillRect(e[0],e[1],2,2)}))}},{key:"collisionCheck",value:function(){var t=this;this.NPCs.forEach((function(e,i){if(e.collidedWith(t.Jouster)&&!t.Jouster.ethereal)if(e.collide(t.Jouster)){var n=["collision1","collision2","collision3"],s=n[Math.floor(Math.random()*n.length)];document.getElementById(s).play(),t.NPCs.splice(i,1),t.eggs.push(new I(e.x,e.y))}else 1===t.Jouster.lives?t.gameOver():t.Jouster.dead()})),t.ledges.forEach((function(e){e.collisionHandler(t.Jouster),t.eggs.forEach((function(t){e.collisionHandler(t)}))})),t.lavas.forEach((function(e){!t.Jouster.ethereal&&e.collisionHandler(t.Jouster)&&(1===t.Jouster.lives?t.gameOver():t.Jouster.dead()),t.eggs.forEach((function(t){e.eggCollision(t)}))})),t.eggs.forEach((function(e,i){e.collisionHandler(t.Jouster)&&(document.getElementById("pickup").play(),t.score+=150,t.animations.push(new P("score-tag",e.x-10,e.y-10,1e3)),t.eggs.splice(i,1))}))}},{key:"eggRespawn",value:function(){var t=this;this.eggs.forEach((function(e,i){if(e.respawn){t.eggs.splice(i,1),t.animations.push(new P("lightning",e.x-5,e.y-5,300));var n=new g(e.x,e.y);t.NPCs.push(n),n.y!==e.y&&t.animations.push(new P("lightning",n.x-5,n.y-5,300))}}))}},{key:"joustAnimationDisplay",value:function(){var t=this;this.animations.forEach((function(e,i){e.kill&&t.animations.splice(i,1)}))}}])&&M(e.prototype,i),n&&M(e,n),t}(),O=document.getElementById("joust"),T=document.getElementById("easy-button"),L=document.getElementById("medium-button"),N=document.getElementById("hard-button");T.addEventListener("click",(function(){new j(O,"easy")})),L.addEventListener("click",(function(){new j(O,"medium")})),N.addEventListener("click",(function(){new j(O,"hard")}))}]);
//# sourceMappingURL=main.js.map