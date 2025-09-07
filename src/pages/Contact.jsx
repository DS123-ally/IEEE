import React, { useState } from 'react';
import Hero from '../components/Hero';
import { MEMBERS } from '../data/members';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get key committee members for contact info
  const keyMembers = MEMBERS.filter(member => 
    ['chairperson', 'vice_chair', 'joint_secretary', 'treasurer', 'technical_secretary'].includes(member.group)
  );

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Hero 
          title="Message Sent!" 
          tagline="Thank you for reaching out. We'll get back to you within 24 hours."
          showButtons={false}
        />
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success!</h3>
            <p className="text-gray-600">
              Your message has been sent successfully. Our team will review it and get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero 
        title="Get In Touch" 
        tagline="Connect with our committee members, join our community, or collaborate with us."
        showButtons={false}
      />

      {/* Contact Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          We'd Love to Hear From You
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're interested in joining our committee, collaborating on projects, or have questions about our events, we're here to help. Reach out to us through any of the channels below.
        </p>
      </section>

      {/* Contact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-600 ${
                    errors.name ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-600 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-600 ${
                    errors.subject ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="join">Join Committee</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="event">Event Information</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-brand-100 focus:border-brand-600 ${
                    errors.message ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* General Contact Info */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">General Inquiries</h4>
                    <p className="text-gray-600 text-sm mb-1">For general questions and information</p>
                    <a href="mailto:ieee@aissmscoe.com" className="text-brand-600 hover:text-brand-700 font-medium">
                      ieee@aissmscoe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Location</h4>
                    <p className="text-gray-600 text-sm mb-1">AISSMS College of Engineering</p>
                    <address className="text-gray-600 not-italic">
                      Kennedy Road, Near RTO<br />
                      Pune, Maharashtra 411001
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm mb-1">Reach us during office hours</p>
                    <a href="tel:+919876543210" className="text-brand-600 hover:text-brand-700 font-medium">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Hours</h4>
                    <p className="text-gray-600 text-sm mb-2">We're available during these times</p>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div>Mon - Fri: 9:00 AM - 5:00 PM</div>
                      <div>Sat: 10:00 AM - 2:00 PM</div>
                      <div>Sun: Closed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Committee Members */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Committee Members</h3>
              
              <div className="space-y-4">
                {keyMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      onError={(e) => e.target.src = `https://via.placeholder.com/48x48/2563eb/ffffff?text=${member.name.charAt(0)}`}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
                      <p className="text-brand-600 text-xs font-medium">{member.role}</p>
                      <a 
                        href={`mailto:${member.links.email}`} 
                        className="text-gray-600 text-xs hover:text-brand-600"
                      >
                        {member.links.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Quick Actions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow us on social media for updates, events, and community highlights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { name: 'Instagram', icon: '📸', url: 'https://instagram.com/ieee_aissms' },
              { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/ieee-aissms' },
              { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/ieee_aissms' },
              { name: 'GitHub', icon: '💻', url: 'https://github.com/ieee-aissms' },
              { name: 'YouTube', icon: '📺', url: 'https://youtube.com/@ieeeaissms' },
              { name: 'Discord', icon: '💬', url: 'https://discord.gg/ieee-aissms' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="text-3xl mb-2">{social.icon}</div>
                <span className="text-sm font-medium text-gray-700">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Join Committee', description: 'Apply to become a committee member', icon: '📝', url: 'https://forms.gle/example' },
                { title: 'View Events', description: 'Check our upcoming events calendar', icon: '📅', url: 'https://calendar.google.com/example' },
                { title: 'Resources', description: 'Access our technical resources', icon: '📋', url: 'https://docs.google.com/example' },
                { title: 'Virtual Meeting', description: 'Schedule a virtual meeting with us', icon: '🎥', url: 'https://meet.google.com/example' }
              ].map((action, index) => (
                <a
                  key={index}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-4xl mb-4">{action.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
