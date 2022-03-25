import mongoose from 'mongoose'

const billSchema = mongoose.Schema(
  {
    customerName: { type: String, required: true },
    total: { type: Number, required: true },
    tax: { type: Number, required: true },
    subTotal: { type: Number, required: true },
    userId: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    paymentMode: { type: String, required: true },
    cartItems: { type: Array, required: true },
  },
  { timestamps: true }
)

export default mongoose.model('bills', billSchema)
