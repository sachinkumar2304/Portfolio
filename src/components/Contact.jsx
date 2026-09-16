import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

// ─────────────────────────────────────────────────
// EMAILJS CONFIG — Fill these after setting up your
// free account at https://www.emailjs.com
// ─────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_h5gmt87';
const EMAILJS_TEMPLATE_ID = 'template_njfves7';
const EMAILJS_PUBLIC_KEY  = '3CCdCTWIf5rqwooBr';

export default function Contact() {
  const { socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Template variables — these map to {{variable}} in your EmailJS template
    const templateParams = {
      from_name:    formData.name,
      from_email:   formData.email,
      subject:      formData.subject || 'Portfolio Contact',
      message:      formData.message,
      to_email:     'spal67073@gmail.com',
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setIsSent(true);

        // Celebration confetti
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#FFFFFF', '#D1D5DB', '#9CA3AF'],
        });

        // Clear form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 6000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setIsSubmitting(false);
        setErrorMessage('Something went wrong. Please email me directly at spal67073@gmail.com');
      });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================
            SECTION HEADER (Spacious Pure White Editorial Typography)
            Re-reveals every time on scroll with 1.5s smooth animation
        ================================================== */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 35, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#FFFFFF] uppercase tracking-[0.16em] sm:tracking-[0.22em] leading-tight"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Contact Info & Social Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-3"
          >
            {/* Quick Contact Overview */}
            <div className="neu-card p-6 sm:p-7 rounded-[26px]">
              <h3 className="text-lg font-light text-[#FFFFFF] uppercase tracking-[0.14em] mb-5">
                Contact Details
              </h3>

              {/* Email Direct */}
              <motion.a
                href="mailto:spal67073@gmail.com"
                whileHover={{ scale: 1.02, y: -1 }}
                className="flex items-center space-x-3.5 p-3 rounded-2xl bg-[#0E0E0E] border border-white/[0.04] shadow-neu-inset-sm hover:border-white/30 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#141414] shadow-neu-raised flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#9CA3AF] uppercase tracking-wider block">Email</span>
                  <span className="text-xs sm:text-sm font-normal text-[#FFFFFF] group-hover:text-white transition-colors">
                    spal67073@gmail.com
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Profiles */}
            <div className="neu-card p-6 rounded-[26px] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-light text-white uppercase tracking-[0.14em]">
                  Developer Profiles
                </h4>
              </div>

              <div className="flex items-center space-x-2.5">
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/[0.08] shadow-neu-inset flex items-center justify-center text-white hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/[0.08] shadow-neu-inset flex items-center justify-center text-white hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Transmission Form */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="neu-card p-6 sm:p-8 lg:p-10 rounded-[30px] h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] shadow-neu-inset flex items-center justify-center border border-white/[0.08] text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-[#FFFFFF] uppercase tracking-[0.14em]">
                      Send Direct Message
                    </h3>
                  </div>
                </div>

                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-white/[0.06] border border-white/20 text-white flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    <div className="text-xs sm:text-sm font-sans font-medium">
                      Thank you! Your message was transmitted successfully. Sachin will follow up within 24 hours.
                    </div>
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-mono"
                  >
                    {errorMessage}
                  </motion.div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Henderson"
                      className="neu-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="neu-input w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Interview Discussion / Data Engineering Inquiry"
                    className="neu-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Sachin, I reviewed your database performance and SQL engineering projects..."
                    className="neu-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />
                </div>

                {/* Raised Submit Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 17 }}
                    className="neu-btn-raised w-full py-3.5 rounded-xl font-mono font-medium text-xs uppercase tracking-[0.18em] text-white hover:text-white hover:border-white/60 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                    <span>{isSubmitting ? 'Sending Transmission...' : 'Send Message'}</span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
