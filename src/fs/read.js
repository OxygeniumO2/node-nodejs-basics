import fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  const dir = path.join(import.meta.dirname, 'files');
  const fileToRead = path.join(dir, 'fileToRead.txt');

  try {
    const data = await fs.readFile(fileToRead, 'utf8');
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
