import fs from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
  const dir = path.join(import.meta.dirname, 'files');
  const fileToRename = path.join(dir, 'wrongFilename.txt');
  const newFilePath = path.join(dir, 'properFilename.md');

  try {
    await fs.access(newFilePath);
    throw new Error('FS operation failed');
  } catch {
    try {
      await fs.rename(fileToRename, newFilePath);
    } catch {
      throw new Error('FS operation failed');
    }
  }
};

await rename();
