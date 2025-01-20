import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const RATE_LIMIT = 6; // Maximum requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [lastRequestTime, setLastRequestTime] = useState(Date.now());

  useEffect(() => {
    // Reset rate limit counter after the window expires
    const timer = setInterval(() => {
      const now = Date.now();
      if (now - lastRequestTime >= RATE_LIMIT_WINDOW) {
        setRequestCount(0);
        setLastRequestTime(now);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lastRequestTime]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check rate limit
    if (requestCount >= RATE_LIMIT) {
      toast.error('Έχετε υπερβεί το όριο αποστολών. Παρακαλώ δοκιμάστε ξανά σε λίγο.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_g0rzdvg',
        'template_rw8cmhw',
        {
          to_email: 'greenifygr@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'hl_7hM3JVhuYl7mKy'
      );

      // Update rate limit counter
      setRequestCount(prev => prev + 1);
      setLastRequestTime(Date.now());

      toast.success('Το μήνυμά σας στάλθηκε επιτυχώς!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error('Υπήρξε ένα πρόβλημα κατά την αποστολή του μηνύματος.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Toaster position="top-center" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Ονοματεπώνυμο
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Τηλέφωνο
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Μήνυμα
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting || requestCount >= RATE_LIMIT}
        className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin h-5 w-5 mr-2" />
            Αποστολή...
          </>
        ) : requestCount >= RATE_LIMIT ? (
          'Όριο αποστολών συμπληρώθηκε'
        ) : (
          'Αποστολή'
        )}
      </button>
    </form>
  );
};

export default ContactForm;