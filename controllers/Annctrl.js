const Ann = require('../models/statusmodel')
const Products = require('../models/productModel')
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose')

const  AnnCtrl = {
    createAnn:async(req,res) =>{
        try {
            //person who has role=1 he is a admin
            const {name} = req.body;
            const apple = await Ann.findOne({name})
            if(apple) return res.status(400).json({msg: "This catagoy already exists"})

            const newAnn = new Ann({name})
            await newAnn.save()
            res.json({msg: "Created category"})

        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    },
   
    findAnn:async(req,res) =>{
        // console.log(req);
        // Ann.find({"_id": mongoose.Types.ObjectId(req._id)}, function (err, record) {
        //     console.log(record);
        //     });
        try {
            const apple = await Ann.findById({"_id" :ObjectId(req.body._id)});
            return res.status(400).json({apple})

// console.log(req.)


            } catch (err) {
                return res.status(500).json({msg:err.message})

            }
    },

    updateAnn:async(req,res) =>{
        try {
            const {name} = req.body;
            await Ann.findOneAndUpdate({"_id" :ObjectId(req.body._id)},{name})
            res.json({msg:"Updated Category"})
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    }



    }



module.exports = AnnCtrl