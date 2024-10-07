import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const calculateHash = async () => {
  const dir = path.join(import.meta.dirname, 'files');
  const fileToRead = path.join(dir, 'fileToCalculateHashFor.txt');

  const file = await fs.open(fileToRead, 'r');

  const hash = crypto.createHash('sha256');

  const stream = file.createReadStream();

  stream.on('data', (chunk) => {
    hash.update(chunk);
  });

  stream.on('end', async () => {
    console.log(hash.digest('hex'));
    await file.close();
  });
};

await calculateHash();
