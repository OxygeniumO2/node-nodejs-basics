import fs from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  const dirToCopy = path.join(import.meta.dirname, 'files');
  const dirPathCopy = path.join(import.meta.dirname, 'files_copy');

  try {
    await fs.cp(dirToCopy, dirPathCopy, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
