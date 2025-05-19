import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7z4batx',
        'template_fdq45a9',
        formRef.current,
        'uLQZKH2fmtUprA1xO'
      )
      .then(() => {
        setSent(true);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-900"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left - Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            data-aos="fade-right"
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-green-500 font-medium mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>

          {/* Right - Optional text or illustration */}
          <div
            className="flex flex-col justify-center text-gray-700 dark:text-gray-300 text-lg"
            data-aos="fade-left"
          >
            <p className="mb-4 text-left" >
              I’m currently open to new full-time or freelance opportunities. Whether you have a question or just want to say hi, feel free to reach out — I’ll respond as soon as I can!
            </p>
            <p className="font-medium text-left">
               Email 📬: <span className="text-blue-600 dark:text-blue-400">koteshravula2@gmail.com</span>
              <br />
              {/* 🌎 Location: Jersey City, NJ */}
              Phone Number 📱: +1 (605)-660-7634
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
