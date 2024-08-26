exports.getProfile = (req, res, next) => {
  res.status(200).json({
    name: 'Test Name',
    lastname:'"Test Lastname',
    email: 'test@email.com'
  })
}