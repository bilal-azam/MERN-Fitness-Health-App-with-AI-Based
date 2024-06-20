// src/frontend/ProfileComponent.js

import React, { useState, useEffect } from 'react';

function ProfileComponent() {
    const [profile, setProfile] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState({ email: '', age: '', phone: '', address: '' });

    useEffect(() => {
        fetch('/api/profile/testUser')
            .then(response => response.json())
            .then(data => {
                setProfile(data);
                setProfileData(data);
            });
    }, []);

    const handleSave = () => {
        fetch('/api/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'testUser', profileData })
        })
        .then(response => response.text())
        .then(result => {
            alert(result);
            setProfile(profileData);
            setEditMode(false);
        });
    };

    return (
        <div>
            <h2>User Profile</h2>
            {editMode ? (
                <div>
                    <input 
                        type="text" 
                        value={profileData.email} 
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })} 
                        placeholder="Email" 
                    />
                    <input 
                        type="number" 
                        value={profileData.age} 
                        onChange={(e) => setProfileData({ ...profileData, age: e.target.value })} 
                        placeholder="Age" 
                    />
                    <input 
                        type="text" 
                        value={profileData.phone} 
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })} 
                        placeholder="Phone" 
                    />
                    <input 
                        type="text" 
                        value={profileData.address} 
                        onChange={(e) => setProfileData({ ...profileData, address: e.target.value })} 
                        placeholder="Address" 
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <p>Email: {profile?.email}</p>
                    <p>Age: {profile?.age}</p>
                    <p>Phone: {profile?.phone}</p>
                    <p>Address: {profile?.address}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default ProfileComponent;