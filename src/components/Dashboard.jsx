import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SentimentTrendGraph from "./SentimentTrendGraph";
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

  const Data = [
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
        "sentiment": "Negative",
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
        "reasoning": "The text has a positive sentiment due to the use of words like 'thanks', 'grateful', and 'love and support', indicating a sense of appreciation and happiness. The mood is also grateful, as Regina Cassandra is expressing her thanks to her fans. The bias level is low, and the direction is neutral, as the text does not contain any emotive language or opinionated statements that could be seen as biased. The subjectivity is moderate, as the text contains some personal opinions and emotions, but also includes factual information about Regina Cassandra's career and personal life."
      }
    },
    {
      "title": "wrestlemania 2025 date",
      "link": "https://trends.google.com/trending/rss?geo=IN",
      "pubDate": "Sun, 13 Apr 2025 13:10:00 -0700",
      "approxTraffic": "1000+",
      "news": [
        {
          "title": "WWE WrestleMania 41 match cards, dates; all you need to know about the Show of Shows",
          "url": "https://www.indiatvnews.com/sports/other/wwe-wrestlemania-41-match-cards-dates-all-you-need-to-know-about-the-show-of-shows-2025-04-12-985187",
          "source": "India TV News",
          "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcReH8R0-35fKn02iIkmlrT6RBYhNKlwQLTgWIKjGSrx8nNL7__VQDYGUCxt5Wg"
        },
        {
          "title": "Lineups announced for WWE WrestleMania 41 Night One and Night Two",
          "url": "https://www.wrestleview.com/featured-top-story/346860-lineups-announced-for-wwe-wrestlemania-41-night-one-and-night-two/",
          "source": "Wrestleview.com",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqbGQItpP0DeW2_OHYjqryxtHIKrXSBbEQXQ_3EzFX3AkGUEsOS8fKM_t2hpM"
        },
        {
          "title": "WWE Ignores Daniel Bryan From Top 5, Names 25 Greatest Title Changes In Wrestlemania's History",
          "url": "https://www.timesnownews.com/sports/wwe/wwe-ignores-daniel-bryan-from-top-5-names-greatest-title-change-in-wrestlemanias-history-cody-rhodes-article-151410462",
          "source": "Times Now",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlclYqnOZJnlPNGIWZz9ZaxHiLrzxN3w_2v-JKh2VLhLpmmjUNGDE1fu-5ig"
        }
      ],
      "groqAnalysis": {
        "language": "English",
        "summary": "The article provides information about WWE WrestleMania 41, including match cards and dates, as well as a list of the 25 greatest title changes in WrestleMania's history, while also mentioning that Daniel Bryan was ignored from the top 5",
        "sentiment": "Neutral",
        "mood": "Informative",
        "bias_level": "Low",
        "bias_direction": "None",
        "subjectivity": 0.4,
        "indicators": [
          "use of objective language",
          "lack of emotive tone",
          "factual information"
        ],
        "reasoning": "The text provides factual information about WWE WrestleMania 41 without expressing a clear opinion or emotion, indicating a neutral sentiment and low bias level. The language used is objective and informative, suggesting a low subjectivity score. The mention of Daniel Bryan being ignored from the top 5 could be seen as a slight negative tone, but it is presented in a matter-of-fact way, which supports the overall neutral sentiment and low bias level."
      }
    },
    {
      "title": "earthquake today india",
      "link": "https://trends.google.com/trending/rss?geo=IN",
      "pubDate": "Sun, 13 Apr 2025 13:00:00 -0700",
      "approxTraffic": "2000+",
      "news": [
        {
          "title": "4 earthquakes jolt India, other Asian countries within an hour",
          "url": "https://www.hindustantimes.com/india-news/4-earthquakes-jolt-india-other-asian-countries-within-an-hour-101744522757924.html",
          "source": "Hindustan Times",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGJdZz-ZNC9xn0J963cAtRzyl4ydcgIYH3mKcqybSquLWnQVWcKlGXEeMLjI"
        },
        {
          "title": "Earthquakes today: Four quakes rock India, other Asian countries within one hour | Details",
          "url": "https://www.indiatvnews.com/news/india/earthquakes-today-four-quakes-rock-india-other-asian-countries-within-one-hour-details-2025-04-13-985290",
          "source": "India TV News",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSykU8RGQMWLmAaXeneoojgDHvStqMOUdU5Pn9Qv0Yh1yW-jbynRprV_2vUhk"
        },
        {
          "title": "3.4 magnitude earthquake strikes Himachal’s Mandi",
          "url": "https://www.thehindu.com/news/national/himachal-pradesh/34-magnitude-earthquake-strikes-himachals-mandi/article69445563.ece",
          "source": "The Hindu",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnlkC-B8ZyfLXYN5IDk90pzXJWv-H0wG8WiNkUd0Z_Rs7__qHnC_PA93CeAI8"
        }
      ],
      "groqAnalysis": {
        "language": "English",
        "summary": "Four earthquakes struck India and other Asian countries within one hour, with one of them being a 3.4 magnitude earthquake in Himachal's Mandi",
        "sentiment": "Neutral",
        "mood": "Informative",
        "bias_level": "Low",
        "bias_direction": "None",
        "subjectivity": 0.2,
        "indicators": [
          "use of factual language",
          "absence of emotional appeals",
          "presentation of objective data"
        ],
        "reasoning": "The text provides a factual report of the earthquakes, without expressing any emotional tone or personal opinion. The language used is objective and informative, indicating a low level of subjectivity and bias. The text does not contain any sensational or leading phrases, which further supports the conclusion that the bias level is low and the direction is neutral."
      }
    },
    {
      "title": "athletic bilbao vs rayo vallecano",
      "link": "https://trends.google.com/trending/rss?geo=IN",
      "pubDate": "Sun, 13 Apr 2025 13:00:00 -0700",
      "approxTraffic": "200+",
      "news": [
        {
          "title": "Rangers 0-0 Athletic (11 Apr, 2025) Final Score",
          "url": "https://www.espn.in/football/match/_/gameId/733639",
          "source": "ESPN India",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScHDESqil6vA2WBBiIVdIrK_si1MHbZwNh0DweIKoqRNOT5SIShyNSLCmizM4"
        },
        {
          "title": "Get ESPN BET Colorado Promo Code BOOKIES: Bet $10 Get $100 & ESPN+ For NBA, MLB",
          "url": "https://bookies.com/news/promo/get-espn-bet-colorado-promo-code-bookies-bet-10-get-100-nba-mlb",
          "source": "Bookies.com",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-Sqt7euTg-FB0nimeVyDCxNBkBg_CK2I762OGp3OCyLFmDH7hqEt6g55khw"
        },
        {
          "title": "Auburn 4-2 LSU (Apr 12, 2025) Final Score",
          "url": "https://www.espn.com/college-baseball/game/_/gameId/401749025/lsu-auburn",
          "source": "ESPN",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIxRIZzGQwjUp8pek95eT8W79HDu8ozvcwH0o3fh6cQGOIstHcBQoihxFxvgQ"
        }
      ],
      "groqAnalysis": {
        "language": "English",
        "summary": "The content appears to be a collection of sports scores, including a 0-0 draw between Rangers and Athletic, and a 4-2 win for Auburn over LSU, with promotional material for ESPN BET Colorado",
        "sentiment": "Neutral",
        "mood": "Informative",
        "bias_level": "Low",
        "bias_direction": "None",
        "subjectivity": 0.2,
        "indicators": [
          "Lack of emotional language",
          "Presence of factual information",
          "Promotional tone"
        ],
        "reasoning": "The analysis suggests that the content is primarily informative, providing sports scores and promotional material, with no apparent emotional or biased language, indicating a low level of subjectivity and bias."
      }
    },
    {
      "title": "roma",
      "link": "https://trends.google.com/trending/rss?geo=IN",
      "pubDate": "Sun, 13 Apr 2025 13:00:00 -0700",
      "approxTraffic": "200+",
      "news": [
        {
          "title": "Lazio-Roma, le pagelle di Benedetti: “Vi dirò cosa penso oggi…”",
          "url": "https://www.cittaceleste.it/pagelle/pagelle-lazio-roma-benedetti-2025/",
          "source": "Cittaceleste.it",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5f1OPsV4SN7u9ulfPw22X0lkulpP7_tUZQsRcdY41rsdSO0GhCDW9UqlJXYw"
        },
        {
          "title": "Roma, Soulé: “Contento per il gol ma ci serviva vincere\"",
          "url": "https://www.sportmediaset.mediaset.it/calcio/roma-soule-contento-per-il-gol-ma-ci-serviva-vincere_96645986-202502k.shtml",
          "source": "Sportmediaset",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhRRHIZUGAxQ1EK72IXiNCbN-3tWyq_zHXhjcJYARZeVc-kI7Hy79zAoEV6I"
        },
        {
          "title": "Romagnoli, la Lazio e un sogno interrotto",
          "url": "https://www.corrieredellosport.it/news/calcio/serie-a/lazio/2025/04/13-139967582/romagnoli_la_lazio_e_un_sogno_interrotto",
          "source": "Corriere dello Sport",
          "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdCVAlNvsOkl_0BnE1qgs3DeKVG1aWe1u9WPq0fQZDS3A4y4FY9PLOdaTF1OE"
        }
      ],
      "groqAnalysis": {
        "language": "Italian",
        "summary": "The article discusses a football match between Lazio and Roma, with quotes from players and a coach, highlighting the team's performance and emotions.",
        "sentiment": "Neutral with a hint of disappointment",
        "mood": "Melancholic",
        "bias_level": "Low",
        "bias_direction": "None",
        "subjectivity": 0.6,
        "indicators": [
          "le pagelle di Benedetti",
          "Contento per il gol ma ci serviva vincere",
          "un sogno interrotto"
        ],
        "reasoning": "The language used in the article is neutral and objective, with quotes from players and a coach that express a range of emotions, from happiness to disappointment. The tone is melancholic, as the team's loss is implied. The subjectivity is moderate, as the article presents a personal perspective from the coach and players. The indicators suggest a focus on the team's performance and the emotional impact of the loss."
      }
    },
    {
      "title": "masters",
      "link": "https://trends.google.com/trending/rss?geo=IN",
      "pubDate": "Sun, 13 Apr 2025 13:00:00 -0700",
      "approxTraffic": "100+",
      "news": [
        {
          "title": "The Masters 2025: final round at Augusta – live",
          "url": "https://www.theguardian.com/sport/live/2025/apr/13/the-masters-2025-final-round-augusta-live-golf",
          "source": "The Guardian",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR6eRkkdVBIfRhD6GqcguBiZ4As7wVQFvuAP3h50alOPLUTEW4Gh7OcVEqYHec"
        },
        {
          "title": "Masters 2025 prize money: Full purse payout at Augusta National",
          "url": "https://www.nbcsports.com/golf/news/masters-2025-prize-money-full-purse-payout-at-augusta-national",
          "source": "NBC Sports",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQtuUDStooqmdx8dCmVLboNBqxU-yS0GZowWHUyDxrUXDLrBoxHRdhkXgD714"
        },
        {
          "title": "Has Rory McIlroy ever won The Masters? 2025 final round leader seeking first green jacket",
          "url": "https://www.augustachronicle.com/story/sports/pga/2025/04/13/rory-mcilroy-masters-2025-wins-history-finishes/83072577007/",
          "source": "The Augusta Chronicle",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWJmxk6KceTVUxQgvM7Lz69jNzcyY5NE-j61kZrBN1i8cOSv7lPreFExO71nI"
        }
      ],
      "groqAnalysis": {
        "language": "English",
        "summary": "The article discusses the final round of The Masters 2025 golf tournament at Augusta National, including the prize money and Rory McIlroy's attempt to win his first green jacket",
        "sentiment": "Neutral",
        "mood": "Informative",
        "bias_level": "Low",
        "bias_direction": "None",
        "subjectivity": 0.2,
        "indicators": [
          "use of factual information",
          "lack of emotive language",
          "neutral tone"
        ],
        "reasoning": "The article provides factual information about the tournament, prize money, and Rory McIlroy's performance without expressing a personal opinion or emotion, indicating a neutral sentiment and low bias level. The use of phrases such as 'final round' and 'prize money' suggests an informative tone, while the absence of emotive language or loaded words suggests a low subjectivity score."
      }
    },
    {
      "title": "lyon fc",
      "link": "https://trends.google.com/trending/rss?geo=IN",
      "pubDate": "Sun, 13 Apr 2025 12:50:00 -0700",
      "approxTraffic": "100+",
      "news": [
        {
          "title": "Resurgent Lyon beats Auxerre to move up to fourth in Ligue 1",
          "url": "https://www.thestar.com/sports/soccer/resurgent-lyon-beats-auxerre-to-move-up-to-fourth-in-ligue-1/article_cb5c5b92-965b-5ecf-b442-0b4c89b8b08b.html",
          "source": "Toronto Star",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTO6BYmPBikdDuTBX4psBwhtbjGsroab6qkGajRt0V6u3W0VKUVI5GwP1Y_vrE"
        },
        {
          "title": "Jubal vs. Olympique Lyon – Player props & odds to score a goal on April 13",
          "url": "https://prosoccerwire.usatoday.com/story/sports/2025/04/13/jubal-soccer-player-props-4-13-2025/83068691007/",
          "source": "Pro Soccer Wire",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRirx6_qoN_KgDbjiGZka6yH8u6OlcsTubRipjJakazSTFp7q4Qy1sPGtQgH04"
        },
        {
          "title": "Lyon predicted XI vs Auxerre: Tanner Tessmann to return from injury",
          "url": "https://sports.yahoo.com/article/lyon-predicted-xi-vs-auxerre-065400368.html",
          "source": "Yahoo Sports",
          "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-Eh3v6xaWBGKOsrxqmwvJuVSBjqDWgGVm5dFrxiMRkeNh1hGnoyb32tvf84k"
        }
      ],
      "groqAnalysis": {
        "language": "English",
        "summary": "Lyon FC has beaten Auxerre, moving up to fourth in Ligue 1, with upcoming matches and player updates",
        "sentiment": "Positive",
        "mood": "Optimistic",
        "bias_level": "Low",
        "bias_direction": "Neutral",
        "subjectivity": 0.6,
        "indicators": [
          "Resurgent",
          "beats",
          "move up",
          "return from injury"
        ],
        "reasoning": "The text reports on a recent win by Lyon FC, using words like 'resurgent' and 'beats' which indicate a positive outcome. The tone is informative and objective, providing updates on upcoming matches and player injuries, without expressing a strong emotional tone or personal opinion, hence the low bias level and neutral direction."
      }
    },
    {
      "title": "chicago vs inter miami",
      "link": "https://trends.google.com/trending/rss?geo=IN",
      "pubDate": "Sun, 13 Apr 2025 12:40:00 -0700",
      "approxTraffic": "10000+",
      "news": [
        {
          "title": "Chicago Fire vs Inter Miami LIVE score, Major League Soccer: Messi in starting lineup for CHI v MIA",
          "url": "https://sportstar.thehindu.com/football/chicago-fire-vs-inter-miami-live-score-updates-lionel-messi-major-league-soccer-highlights-chi-v-mia-goals-news/article69446827.ece",
          "source": "Sportstar",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQ8c65pnKepi1BOZo0LLQ_YYWJtANv9qLjCit8DKG0QW9mJpYXaQlwFjkpng8"
        },
        {
          "title": "With or without Lionel Messi, Inter Miami and Chicago match elite attacks",
          "url": "https://www.deccanherald.com/sports/football/with-or-without-lionel-messi-inter-miami-and-chicago-match-elite-attacks-3491769",
          "source": "Deccan Herald",
          "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-HkMhX5lP-6GgFdZOcc3ITj-7rTy-uiIT6YcJXEmfmqIlk-FxYy5iRUOhJ_c"
        },
        {
          "title": "Lionel Messi's Inter Miami vs Chicago Fire FC live streaming: Date, start time, how to watch",
          "url": "https://m.economictimes.com/news/international/us/lionel-messis-inter-miami-vs-chicago-fire-fc-live-streaming-date-start-time-how-to-watch/articleshow/120237416.cms",
          "source": "The Economic Times",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAkB48FW4lHpbIndzDcN4fN74Lwiv3xf_yTIZHfVsbrFMfx4YFNC3oH-kYsmc"
        }
      ],
      "groqAnalysis": {
        "language": "English",
        "summary": "The article discusses an upcoming soccer match between Chicago Fire and Inter Miami, highlighting the presence of Lionel Messi in the starting lineup for Inter Miami and providing information on how to watch the match live.",
        "sentiment": "Neutral",
        "mood": "Informative",
        "bias_level": "Low",
        "bias_direction": "None",
        "subjectivity": 0.2,
        "indicators": [
          "use of objective language",
          "focus on factual information",
          "lack of emotional appeals"
        ],
        "reasoning": "The article presents information about the match in a straightforward and objective manner, without expressing a clear opinion or emotion. The language used is formal and informative, indicating a low level of subjectivity and bias. The presence of Lionel Messi is mentioned as a factual aspect of the match, rather than being used to elicit an emotional response."
      }
    }
  ];

  function simplifyTrendingNews(data) {
    return data.map(topic => {
      return {
        pubDate : topic.pubDate,
        trend: topic.trend,
        news: topic.news.length > 0 ? [topic.news[0]] : [],
        groqAnalysis: topic.groqAnalysis,
        publishedDate : topic.published_date
      };
    });
  }
  
  // Usage
  const mockData = simplifyTrendingNews(Data);
  

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
              <Button className="btn-primary w-full rounded-md">
                Chat Yourself
              </Button>
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
                <SentimentFeed mockData={mockData} />
              </ScrollArea>
            </div>
            <div className="lg:w-2/5 flex flex-col gap-4">
              <ScrollArea className="h-full rounded-lg border border-white/10">
                <div className="bg-navy rounded-lg p-4">
                <SentimentTrendGraph  data={mockData} />
                </div>
                <div className="bg-navy rounded-lg p-4 mt-4">
                  <SentimentOverview mockData={mockData} />
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
