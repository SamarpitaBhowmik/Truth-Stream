import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Info } from "lucide-react";

// Mock data for the emotion trends
const generateMockData = (topic) => {
  const emotions = ["Fear", "Joy", "Anger", "Surprise", "Sadness"];
  const hours = Array.from({ length: 24 }, (_, i) => {
    const now = new Date();
    now.setHours(now.getHours() - (23 - i));
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  return hours.map((hour, index) => {
    const base = {
      time: hour,
    };

    // Generate random values for each emotion, with some patterns based on the topic
    emotions.forEach(emotion => {
      let value = Math.random() * 100;
      
      if (topic === "AI" && emotion === "Fear" && index > 18) {
        value = 80 + Math.random() * 20;
      } else if (topic === "Politics" && emotion === "Anger") {
        value = 60 + Math.random() * 30;
      } else if (topic === "Health" && emotion === "Joy" && index < 12) {
        value = 70 + Math.random() * 30;
      }
      
      base[emotion] = Math.round(value);
    });
    
    return base;
  });
};

const emotionColors = {
  Fear: "#8b5cf6",
  Joy: "#10b981",
  Anger: "#ef4444",
  Surprise: "#f59e0b",
  Sadness: "#3b82f6",
};

const EmotionTrendGraph = ({ selectedTopic }) => {
  const [activeEmotion, setActiveEmotion] = useState(null);
  const data = generateMockData(selectedTopic);

  const handleEmotionClick = (emotion) => {
    setActiveEmotion(prevEmotion => prevEmotion === emotion ? null : emotion);
  };

  return (
    <Card className="h-full ml-4 w-[450px]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Emotion Trend Graph &nbsp;</CardTitle>
          <div className="flex items-center text-muted-foreground text-sm">
            
            <Info size={14} className="mr-1" />
            Last 24h
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {Object.entries(emotionColors).map(([emotion, color]) => (
            <Badge
              key={emotion}
              variant={activeEmotion === emotion ? "default" : "outline"}
              style={{ 
                backgroundColor: activeEmotion === emotion ? color : "transparent",
                borderColor: color,
                padding: "6px 12px",
                marginTop: "6px",
                color: activeEmotion === emotion ? "white" : undefined
              }}
              className="cursor-pointer"
              onClick={() => handleEmotionClick(emotion)}
            >
              {emotion}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-1 pt-4 h-[300px] mb-6">
        <ChartContainer
          config={{
            Fear: { color: emotionColors.Fear },
            Joy: { color: emotionColors.Joy },
            Anger: { color: emotionColors.Anger },
            Surprise: { color: emotionColors.Surprise },
            Sadness: { color: emotionColors.Sadness },
          }}
          className="h-full"
        >
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 12, fill: '#ffffff' }}
              tickMargin={10}
              stroke="var(--muted-foreground)"
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#ffffff' }}
              tickMargin={10}
              stroke="var(--muted-foreground)"
            />
            <ChartTooltip
              content={
                <ChartTooltipContent 
                  indicator="dot"
                  formatter={(value, name) => [`${value}%`, name]}
                />
              }
            />
            {Object.entries(emotionColors).map(([emotion, color]) => (
              (!activeEmotion || activeEmotion === emotion) && (
                <Line
                  key={emotion}
                  type="monotone"
                  dataKey={emotion}
                  stroke={color}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              )
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default EmotionTrendGraph;
