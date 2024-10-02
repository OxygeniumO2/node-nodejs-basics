import fs from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  const dir = path.join(import.meta.dirname, 'files');

  try {
    await fs.rm(path.join(dir, 'fileToRemove.txt'));
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
