interface Vehicle {
    id: string;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    status: 'active' | 'inactive';
}

export default Vehicle;