import { Medicine } from './models/Medicine';
import { Vital } from './models/Vital';
import { Patient } from './models/Patient';

export const resolvers ={
    Query:{
        hello:()=>"hi!",
        allPatients: async()=>{
            return await Patient.find({});
        },
    },
    Mutation: {
        deletePatient:async(_,{
            id
        })=>{
            return await Patient.findByIdAndDelete(id)
        },
        createPatient:async(_,{
            firstName,
            lastName,
            email
        })=>{
            const newPatient = new Patient({
                firstName,
                lastName,
                email
            });
            await newPatient.save();
            return newPatient;
        },
        createVital :async(_,{
            bp,
            sugar,
            weight,
            diagnosis
        })=>{
            const newVital = new Vital({
                bp,
                sugar,
                weight,
                diagnosis
            });
            await newVital.save();
            return newVital;
        },
        createMedicine: async (_, { 
            name,
            company,
            cost,
            quantity,
            manufactureDate,
            expiryDate,
            medicinetype
         }) => {
          const newMedicine = new Medicine({  name,            
                                        company,
                                        cost,
                                        quantity,
                                        manufactureDate,
                                        expiryDate,
                                        medicinetype });
          await newMedicine.save();
          return newMedicine;
        }
      }
}