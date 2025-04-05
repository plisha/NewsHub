import { politicsNews } from './politicsNews';
import { sportsNews } from './sportsNews';
import { agricultureNews } from './agricultureNews';
import { educationNews } from './educationNews';
import { healthcareNews } from './healthcareNews';
import { indianNews } from './indianNews';
import { worldNews } from './worldNews';
import { cricketNews } from './cricketNews';
import { businessNews } from './businessNews';
import { entertainmentNews } from './entertainmentNews';

export const getAllNews = () => {
  return [
    ...politicsNews,
    ...sportsNews,
    ...agricultureNews,
    ...educationNews,
    ...healthcareNews,
    ...indianNews,
    ...worldNews,
    ...cricketNews,
    ...businessNews,
    ...entertainmentNews
  ];
};

export const getNewsByTopic = (topic) => {
  switch(topic) {
    case 'politics':
      return politicsNews;
    case 'sports':
      return sportsNews;
    case 'agriculture':
      return agricultureNews;
    case 'education':
      return educationNews;
    case 'health-care':
      return healthcareNews;
    case 'indian-news':
      return indianNews;
    case 'world':
      return worldNews;
    case 'cricket-news':
      return cricketNews;
    case 'business':
      return businessNews;
    case 'entertainment':
      return entertainmentNews;
    default:
      return [];
  }
}; 