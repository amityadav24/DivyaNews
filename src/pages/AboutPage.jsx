import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
    const { language } = useLanguage();

    const teamMembers = [
        {
            name: 'रमेश शर्मा',
            nameEn: 'Ramesh Sharma',
            position: 'प्रधान सम्पादक',
            positionEn: 'Editor-in-Chief',
            bio: '२५ वर्षको पत्रकारिता अनुभव',
            bioEn: '25 years of journalism experience'
        },
        {
            name: 'सीता गुरुङ',
            nameEn: 'Sita Gurung',
            position: 'समाचार सम्पादक',
            positionEn: 'News Editor',
            bio: 'राजनीति र अर्थ विशेषज्ञ',
            bioEn: 'Politics and Economy Specialist'
        },
        {
            name: 'अनिल तामाङ',
            nameEn: 'Anil Tamang',
            position: 'खेल सम्पादक',
            positionEn: 'Sports Editor',
            bio: 'खेल पत्रकारितामा १५ वर्ष',
            bioEn: '15 years in Sports Journalism'
        },
        {
            name: 'प्रिया पौडेल',
            nameEn: 'Priya Paudel',
            position: 'डिजिटल सम्पादक',
            positionEn: 'Digital Editor',
            bio: 'डिजिटल मिडिया विशेषज्ञ',
            bioEn: 'Digital Media Specialist'
        }
    ];

    return (
        <div className="bg-gray-50 py-8">
            <div className="container-custom">
                <Breadcrumb items={[{ label: language === 'ne' ? 'हाम्रो बारेमा' : 'About Us' }]} />

                <div className="max-w-5xl mx-auto">
                    {/* Hero Section */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6 font-nepali text-center">
                            {language === 'ne' ? 'हाम्रो बारेमा' : 'About Us'}
                        </h1>
                        <div className="h-1 w-24 bg-primary-600 rounded mx-auto mb-8"></div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6 font-nepali text-lg text-center">
                                {language === 'ne'
                                    ? 'दिव्य न्यूज एक स्वतन्त्र र निष्पक्ष समाचार संस्था हो जसले लोकतन्त्र, स्वतन्त्रता र कानूनको शासनमा दृढ विश्वास राख्दछ। हामी सत्य, निष्पक्षता र पत्रकारिताको उच्च मापदण्डमा प्रतिबद्ध छौं।'
                                    : 'Divya News is an independent and impartial media house that firmly believes in democracy, freedom and the rule of law. We are committed to truth, impartiality and high standards of journalism.'}
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="flex items-center mb-4">
                                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                                    <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 font-nepali">
                                    {language === 'ne' ? 'हाम्रो दृष्टिकोण' : 'Our Vision'}
                                </h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed font-nepali">
                                {language === 'ne'
                                    ? 'नेपालको अग्रणी समाचार संस्थाको रूपमा स्थापित हुनु र जनतालाई सही, समयमै र विश्वसनीय समाचार प्रदान गर्नु हाम्रो दृष्टिकोण हो। हामी डिजिटल पत्रकारितामा उत्कृष्टता हासिल गर्न प्रतिबद्ध छौं।'
                                    : 'Our vision is to establish ourselves as Nepal\'s leading news organization and provide people with accurate, timely and reliable news. We are committed to achieving excellence in digital journalism.'}
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="flex items-center mb-4">
                                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                                    <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 font-nepali">
                                    {language === 'ne' ? 'हाम्रो मिशन' : 'Our Mission'}
                                </h2>
                            </div>
                            <ul className="space-y-2 text-gray-700 font-nepali">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {language === 'ne' ? 'निष्पक्ष र सन्तुलित समाचार प्रस्तुत गर्ने' : 'Present impartial and balanced news'}
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {language === 'ne' ? 'पत्रकारिताको उच्च मापदण्ड कायम राख्ने' : 'Maintain high standards of journalism'}
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {language === 'ne' ? 'जनताको आवाज बन्ने' : 'Be the voice of the people'}
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {language === 'ne' ? 'डिजिटल पत्रकारितामा नवीनता ल्याउने' : 'Bring innovation in digital journalism'}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nepali text-center">
                            {language === 'ne' ? 'हाम्रो मूल्य' : 'Our Values'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-700 mb-2 font-nepali">
                                    {language === 'ne' ? 'सत्यता' : 'Truth'}
                                </h3>
                                <p className="text-gray-700 font-nepali text-sm">
                                    {language === 'ne'
                                        ? 'हामी सधैं सत्य र तथ्यमा आधारित समाचार प्रस्तुत गर्छौं।'
                                        : 'We always present news based on truth and facts.'}
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-700 mb-2 font-nepali">
                                    {language === 'ne' ? 'निष्पक्षता' : 'Impartiality'}
                                </h3>
                                <p className="text-gray-700 font-nepali text-sm">
                                    {language === 'ne'
                                        ? 'हामी कुनै पनि पक्षपात बिना निष्पक्ष समाचार प्रदान गर्छौं।'
                                        : 'We provide impartial news without any bias.'}
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-700 mb-2 font-nepali">
                                    {language === 'ne' ? 'जवाफदेहिता' : 'Accountability'}
                                </h3>
                                <p className="text-gray-700 font-nepali text-sm">
                                    {language === 'ne'
                                        ? 'हामी आफ्नो काममा जवाफदेही र पारदर्शी छौं।'
                                        : 'We are accountable and transparent in our work.'}
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-700 mb-2 font-nepali">
                                    {language === 'ne' ? 'स्वतन्त्रता' : 'Independence'}
                                </h3>
                                <p className="text-gray-700 font-nepali text-sm">
                                    {language === 'ne'
                                        ? 'हामी कुनै पनि बाह्य दबाबबाट मुक्त छौं।'
                                        : 'We are free from any external pressure.'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nepali text-center">
                            {language === 'ne' ? 'हाम्रो टिम' : 'Our Team'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-16 h-16 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 font-nepali">
                                        {language === 'ne' ? member.name : member.nameEn}
                                    </h3>
                                    <p className="text-primary-600 font-medium font-nepali text-sm mb-2">
                                        {language === 'ne' ? member.position : member.positionEn}
                                    </p>
                                    <p className="text-gray-600 font-nepali text-sm">
                                        {language === 'ne' ? member.bio : member.bioEn}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
