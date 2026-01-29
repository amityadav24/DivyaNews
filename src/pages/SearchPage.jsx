import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import Breadcrumb from '../components/Breadcrumb';
import { newsData } from '../data/newsData';
import { searchNews } from '../utils/utils';
import { useLanguage } from '../context/LanguageContext';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const { language } = useLanguage();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            const searchResults = searchNews(newsData, query, language);
            setResults(searchResults);
        }
    }, [query, language]);

    return (
        <div className="bg-gray-50 py-8">
            <div className="container-custom">
                <Breadcrumb items={[{ label: language === 'ne' ? 'खोज परिणाम' : 'Search Results' }]} />

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 font-nepali mb-2">
                        {language === 'ne' ? 'खोज परिणाम' : 'Search Results'}
                    </h1>
                    <p className="text-gray-600 font-nepali">
                        {language === 'ne' ? `"${query}" को लागि ${results.length} परिणामहरू` : `${results.length} results for "${query}"`}
                    </p>
                    <div className="h-1 w-24 bg-primary-600 rounded mt-2"></div>
                </div>

                {results.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-nepali">
                            {language === 'ne' ? 'कुनै परिणाम फेला परेन' : 'No results found'}
                        </h3>
                        <p className="text-gray-600 font-nepali">
                            {language === 'ne'
                                ? 'कृपया फरक खोजशब्द प्रयोग गरी पुन: प्रयास गर्नुहोस्।'
                                : 'Please try again with different keywords.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
