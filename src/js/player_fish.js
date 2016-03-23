import $ from 'jquery';
import Fish from './fish';

export default class PlayerFish extends Fish {
  constructor() {
    super();
    this.setGood();
  }
}
