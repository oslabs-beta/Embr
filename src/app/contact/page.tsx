'use client';
//src/app/contact/page.tsx
import React, { useState } from 'react';
import styles from '../page.module.css';
import Navbar from '../components/Navbar';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setData({
        name: '',
        email: '',
      });
      toast.success(`Hey, ${data.name}, your message was snet successfully!`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.contact}>
        <p>Please provide your name and Email!</p>
        <form onSubmit={sendEmail}>
          <label>
            Name:
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </label>
          <br />
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
