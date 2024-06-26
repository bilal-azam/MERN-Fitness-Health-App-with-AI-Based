// src/frontend/ProfileComponent.js

import React, { useState, useEffect } from 'react';

function ProfileComponent() {
    const [profile, setProfile] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState({ email: '', age: '', phone: '', address: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/api/profile/testUser')
            .then(response => response.json())
            .then(data => {
                setProfile(data);
                setProfileData(data);
            })
            .catch(() => setError('Failed to load profile.'));
    }, []);

    const handleSave = () => {
        fetch('/api/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'testUser', profileData })
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text); });
            }
            return response.text();
        })
        .then(result => {
            alert(result);
            setProfile(profileData);
            setEditMode(false);
            setError('');
        })
        .catch(err => setError(err.message));
    };

    return (
        <div>
            <h2>User Profile</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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