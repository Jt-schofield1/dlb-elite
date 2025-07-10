'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', packageKey:'', message:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success('Message sent successfully! Camden will get back to you soon.');
        setForm({ name:'', email:'', phone:'', packageKey:'', message:'' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Error sending message. Please try emailing camwhite52@icloud.com directly.');
    } finally {
      setIsSubmitting(false);
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
          disabled={isSubmitting}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-colors disabled:opacity-50"
        />
      ))}
      <select
        name="packageKey"
        value={form.packageKey}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-colors disabled:opacity-50"
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
        disabled={isSubmitting}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-colors resize-vertical disabled:opacity-50"
      />
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 