import userModel from '../models/userModel'

// Register new user
export const register = async (req, res) => {
  try {
    // userId validation
    let userExist = await userModel.findOne({ userId }).exec()
    if (userExist) return res.status(400).send('userId is taken')
    const newUser = new userModel({ ...req.body, verified: false })
    await newUser.save()
    res.send('Registration Successful, Please Wait For Verification!')
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

// Login user
export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({
      userId: req.body.userId,
      password: req.body.password,
      verified: true,
    })
    if (user) {
      res.send('Login Successful!')
    } else res.send('Login Failed!')
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}
