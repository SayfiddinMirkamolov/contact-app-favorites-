import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ContactsList from './components/ContactsList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (phone) => {
    setContacts(contacts.filter(contact => contact.phone !== phone));
  };

  const editContact = (updatedContact) => {
    setContacts(contacts.map(contact => contact.phone === updatedContact.phone ? updatedContact : contact));
  };

  const toggleFavorite = (phone) => {
    setContacts(
      contacts.map(contact =>
        contact.phone === phone ? { ...contact, favorite: !contact.favorite } : contact
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts App</h1>
      <Form addContact={addContact} />
      <ContactsList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;
