import { GAME_WIDTH, GAME_HEIGHT } from './game_data';

export default class GamePiece {

  update() {
    
  }

  setDimensions([w, h]) {
    this.width = w;
    this.height = h;
  }

  getDimensions() {
    return [this.width, this.height];
  }

  setPosition([x, y]) {
    this.xPos = x;
    this.yPos = y;
  }

  getPosition() {
    return [this.xPos, this.yPos];
  }

  inStage() {
    var [x, y] = this.getPosition();
    var [w, h] = this.getDimensions();

    if (x > GAME_WIDTH) {
      return false;
    } else if (x < -w) {
      return false;
    } else if (y > GAME_HEIGHT) {
      return false;
    } else if (y < -h) {
      return false;
    } else {
      return true;
    }
  }
}
