import { workerData, parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

// Reviewers, uncomment this to test error worker
// if (Math.random() > 0.5) throw new Error('err test');

const sendResult = () => {
  const result = nthFibonacci(workerData);
  parentPort.postMessage(result);
};

sendResult();
