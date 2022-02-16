import { prompt } from 'inquirer';

const consoleRunnerList = [
  'dump-to-mongo',
  'dump-to-json',
];

(async () => {
  let exit = false;
  while (!exit) {
    const { consoleRunner } = await prompt([
      {
        name: 'consoleRunner',
        type: 'list',
        message: 'Which console-runner do you want to run?',
        choices: [...consoleRunnerList, 'exit'],
      },
    ]);

    if (consoleRunner !== 'exit') {
      const { run } = require(`./${consoleRunner}`);
      await run();
    } else {
      exit = true;
    }
  }
})();