const router = require("express").Router();
const winningController = require("../controler/winning");

router.get("getWinningByIdOfItem/:id", winningController.getWinningByIdOfItem);
router.get("getAllUserById/:id", winningController.getAllUserById);
router.get("getWinning/:id", winningController.getWinning);
router.post("", winningController.addwinning);

module.exports = router;