import mongoose from 'mongoose';

export const Treatment = mongoose.model('Treatment',{
    //TODO patient id from another document Patient
    //TODO timestamps for createdAt, updatedAt
    treatmentArea:{
        type:String
    },
    numOfDays:{
        type:String,
        required:true
    },
    attender:{
        type:String,
        required:true
    },
    //TODO how to embed mutilple unknown number of objects for OIL
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    treatmentTime:{
        type:String,
        required:true
    }
});