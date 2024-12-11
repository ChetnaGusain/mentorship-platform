// UserDiscovery.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDiscovery() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();  // Hook for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && role && skills && interests) {
      const newUser = { name, role, skills, interests };
      setUsers([...users, newUser]);
      setName('');
      setRole('');
      setSkills('');
      setInterests('');
    }
  };

  // Filter users based on search and role
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
                          user.skills.toLowerCase().includes(search.toLowerCase()) ||
                          user.interests.toLowerCase().includes(search.toLowerCase());
    const matchesRole = selectedRole ? user.role.toLowerCase() === selectedRole.toLowerCase() : true;
    return matchesSearch && matchesRole;
  });

  // Navigate to user profile page
  const handleViewProfile = (user) => {
    navigate('/user-profile', { state: { user } });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">Discover Mentors & Mentees</h2>
      
      {/* User Input Form */}
      <form onSubmit={handleSubmit} className="mb-6 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-blue-500">Add Your Profile</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Role</option>
            <option value="Mentor">Mentor</option>
            <option value="Mentee">Mentee</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Profile
        </button>
      </form>

      {/* Search and Filter */}
      <div className="mb-6 flex justify-between items-center space-x-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name, skills, or interests"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Roles</option>
            <option value="Mentor">Mentor</option>
            <option value="Mentee">Mentee</option>
          </select>
        </div>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredUsers.map((user, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-bold text-blue-500">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.role}</p>
            <p className="text-sm text-gray-500 mt-2">{user.skills}</p>
            <p className="text-sm text-gray-500 mt-2">{user.interests}</p>
            <button
              onClick={() => handleViewProfile(user)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDiscovery;
