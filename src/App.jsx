import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';
import LanguageToggle from './components/LanguageToggle';

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <LanguageToggle />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/latest" element={<CategoryPage categorySlug="latest" />} />
                        <Route path="/politics" element={<CategoryPage categorySlug="politics" />} />
                        <Route path="/economy" element={<CategoryPage categorySlug="economy" />} />
                        <Route path="/sports" element={<CategoryPage categorySlug="sports" />} />
                        <Route path="/opinion" element={<CategoryPage categorySlug="opinion" />} />
                        <Route path="/nation" element={<CategoryPage categorySlug="nation" />} />
                        <Route path="/literature" element={<CategoryPage categorySlug="literature" />} />
                        <Route path="/editorial" element={<CategoryPage categorySlug="editorial" />} />
                        <Route path="/international" element={<CategoryPage categorySlug="international" />} />
                        <Route path="/technology" element={<CategoryPage categorySlug="technology" />} />
                        <Route path="/video" element={<CategoryPage categorySlug="video" />} />
                        <Route path="/interview" element={<CategoryPage categorySlug="interview" />} />
                        <Route path="/photo" element={<CategoryPage categorySlug="photo" />} />
                        <Route path="/article/:id" element={<ArticlePage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
