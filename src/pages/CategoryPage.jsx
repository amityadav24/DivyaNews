import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import Breadcrumb from '../components/Breadcrumb';
import { newsData, getNewsByCategory } from '../data/newsData';
import { categories, getCategoryBySlug } from '../data/categories';
import { useLanguage } from '../context/LanguageContext';

const CategoryPage = ({ categorySlug }) => {
    const { language } = useLanguage();
    const location = useLocation();

    // Get category from slug
    const slug = categorySlug || location.pathname;
    const category = getCategoryBySlug(slug);

    // Get news for this category
    let categoryNews = [];
    if (slug === '/latest') {
        categoryNews = newsData; // Show all news for latest
    } else if (category) {
        categoryNews = getNewsByCategory(category.id);
    }

    const categoryName = language === 'ne'
        ? (category?.name || 'पछिल्ला समाचार')
        : (category?.nameEn || 'Latest News');

    return (
        <div className="bg-gray-50 py-8">
            <div className="container-custom">
                <Breadcrumb items={[{ label: categoryName }]} />

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 font-nepali mb-2">
                        {categoryName}
                    </h1>
                    <div className="h-1 w-24 bg-primary-600 rounded"></div>
                </div>

                {categoryNews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryNews.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-nepali">
                            {language === 'ne' ? 'समाचार फेला परेन' : 'No news found'}
                        </h3>
                        <p className="text-gray-600 font-nepali">
                            {language === 'ne'
                                ? 'यस श्रेणीमा अहिले कुनै समाचार उपलब्ध छैन।'
                                : 'No news available in this category at the moment.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
