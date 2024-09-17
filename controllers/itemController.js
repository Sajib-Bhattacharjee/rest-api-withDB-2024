const Item = require("../models/Item");

// @desc    Fetch all items
// @route   GET /api/items
// @access  Public
const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// @desc    Create a new item
// @route   POST /api/items
// @access  Public
const createItem = async (req, res) => {
  const { name, description } = req.body;

  const item = new Item({
    name,
    description,
  });

  const createdItem = await item.save();
  res.status(201).json(createdItem);
};

// @desc    Get item by ID
// @route   GET /api/items/:id
// @access  Public
const getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

// @desc    Update item
// @route   PUT /api/items/:id
// @access  Public
const updateItem = async (req, res) => {
  const { name, description } = req.body;

  const item = await Item.findById(req.params.id);

  if (item) {
    item.name = name || item.name;
    item.description = description || item.description;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

// @desc    Delete item
// @route   DELETE /api/items/:id
// @access  Public
const deleteItem = async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id); // Directly delete by ID

  if (item) {
    res.json({ message: "Item removed" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

module.exports = {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
};
