'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', packageKey:'', message:'' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    });
    
    if (res.ok) {
      toast.success('Message sent successfully!');
      setForm({ name:'', email:'', phone:'', packageKey:'', message:'' });
    } else {
      toast.error('Error sending message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {['name','email','phone'].map(field => (
        <input
          key={field}
          name={field}
          type={field==='email'?'email':'text'}
          placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
          value={form[field as keyof typeof form]}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-colors"
        />
      ))}
      <select
        name="packageKey"
        value={form.packageKey}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-colors"
      >
        <option value="">Select Package</option>
        <option value="Elite Training">Elite Training</option>
        <option value="Hybrid Session">Hybrid Session (90 mins)</option>
        <option value="Speed & Agility">Group Speed & Agility</option>
        <option value="Fundamentals">Football Fundamentals</option>
      </select>
      <textarea
        name="message"
        placeholder="Additional details about your training goals..."
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-colors resize-vertical"
      />
      <button 
        type="submit" 
        className="w-full bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        Send Message
      </button>
    </form>
  );
} 