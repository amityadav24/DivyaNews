import React from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import Breadcrumb from '../components/Breadcrumb';
import { getNewsById } from '../data/newsData';
import { useLanguage } from '../context/LanguageContext';

const ArticlePage = () => {
    const { id } = useParams();
    const { language } = useLanguage();
    const news = getNewsById(id);

    if (!news) {
        return (
            <div className="container-custom py-12">
                <h1 className="text-3xl font-bold text-gray-900 font-nepali">
                    {language === 'ne' ? 'समाचार फेला परेन' : 'News not found'}
                </h1>
            </div>
        );
    }

    const title = language === 'ne' ? news.title : news.titleEn;
    const content = language === 'ne' ? news.content : news.contentEn;
    const author = language === 'ne' ? news.author : news.authorEn;
    const date = language === 'ne' ? news.date : news.dateEn;

    return (
        <div className="bg-gray-50 py-8">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: title }]} />

                    <article className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Article Image */}
                        <img
                            src={news.image}
                            alt={title}
                            className="w-full h-96 object-cover"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/1200x600?text=Divya+News';
                            }}
                        />

                        {/* Article Content */}
                        <div className="p-8">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-nepali">
                                {title}
                            </h1>

                            {/* Meta Info */}
                            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="font-nepali">{author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-nepali">{date}</span>
                                </div>
                            </div>

                            {/* Article Body */}
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed text-lg font-nepali whitespace-pre-line">
                                    {content}
                                </p>
                            </div>

                            {/* Share Buttons */}
                            <div className="mt-8 pt-6 border-t">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 font-nepali">
                                    {language === 'ne' ? 'साझा गर्नुहोस्' : 'Share'}
                                </h3>
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        Facebook
                                    </button>
                                    <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                        Twitter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Related Articles */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-nepali">
                            {language === 'ne' ? 'सम्बन्धित समाचार' : 'Related News'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* This would show related articles - for now showing placeholder */}
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <p className="text-gray-500 font-nepali">
                                    {language === 'ne' ? 'सम्बन्धित समाचारहरू छिट्टै उपलब्ध हुनेछन्' : 'Related articles coming soon'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
