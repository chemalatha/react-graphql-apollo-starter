import mongoose from 'mongoose';

export const Treatment = mongoose.model('Treatment',{
    //TODO patient id from another document Patient
    //TODO vital id from another document Vital
    //TODO timestamps for createdAt, updatedAt
    //TODO emdebedding another type array of medicines here
});