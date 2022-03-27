const Item=require("../models/item").Item

const getAllItems = async (req, res) => 
{
    try 
    {
        let i=await Item.find({})
        return res.send(i);
    }
    catch (e) 
    {
        return res.status(400).send(e);
    }
}

const getItemById = async (req, res) => 
{
    try 
    {
        let i=await Item.find((i)=>{i.id==req.id})
        return res.send(i);
    }
    catch (e) 
    {
        return res.status(400).send(e);
    }
}

const addItem=async(req,res)=>
{
    try 
    {
       let item=new Item(req.body);
       await item.save();
       return res.send(item);
    }
    catch (e) 
    {
        return res.status(400).send(e);
    }
}

const deleteItem=async(req,res)=>
{
    let itemId=req.params.id;
    try 
    {
       let item=await Item.findByIdAndDelete(itemId);
       return res.send(item);
    }
    catch (e) 
    {
        return res.status(400).send(e);
    }
}
module.exports={
    getAllItems,
    getItemById,
    addItem,
    deleteItem
}
