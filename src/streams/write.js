import fs from 'node:fs/promises';
import path from 'node:path';

const write = async () => {
  const dir = path.join(import.meta.dirname, 'files');
  const fileToRead = path.join(dir, 'fileToWrite.txt');

  const file = await fs.open(fileToRead, 'a');

  const stream = file.createWriteStream();

  process.stdin.on('data', (data) => {
    stream.write(data);
  });

  process.stdin.on('end', async () => {
    stream.end();
    await file.close();
  });
};

await write();
