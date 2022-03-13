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

export const addItems = async (req, res) => {
  try {
    const newItem = new itemsModel(req.body)
    newItem.save()
    res.status(200).send('Item Added Successfully!')
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}
