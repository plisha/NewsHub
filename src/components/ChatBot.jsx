import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: 'Hi! I\'m your NewsHub Assistant. You can ask me about:\n• Latest news updates\n• News categories\n• Search for specific news\n• Weather updates\n• Sports news\n• Business news\n• Entertainment news' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Latest News Responses
    if (input.includes('latest news') || input.includes('recent news') || input.includes('new updates')) {
      return "Here are the top headlines:\n• Global Climate Summit Begins\n• Tech Innovation Breakthrough\n• Sports Championship Updates\n\nWhich topic would you like to know more about?";
    }

    // Category-specific Responses
    if (input.includes('politics') || input.includes('political')) {
      return "Latest in Politics:\n• Government Policy Updates\n• International Relations\n• Election News\n• Political Developments";
    }

    if (input.includes('sports') || input.includes('sport news')) {
      return "Sports Updates:\n• Cricket Match Results\n• Football League Updates\n• Tennis Tournament Highlights\n• Local Sports Events";
    }

    if (input.includes('business') || input.includes('finance') || input.includes('market')) {
      return "Business & Finance News:\n• Stock Market Updates\n• Economic Trends\n• Company News\n• Market Analysis";
    }

    if (input.includes('entertainment') || input.includes('movies') || input.includes('celebrity')) {
      return "Entertainment News:\n• Movie Releases\n• Celebrity Updates\n• Music Industry News\n• TV Show Updates";
    }

    if (input.includes('technology') || input.includes('tech news')) {
      return "Technology Updates:\n• Latest Gadget Launches\n• Tech Industry News\n• Innovation Updates\n• Digital Trends";
    }

    if (input.includes('weather') || input.includes('climate')) {
      return "Weather Updates:\n• Current Weather Conditions\n• Weather Forecasts\n• Climate Change News\n• Environmental Updates";
    }

    // Search Related Responses
    if (input.includes('search') || input.includes('find news')) {
      return "You can search for news by:\n1. Using the search bar at the top\n2. Clicking on category tabs\n3. Using filters for specific dates\n4. Browsing through topics";
    }

    // Help Related Responses
    if (input.includes('help') || input.includes('how to')) {
      return "I can help you with:\n• Finding specific news\n• Browsing news categories\n• Getting latest updates\n• Weather information\n\nWhat would you like to know?";
    }

    // Subscription Related
    if (input.includes('subscribe') || input.includes('subscription')) {
      return "Our subscription options include:\n• Daily Newsletter\n• Breaking News Alerts\n• Premium Content Access\n• Customized News Feed\n\nWould you like to know more about any of these?";
    }

    // Contact Related
    if (input.includes('contact') || input.includes('support')) {
      return "You can reach us through:\n• Email: support@newshub.com\n• Phone: 1-800-NEWS-HUB\n• Contact form on our website\n• Social media channels";
    }

    // Location Based News
    if (input.includes('local news') || input.includes('nearby')) {
      return "For local news, you can:\n1. Set your location preferences\n2. Browse the Local News section\n3. Enable location-based alerts\n4. Check regional updates";
    }

    // Breaking News
    if (input.includes('breaking') || input.includes('urgent')) {
      return "Breaking News Updates:\n• Check our homepage banner\n• Enable notifications\n• Follow our social media\n• Subscribe to alerts";
    }

    // General Questions
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! How can I help you with news today? You can ask about:\n• Latest updates\n• Specific categories\n• Search help\n• Subscriptions";
    }

    // Default Response
    return "I'm not sure about that. Would you like to:\n• Check latest news?\n• Browse categories?\n• Search for specific news?\n• Get help with navigation?";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: inputText }]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: getBotResponse(inputText) 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </svg>
          Chat with us
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>NewsHub Assistant</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
            {isTyping && (
              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 