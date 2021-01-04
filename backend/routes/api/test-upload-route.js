const router = require('express').Router();
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

// TODO: update to alter state with React / Redux
router.post(
  '/',
  singleMulterUpload('image'),
  async (req, res, next) => {
    try {
      const urlOnS3 = await singlePublicFileUpload(req.file); // url needed for pic
      console.log(urlOnS3);
      res.json({ message: 'Hi!' });
    } catch (e) {
      next(e);
    }
}); 

module.exports = router;
