const { body,validationResult } = require('express-validator')
const weatherValidateRules = () => {
  return [
    body("zipCode").not().isEmpty().withMessage('please provide zip-code'),
    body("countryCode").not().isEmpty().withMessage('please provide country-code')
  ]
}

const weatherValidate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {weatherValidateRules,weatherValidate};