import React, { useState } from 'react';
import ContactItem from './ContactItem';

const ContactsList = ({ contacts, deleteContact, editContact, toggleFavorite }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredContacts = contacts.filter(contact => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) && (!showFavorites || contact.favorite);
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={() => setShowFavorites(!showFavorites)}
        className="p-2 mb-4 bg-gray-300 rounded"
      >
        {showFavorites ? 'Show All' : 'Show Favorites'}
      </button>
      <ul className="space-y-4">
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.phone}
            contact={contact}
            deleteContact={deleteContact}
            editContact={editContact}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
