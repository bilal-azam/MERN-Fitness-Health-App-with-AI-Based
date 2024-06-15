// src/frontend/ProfileComponent.js

import React, { useState, useEffect } from 'react';

function ProfileComponent() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Fetch profile data from API
        fetch('/api/profile/testUser')
            .then(response => response.json())
            .then(data => setProfile(data));
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            {profile ? (
                <div>
                    <p>Email: {profile.email}</p>
                    <p>Age: {profile.age}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProfileComponent;