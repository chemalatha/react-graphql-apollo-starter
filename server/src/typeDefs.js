import {gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query{
        hello :String!
        allPatients: [Patient!]!
    }
    type Medicine{
        id:ID!
        name:String!
        company:String!
        cost:String!
        quantity:Int
        manufactureDate:String!
        expiryDate:String!
        medicinetype:String
    }
    type Vital{
        id:ID!
        bp:String   
        sugar:String
        weight:String
        diagnosis:String!
    }
    type Patient{
        id:ID!
        firstName:String!
        lastName:String!
        email:String!
    }
    type Mutation{
        deletePatient(
            id:String!
        ):Patient!
        createPatient(
            firstName:String!,
            lastName:String!,
            email:String!
        ):Patient!
        createMedicine(
            name:String!,
            company:String!,
            cost:String!,
            quantity:Int,
            manufactureDate:String!,
            expiryDate:String!,
            medicinetype:String): Medicine!
        createVital(
            bp:String,   
            sugar:String, 
            weight:String,
            diagnosis:String!
        ):Vital!
    }
    
`;