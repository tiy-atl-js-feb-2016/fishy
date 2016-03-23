import $ from 'jquery';
import { GAME_HEIGHT, GAME_WIDTH } from './game_data';

var GOOD = 'http://www.clipartbest.com/cliparts/9Tz/onG/9TzonGKxc.png';
var BAD = 'http://vignette3.wikia.nocookie.net/piratesonline/images/b/bc/Fish_1.png/revision/latest?cb=20120416224655';

var SPEED = 20;

import GamePiece from './game_piece';

export default class Fish extends GamePiece {

  constructor() {
    super();
    this.setPosition([100, 100]);
    this.setDimensions([100, 0]);
    this.good = false;
    this.direction = 'right';
  }

  setGood() {
    this.good = true;
  }

  getSrc() {
    if (this.good) {
      return GOOD;
    } else {
      return BAD;
    }
  }

  moveLeft() {
    this.direction = 'left';
    var [x, y] = this.getPosition();
    x -= SPEED;
    this.setPosition([x, y]);

    if (!this.inStage()) {
      x += GAME_WIDTH;
      this.setPosition([x, y]);
    }
  }

  moveRight() {
    this.direction = 'right';
    var [x, y] = this.getPosition();
    x += SPEED;
    this.setPosition([x, y]);

    if (!this.inStage()) {
      x -= GAME_WIDTH;
      this.setPosition([x, y]);
    }
  }

  moveUp() {
    var [x, y] = this.getPosition();
    y -= SPEED;
    this.setPosition([x, y]);

    if (!this.inStage()) {
      y += GAME_HEIGHT;
      this.setPosition([x, y]);
    }
  }

  moveDown() {
    var [x, y] = this.getPosition();
    y += SPEED;
    this.setPosition([x, y]);

    if (!this.inStage()) {
      y -= GAME_HEIGHT;
      this.setPosition([x, y]);
    }
  }

  update() {
    this.$el.removeClass('left')
    this.$el.removeClass('right');
    this.$el.addClass(this.direction);

    var [left, top] = this.getPosition();
    this.$el.css({top: `${top}px`, left: `${left}px`});
  }

  render() {
    this.$el =  $(`
      <img
        class="fish ${this.direction}"
        width="${this.width}"
        src="${this.getSrc()}">
    `);
    return this.$el;
  }
}
