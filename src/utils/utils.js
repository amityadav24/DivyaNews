// Date formatting utilities
export const formatDate = (dateNepali, dateEnglish, language = 'ne') => {
    return language === 'ne' ? dateNepali : dateEnglish;
};

// Text truncation
export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

// URL slug generator
export const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
};

// Search filter
export const searchNews = (newsArray, query, language = 'ne') => {
    const lowerQuery = query.toLowerCase();
    return newsArray.filter(news => {
        const title = language === 'ne' ? news.title : news.titleEn;
        const excerpt = language === 'ne' ? news.excerpt : news.excerptEn;
        return title.toLowerCase().includes(lowerQuery) ||
            excerpt.toLowerCase().includes(lowerQuery);
    });
};
