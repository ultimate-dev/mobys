const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "src/public/");
  },
  filename: function (req: any, file: any, cb: any) {
    let ext = file.mimetype.split("/")[1];

    ext =
      ext === "vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ? "xslx"
        : ext === "vnd.ms-excel"
        ? "xls"
        : ext;

    cb(null, Date.now() + "." + ext);
  },
});
const upload = multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } });

module.exports = upload;
