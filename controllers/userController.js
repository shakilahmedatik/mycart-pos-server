import userModel from '../models/userModel'

// Register new user
export const register = async (req, res) => {
  try {
    const newUser = new userModel(req.body)
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
    await userModel.findOne({
      userId: req.body.userId,
      password: req.body.password,
      verified: true,
    })
    res.send('Login Successful!')
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}
