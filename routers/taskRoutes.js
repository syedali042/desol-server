const route = require('express').Router();
const taskController = require('../controllers/taskController');
const path =  require('path')
const multer = require('multer');
const UPLOAD_FILES_DIR = "./uploads/";
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, __dirname+'/uploads/');
  },
// in case you want to change the names of your files)
  filename(req, file = {}, cb) {
    file.mimetype = "audio/webm";
    // console.log(req)
    const {originalname} = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${Date.now()}${fileExtension}`);
  }
});
const upload = multer({storage});
route.post('/login', taskController.authenticateUser)
route.post('/addVehicle', upload.array('files', 10), taskController.addVehicle)


module.exports = route;