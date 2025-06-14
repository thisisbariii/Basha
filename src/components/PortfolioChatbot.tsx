import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, User, Bot } from 'lucide-react';

// Type definitions
interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ResponseCategory {
  keywords: string[];
  response: string;
}

interface Responses {
  greetings: string[];
  skills: ResponseCategory;
  experience: ResponseCategory;
  education: ResponseCategory;
  contact: ResponseCategory;
  projects: ResponseCategory;
  location: ResponseCategory;
}

const PortfolioChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Abdul's AI assistant. Ask me about his skills, projects, or experience!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Chatbot knowledge base based on your resume
  const responses: Responses = {
    greetings: [
      "Hello! I'm here to help you learn about Abdul Basha.",
      "Hi there! Feel free to ask me anything about Abdul's background.",
      "Welcome! I'm Abdul's virtual assistant. What would you like to know?"
    ],
    skills: {
      keywords: ['skill', 'technology', 'tech', 'programming', 'code', 'development'],
      response: "Abdul is skilled in:\n\n🚀 MERN Stack (MongoDB, Express.js, React.js, Node.js)\n💻 WordPress Development\n🐍 Python (Basic)\n☕ Java (Basic)\n⚡ C++ (Basic)\n\nHe's currently focused on full-stack development with the MERN stack!"
    },
    experience: {
      keywords: ['experience', 'work', 'intern', 'job', 'company'],
      response: "Abdul has completed several internships:\n\n🏢 CodeClause (1 month) - Developed web applications using MERN stack\n🏢 Unified (1 month) - Debugged and optimized code for better performance\n🏢 Manofox (1 month) - WordPress Developer\n🏢 Orthosquare (3 months) - Designed and maintained WordPress websites\n\nHe's gained experience in both frontend and backend development!"
    },
    education: {
      keywords: ['education', 'study', 'college', 'degree', 'university'],
      response: "Abdul is currently pursuing:\n\n🎓 Bachelor of Science in Information Technology\n🏫 Valia College of Commerce\n📅 2022 - Present\n\nHe's building a strong foundation in IT while gaining practical experience through internships."
    },
    contact: {
      keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'available'],
      response: "You can reach Abdul at:\n\n📧 badshashaikh370@gmail.com\n📱 8286194040\n📍 Andheri (W), Mumbai - 400058\n\n💼 LinkedIn: Abdul Basha\n🔗 GitHub: thiisbarii\n\nHe's actively seeking internship opportunities!"
    },
    projects: {
      keywords: ['project', 'portfolio', 'work', 'build', 'create'],
      response: "Abdul has worked on various projects:\n\n🌐 Web applications using MERN stack\n📱 WordPress websites and maintenance\n🔧 Code optimization and debugging\n\nHe's experienced in both frontend and backend development. Check out his portfolio to see his latest work!"
    },
    location: {
      keywords: ['location', 'where', 'mumbai', 'based'],
      response: "Abdul is based in:\n\n📍 Andheri (West), Mumbai - 400058\n🇮🇳 Maharashtra, India\n\nHe's available for both remote and on-site opportunities in Mumbai!"
    }
  };

  const quickQuestions: string[] = [
    "What are Abdul's skills?",
    "Tell me about his experience",
    "How can I contact him?",
    "What's his educational background?"
  ];

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    }

    // Check each category
    for (const [category, data] of Object.entries(responses)) {
      if (category === 'greetings') continue;
      
      const categoryData = data as ResponseCategory;
      if (categoryData.keywords.some(keyword => input.includes(keyword))) {
        return categoryData.response;
      }
    }

    // Default response
    return "I'd be happy to help! You can ask me about Abdul's:\n\n• Technical skills and technologies\n• Work experience and internships\n• Educational background\n• Contact information\n• Current projects\n\nWhat would you like to know more about?";
  };

  const handleSend = async (): Promise<void> => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: findResponse(currentInput),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question: string): void => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  const formatMessage = (text: string): React.ReactNode => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Abdul's Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {formatMessage(message.text)}
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-1">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                aria-label="Type your message"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioChatbot;