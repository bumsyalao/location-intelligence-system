import mongoose, { Schema, Document } from 'mongoose';

export interface IVehicle extends Document {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    status: string;
}

const vehicleSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        lat: {
            type: Number,
            required: true,
        },
        lng: {
            type: Number,
            required: true,
        },
    },
    status: {
        type: String,
        required: true,
    },
});

const Vehicle = mongoose.model<IVehicle>('Vehicle', vehicleSchema);

export default Vehicle;
