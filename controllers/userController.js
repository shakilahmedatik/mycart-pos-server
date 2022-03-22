import userModel from '../models/userModel'

// Register new user
export const register = async (req, res) => {
  try {
    //Received Data From Front-End
    const { name, userid, password } = req.body

    // Name validation
    if (!name) return res.status(400).send('Name is required')
    // userId validation
    if (!userid) return res.status(400).send('User ID is required')
    // Password validation
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send('Password is required and should be min 6 characters long')
    }
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
