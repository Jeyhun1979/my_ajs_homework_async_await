import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const parsed = await json(data);
    const obj = JSON.parse(parsed);
    return new GameSaving(obj);
  }
}
