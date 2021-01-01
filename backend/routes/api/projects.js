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

// GET all projects
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const projects = await Project.findAll({
      include: [ User, Image, Instruction ]
    });
    return res.json(projects);
  }),
);

// GET individual project
router.get(
  '/:projectId',
  asyncHandler(async (req, res) => {
    const project = await Project.findByPk(req.params.projectId, {
      include: [ User, Instruction, Comment, Image, Video ]
    });
    return res.json(project);
  }),
);

module.exports = router;
