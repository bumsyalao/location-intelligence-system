import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useCreateVehicle from '../../hooks/useCreateVehicle';
import useUpdateVehicle from '../../hooks/useUpdateVehicle';
import Button from '../Button/Button';
import Vehicle from '../../types';

interface VehicleFormProps {
    onSubmit?: SubmitHandler<Vehicle>;
    vehicle?: Vehicle;
    buttonText: string;
    onClose?: () => void;
}

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    location: yup.object().shape({
        lat: yup.number().required('Latitude is required'),
        lng: yup.number().required('Longitude is required'),
    }),
    status: yup.string().required('Status is required'),
});

const VehicleForm: React.FC<VehicleFormProps> = ({ buttonText, vehicle, onClose }) => {

    const { createVehicle } = useCreateVehicle();
    const { updateVehicle } = useUpdateVehicle();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Vehicle>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: vehicle?.name,
            location: {
                lat: vehicle?.location.lat,
                lng: vehicle?.location.lng
            },
            status: vehicle?.status
        },
    });

    const handleFormSubmit: SubmitHandler<Vehicle> = (data) => {
        if (buttonText === 'Update vehicle') {
            updateVehicle(vehicle?._id!, data);
        } else {
            createVehicle(data);

        }

    };

    return (
        <div className='vehicle-form'>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <h2>Vehicle details</h2>
                <div className='form-input'>
                    <label>Name</label>
                    <input type="text" {...register('name')} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div className='form-input'>
                    <label>Latitude</label>
                    <input type="number" min="-180" step="0.000000000000001"
                        max="180" {...register('location.lat')} />
                    {errors.location?.lat && <p>{errors.location.lat.message}</p>}
                </div>

                <div className='form-input'>
                    <label>Longitude</label>
                    <input type="number" min="-180" step="0.000000000000001"
                        max="180"{...register('location.lng')} />
                    {errors.location?.lng && <p>{errors.location.lng.message}</p>}
                </div>

                <div className='form-input'>
                    <label>Status</label>
                    <select {...register('status')}>
                        <option value="">Select status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && <p>{errors.status.message}</p>}
                </div>
                <Button type="submit" buttonType="primary" >{buttonText}</Button>
                <Button buttonType="primary" onClick={onClose}>Cancel</Button>

            </form>
        </div>
    );
};

export default VehicleForm;
