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
    // code goes here
  } catch (error) {
    console.log(error)
  }
}
