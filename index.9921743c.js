!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}}var r=new/*#__PURE__*/(function(){var t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),this.board=t||[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.status="idle",this.score=0}return t=[{key:"getScore",value:function(){return this.score}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.score=0,this.status="playing",this.addRandomTile(),this.addRandomTile()}},{key:"restart",value:function(){this.start()}},{key:"addRandomTile",value:function(){for(var t,r=[],n=0;n<4;n++)for(var o=0;o<4;o++)0===this.board[n][o]&&r.push([n,o]);var a=function(t){if(Array.isArray(t))return t}(t=r[Math.floor(Math.random()*r.length)])||function(t,e){var r,n,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var a=[],s=!0,i=!1;try{for(o=o.call(t);!(s=(r=o.next()).done)&&(a.push(r.value),2!==a.length);s=!0);}catch(t){i=!0,n=t}finally{try{s||null==o.return||o.return()}finally{if(i)throw n}}return a}}(t,2)||e(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=a[0],i=a[1];this.board[s][i]=Math.random()>.1?2:4}},{key:"moveLeft",value:function(){for(var t=this,e=!1,r=0;r<4;r++)!function(r){for(var n=t.board[r].filter(function(t){return 0!==t}),o=[],a=0;a<n.length;)n[a]===n[a+1]?(o.push(2*n[a]),t.score+=2*n[a],a+=2):(o.push(n[a]),a++);for(;o.length<4;)o.push(0);t.arraysEqual(t.board[r],o)||(e=!0),t.board[r]=o}(r);e&&(this.addRandomTile(),this.checkWin(),this.checkLose())}},{key:"arraysEqual",value:function(t,e){return t.every(function(t,r){return t===e[r]})}},{key:"moveRight",value:function(){this.board.forEach(function(t){return t.reverse()}),this.moveLeft(),this.board.forEach(function(t){return t.reverse()})}},{key:"moveUp",value:function(){this.board=this.transposeBoard(),this.moveLeft(),this.board=this.transposeBoard()}},{key:"moveDown",value:function(){this.board=this.transposeBoard(),this.moveRight(),this.board=this.transposeBoard()}},{key:"transposeBoard",value:function(){var t=this;return this.board[0].map(function(e,r){return t.board.map(function(t){return t[r]})})}},{key:"checkWin",value:function(){this.board.some(function(t){return t.includes(2048)})&&(this.status="win")}},{key:"checkLose",value:function(){this.canMove()||(this.status="lose")}},{key:"canMove",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(0===this.board[t][e]||t<3&&this.board[t][e]===this.board[t+1][e]||e<3&&this.board[t][e]===this.board[t][e+1])return!0;return!1}},{key:"getState",value:function(){return{board:this.board,score:this.score,statusGame:this.status}}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(r.prototype,t),r}()),n=document.querySelector(".start");function o(){var n=r.getState(),o=n.board,a=n.score,s=n.statusGame;document.querySelectorAll(".field-cell").forEach(function(r,n){var a,s=o[Math.floor(n/4)][n%4],i=((function(e){if(Array.isArray(e))return t(e)})(a=r.classList)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||e(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).find(function(t){return t.startsWith("field-cell--")});i&&r.classList.remove(i),r.textContent=s||"",s&&r.classList.add("field-cell--".concat(s))}),document.querySelector(".game-score").textContent=a,"win"===s?document.querySelector(".message-win").classList.remove("hidden"):"lose"===s?document.querySelector(".message-lose").classList.remove("hidden"):document.querySelector(".message-start").classList.remove("hidden")}document.querySelector(".start").addEventListener("click",function(){r.start(),document.querySelector(".message-start").style.display="none",document.querySelector(".message-lose").classList.add("hidden"),o(),n.classList.remove("start"),n.classList.add("restart"),n.textContent="Restart"}),document.addEventListener("keydown",function(t){if("playing"===r.status){switch(t.key){case"ArrowLeft":t.preventDefault(),r.moveLeft();break;case"ArrowRight":t.preventDefault(),r.moveRight();break;case"ArrowUp":t.preventDefault(),r.moveUp();break;case"ArrowDown":t.preventDefault(),r.moveDown()}o()}})}();
//# sourceMappingURL=index.9921743c.js.map
