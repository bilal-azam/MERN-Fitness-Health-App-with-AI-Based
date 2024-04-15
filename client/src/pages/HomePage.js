import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('/api/user/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(res.data);
            } catch (err) {
                console.error(err.response.data.error);
            }
        };
        fetchUser();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>Welcome, {user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Height: {user.height} cm</p>
            <p>Weight: {user.weight} kg</p>
            {/* Add more dashboard components here */}
        </div>
    );
}

export default HomePage;