import GamePiece from './game_piece';
import _ from 'lodash';
import $ from 'jquery';
import { GAME_HEIGHT, GAME_WIDTH } from './game_data';

export default class Bubble extends GamePiece {

  constructor() {
    super();
    var size = _.random(3, 10);
    this.setDimensions([size, size]);
    this.setStartPos();
  }

  setStartPos() {
    var startY = GAME_HEIGHT - 1;
    var startX = _.random(0, GAME_WIDTH - this.width);

    this.setPosition([startX, startY]);
  }

  update() {
    if (this.inStage()) {
      var [x, y] = this.getPosition();
      y -= 2;
      this.setPosition([x, y]);
    } else {
      this.setStartPos();
    }

    var [left, top] = this.getPosition();
    this.$el.css({top: `${top}px`, left: `${left}px`});
  }

  render() {
    var [w, h] = this.getDimensions();
    this.$el = $(`
      <div class="bubble"
        style="width: ${w}px; height: ${h}px;">
      </div>
    `);
    return this.$el;
  }

}
