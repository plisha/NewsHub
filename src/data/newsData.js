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

export const newsTopics = [
  {
    id: 'politics',
    name: 'Politics',
    description: 'Latest political news and updates',
    articles: [
      {
        id: 1,
        title: 'Major Policy Reform Announced',
        summary: 'Government announces sweeping changes to economic policies',
        author: 'John Smith',
        date: '2024-04-05',
        imageUrl: 'https://example.com/politics1.jpg',
        category: 'Politics',
        tags: ['Policy', 'Economy', 'Government'],
        content: 'Detailed content about the policy reform...'
      },
      // Add more politics articles
    ]
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Sports news and updates from around the world',
    articles: [
      {
        id: 1,
        title: 'Championship Finals Results',
        summary: 'Exciting conclusion to the championship series',
        author: 'Mike Johnson',
        date: '2024-04-05',
        imageUrl: 'https://example.com/sports1.jpg',
        category: 'Sports',
        tags: ['Championship', 'Finals', 'Results'],
        content: 'Full coverage of the championship finals...'
      },
      // Add more sports articles
    ]
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Latest technology news and innovations',
    articles: [
      {
        id: 1,
        title: 'New Tech Innovation Breakthrough',
        summary: 'Revolutionary technology development announced',
        author: 'Sarah Chen',
        date: '2024-04-05',
        imageUrl: 'https://example.com/tech1.jpg',
        category: 'Technology',
        tags: ['Innovation', 'Tech', 'Development'],
        content: 'Details about the technological breakthrough...'
      },
      // Add more technology articles
    ]
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Business and financial news updates',
    articles: [
      {
        id: 1,
        title: 'Market Analysis Report',
        summary: 'Latest trends and market analysis',
        author: 'Robert Wilson',
        date: '2024-04-05',
        imageUrl: 'https://example.com/business1.jpg',
        category: 'Business',
        tags: ['Market', 'Finance', 'Analysis'],
        content: 'Detailed market analysis and insights...'
      },
      // Add more business articles
    ]
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Entertainment and celebrity news',
    articles: [
      {
        id: 1,
        title: 'Award Show Highlights',
        summary: 'Coverage of the latest award ceremony',
        author: 'Emily Brown',
        date: '2024-04-05',
        imageUrl: 'https://example.com/entertainment1.jpg',
        category: 'Entertainment',
        tags: ['Awards', 'Celebrities', 'Events'],
        content: 'Complete coverage of the award show...'
      },
      // Add more entertainment articles
    ]
  },
  {
    id: 'health',
    name: 'Health',
    description: 'Health and wellness news',
    articles: [
      {
        id: 1,
        title: 'Health Research Findings',
        summary: 'New health study reveals important findings',
        author: 'Dr. Lisa Park',
        date: '2024-04-05',
        imageUrl: 'https://example.com/health1.jpg',
        category: 'Health',
        tags: ['Research', 'Health', 'Wellness'],
        content: 'Detailed findings from the health study...'
      },
      // Add more health articles
    ]
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Scientific discoveries and research',
    articles: [
      {
        id: 1,
        title: 'Scientific Discovery',
        summary: 'Breakthrough in scientific research',
        author: 'Dr. James Lee',
        date: '2024-04-05',
        imageUrl: 'https://example.com/science1.jpg',
        category: 'Science',
        tags: ['Research', 'Discovery', 'Innovation'],
        content: 'Details of the scientific breakthrough...'
      },
      // Add more science articles
    ]
  },
  {
    id: 'world',
    name: 'World News',
    description: 'International news and global updates',
    articles: [
      {
        id: 1,
        title: 'Global Summit Results',
        summary: 'Outcomes from the international summit',
        author: 'Maria Garcia',
        date: '2024-04-05',
        imageUrl: 'https://example.com/world1.jpg',
        category: 'World',
        tags: ['Global', 'International', 'Summit'],
        content: 'Complete coverage of the global summit...'
      },
      // Add more world news articles
    ]
  }
];

// Helper function to get articles by topic
export const getArticlesByTopic = (topic) => {
  const topicData = newsTopics.find(t => t.id === topic);
  return topicData ? topicData.articles : [];
};

// Helper function to get all articles
export const getAllArticles = () => {
  return newsTopics.flatMap(topic => topic.articles);
};

// Helper function to get latest articles
export const getLatestArticles = (limit = 10) => {
  return getAllArticles()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

// Helper function to get trending articles
export const getTrendingArticles = (limit = 5) => {
  return getAllArticles()
    .filter(article => article.trending)
    .slice(0, limit);
}; 