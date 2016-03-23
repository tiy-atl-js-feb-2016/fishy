// Javascript Entry Point

import $ from 'jquery';

import Stage from './stage';
import Bubble from './bubble';
import PlayerFish from './player_fish';

var gameMembers = [];

var stage = new Stage();

var $stage = $(stage.render());

$('.app').append($stage);


var totalBubbles = 0;
var bubbleInterval = setInterval(() => {
  var bubble = new Bubble();
  gameMembers.push(bubble);
  $stage.append(bubble.render());
  totalBubbles++;
  if (totalBubbles >= 25) {
    clearInterval(bubbleInterval);
  }
}, 1000);

var player = new PlayerFish();
gameMembers.push(player);
$stage.append(player.render());

setInterval(() => {
  gameMembers.forEach(member => {
    member.update();
  });
}, 100);

$(document).on('keyup', event => {
  console.log('keyup', event.keyCode);
  var key = event.keyCode;
  if (key === 38) {
    //up
    player.moveUp();
  } else if (key === 37) {
    //left
    player.moveLeft()
  } else if (key === 39) {
    //right
    player.moveRight();
  } else if (key === 40) {
    //down
    player.moveDown();
  }
});


setTimeout(() => {
  var status = Math.random() > 0.5 ? 'WIN' : 'LOSE';

  document.write(`YOU ${status}!!!!!!`);
}, 10000)
