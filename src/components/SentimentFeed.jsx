
import React from 'react';
import { ExternalLink, Clock, ArrowRight, Circle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SentimentFeed = ({ liveMode }) => {
  const newsItems = [
    {
      title: 'AI Models Show Surprising Reasoning Abilities',
      source: 'TechCrunch',
      time: 'less than a minute ago',
      snippet: 'Researchers discover new emergent properties in large language models that mimic human-like reasoning in complex scenarios.',
      sentiment: 'positive',
      bias: '25/100',
      emotion: 'Surprise',
      verified: true,
      newItem: true
    },
    {
      title: 'Breakthrough in Healthcare: New Treatment Method Shows Promise',
      source: 'Nature Medicine',
      time: 'less than a minute ago',
      snippet: 'Scientists develop innovative approach to treating chronic conditions, showing 87% efficacy in early clinical trials.',
      sentiment: 'positive',
      bias: '15/100',
      emotion: 'Joy',
      verified: true,
      newItem: false
    },
    {
      title: 'Global Economy Faces Uncertainty Amid Inflation Concerns',
      source: 'Financial Times',
      time: '3 minutes ago',
      snippet: 'Experts warn of possible recession as central banks continue to raise interest rates to combat persistent inflation.',
      sentiment: 'negative',
      bias: '30/100',
      emotion: 'Fear',
      verified: true,
      newItem: false
    },
    {
      title: 'New Research Examines Climate Impact on Agriculture',
      source: 'Science Daily',
      time: '15 minutes ago',
      snippet: 'Study finds mixed results on crop yields as farmers adapt to changing weather patterns across different regions.',
      sentiment: 'neutral',
      bias: '10/100',
      emotion: 'Neutral',
      verified: true,
      newItem: false
    },
    {
      title: 'Tech Companies Announce Layoffs Amid Market Slowdown',
      source: 'Bloomberg',
      time: '32 minutes ago',
      snippet: 'Major technology firms cut workforce by 5-10% as consumer spending decreases and advertising revenue declines.',
      sentiment: 'negative',
      bias: '20/100',
      emotion: 'Concern',
      verified: true,
      newItem: false
    }
  ];

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'text-monad';
      case 'negative':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getSentimentBg = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-monad/10 border-monad/50 border-1';
      case 'negative':
        return 'bg-red-700/20 border-red-500/50';
      default:
        return 'bg-gray-500/10 border-gray-500/50';
    }
  };

  return (
    <div className=" space-y-4">
      {newsItems.map((item, index) => (
        <div 
          key={index}
          className={`p-4 rounded-lg border transition-all duration-300  cursor-pointer ${getSentimentBg(item.sentiment)} ${
            item.newItem && liveMode ? 'animate-fade-in' : ''
          }`}
        >
          <div className="flex justify-between mb-2">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Clock className="h-3 w-3" />
              <span>{item.time}</span>
              <span>•</span>
              <span>{item.source}</span>
            </div>
            {item.newItem && (
              <Badge className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-xl shadow-[0_0_35px_rgba(255,0,0,0.6)]">
                NEW
              </Badge>
            )}
          </div>
          
          <h3 className="text-lg font-medium mb-2">{item.title}</h3>
          
          <p className="text-sm text-gray-300 mb-3">
            {item.snippet}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className={`font-medium ${getSentimentColor(item.sentiment)}`}>
                {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
              </span>
              
              <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-white/10">
                <span>😮</span>
                <span className="text-xs">{item.emotion}</span>
              </div>
              
              <div className="text-xs text-gray-400">
                Bias: {item.bias}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {item.verified && (
                <Badge variant="outline" className="border-fluvio/30 text-fluvio text-xs bg-fluvio/10 p-2">
                  Verified
                </Badge>
              )}
              
              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs flex items-center">
                View Full
                <ExternalLink className=" h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="p-4">
        <Button variant="ghost" className="w-full flex items-center justify-center gap-2 text-gray-400">
          <span>Load more</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SentimentFeed;