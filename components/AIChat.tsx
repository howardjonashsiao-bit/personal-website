import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { MessageCircle, Send, X, Bot, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am Howard\'s AI Assistant. Ask me anything about his work, skills, or experience.', timestamp: new Date() }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)] flex flex-col overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-purple-400 w-5 h-5" />
              <h3 className="text-white font-bold font-['Syne']">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-tr-sm' 
                    : 'bg-gray-800 text-gray-200 rounded-tl-sm border border-gray-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                 <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-sm border border-gray-700 flex gap-1">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-black/40 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Howard..."
              className="flex-1 bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 animate-ping"></div>
        {isOpen ? <X className="text-white w-6 h-6" /> : <Sparkles className="text-white w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIChat;