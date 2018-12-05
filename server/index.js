const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const isDev = process.env.NODE_ENV !== 'production';
const setup = require('./middleware/frontendMiddlewares');

const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? requre('ngrok')
    : false;
const { resolve } = require('path');
const app = express();



setup(app, {
  outputPath: resolve(process.cwd(), 'dist'),
  publicPath: '/'
});


const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port)
    } catch(e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost)
  }
});
