import mongoose from 'mongoose';

export const Vital = mongoose.model('Vital',{
    //TODO add patient id here from another document Patient
    bp:{
        type:String
    },    
    sugar:{
        type:String
    },    
    weight:{
        type:String
    },    
    diagnosis:{
        type:String,
        required:true
    }
    //TODO add timestamps for creation, updatedtimes
})