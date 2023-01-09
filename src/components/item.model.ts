// import { Schema, model, Document, Types } from 'mongoose';
// import { IBooking } from '../utils/types';
// const bookingSchema = new Schema({
//     meetingName: {
//         type: String
//     },
//     userId: {
//         type: Types.ObjectId,
//         ref: 'user'
//     },
//     date: {
//         type: Date
//     },
//     technology: {
//         type: [String]
//     },
//     startTime: {
//         type: Date
//     },
//     endTime: {
//         type: Date
//     }
// },
//     {
//         timestamps: true
//     })
// export default model<IBooking>('booking', bookingSchema);

import  { model, Schema } from "mongoose";
import { MainItem } from "./item.interface";

const ItemSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
})

export default model<MainItem>('Item',ItemSchema )