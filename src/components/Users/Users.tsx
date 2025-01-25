import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users', {
          withCredentials: true, // Include credentials if needed (like cookies)
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle actions (edit, delete) - These are placeholders
  const handleEdit = (userId: string) => {
    console.log(`Editing user with ID: ${userId}`);
    // Implement edit logic here
  };

  const handleDelete = async (userId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`, {
        withCredentials: true, // Include credentials if needed
      });
      setUsers(users.filter(user => user._id !== userId)); // Remove user from state
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Photo</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.photo ? (
                  <img src={user.photo} alt={user.name} width={50} height={50} />
                ) : (
                  'No photo'
                )}
              </td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user._id)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
