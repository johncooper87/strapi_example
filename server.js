const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

process.env.NODE_ENV = 'production';
if (process.env.PORT === undefined) process.env.PORT = 3000;

const app = next({});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT);
})