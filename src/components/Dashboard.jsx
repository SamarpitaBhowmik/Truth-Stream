import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import EmotionTrendGraph from "./EmotionTrendGraph";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  FileDown,
  LogOut,
  User,
  BarChart3,
  Moon,
  Sun,
  Filter,
  Circle,
  LucideArrowDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import SentimentFeed from "@/components/SentimentFeed";
import SentimentOverview from "@/components/SentimentOverview";
import TopTopics from "@/components/TopTopics";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [liveMode, setLiveMode] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const isMobile = useIsMobile();

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <div className="w-full max-w-screen-full mx-auto px-24">
        <header className="h-14 border-b border-white/10 flex items-center justify-between px-4">
          <div className="flex items-center">
            <div className="text-xl font-bold flex items-center">
              <BarChart3 className="text-fluvio mr-2" />
              <span className="gradient-text mr-1">Emo</span>
              <span>Scope</span>
            </div>
            <div className="ml-6 flex space-x-1"></div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={`h-8 px-3 flex items-center gap-1.5 rounded-full ${
                liveMode
                  ? "bg-monad/20 text-monad border-monad/30"
                  : "bg-white/5"
              } `}
              onClick={() => setLiveMode(!liveMode)}
            >
              <Circle
                className={`h-2 w-2 ${
                  liveMode ? "text-red-500 fill-red-500" : ""
                }`}
              />
              <span>Live</span>
            </Button>

            <Link to="/chat" onClick={() => setMobileMenuOpen(false)}>
              <Button className="btn-primary w-full rounded-md">Chat Yourself</Button>
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-hidden p-4">
          <div className="flex mb-4 justify-between">
            <div className="flex space-x-2">
              {["All Topics", "AI", "Politics", "Finance", "Health"].map(
                (topic) => (
                  <Button
                    key={topic}
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedTopic(topic)}
                    className={`rounded border-white/10 ${
                      selectedTopic === topic
                        ? "bg-gradient-to-r from-fluvio to-monad text-white border-0"
                        : "bg-navy text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {topic}
                  </Button>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-150px)]">
            <div className="lg:w-3/5 flex flex-col">
              <ScrollArea className="h-full rounded-lg border border-white/10">
                <SentimentFeed liveMode={liveMode} />
              </ScrollArea>
            </div>
            <div className="lg:w-2/5 flex flex-col gap-4">
              <ScrollArea className="h-full rounded-lg border border-white/10">
                <div className="bg-navy rounded-lg p-4">
                  <EmotionTrendGraph />
                </div>
                <div className="bg-navy rounded-lg p-4 mt-4">
                  <SentimentOverview />
                </div>
                <div className="bg-navy rounded-lg p-4 mt-4">
                  <TopTopics />
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
