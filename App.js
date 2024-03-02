import React, { useState } from 'react';

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, newContact]);
    setNewContact({ name: '', phone: '' });
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh' }}>
      <h1>Contact Book</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={newContact.phone}
          onChange={handleChange}
          style={{ marginBottom: '10px' }}
        />
        <button type="submit" style={{ /* Add button styling as needed */ }}>Add Contact</button>
      </form>
      <table style={{ marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#edf756', padding: '8px 16px' }}>Serial No.</th>
            <th style={{ backgroundColor: '#51e2f5', padding: '8px 16px' }}>Name</th>
            <th style={{ backgroundColor: '#51e2f5', padding: '8px 16px' }}>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: index % 2 === 0 ? '#51e2f5' : '#9df9ef', padding: '8px 16px' }}>{index + 1}</td>
              <td style={{ backgroundColor: index % 2 === 0 ? '#51e2f5' : '#9df9ef', padding: '8px 16px' }}>{contact.name}</td>
              <td style={{ backgroundColor: index % 2 === 0 ? '#51e2f5' : '#9df9ef', padding: '8px 16px' }}>{contact.phone}</td>
              <td><button style={{ backgroundColor: '#ffa8b6', color: 'white', border: 'none', padding: '6px 12px', cursor: 'pointer', borderRadius: '4px' }} onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactBook;
