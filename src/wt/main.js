import path from 'node:path';
import { Worker } from 'node:worker_threads';
import os from 'node:os';
const performCalculations = async () => {
  const workerFile = path.join(import.meta.dirname, 'worker.js');
  const resArr = new Array(os.cpus().length);

  await Promise.all(
    os.cpus().map((_, i) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(workerFile, { workerData: i + 10 });

        worker.on('message', (result) => {
          resArr[i] = { status: 'resolved', data: result };
          resolve();
        });

        worker.on('error', () => {
          resArr[i] = { status: 'error', data: null };
          resolve();
        });
      });
    })
  );

  console.log(resArr);
};

await performCalculations();
