const { User } = require('../model')

exports.login = async (req, res, next) => {
  try {
    res.send('/users/login')
  } catch (err) {
    next(err)
  }
}

exports.register = async (req, res, next) => {
  try {
    console.log(req.body.user)

    let user = new User(req.body.user)

    await user.save()

    user = user.toJSON()
    delete user.password

    res.status(201).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

exports.getCurrentUser = async (req, res, next) => {
  try {
    us
    res.send('getCurrentUser')
  } catch (err) {
    next(err)
  }
}

exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}