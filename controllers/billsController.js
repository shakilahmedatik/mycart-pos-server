import billModel from '../models/billModel'

// Get all the bills from database
export const allBills = async (req, res) => {
  try {
    const bills = await billModel.find()
    res.send(bills)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

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
