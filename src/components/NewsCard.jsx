import React from 'react';
import { Link } from 'react-router-dom';
import { getCategoryById } from '../data/categories';
import { useLanguage } from '../context/LanguageContext';

const NewsCard = ({ news, featured = false }) => {
    const { language } = useLanguage();
    const category = getCategoryById(news.categoryId);

    const title = language === 'ne' ? news.title : news.titleEn;
    const excerpt = language === 'ne' ? news.excerpt : news.excerptEn;
    const author = language === 'ne' ? news.author : news.authorEn;
    const date = language === 'ne' ? news.date : news.dateEn;
    const categoryName = language === 'ne' ? category?.name : category?.nameEn;

    if (featured) {
        return (
            <Link to={`/article/${news.id}`} className="block group">
                <div className="news-card h-full">
                    <div className="relative">
                        <img
                            src={news.image}
                            alt={title}
                            className="w-full h-96 object-cover"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/800x600?text=Divya+News';
                            }}
                        />
                        <div className="absolute top-4 left-4">
                            <span className="category-badge bg-primary-600 text-white">
                                {categoryName}
                            </span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-3 font-nepali">
                            {title}
                        </h2>
                        <p className="text-gray-600 mb-4 font-nepali text-lg">
                            {excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="font-nepali">{author}</span>
                            <span className="font-nepali">{date}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link to={`/article/${news.id}`} className="block group">
            <div className="news-card h-full">
                <div className="relative">
                    <img
                        src={news.image}
                        alt={title}
                        className="news-card-image"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x300?text=Divya+News';
                        }}
                    />
                    <div className="absolute top-2 left-2">
                        <span className="category-badge text-xs">
                            {categoryName}
                        </span>
                    </div>
                </div>
                <div className="news-card-content">
                    <h3 className="news-card-title font-nepali">
                        {title}
                    </h3>
                    <p className="news-card-excerpt font-nepali">
                        {excerpt}
                    </p>
                    <div className="news-card-meta">
                        <span className="font-nepali">{author}</span>
                        <span className="font-nepali">{date}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
