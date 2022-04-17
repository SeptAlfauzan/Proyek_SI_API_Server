const multer = require("multer");
const path = require("path");


const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "./../../public/uploads"));
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

class PhotoUpload {
    static singgleUpload = multer({
        storage: diskStorage,
        limits: { fileSize: 1024 * 512 }
    }).single("photo");
}

module.exports = PhotoUpload;