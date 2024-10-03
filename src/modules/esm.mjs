import path from 'node:path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import fs from 'node:fs/promises';
import './files/c.js';

const random = Math.random();

let unknownObject;

const dir = path.join(import.meta.dirname, 'files');

const fileToReadA = path.join(dir, 'a.json');
const fileToReadB = path.join(dir, 'b.json');

if (random > 0.5) {
  unknownObject = await fs.readFile(fileToReadA, 'utf8');
} else {
  unknownObject = await fs.readFile(fileToReadB, 'utf8');
}

unknownObject = JSON.parse(unknownObject);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
