import billModel from '../models/billModel'

// Add an item in the database.
export const chargeBill = async (req, res) => {
  try {
    const newBill = new billModel(req.body)
    newBill.save()
    res.status(200).send('Bill Charged Successfully!')
  } catch (error) {
    res.status(400).json(error)
  }
}
