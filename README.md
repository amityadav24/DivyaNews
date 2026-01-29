# दिव्य न्यूज (Divya News) - Nepali Mediahouse Website

A production-ready, multi-page Nepali language mediahouse website built with **React + Vite + Tailwind CSS**. Features full bilingual support (Nepali ⇄ English) with a language toggle button.

## ✨ Features

- 🌐 **Bilingual Support**: Complete Nepali and English content with toggle button
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎨 **Modern Design**: Clean, professional news portal aesthetic
- 🔍 **Search Functionality**: Search across all articles
- 📰 **Multiple Categories**: Politics, Economy, Sports, Opinion, and more
- 🖼️ **Rich Media**: News cards with images and metadata
- 📄 **Complete Pages**: Home, Categories, Articles, About, Contact, Search

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd "d:\Divya News"

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at **http://localhost:5173**

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

Production files will be in the `dist` folder.

## 📁 Project Structure

```
d:\Divya News\
├── public/
│   └── images/          # News article images
├── src/
│   ├── components/      # Reusable components
│   │   ├── layout/      # Header, Footer
│   │   ├── Breadcrumb.jsx
│   │   ├── LanguageToggle.jsx
│   │   └── NewsCard.jsx
│   ├── context/         # Language context
│   ├── data/            # News data and categories
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎯 Key Features

### Language Toggle
- Fixed button in top-right corner
- Switches all content between Nepali and English
- Maintains language preference across pages

### Pages
- **Homepage**: Featured news, latest articles, category sections
- **Category Pages**: Filtered news by category
- **Article Page**: Full article with image, author, date, share buttons
- **Search Page**: Search results with query highlighting
- **About Page**: Mission, vision, values
- **Contact Page**: Contact form and information

### Categories
- गृहपृष्ठ (Home)
- पछिल्ला समाचार (Latest News)
- राजनीति (Politics)
- अर्थ व्यवसाय (Economy)
- खेल (Sports)
- विचार (Opinion)
- देश (Nation)
- साहित्य (Literature)
- सम्पादकीय (Editorial)
- विदेश (International)
- प्रविधि (Technology)
- भिडियो (Video)
- अन्तर्वार्ता (Interview)
- फोटो (Photo Gallery)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v3
- **State Management**: Context API
- **Fonts**: Noto Sans Devanagari (Nepali), Inter (English)

## 📱 Responsive Design

- **Mobile**: < 768px - Single column layout, hamburger menu
- **Tablet**: 768px - 1024px - Two column grid
- **Desktop**: > 1024px - Three column grid, full navigation

## 🎨 Design System

### Colors
- **Primary**: Red/Maroon (#dc2626) - News portal theme
- **Secondary**: Slate gray - Text and backgrounds
- **Accent**: White - Contrast and highlights

### Typography
- **Nepali**: Noto Sans Devanagari (300-800 weights)
- **English**: Inter (300-800 weights)

## 🚢 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
# Or use Netlify CLI:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Update `vite.config.js` with base path
2. Build: `npm run build`
3. Deploy `dist` folder to gh-pages branch

## 📝 Customization

### Adding News Articles

Edit `src/data/newsData.js`:

```javascript
{
  id: 9,
  title: 'नेपाली शीर्षक',
  titleEn: 'English Title',
  excerpt: 'नेपाली सारांश',
  excerptEn: 'English excerpt',
  content: 'पूर्ण नेपाली सामग्री',
  contentEn: 'Full English content',
  categoryId: 3,
  author: 'लेखक नाम',
  authorEn: 'Author Name',
  date: '२०८२ माघ १५',
  dateEn: 'January 29, 2026',
  image: '/images/news-9.jpg',
  featured: false,
}
```

### Adding Categories

Edit `src/data/categories.js`:

```javascript
{
  id: 15,
  name: 'नयाँ श्रेणी',
  slug: '/new-category',
  nameEn: 'New Category'
}
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Structure

- **Components**: Reusable UI components
- **Pages**: Route-based page components
- **Context**: Global state management
- **Data**: Mock data (replace with API calls)
- **Utils**: Helper functions

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact:
- Email: info@divyanews.com
- Website: [Divya News](http://localhost:5173)

---

**Built with ❤️ for the Nepali community**
