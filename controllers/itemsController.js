import itemsModel from '../models/itemsModel'

// Get all the items from database
export const allItems = async (req, res) => {
  try {
    const items = await itemsModel.find()
    res.send(items)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

// Add an item in the database.
export const addItem = async (req, res) => {
  try {
    const newItem = new itemsModel(req.body)
    // save item in the db
    newItem.save()
    res.status(200).send('Item Added Successfully!')
  } catch (error) {
    res.status(400).json(error)
  }
}

// Edit an item in the database.
export const editItem = async (req, res) => {
  try {
    await itemsModel.findOneAndUpdate({ _id: req.body.itemId }, req.body)
    res.status(200).send('Item Updated Successfully!')
  } catch (error) {
    res.status(400).json(error)
  }
}

// Delete an item in the database.
export const deleteItem = async (req, res) => {
  try {
    console.log(req.params.id)
    await itemsModel.findOneAndDelete({ _id: req.params.id })
    res.status(200).send('Item Deleted Successfully!')
  } catch (error) {
    res.status(400).json(error)
  }
}
