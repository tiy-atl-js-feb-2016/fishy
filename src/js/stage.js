import { GAME_WIDTH, GAME_HEIGHT } from './game_data';

export default class Stage {

  render() {
    return `
      <div
        style="width: ${GAME_WIDTH}px; height: ${GAME_HEIGHT}px;"
        class="game">

      </div>
    `;
  }

}
