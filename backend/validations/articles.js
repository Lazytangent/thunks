const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const id = check('id')
  .notEmpty()
  .isInt({ min: 0 });

const title = check('title')
  .notEmpty()
  .withMessage('Title must not be empty.');

const imageUrl = check('imageUrl')
  .notEmpty()
  .isURL()
  .withMessage('URL for image must be a valid URL.');

const body = check('body')
  .notEmpty()
  .withMessage('Body must contain text.');

const validateCreate = [
  title,
  imageUrl,
  body,
  handleValidationErrors,
];

exports.validateCreate = validateCreate;

exports.validateUpate = [
  id,
  validateCreate,
];
