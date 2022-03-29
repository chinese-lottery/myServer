const User = require("../models/user").User;
const Winning = require("../models/winning").Winning;

const addwinning = async (req, res) => {
    try {
        let a = new Winning(req.body)
        await a.save();
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const getWinning = async (req, res) => {
    try {
        let a = await winning.find(req);
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const getAllUserById = async (req, res) => {
    try {
        let a = await User.find({}).populate(req);
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

const getWinningByIdOfItem = async (req, res) => {
    try {

        let a = await Winning.find({}).populate(req);
        return res.send(a);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}

module.exports = {
    getWinningByIdOfItem, getAllUserById, getWinning, addwinning
}