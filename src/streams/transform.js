import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import os from 'node:os';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        `${chunk.toString().split('').reverse().join('')}${os.EOL}`
      );
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
