import mongoose from 'mongoose';

export const Patient = mongoose.model('Patient',{
    //TODO personal details
    //firstname,lastname,email,phone,age,gender,height,address
    //TODO link vitals here
    //TODO link Prescriptions here
    //TODO link treatments here
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});