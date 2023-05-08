const express = require("express");
const { getDetailWallet } = require("../controllers/wallet");
const { sessionMid } = require("../middleware/session");
const router = express.Router();

router.get(`/:id`,sessionMid, getDetailWallet);

module.exports = { router };
