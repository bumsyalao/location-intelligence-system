import mongoose, { Schema, Document } from 'mongoose';

export interface IVehicle extends Document {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    status: string;
    // createdBy: string;
    // updatedBy: string;
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
vehicleSchema.index({ name: 1, location: 1, status: 1 }, { unique: true });

export default mongoose.model<IVehicle>('Vehicle', vehicleSchema);

