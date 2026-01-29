import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Breadcrumb = ({ items }) => {
    const { language } = useLanguage();

    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-primary-600 transition-colors font-nepali">
                {language === 'ne' ? 'गृहपृष्ठ' : 'Home'}
            </Link>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span>/</span>
                    {item.link ? (
                        <Link to={item.link} className="hover:text-primary-600 transition-colors font-nepali">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-900 font-medium font-nepali">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
