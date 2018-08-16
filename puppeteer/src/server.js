const path = require('path');
const express = require('express');

const makeScreenshot = require('./makeScreenshot').makeScreenshot;


const PORT = process.env.PORT || 3011

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/make-screenshot', async (req, res) => {
  const { url } = req.query;

  try {
    new URL(url)
  } catch (error) {
    res.send(error.message); 
    return
  }

  const imageBuffer = await makeScreenshot(url);
  
  res.writeHead(200, {
    'Content-Type': 'image/png',
  });

  res.end(imageBuffer); 
})

app.listen(PORT, function() {
  console.log('App listening on port ' + PORT)
})
