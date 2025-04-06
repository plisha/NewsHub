import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      search: 'Search news...',
      trending: 'Trending News',
      politics: 'Politics',
      sports: 'Sports',
      business: 'Business',
      entertainment: 'Entertainment',
      readMore: 'Read More',
      noResults: 'No results found',
      loading: 'Loading...'
    },
    hi: {
      search: 'समाचार खोजें...',
      trending: 'ट्रेंडिंग समाचार',
      politics: 'राजनीति',
      sports: 'खेल',
      business: 'व्यापार',
      entertainment: 'मनोरंजन',
      readMore: 'और पढ़ें',
      noResults: 'कोई परिणाम नहीं मिला',
      loading: 'लोड हो रहा है...'
    },
    es: {
      search: 'Buscar noticias...',
      trending: 'Noticias Tendencias',
      politics: 'Política',
      sports: 'Deportes',
      business: 'Negocios',
      entertainment: 'Entretenimiento',
      readMore: 'Leer Más',
      noResults: 'No se encontraron resultados',
      loading: 'Cargando...'
    },
    fr: {
      search: 'Rechercher des nouvelles...',
      trending: 'Actualités Tendances',
      politics: 'Politique',
      sports: 'Sports',
      business: 'Affaires',
      entertainment: 'Divertissement',
      readMore: 'Lire Plus',
      noResults: 'Aucun résultat trouvé',
      loading: 'Chargement...'
    },
    de: {
      search: 'Nachrichten suchen...',
      trending: 'Trending News',
      politics: 'Politik',
      sports: 'Sport',
      business: 'Wirtschaft',
      entertainment: 'Unterhaltung',
      readMore: 'Weiterlesen',
      noResults: 'Keine Ergebnisse gefunden',
      loading: 'Laden...'
    }
  };

  const getTranslation = (key) => {
    return translations[language][key] || translations['en'][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 