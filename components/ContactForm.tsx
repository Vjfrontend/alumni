"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, sendCopy: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="w-full max-w-md" id='contact'>
      <h2 className="text-lg font-medium mb-6">SEND MESSAGE</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 text-sm"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full border border-gray-300 p-2 text-sm"
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="sendCopy"
            name="sendCopy"
            checked={formData.sendCopy}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="sendCopy" className="text-sm">Send Me Copy</label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-purple-400 rounded-md text-white py-2 px-8 text-sm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;