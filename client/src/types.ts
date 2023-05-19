interface Vehicle {
    id?: string;
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    status: 'active' | 'inactive';
}

export default Vehicle;