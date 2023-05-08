const express = require("express");
const { insertFile } = require("../controllers/storage");
const uploadMiddleware = require("../middleware/custom-storage");
const router = express.Router();

router.post(`/`,uploadMiddleware.single('file'), insertFile);

module.exports = { router };
