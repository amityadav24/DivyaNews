import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="bg-gray-50 py-8">
            <div className="container-custom">
                <Breadcrumb items={[{ label: language === 'ne' ? 'सम्पर्क' : 'Contact' }]} />

                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2 font-nepali text-center">
                        {language === 'ne' ? 'हामीलाई सम्पर्क गर्नुहोस्' : 'Contact Us'}
                    </h1>
                    <p className="text-center text-gray-600 mb-8 font-nepali">
                        {language === 'ne'
                            ? 'हामी तपाईंको प्रतिक्रिया र सुझावको प्रतीक्षामा छौं'
                            : 'We are waiting for your feedback and suggestions'}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        {/* Contact Info Cards */}
                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 font-nepali text-lg">
                                {language === 'ne' ? 'हाम्रो कार्यालय' : 'Our Office'}
                            </h3>
                            <p className="text-gray-600 font-nepali">
                                {language === 'ne'
                                    ? 'काठमाडौं, नेपाल'
                                    : 'Kathmandu, Nepal'}
                            </p>
                            <p className="text-gray-600 font-nepali text-sm mt-1">
                                {language === 'ne'
                                    ? 'न्यू बानेश्वर, काठमाडौं'
                                    : 'New Baneshwor, Kathmandu'}
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 font-nepali text-lg">
                                {language === 'ne' ? 'फोन नम्बर' : 'Phone Number'}
                            </h3>
                            <p className="text-gray-600">+977-1-4XXXXXX</p>
                            <p className="text-gray-600 text-sm mt-1">+977-9XXXXXXXXX</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 font-nepali text-lg">
                                {language === 'ne' ? 'इमेल ठेगाना' : 'Email Address'}
                            </h3>
                            <p className="text-gray-600">info@divyanews.com</p>
                            <p className="text-gray-600 text-sm mt-1">news@divyanews.com</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-nepali">
                                {language === 'ne' ? 'सन्देश पठाउनुहोस्' : 'Send Message'}
                            </h2>

                            {submitted && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 font-nepali">
                                    {language === 'ne'
                                        ? 'धन्यवाद! तपाईंको सन्देश प्राप्त भयो। हामी चाँडै सम्पर्क गर्नेछौं।'
                                        : 'Thank you! Your message has been received. We will contact you soon.'}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 font-nepali">
                                        {language === 'ne' ? 'नाम' : 'Name'} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 font-nepali"
                                        placeholder={language === 'ne' ? 'तपाईंको पूरा नाम' : 'Your full name'}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 font-nepali">
                                            {language === 'ne' ? 'इमेल' : 'Email'} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder={language === 'ne' ? 'तपाईंको इमेल' : 'Your email'}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 font-nepali">
                                            {language === 'ne' ? 'फोन' : 'Phone'}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder={language === 'ne' ? 'तपाईंको फोन नम्बर' : 'Your phone number'}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 font-nepali">
                                        {language === 'ne' ? 'विषय' : 'Subject'} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 font-nepali"
                                        placeholder={language === 'ne' ? 'सन्देशको विषय' : 'Message subject'}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 font-nepali">
                                        {language === 'ne' ? 'सन्देश' : 'Message'} <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 font-nepali"
                                        placeholder={language === 'ne' ? 'तपाईंको सन्देश यहाँ लेख्नुहोस्...' : 'Write your message here...'}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary w-full font-nepali text-lg"
                                >
                                    {language === 'ne' ? 'पठाउनुहोस्' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Additional Info & Social */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-nepali">
                                    {language === 'ne' ? 'कार्य समय' : 'Working Hours'}
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-3 border-b">
                                        <span className="font-medium text-gray-700 font-nepali">
                                            {language === 'ne' ? 'आइतबार - शुक्रबार' : 'Sunday - Friday'}
                                        </span>
                                        <span className="text-gray-600 font-nepali">
                                            {language === 'ne' ? 'बिहान १० - साँझ ६' : '10 AM - 6 PM'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b">
                                        <span className="font-medium text-gray-700 font-nepali">
                                            {language === 'ne' ? 'शनिबार' : 'Saturday'}
                                        </span>
                                        <span className="text-gray-600 font-nepali">
                                            {language === 'ne' ? 'बन्द' : 'Closed'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-700 font-nepali">
                                            {language === 'ne' ? 'सार्वजनिक बिदा' : 'Public Holidays'}
                                        </span>
                                        <span className="text-gray-600 font-nepali">
                                            {language === 'ne' ? 'बन्द' : 'Closed'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-nepali">
                                    {language === 'ne' ? 'सामाजिक सञ्जाल' : 'Social Media'}
                                </h2>
                                <p className="text-gray-600 mb-4 font-nepali">
                                    {language === 'ne'
                                        ? 'हामीलाई सामाजिक सञ्जालमा फलो गर्नुहोस्'
                                        : 'Follow us on social media'}
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors flex-1 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-lg transition-colors flex-1 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-lg transition-colors flex-1 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg transition-colors flex-1 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg shadow-md p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4 font-nepali">
                                    {language === 'ne' ? 'समाचार टिप्स' : 'News Tips'}
                                </h3>
                                <p className="mb-4 font-nepali">
                                    {language === 'ne'
                                        ? 'तपाईंसँग कुनै समाचार वा जानकारी छ? हामीलाई सम्पर्क गर्नुहोस्।'
                                        : 'Do you have any news or information? Contact us.'}
                                </p>
                                <a href="mailto:tips@divyanews.com" className="inline-block bg-white text-primary-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors font-nepali">
                                    tips@divyanews.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
