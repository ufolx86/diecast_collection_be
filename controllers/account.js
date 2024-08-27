const { validationResult } = require('express-validator/check')

exports.getProfile = (req, res, next) => {
  res.status(200).json({
    name: 'Test Name',
    lastname:'"Test Lastname',
    email: 'test@email.com'
  })
}

exports.patchProfile = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Updating profile failed. Data is incorrect.', 
      errors: errors.array()
    })
  }
  const name = req.body.name;
  const lastName= req.body.lastname;
  res.status(201).json({
    name: name,
    lastName: lastName
  })
}