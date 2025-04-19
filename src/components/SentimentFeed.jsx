import React, { useEffect, useState } from 'react';
import { ExternalLink, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';


const mockData = [
  {
    "title": "nba",
    "link": "https://trends.google.com/trending/rss?geo=IN",
    "pubDate": "Sun, 13 Apr 2025 14:20:00 -0700",
    "approxTraffic": "1000+",
    "news": [
      {
        "title": "Celtics win final regular-season game, will face Magic-Hawks winner in first round of NBA playoffs",
        "url": "https://www.bostonglobe.com/2025/04/13/sports/celtics-hornets-last-game-regular-season/",
        "source": "The Boston Globe",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTITt6suVe1Pmf1OkzvLWLsDn7Zc2cYDTJLXQ8r-UXLiyvGgrtFc_ruFyEuO8M"
      },
      {
        "title": "Nuggets playoff scenarios, explained: Western Conference seeding, tiebreakers, first-round matchups",
        "url": "https://www.denverpost.com/2025/04/12/nba-playoff-scenarios-nuggets-seed-explained-standings/",
        "source": "The Denver Post",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRT1_8ym8v0mJX605EsyMw7T6Voote-Bxdyrs1QAq4lduLu2c95K5n6nG2w888"
      },
      {
        "title": "NBA Playoff Picture 2025: All the wild West scenarios for the final day of the regular season",
        "url": "https://sports.yahoo.com/nba/article/nba-playoff-picture-2025-all-the-wild-west-scenarios-for-the-final-day-of-the-regular-season-164515137.html",
        "source": "Yahoo Sports",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Qx8LDI4zzedJMl7H25XlQV2U4Af7PrCzIMimJTAcWQQ3vAj827KQw_t5NXg"
      }
    ],
    "groqAnalysis": {
      "language": "English",
      "summary": "The Celtics have won their final regular-season game and will face the winner of the Magic-Hawks game in the first round of the NBA playoffs. The article also discusses the Nuggets' playoff scenarios and the Western Conference seeding.",
      "sentiment": "Neutral",
      "mood": "Informative",
      "bias_level": "Low",
      "bias_direction": "None",
      "subjectivity": 0.2,
      "indicators": [
        "use of objective language",
        "lack of emotional tone",
        "factual information"
      ],
      "reasoning": "The text provides factual information about the NBA playoffs and does not express a personal opinion or emotion. The language used is objective and neutral, indicating a low bias level and no bias direction. The subjectivity score is low, indicating that the text is mostly factual and lacks personal perspective."
    }
  },
  {
    "title": "black mirror season 7",
    "link": "https://trends.google.com/trending/rss?geo=IN",
    "pubDate": "Sun, 13 Apr 2025 13:10:00 -0700",
    "approxTraffic": "500+",
    "news": [
      {
        "title": "Black Mirror Season 7 Delivers a Satisfying Sequel to One of Its Best Episodes",
        "url": "https://time.com/7276851/black-mirror-season-7-uss-callister-into-infinity-ending/",
        "source": "Time Magazine",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73wcTyMMTrTKJR1BO-0GnD_eeCn9JIAD4TfrXI3DFG7vwF5r6IpeKyRyn3SY"
      },
      {
        "title": "'Black Mirror' Season 7: The best episodes ever, ranked",
        "url": "https://www.usatoday.com/story/entertainment/tv/2025/04/11/black-mirror-best-episodes-ranked/82976890007/",
        "source": "USA Today",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoCf87bi8ZhkaSlx2wyFg5VJk-zZ8cOZalO7VisJhkBWVC4J3xw-qWTeqltQg"
      },
      {
        "title": "Black Mirror Season 7 review: Cyberpunk thriller series returns to form",
        "url": "https://www.cnbctv18.com/entertainment/black-mirror-season-7-review-cyberpunk-thriller-series-returns-to-form-ws-b-19588460.htm",
        "source": "CNBC TV18",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeNJ4X62OsCIKlLCAtKprq8ZDXJduIImvSvyE7oLNEcWvEADUoGv22X07ZWN4"
      }
    ],
    "groqAnalysis": {
      "language": "English",
      "summary": "The article discusses the seventh season of the TV series Black Mirror, highlighting its satisfying sequel to one of its best episodes and ranking the best episodes, with a positive review of the cyberpunk thriller series",
      "sentiment": "Positive",
      "mood": "Optimistic",
      "bias_level": "Low",
      "bias_direction": "Neutral",
      "subjectivity": 0.6,
      "indicators": [
        "satisfying sequel",
        "best episodes ever",
        "returns to form"
      ],
      "reasoning": "The analysis is based on the positive tone and language used in the article, such as 'satisfying sequel', 'best episodes ever', and 'returns to form', which indicate a favorable opinion of the series. The lack of negative language or criticism suggests a low bias level and neutral bias direction."
    }
  },
  {
    "title": "regina cassandra",
    "link": "https://trends.google.com/trending/rss?geo=IN",
    "pubDate": "Sun, 13 Apr 2025 13:10:00 -0700",
    "approxTraffic": "100+",
    "news": [
      {
        "title": "Regina Cassandra thanks fans for their love and support after Jaat's success: I’ll always be grateful...",
        "url": "https://www.moneycontrol.com/entertainment/regina-cassandra-thanks-fans-for-their-love-and-support-after-jaat-s-success-i-ll-always-be-grateful-for-article-12992462.html",
        "source": "Moneycontrol",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYMESBZoTC6AA8PoSR67-QxuzB4At6niL20GwhBdhi9CRRTfejqQlUUVENnrg"
      },
      {
        "title": "‘Jaat’ actress Regena Cassandrra shares her gratitude on social media!",
        "url": "https://www.cinebuster.in/jaat-actress-regena-cassandrra-shares-her-gratitude-on-social-media/",
        "source": "CineBuster",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgQo5UNyoXEkHi5j4OHV75Md1VhKIs2tmnZgBoh4C83oVuoasg9No4fXJMf6U"
      },
      {
        "title": "Regina Cassandra: Played Wife Of 33 Years Older Sunny Deol, Wedding Rumours With Allu Arjun's Cousin",
        "url": "https://www.bollywoodshaadis.com/articles/jaat-movie-regina-cassandra-sunny-deol-wife-secretly-married-sai-dharam-tej-sundeep-kishan-62502",
        "source": "BollywoodShaadis",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHKpyKNl9WKLNWYkT2SE3T93vpjMIiw38pdz_qnIYVH1bjlpuVvNpv-TtMQbw"
      }
    ],
    "groqAnalysis": {
      "language": "English",
      "summary": "Regina Cassandra expresses gratitude to fans for their love and support after the success of her movie Jaat, and also shares information about her personal life, including wedding rumors.",
      "sentiment": "Positive",
      "mood": "Grateful",
      "bias_level": "Low",
      "bias_direction": "Neutral",
      "subjectivity": 0.6,
      "indicators": [
        "gratitude",
        "love and support",
        "success",
        "wedding rumors"
      ],
      "reasoning": "The content focuses on Regina Cassandra’s public gratitude and personal anecdotes. The language is affectionate and personal, hence the subjectivity and sentiment are more positive, but without noticeable political or cultural bias."
    }
  }
];


const SentimentFeed = ({ liveMode }) => {
  const [newsItems, setNewsItems] = useState([]);

  // Detect if it's the Google-style array format
  const isGoogleNewsArray = (data) => {
    return Array.isArray(data) && data.length && data[0]?.newsUrl;
  };

  const formatGoogleNewsItem = (item) => ({
    title: item.title,
    source: new URL(item.newsUrl).hostname,
    time: new Date(item.pubDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    snippet: item.groqAnalysis?.summary || item.description || '',
    sentiment: item.groqAnalysis?.sentiment?.toLowerCase() || 'neutral',
    bias: item.groqAnalysis?.bias_level === 'Low' ? '10/100' : '30/100',
    emotion: item.groqAnalysis?.mood || 'Neutral',
    verified: true,
    newItem: true,
    newsUrl: item.newsUrl,
  });

  const formatTrendNewsItem = (newsItem, pubDate, groqAnalysis) => ({
    title: newsItem.title,
    source: newsItem.source || new URL(newsItem.url).hostname,
    time: new Date(pubDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    snippet: groqAnalysis?.summary || '',
    sentiment: groqAnalysis?.sentiment?.toLowerCase() || 'neutral',
    bias: groqAnalysis?.bias_level === 'Low' ? '10/100' : '30/100',
    emotion: groqAnalysis?.mood || 'Neutral',
    verified: true,
    newItem: true,
    newsUrl: newsItem.url,
  });

  const formatSingleNewsItem = (data) => ({
    title: data.title,
    source: new URL(data.newsUrl).hostname,
    time: new Date(data.pubDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    snippet: data.groqAnalysis?.summary || data.description,
    sentiment: data.groqAnalysis?.sentiment?.toLowerCase() || 'neutral',
    bias: data.groqAnalysis?.bias_level === 'Low' ? '10/100' : '30/100',
    emotion: data.groqAnalysis?.mood || 'Neutral',
    verified: true,
    newItem: true,
    newsUrl: data.newsUrl,
  });

  // Handle SSE
  // useEffect(() => {
  //   const eventSource = new EventSource('http://localhost:8080');

  //   eventSource.onmessage = (event) => {
  //     try {
  //       const data = JSON.parse(event.data);

  //       // Case 1: Fully parsed Google-style array
  //       if (isGoogleNewsArray(data)) {
  //         const formatted = data.map(formatGoogleNewsItem);
  //         setNewsItems((prevItems) => [...formatted, ...prevItems]);
  //       }
  //       // Case 2: Google Trends-like structure with `news` array inside
  //       else if (Array.isArray(data.news)) {
  //         const formatted = data.news.map((item) =>
  //           formatTrendNewsItem(item, data.pubDate, data.groqAnalysis)
  //         );
  //         setNewsItems((prevItems) => [...formatted, ...prevItems]);
  //       }
  //       // Case 3: Single news object
  //       else {
  //         const formatted = formatSingleNewsItem(data);
  //         setNewsItems((prevItems) => [formatted, ...prevItems]);
  //       }
  //     } catch (err) {
  //       console.error('Invalid SSE data:', err);
  //     }
  //   };

  //   eventSource.onerror = (err) => {
  //     console.error('SSE error:', err);
  //     eventSource.close();
  //   };

  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  useEffect(() => {
    const allFormattedItems = [];
  
    mockData.forEach((trend) => {
      const { pubDate, groqAnalysis, news } = trend;
      if (Array.isArray(news)) {
        news.forEach((newsItem) => {
          const formatted = formatTrendNewsItem(newsItem, pubDate, groqAnalysis);
          allFormattedItems.push(formatted);
        });
      }
    });
  
    setNewsItems(allFormattedItems);
  }, []);
  
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewsItems((items) =>
        items.map((item) => ({ ...item, newItem: false }))
      );
    }, 60000);

    return () => clearTimeout(timer);
  }, [newsItems]);

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
    <div className="space-y-4">
      {newsItems.map((item, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${getSentimentBg(item.sentiment)} ${
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
          <p className="text-sm text-gray-300 mb-3">{item.snippet}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className={`font-medium ${getSentimentColor(item.sentiment)}`}>
                {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
              </span>

              <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-white/10">
                <span>😮</span>
                <span className="text-xs">{item.emotion}</span>
              </div>

              <div className="text-xs text-gray-400">Bias: {item.bias}</div>
            </div>

            <div className="flex items-center space-x-2">
              {item.verified && (
                <Badge variant="outline" className="border-fluvio/30 text-fluvio text-xs bg-fluvio/10 p-2">
                  Verified
                </Badge>
              )}

              <a href={item.newsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs flex items-center">
                  View Full
                  <ExternalLink className=" h-3 w-3" />
                </Button>
              </a>
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
