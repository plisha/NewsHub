import React, { createContext, useState, useContext, useEffect } from 'react';

const NewsLanguageContext = createContext();

export const NewsLanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);

  const getNewsByLanguage = async (language, category) => {
    // Simulated news data for different languages
    const newsInLanguages = {
      en: {
        politics: [
          {
            id: 1,
            title: "Latest Political Updates",
            summary: "Recent developments in international politics...",
            content: "Full content in English...",
            category: "politics"
          },
          // More English politics news...
        ],
        sports: [
          {
            id: 1,
            title: "Sports Headlines",
            summary: "Latest sports updates and scores...",
            content: "Full sports content in English...",
            category: "sports"
          },
          // More English sports news...
        ],
        // Other categories...
      },
      hi: {
        politics: [
          {
            id: 1,
            title: "राजनीतिक समाचार",
            summary: "अंतर्राष्ट्रीय राजनीति में नवीनतम घटनाक्रम...",
            content: "हिंदी में पूरी सामग्री...",
            category: "politics"
          },
          // More Hindi politics news...
        ],
        sports: [
          {
            id: 1,
            title: "खेल समाचार",
            summary: "नवीनतम खेल अपडेट और स्कोर...",
            content: "हिंदी में पूरी खेल सामग्री...",
            category: "sports"
          },
          // More Hindi sports news...
        ],
        // Other categories...
      },
      // Add more languages...
    };

    return newsInLanguages[language]?.[category] || newsInLanguages['en'][category];
  };

  const loadNewsForLanguage = async (language) => {
    setLoading(true);
    try {
      const categories = ['politics', 'sports', 'business', 'entertainment', 'world'];
      const newsInLanguage = {};
      
      for (const category of categories) {
        newsInLanguage[category] = await getNewsByLanguage(language, category);
      }
      
      setNewsData(newsInLanguage);
    } catch (error) {
      console.error('Error loading news:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNewsForLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <NewsLanguageContext.Provider 
      value={{ 
        currentLanguage, 
        setCurrentLanguage, 
        newsData, 
        loading,
        getNewsByLanguage 
      }}
    >
      {children}
    </NewsLanguageContext.Provider>
  );
};

export const useNewsLanguage = () => useContext(NewsLanguageContext); 