export const categories = [
    { id: 1, name: 'गृहपृष्ठ', slug: '/', nameEn: 'Home' },
    { id: 2, name: 'पछिल्ला समाचार', slug: '/latest', nameEn: 'Latest News' },
    { id: 3, name: 'राजनीति', slug: '/politics', nameEn: 'Politics' },
    { id: 4, name: 'अर्थ व्यवसाय', slug: '/economy', nameEn: 'Economy' },
    { id: 5, name: 'खेल', slug: '/sports', nameEn: 'Sports' },
    { id: 6, name: 'विचार', slug: '/opinion', nameEn: 'Opinion' },
    { id: 7, name: 'देश', slug: '/nation', nameEn: 'Nation' },
    { id: 8, name: 'साहित्य', slug: '/literature', nameEn: 'Literature' },
    { id: 9, name: 'सम्पादकीय', slug: '/editorial', nameEn: 'Editorial' },
    { id: 10, name: 'विदेश', slug: '/international', nameEn: 'International' },
    { id: 11, name: 'प्रविधि', slug: '/technology', nameEn: 'Technology' },
    { id: 12, name: 'भिडियो', slug: '/video', nameEn: 'Video' },
    { id: 13, name: 'अन्तर्वार्ता', slug: '/interview', nameEn: 'Interview' },
    { id: 14, name: 'फोटो', slug: '/photo', nameEn: 'Photo Gallery' },
];

export const getCategoryBySlug = (slug) => {
    return categories.find(cat => cat.slug === slug);
};

export const getCategoryById = (id) => {
    return categories.find(cat => cat.id === id);
};
