import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';
import path from 'node:path';

const compress = async () => {
  const dir = path.join(import.meta.dirname, 'files');
  const fileToCompress = path.join(dir, 'fileToCompress.txt');
  const fileToWrite = path.join(dir, 'archive.gz');

  const readStream = fs.createReadStream(fileToCompress);

  const writeStreamDestination = fs.createWriteStream(fileToWrite);

  const gzip = createGzip();

  await pipeline(readStream, gzip, writeStreamDestination);
};

await compress();
