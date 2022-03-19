import itemsModel from '../models/itemsModel'

export const allItems = async (req, res) => {
  try {
    const items = await itemsModel.find()
    res.send(items)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

export const addItem = async (req, res) => {
  try {
    const newItem = new itemsModel(req.body)
    newItem.save()
    res.status(200).send('Item Added Successfully!')
  } catch (error) {
    res.status(400).json(error)
  }
}

export const editItem = async (req, res) => {
  try {
    await itemsModel.findOneAndUpdate({ _id: req.body.itemId }, req.body)
    res.status(200).send('Item Updated Successfully!')
  } catch (error) {
    res.status(400).json(error)
  }
}
