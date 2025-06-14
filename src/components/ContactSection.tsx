import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_mna0yls', // ✅ Your EmailJS Service ID
        'template_xfubfmw', // ✅ Your EmailJS Template ID
        form.current,
        'jwEq19Zms0QXhv-x5' // ✅ Your EmailJS Public Key
      )
      .then(
        () => {
          setSubmitMessage({
            type: 'success',
            text: "Thanks for reaching out! I'll get back to you soon.",
          });
          form.current?.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setSubmitMessage({
            type: 'error',
            text: 'Failed to send message. Please try again later.',
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Interested in working together or have a question? Let’s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <ContactItem icon={<Mail />} label="Email" value="badshashaikh370@gmail.com" link="mailto:badshashaikh370@gmail.com" />
            <ContactItem icon={<Phone />} label="Phone" value="+91 82861 94040" link="tel:+918286194040" />
            <ContactItem icon={<MapPin />} label="Location" value="Andheri (W), Mumbai" />
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <InputField id="name" label="Your Name" name="from_name" />
                <InputField id="email" label="Your Email" name="reply_to" type="email" />
              </div>

              <div className="mb-6">
                <InputField id="subject" label="Subject" name="subject" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                ></textarea>
              </div>

              {submitMessage.text && (
                <div className={`p-3 rounded-lg mb-6 ${
                  submitMessage.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ id, label, name, type = 'text' }: { id: string; label: string; name: string; type?: string }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required
      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
    />
  </div>
);

const ContactItem = ({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link?: string }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{label}</h4>
      {link ? (
        <a href={link} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">{value}</p>
      )}
    </div>
  </div>
);

export default ContactSection;
