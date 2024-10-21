// ContactContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from "./config";

const ContactContext = createContext();

export const useContact = () => {
  return useContext(ContactContext);
};

export const ContactProvider = ({ children }) => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/get-contact-page`);
        setContactData(response.data);
      } catch (err) {
        setError(err);
        console.error('Error fetching contact data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  return (
    <ContactContext.Provider value={{ contactData, loading, error }}>
      {children}
    </ContactContext.Provider>
  );
};
