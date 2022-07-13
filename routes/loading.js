const router = require('express').Router();

const Load = require('../views/Load');
router.get('/',  (req, res)  => {
  if (!res.locals.user) {
    res.redirect('/auth');
    return;
  }

  res.renderComponent(Load);
})

const path = require('path');
const Multer = require('multer');
const storage = Multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, path.resolve('uploads/'));
  },
  // By default, multer removes file extensions so let's add them back
  filename: function(req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    const dotIndex = file.originalname.lastIndexOf('.');
    const filename = file.originalname.slice(0, dotIndex) + '_' + Date.now() + file.originalname.slice(dotIndex);
    cb(null, filename);
  }
});

const fileFilter = function(req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      req.fileValidationError = 'Only image files are allowed!';
      return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const { Image } = require('../db/models');

const Tesseract = require('tesseract.js');

router.post('/', async (req, res) => {
  if (!res.locals.user) {
    res.redirect('/auth');
    return;
  }

  let upload = Multer({ storage, fileFilter }).single('image');

  upload(req, res, async (err) => {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    }
    else if (!req.file) {
      return res.send('Please select an image to upload');
    }
    else if (err instanceof Multer.MulterError) {
      return res.send(err);
    }
    else if (err) {
      return res.send(err);
    }

    // Display uploaded image for user validation
    try {
      const image = await Image.create({
        user_id: res.locals.user.id,
        title: req.file.filename,
        image_blob: null,
        image_url: req.file.path,
        text: null,
      });

      await image.save();

      Tesseract.recognize(
        req.file.path,
        'eng+rus',
        { logger: m => console.log(m) }
      ).then( async ({ data: { text } }) => {
        image.text = text;
        await image.save();
      });
    } catch (error) {
      res.end(error.message);
      return;
    }

    res.send(`You have uploaded this image! ${req.file.filename}`);
  });
});

module.exports = router;
