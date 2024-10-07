import fs from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  const dir = path.join(import.meta.dirname, 'files');

  try {
    const files = await fs.readdir(dir);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
