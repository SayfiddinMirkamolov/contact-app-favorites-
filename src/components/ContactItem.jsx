import React, { useState } from 'react';

const ContactItem = ({ contact, deleteContact, editContact, toggleFavorite }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...contact });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editContact(formData);
    setIsEditing(false);
  };

  return (
    <li className="p-4 border rounded-lg">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="p-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold">{contact.firstName} {contact.lastName}</div>
            <div>{contact.phone}</div>
            <div>{contact.gender}</div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => toggleFavorite(contact.phone)}
              className={`p-2 rounded ${contact.favorite ? 'bg-yellow-500' : 'bg-gray-300'}`}
            >
              {contact.favorite ? '★' : '☆'}
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteContact(contact.phone)}
              className="p-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ContactItem;
