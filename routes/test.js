const router = require('express').Router();
const path = require('path');
// const fs = require('fs/promises');
const Tesseract = require('tesseract.js');

router.get('/', async (req, res) => {
  
  const filePath = path.resolve('uploads/eng_bw.png');
  Tesseract.recognize(
    filePath,
    'eng+rus',
    { logger: m => console.log(m) }
  ).then( async ({ data: { text } }) => {
    console.log(text);
    res.end(text);
  });
});

module.exports = router;
