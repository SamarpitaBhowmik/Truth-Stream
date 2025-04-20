import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, BarChart3 } from "lucide-react";
import { 
  Send, 
  Image as ImageIcon, 
  AudioLines, 
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import ChatMessage from "@/components/ChatMessage";
import FileUploadButton from "@/components/FileUploadButton";

const ChatPage = () => {
  // State management
  const [messages, setMessages] = useState([
    { 
      role: "bot", 
      content: "Hello! I'm your sentiment analysis assistant. Upload an image or audio file, and I'll analyze the sentiment. How are you feeling today?", 
      timestamp: new Date(),
      isIntro: true
    },
  ]);
  const [messageInput, setMessageInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Refs and hooks
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  // Handle sending user messages
  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;
    
    const newMessage = { role: "user", content: messageInput, timestamp: new Date() };
    setMessages([...messages, newMessage]);
    setMessageInput("");
    
    // BACKEND INTEGRATION POINT
    // Replace this with actual API call to your sentiment analysis backend
    setIsProcessing(true);
    setTimeout(() => {
      const responses = [
        "I can detect if you're happy or sad from your messages, images, or audio. Want to try uploading something?",
        "Looking at your message, I'm sensing a bit of curiosity. Would you like to learn more about how sentiment analysis works?",
        "I'm analyzing your message... I detect a neutral sentiment. Would you like to try uploading an image or audio to get a better reading?",
        "Interesting! Based on your message, I'm detecting a slightly positive tone. Upload a photo or audio to get a more accurate analysis.",
        "I've been trained on thousands of emotional patterns. Your current message suggests you're in a thoughtful state. Would you like to explore more?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botResponse = { 
        role: "bot", 
        content: randomResponse, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botResponse]);
      setIsProcessing(false);
    }, 1500);
  };
  
  // Handle file uploads
  const handleFileSelect = (file) => {
    if (!file) return;
    
    // Create a preview message
    const fileType = file.type.startsWith('image/') ? 'image' : 'audio';
    const fileURL = URL.createObjectURL(file);
    
    const fileMessage = { 
      role: "user", 
      content: fileType === 'image' ? 'Image uploaded' : 'Audio uploaded', 
      attachment: {
        type: fileType,
        url: fileURL,
      },
      timestamp: new Date()
    };
    
    setMessages([...messages, fileMessage]);
    
    // BACKEND INTEGRATION POINT
    // Replace this simulation with actual file upload to your backend
    setIsProcessing(true);
    setTimeout(() => {
      // Simulate sentiment analysis result
      const sentiments = ['positive', 'negative', 'neutral'];
      const sentimentDescriptions = {
        positive: [
          "I detect happiness and joy in this content!",
          "This shows a very uplifting emotional state.",
          "There's definitely a positive vibe here."
        ],
        negative: [
          "I'm detecting some sadness or frustration here.",
          "This suggests a somewhat negative emotional state.",
          "There seems to be some tension or concern present."
        ],
        neutral: [
          "I'm seeing a balanced, neutral emotional state.",
          "This content doesn't show strong emotional leaning either way.",
          "The sentiment here is fairly neutral overall."
        ]
      };
      
      const sentimentResult = sentiments[Math.floor(Math.random() * sentiments.length)];
      const descriptions = sentimentDescriptions[sentimentResult];
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const confidence = (Math.random() * 30 + 70).toFixed(1);
      
      const analysisResponse = { 
        role: "bot", 
        content: `I've analyzed your ${fileType} and detected a ${sentimentResult} sentiment with ${confidence}% confidence. ${description}`,
        sentiment: sentimentResult,
        timestamp: new Date(),
        analysis: {
          type: fileType,
          result: sentimentResult,
          confidence: parseFloat(confidence),
          description
        }
      };
      
      setMessages(prev => [...prev, analysisResponse]);
      setIsProcessing(false);
      
      toast({
        title: "Analysis complete",
        description: `${fileType.charAt(0).toUpperCase() + fileType.slice(1)} analyzed with ${confidence}% confidence.`,
      });
    }, 2500);
  };
  
  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Start a new chat
  // BACKEND INTEGRATION POINT - Clear conversation and start new session
  const handleNewChat = () => {
    setMessages([
      { 
        role: "bot", 
        content: "Hello! I'm your sentiment analysis assistant. Upload an image or audio file, and I'll analyze the sentiment. How are you feeling today?", 
        timestamp: new Date(),
        isIntro: true
      },
    ]);
    
    toast({
      title: "New chat started",
      description: "Let's begin a fresh conversation!",
    });
  };

  // Focus on input when pressing / key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-navy  ">
      {/* Minimal header bar */}
      <header className="h-12 border-b border-white/10 flex items-center justify-between px-4">
        <div className="flex items-center mx-40">
        
          <Link to="/" className="flex items-center ">
          <BarChart3 className="text-fluvio mr-2" size={24} />
            <div className="text-xl font-semibold  ">
              <span className="text-fluvio">Emo </span>
              <span className="text-white">Scope</span>
            </div>
          </Link>
        </div>

        {/* Compact action buttons */}
        <div className="flex items-center space-x-1 mx-40">
        <Link to="/">
          <Button 
            onClick={handleNewChat}
            variant="primary" 
            size="sm" 
            className="h-8 btn-primary group text-white px  -3 text-md rounded ml-1">
            Home
          </Button>
        </Link >
          <Link to="/dashboard">
          <Button 
            onClick={handleNewChat}
            variant="primary" 
            size="sm" 
            className="h-8 btn-secondary group text-white px  -3 text-md rounded ml-1">
            News
          </Button>
        </Link >
        
        </div>
      </header>
      
      {/* Main chat area with grid pattern background - taking more space */}
      <div className="flex-1 overflow-y-auto p-2 md:p-4 ">
      <div className="tech-blob bg-fluvio left-0 top-[15%] animate-pulse-slow blur-[80px] opacity-30"></div>
      <div className="tech-blob bg-groq right-0 top-[40%] animate-pulse-slow blur-[80px] opacity-30" ></div>
      <div className="tech-blob bg-monad left-0 bottom-[10%] animate-pulse-slow blur-[80px] opacity-30" style={{ animationDelay: '2s' }}></div>
      
        <div className="max-w-3xl mx-auto">
          {messages.map((message, index) => (
            <ChatMessage 
              key={index} 
              message={message} 
            />
          ))}
          {isProcessing && (
            <div className="flex items-center text-gray-400 p-3">
              <div className="animate-pulse flex space-x-1">
                <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                <div className="h-2 w-2 bg-teal-400 rounded-full"></div>
                <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Slim info banner */}
      <div className="bg-fluvio border-t border-b border-white/5 py-1 flex justify-center items-center max-w-3xl mx-auto rounded-lg">
        <span className="text-xs text-gray-50 px-3">TruthStream analyzes sentiment in text, images, and audio</span>
      </div>
      
      {/* Compact input area */}
      <div className="p-3 bg-navy border-t border-white/10 ">
        <div className="max-w-3xl mx-auto ">
          {/* File upload buttons */}
          <div className="flex justify-center mb-2 space-x-2">
            <FileUploadButton 
              icon={<ImageIcon className="h-4 w-4" />} 
              label="Upload Image"
              accept="image/*"
              onFileSelect={handleFileSelect}
              className="bg-blue-900/30 text-blue-100 border-blue-800/70 hover:bg-blue-800/40 px-3 py-1 h-8 text-xs"
            />
            <FileUploadButton 
              icon={<AudioLines className="h-4 w-4" />} 
              label="Upload Audio"
              accept="audio/*"
              onFileSelect={handleFileSelect}
              className="bg-teal-900/30 text-teal-100 border-teal-800/70 hover:bg-teal-800/40 px-3 py-1 h-8 text-xs rounded-{12px}"
            />
          </div>
          
          {/* Message input */}
          <div className="flex items-center rounded-full">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                placeholder="Message TruthStream..."
                className="w-full h-10 rounded-{12px} bg-white/5 border border-white/10 text-white py-2 px-3 pr-8 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <div className="absolute right-2 top-3 text-gray-500">
                <Lightbulb className="h-4 w-4 opacity-50" />
              </div>
            </div>
            <Button 
              onClick={handleSendMessage} 
              disabled={!messageInput.trim()}
              className="ml-2 bg-fluvio hover:bg-blue-700 h-10 w-10 p-0 flex items-center justify-center rounded-[12px]"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;