import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import useCreateVehicle from '../../hooks/useCreateVehicle';
import Button from '../Button/Button';

interface VehicleFormProps {
    onSubmit: SubmitHandler<VehicleFormData>;
}

interface VehicleFormData {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    status: string;
}

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    location: yup.object().shape({
        latitude: yup.number().required('Latitude is required'),
        longitude: yup.number().required('Longitude is required'),
    }),
    status: yup.string().required('Status is required'),
});

const VehicleForm: React.FC<VehicleFormProps> = () => {

    const { loading, error, success, createVehicle } = useCreateVehicle();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VehicleFormData>({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    useEffect(() => {
        // You can perform additional actions or side effects here
    }, []);

    const handleFormSubmit: SubmitHandler<VehicleFormData> = (data) => {
        if (error) {
            dispatch({ type: 'CREATE_VEHICLE_FAILURE', error });
        }
        dispatch({ type: 'CREATE_VEHICLE_SUCCESS', payload: createVehicle(data) });

    };

    return (
        <div className='vehicle-form'>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="text" {...register('name')} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div>
                    <label>Latitude</label>
                    <input type="number" {...register('location.latitude')} />
                    {errors.location?.latitude && <p>{errors.location.latitude.message}</p>}
                </div>

                <div>
                    <label>Longitude</label>
                    <input type="number" {...register('location.longitude')} />
                    {errors.location?.longitude && <p>{errors.location.longitude.message}</p>}
                </div>

                <div>
                    <label>Status</label>
                    <select {...register('status')}>
                        <option value="">Select status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    {errors.status && <p>{errors.status.message}</p>}
                </div>

                <Button type="submit" buttonType="primary">Submit</Button>
            </form>
        </div>
    );
};

export default VehicleForm;
