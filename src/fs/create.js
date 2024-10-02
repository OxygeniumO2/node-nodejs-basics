import fs from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  const dir = path.join(import.meta.dirname, 'files');
  const filePath = path.join(dir, 'fresh.txt');

  try {
    await fs.writeFile(filePath, 'I am fresh and young', {
      flag: 'wx',
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
