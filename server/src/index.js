import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Home from './components/Home';

const app = express();

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});