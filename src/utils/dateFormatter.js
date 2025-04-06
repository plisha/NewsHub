export const formatDate = (date, language) => {
  return new Date(date).toLocaleDateString(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}; 