const Payments = require('../models/paymentModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')
const { json } = require('express')


var ObjectId = require('mongodb').ObjectID;
// var mongoose = require('mongoose')


const paymentCtrl = {
    getPayments: async(req,res) =>{
        try {
            
            const payments = await Payments.find()
            res.json(payments)
            // console.log("payments",res);
            // alert("hfjsdfhksdfhkj")


        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },
    createPayment: async(req,res) =>{
        try {
            const user= await Users.findById(req.user.id).select('name email')
            
            if(!user) return res.status(400).json({msg:"User does not exist"})
            
            const {cart,paymentID,address} = req.body;
            const {_id,name,email} = user;

            const newPayment = new Payments({
                user_id:_id,name,email,cart,paymentID,address
            })

            cart.filter(item =>{
                return sold(item._id,item.quantity,item.sold)
            })

            await newPayment.save()

            res.json({msg:"Payment Sucess"})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },

    // status:async(req,res) =>{
    //     console.log("request",req)
    //     try {
    //         const status = req.body;
         
    //         await Payments.findByIdAndUpdate({_id:req.body.cart._id},{delivery_status:req.body.cart.delivery_status})
    //         res.json({msg:"Updated Category"})

    //     } catch (err) {
    //         return res.status(500).json({msg:err.message})
            
    //     }
        
    // }


    // status:async(req,res) =>{
     
    //     const newStatus = req.body.newStatus
    //     const id = req.body.id

    //     try {
    //   await Payments.findByIdAndUpdate({_id:req.body.cart._id},{delivery_status:req.body.cart.delivery_status})

    //         await Payments.findById(id,(error,statusUpdate) =>{
    //             statusUpdate.delivery_status = newStatus;
    //             statusUpdate.save()
    //         })
    //         res.json({msg:"Updated Category"})

    //     } catch (err) {
    //         return res.status(500).json({msg:err.message})
            
    //     }
        
    // },


    // status:async(req,res) =>{
    //     try {
    //         const {delivery_status} = req.body;
    //         await Payments.findOneAndUpdate({_id:req.params.id},{delivery_status})
    //         res.json({msg:"Updated Category"})
    //     } catch (err) {
    //         return res.status(500).json({msg:err.message})
            
    //     }
    // }


// -----------------------delivery-Status-----------------------------------------//


updateStatus:async(req,res) =>{
    try {
        const {delivery_status} = req.body;
        await Payments.findOneAndUpdate({"_id" :ObjectId(req.body._id)},{delivery_status})
        res.json({msg:"Updated Category"})
    } catch (err) {
        return res.status(500).json({msg:err.message})
        
    }
}




}

const sold = async (id,quantity,oldSold) =>{
    await Products.findOneAndUpdate({_id:id},{
        sold:quantity+oldSold
    })
}

module.exports = paymentCtrl