import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: false },
  },
  { timestamps: true }
)

export default mongoose.model('users', userSchema)
