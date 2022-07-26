var express = require("express");
var router = express.Router();
const apiCtl = require("../controllers/api");
router.get("/api/transactions", apiCtl.getAllCountTransaction);

router.get("/api/transaction/all", apiCtl.getAllTransaction)

module.exports = router;
