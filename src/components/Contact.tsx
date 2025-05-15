import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_p9hvt7b', 'template_v96q81d', form.current, {
        publicKey: 'g62fUSy1xtYzUGaee',
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitted(true);
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            message: '',
          });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:pathanjeeshan8@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                    pathanjeeshan8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+916392217088" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                    +91 6392217088
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Greater Noida, UP</p>
                </div>
              </div>
              <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/mo-jeeshan-66bba3247/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="https://www.instagram.com/mr_jissu09/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 ">Send Me a Message</h3>

            {submitted ? (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
                  />

                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
                  />

                  <input
                    type="text"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 mr-2 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Send } from 'lucide-react'; // Assuming you're using lucide-react for icons

// const Contact = () => {
//   const form = useRef();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const sendEmail = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     emailjs
//       .sendForm('service_p9hvt7b', 'template_v96q81d', form.current, {
//         publicKey: 'g62fUSy1xtYzUGaee',
//       })
//       .then(
//         () => {
//           setIsSubmitting(false);
//           setSubmitted(true);
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//           setIsSubmitting(false);
//         }
//       );
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
//       <h3 className="text-2xl font-semibold mb-6 text-center" >Send Me a Message</h3>

//       {submitted ? (
//         <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
//           <p>Thank you for your message! I'll get back to you soon.</p>
//         </div>
//       ) : (
//         <form ref={form} onSubmit={sendEmail} className='bg-slate-400'>
//           <div className="grid grid-cols-1 gap-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="user_name"
//                 // value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
//                 placeholder="John Doe"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="user_email"
//                 // value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="user_phone"
//                 // value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
//                 placeholder="client number for Inquiry"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
//                 placeholder="Hello, I'd like to discuss a project..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 ${
//                 isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send size={18} />
//                   Send Message
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };






// // import React, { useState } from 'react';
// // import { Mail, Phone, MapPin, Send } from 'lucide-react';

// // const Contact: React.FC = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: ''
// //   });
  
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
  
// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };
  
// //   // const handleSubmit = (e: React.FormEvent) => {
// //   //   e.preventDefault();
// //   //   setIsSubmitting(true);
    
// //   //   // Simulate form submission
// //   //   setTimeout(() => {
// //   //     setIsSubmitting(false);
// //   //     setSubmitted(true);
// //   //     setFormData({ name: '', email: '', subject: '', message: '' });
      
// //   //     // Reset success message after 5 seconds
// //   //     setTimeout(() => {
// //   //       setSubmitted(false);
// //   //     }, 5000);
// //   //   }, 1500);
// //   // };
// //   const handleSubmit = async (e: React.FormEvent) => {
// //   e.preventDefault();
// //   setIsSubmitting(true);

// //   try {
// //     const res = await fetch('http://localhost:5000/api/contact', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify(formData)
// //     });

// //     if (res.ok) {
// //       setSubmitted(true);
// //       setFormData({ name: '', email: '', subject: '', message: '' });

// //       setTimeout(() => {
// //         setSubmitted(false);
// //       }, 5000);
// //     } else {
// //       alert('Failed to send message.');
// //     }
// //   } catch (err) {
// //     console.error(err);
// //     alert('Server error. Try again later.');
// //   } finally {
// //     setIsSubmitting(false);
// //   }
// // };

//   return (
//     <section id="contact" className="py-24 px-6 md:px-12">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//           <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-medium mb-1">Email</h4>
//                   <a href="mailto:hello@johndoe.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                     funcoder1@gmail.com
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-medium mb-1">Phone</h4>
//                   <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                     +91 6392217088
//                   </a>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-4">
//                 <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-medium mb-1">Location</h4>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     Greater Noida , UP
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="pt-8">
//               <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
//               <div className="flex gap-4">
//                 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
//                 </a>
//                 <a href="https://www.linkedin.com/in/mo-jeeshan-66bba3247/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
//                 </a>
//                 <a href="https://www.instagram.com/mr_jissu09/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
//                 </a>
//               </div>
//             </div>
//           </div>
 

// export default Contact;


