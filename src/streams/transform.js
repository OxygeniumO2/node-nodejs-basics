import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${chunk.toString().split('').reverse().join('')}\n`);
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
