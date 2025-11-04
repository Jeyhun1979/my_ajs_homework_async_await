import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (err) {
    console.error(err);
  }
})();
