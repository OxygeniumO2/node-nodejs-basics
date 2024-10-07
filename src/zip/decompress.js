import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';
import path from 'node:path';

const decompress = async () => {
  const dir = path.join(import.meta.dirname, 'files');
  const fileToDecompress = path.join(dir, 'archive.gz');
  const fileToWrite = path.join(dir, 'fileToCompress.txt');

  const readStream = fs.createReadStream(fileToDecompress);

  const writeStreamDestination = fs.createWriteStream(fileToWrite);

  const unzip = createUnzip();

  await pipeline(readStream, unzip, writeStreamDestination);
};

await decompress();
