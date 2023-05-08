const express = require("express");
const router = express.Router();
const {
  getUsers,
  getDetailUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.post(`/`, createUser);

router.get(`/`, getUsers);

router.get(`/:id`, getDetailUser);

router.patch(`/:id`, updateUser);

router.delete(`/:id`, deleteUser);

module.exports = { router };
