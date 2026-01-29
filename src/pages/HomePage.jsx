import React from 'react';
import NewsCard from '../components/NewsCard';
import { newsData, getFeaturedNews, getLatestNews, getNewsByCategory } from '../data/newsData';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { language } = useLanguage();
    const featuredNews = getFeaturedNews();
    const latestNews = getLatestNews(9);
    const politicsNews = getNewsByCategory(3).slice(0, 4); // Politics
    const sportsNews = getNewsByCategory(5).slice(0, 4); // Sports
    const economyNews = getNewsByCategory(4).slice(0, 3); // Economy
    const technologyNews = getNewsByCategory(11).slice(0, 3); // Technology
    const literatureNews = getNewsByCategory(8).slice(0, 3); // Literature

    return (
        <div className="bg-gray-50">
            {/* Featured News */}
            <section className="bg-white py-8">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nepali border-l-4 border-primary-600 pl-4">
                        {language === 'ne' ? 'मुख्य समाचार' : 'Featured News'}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {featuredNews.slice(0, 2).map((news) => (
                            <NewsCard key={news.id} news={news} featured={true} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest News */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 font-nepali border-l-4 border-primary-600 pl-4">
                            {language === 'ne' ? 'पछिल्ला समाचार' : 'Latest News'}
                        </h2>
                        <Link to="/latest" className="text-primary-600 hover:text-primary-700 font-medium font-nepali flex items-center gap-2">
                            {language === 'ne' ? 'सबै हेर्नुहोस्' : 'View All'}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestNews.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Politics Section */}
            {politicsNews.length > 0 && (
                <section className="py-8 bg-white">
                    <div className="container-custom">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 font-nepali border-l-4 border-primary-600 pl-4">
                                {language === 'ne' ? 'राजनीति' : 'Politics'}
                            </h2>
                            <Link to="/politics" className="text-primary-600 hover:text-primary-700 font-medium font-nepali flex items-center gap-2">
                                {language === 'ne' ? 'सबै हेर्नुहोस्' : 'View All'}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {politicsNews.map((news) => (
                                <NewsCard key={news.id} news={news} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Economy & Technology Section */}
            <section className="py-8">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Economy */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 font-nepali border-l-4 border-primary-600 pl-4">
                                    {language === 'ne' ? 'अर्थ व्यवसाय' : 'Economy'}
                                </h2>
                                <Link to="/economy" className="text-primary-600 hover:text-primary-700 font-medium font-nepali text-sm">
                                    {language === 'ne' ? 'सबै' : 'All'} →
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {economyNews.map((news) => (
                                    <Link key={news.id} to={`/article/${news.id}`} className="flex gap-4 bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                                        <img
                                            src={news.image}
                                            alt={language === 'ne' ? news.title : news.titleEn}
                                            className="w-24 h-24 object-cover rounded"
                                            onError={(e) => e.target.src = 'https://via.placeholder.com/100x100?text=News'}
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2 font-nepali mb-1">
                                                {language === 'ne' ? news.title : news.titleEn}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-nepali">
                                                {language === 'ne' ? news.date : news.dateEn}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Technology */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 font-nepali border-l-4 border-primary-600 pl-4">
                                    {language === 'ne' ? 'प्रविधि' : 'Technology'}
                                </h2>
                                <Link to="/technology" className="text-primary-600 hover:text-primary-700 font-medium font-nepali text-sm">
                                    {language === 'ne' ? 'सबै' : 'All'} →
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {technologyNews.map((news) => (
                                    <Link key={news.id} to={`/article/${news.id}`} className="flex gap-4 bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                                        <img
                                            src={news.image}
                                            alt={language === 'ne' ? news.title : news.titleEn}
                                            className="w-24 h-24 object-cover rounded"
                                            onError={(e) => e.target.src = 'https://via.placeholder.com/100x100?text=News'}
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2 font-nepali mb-1">
                                                {language === 'ne' ? news.title : news.titleEn}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-nepali">
                                                {language === 'ne' ? news.date : news.dateEn}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports Section */}
            {sportsNews.length > 0 && (
                <section className="py-8 bg-white">
                    <div className="container-custom">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 font-nepali border-l-4 border-primary-600 pl-4">
                                {language === 'ne' ? 'खेल' : 'Sports'}
                            </h2>
                            <Link to="/sports" className="text-primary-600 hover:text-primary-700 font-medium font-nepali flex items-center gap-2">
                                {language === 'ne' ? 'सबै हेर्नुहोस्' : 'View All'}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {sportsNews.map((news) => (
                                <NewsCard key={news.id} news={news} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Literature Section */}
            {literatureNews.length > 0 && (
                <section className="py-8">
                    <div className="container-custom">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 font-nepali border-l-4 border-primary-600 pl-4">
                                {language === 'ne' ? 'साहित्य' : 'Literature'}
                            </h2>
                            <Link to="/literature" className="text-primary-600 hover:text-primary-700 font-medium font-nepali flex items-center gap-2">
                                {language === 'ne' ? 'सबै हेर्नुहोस्' : 'View All'}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {literatureNews.map((news) => (
                                <NewsCard key={news.id} news={news} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter Subscription */}
            <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-700">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-4 font-nepali">
                            {language === 'ne' ? 'समाचार सदस्यता लिनुहोस्' : 'Subscribe to Newsletter'}
                        </h2>
                        <p className="mb-6 font-nepali text-lg">
                            {language === 'ne'
                                ? 'पछिल्ला समाचार र अपडेट सिधै आफ्नो इमेलमा प्राप्त गर्नुहोस्'
                                : 'Get latest news and updates directly in your email'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder={language === 'ne' ? 'आफ्नो इमेल ठेगाना' : 'Your email address'}
                                className="px-6 py-3 rounded-lg text-gray-900 flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-white font-nepali"
                            />
                            <button className="bg-white text-primary-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors font-nepali">
                                {language === 'ne' ? 'सदस्यता लिनुहोस्' : 'Subscribe'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advertisement Placeholder */}
            <section className="py-8 bg-white">
                <div className="container-custom">
                    <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg">
                        <span className="text-gray-500 font-nepali">
                            {language === 'ne' ? 'विज्ञापन स्थान' : 'Advertisement Space'}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
