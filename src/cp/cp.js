import path from 'node:path';
import { fork } from 'node:child_process';
const spawnChildProcess = async (args) => {
  const childProcessFile = path.join(import.meta.dirname, 'files', 'script.js');

  const childProcess = fork(childProcessFile, args, { silent: true });

  process.stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  });

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  childProcess.on('exit', () => {
    process.exit();
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hello', 'world']);
