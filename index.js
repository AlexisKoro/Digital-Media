const express = require('express');
const app = express();
const ffmpeg = require('fluent-ffmpeg');

app.post('/convert', (req, res) => {
  const videoUrl = req.body.videoUrl;
  const outputFormat = req.body.outputFormat;

  ffmpeg(videoUrl)
    .setFormat(outputFormat)
    .on('end', () => {
      res.send(`Video converted successfully!`);
    })
    .on('error', (err) => {
      res.status(500).send(`Error converting video: ${err}`);
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});