import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }
    // Simulate form submission
    setFormStatus({ type: "success", message: "Your message has been sent!" });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section className="pt-24 pb-16 bg-background px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-base md:text-lg text-textSecondary mb-12 text-center max-w-3xl mx-auto">
          We're here to assist you with your medical supply needs. Reach out to us via the form below or use our contact details.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-surface p-6 md:p-8 rounded-2xl shadow-lg border border-border">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-full border border-text/40 focus:outline-none focus:ring-2 focus:ring-accent text-text bg-background"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-full border border-text/40 focus:outline-none focus:ring-2 focus:ring-accent text-text bg-background"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-textSecondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-full border border-text/40 focus:outline-none focus:ring-2 focus:ring-accent text-text bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-2xl border border-text/40 focus:outline-none focus:ring-2 focus:ring-accent text-text bg-background"
                ></textarea>
              </div>
              {formStatus && (
                <p
                  className={`text-sm ${
                    formStatus.type === "success" ? "text-success" : "text-error"
                  } text-center`}
                >
                  {formStatus.message}
                </p>
              )}
              <div className="flex justify-center items-center max-w-fit mx-auto">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden text-sm md:text-base w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center">
                    Send Message
                    <svg
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-surface p-6 md:p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-accent" />
                  <div>
                    <p className="text-sm font-medium text-textSecondary">Phone</p>
                    <p className="text-base text-text">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-accent" />
                  <div>
                    <p className="text-sm font-medium text-textSecondary">Email</p>
                    <p className="text-base text-text">contact@medsupply.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl text-accent" />
                  <div>
                    <p className="text-sm font-medium text-textSecondary">Address</p>
                    <p className="text-base text-text">123 Health St, Medical City, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaClock className="text-2xl text-accent" />
                  <div>
                    <p className="text-sm font-medium text-textSecondary">Business Hours</p>
                    <p className="text-base text-text">
                      Mon-Fri: 9:00 AM - 5:00 PM <br />
                      Sat: 10:00 AM - 2:00 PM <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-surface p-4 rounded-2xl shadow-lg border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d-122.41941568468157!3d37.77492977975972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5e6b4b1b%3A0x7b9c7c7b7c7b7c7b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;