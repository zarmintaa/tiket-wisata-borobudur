var express = require("express");

var router = express.Router();
const pageCtl = require("../controllers/page");
const Middleware = require("../middleware/is-auth");

router.get("/", Middleware.verifyJwtPage, pageCtl.pageHome);

router.get("/transaksi", Middleware.verifyJwtPage, pageCtl.pageTransaksi);

router.get("/login", Middleware.verifyJwtPage, pageCtl.pageLogin);

router.post("/login", pageCtl.login);

router.get("/logout", Middleware.verifyJwtPage, pageCtl.logout);

router.get("/tiket", Middleware.verifyJwtPage, pageCtl.pageTiket);

router.get("/feedback", Middleware.verifyJwtPage, pageCtl.pageFeedback);

router.get("/statistik", Middleware.verifyJwtPage, pageCtl.pageStatistik);

router.get("/order-tiket", Middleware.verifyJwtPage, pageCtl.pageOrderTiket);

router.post("/order", pageCtl.createOrder);

router.post("/create-transcation", pageCtl.createTranscation);

router.post("/create-feedback", pageCtl.createFeedback);

router.get(
  "/upload-pembayaran",
  Middleware.verifyJwtPage,
  pageCtl.pageUploadTransaction
);

router.post("/upload", pageCtl.upload);

router.get(
  "/all-pembayaran",
  Middleware.verifyJwtPage,
  pageCtl.pageListUploadTransaction
);

module.exports = router;
