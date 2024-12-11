import React, { useState } from 'react';

function ProfileSetup() {
  const [profileData, setProfileData] = useState({
    role: '',
    skills: '',
    interests: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Profile saving logic here
    console.log(profileData);
  };

  return (
    <div>
      <h2>Profile Setup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="role"
          placeholder="Role (Mentor/Mentee)"
          value={profileData.role}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={profileData.skills}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="interests"
          placeholder="Interests"
          value={profileData.interests}
          onChange={handleChange}
          required
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={profileData.bio}
          onChange={handleChange}
          required
        />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default ProfileSetup;
