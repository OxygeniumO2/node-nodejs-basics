import fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  const dir = path.join(import.meta.dirname, 'files');
  const fileToRead = path.join(dir, 'fileToRead.txt');

  const file = await fs.open(fileToRead, 'r');

  const stream = file.createReadStream();

  stream.on('data', (chunk) => {
    process.stdout.write(chunk.toString());
  });

  stream.on('close', async () => {
    await file.close();
  });
};

await read();
