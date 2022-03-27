const router = require("express").Router();
const itemController =require("../controler/itemController")

router.get("", itemController.getAllItems)
router.get("/:id", itemController.getItemById)
router.post("", itemController.addItem)
router.delete("/:id", itemController.deleteItem)

module.exports = router;