import mongoose from 'mongoose';

export const Medicine = mongoose.model('Medicine',{
    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    manufactureDate:{
        type:String,
        required:true
    },
    expiryDate:{
        type:String,
        required:true
    },
    medicinetype:{
        type:String,
        default:'tablet'
    }

})

