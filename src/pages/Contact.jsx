import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_teosz2a', 
                'template_wem2mfn', 
                form.current,
                'FoEjVdKKyqZh6InyP' 
            )
            .then((res)=>{
                toast.success('Message sent successfully!')
                form.current.reset();
            })
            .catch(err=> toast.error('error! please try again'))
    };

    return (
        <div>
            <Header />
            <main className="min-h-screen mt-[70px] bg-gray-100 flex flex-col items-center py-10">
                <h1 className="text-4xl font-bold text-blue-800 mb-12 mt-2">Contact Us</h1>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Have questions or need assistance? Feel free to reach out to us. 
                    We’d love to hear from you!
                </p>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
                >
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here..."
                            rows="5"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <p className="text-gray-700">📍 Location: 123 Sports Zone Street, Dhaka</p>
                    <p className="text-gray-700">📞 Phone: +880-123-456789</p>
                    <p className="text-gray-700">📧 Email: contact@sportszone.com</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
