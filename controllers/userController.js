import userModel from '../models/userModel'

// Register new user
export const register = async (req, res) => {
  try {
    //Received Data From Front-End
    const { name, userId, password } = req.body

    // Name validation
    if (!name) return res.status(400).send('Name is required')
    // userId validation
    if (!userId) return res.status(400).send('User ID is required')
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
    const { userId, password } = req.body

    // userId Validation
    const userCheck = await userModel.findOne({ userId }).exec()
    if (!userCheck) return res.status(400).send('No user found')

    // password validation
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send('Password is required and should be min 6 characters long')
    }

    const user = await userModel.findOne({
      userId: req.body.userId,
      password: req.body.password,
      verified: true,
    })

    if (user) {
      res.send(user)
    } else {
      res.status(400).send('User not validated')
    }
  } catch (error) {
    // Error handling
    console.log(error)
    res.status(400).json(error)
  }
}
