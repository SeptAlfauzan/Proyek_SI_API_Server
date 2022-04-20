const express = require('express');
const PatnersController = require('../controllers/PatnersController');
const PhotoUpload = require('../middlewares/PhotoUpload');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const router = express.Router();
const path = require("path");
const multer = require("multer");

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "./../../public/uploads"));
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

// router.post('/', RegisterController.register);
router.get('/', PatnersController.getAll);
router.get('/one/:username', AuthMiddleware.auth, PatnersController.getOne);
router.post('/',
    multer({
        storage: diskStorage,
        limits: { fileSize: 1024 * 512 },
        fileFilter: (req, file, cb) => {
            let ext = path.extname(file.originalname);
            if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
                cb(new Error("File type is not supported"), false);
                return;
            }
            cb(null, true);
        },
    }).single("photo")
    , PatnersController.register);
router.get('/patner/:username', AuthMiddleware.auth, PatnersController.getPatners);
router.get('/order/:username', PatnersController.orders);
router.get('/user/reset-password', (req, res) => {
    res.send('test');
});

module.exports = router;