const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {
  User,
  Project,
  Instruction,
  Comment,
  Image,
  Video,
} = require('../../db/models');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    let projects = await Project.findAll();
    return res.json(projects);
  }),
);

module.exports = router;
