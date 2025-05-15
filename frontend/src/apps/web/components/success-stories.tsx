"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cardData = [
  {
    id: 1,
    title: "Sophia's Retail Breakthrough",
    description:
      "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases.",
    retention: "40%",
    profits: "50%",
    image:
      "https://framerusercontent.com/images/GuFZFCQnRSOpKJkAPlCkaRUGIjc.png?scale-down-to=1024",
  },
  {
    id: 2,
    title: "Raj's Operational Overhaul",
    description:
      "Raj, an operations manager at FastFleet, optimized logistics using our insights. Delivery time was reduced by 35% and fleet efficiency improved by 45%.",
    retention: "35%",
    profits: "45%",
    image:
      "https://framerusercontent.com/images/46yWpjkwWiKJojGTr2NKnNPtJ1c.jpg?scale-down-to=1024",
  },
  {
    id: 3,
    title: "Lena's Customer Winback",
    description:
      "Lena revived churned customers with hyper-personalized campaigns, resulting in a 25% return rate and a 60% increase in average order value.",
    retention: "25%",
    profits: "30%",
    image:
      "https://framerusercontent.com/images/TXdiLXbrEnofSFENzswfxpdKpc.png?scale-down-to=1024",
  },
];

export default function SuccessStories() {
  const [topCardIndex, setTopCardIndex] = useState(0);

  // Auto-switch every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTopCardIndex((prev) => (prev + 1) % cardData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getCardOrder = () => {
    return [
      cardData[topCardIndex],
      cardData[(topCardIndex + 1) % cardData.length],
      cardData[(topCardIndex + 2) % cardData.length],
    ];
  };

  return (
    <section className="w-full bg-[#0c0c0c] text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-2 text-sm uppercase text-muted-foreground mb-2">
          <User2 className="h-4 w-4" />
          <span>Customer Success</span>
        </div>
        <h2 className="text-4xl font-bold">
          Real Customer <span className="italic font-light">Results</span>
        </h2>
        <p className="text-muted-foreground mt-3">
          How top brands used Landio AI to unlock growth.
        </p>
      </div>

      <div className="relative h-[600px] max-w-5xl mx-auto flex items-center justify-center">
        {getCardOrder().map((card, position) => {
          const zIndex = 50 - position;
          const translateY = position * 20;
          const scale = 1 - position * 0.03;
          const isFront = position === 0;

          return (
            <motion.div
              key={card.id}
              className="absolute w-full md:w-[90%] cursor-pointer"
              style={{ zIndex }}
              animate={{ y: translateY, scale, opacity: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() =>
                setTopCardIndex(cardData.findIndex((c) => c.id === card.id))
              }
            >
              <Card className="bg-[#121212] border border-[#2b2b2b] shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center gap-2 px-6 pt-4">
                  <User2 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Customer Story
                  </span>
                </div>
                <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-6">
                      {card.description}
                    </p>
                    <div className="flex gap-4">
                      <div className="bg-[#1e1e1e] rounded-xl px-6 py-4 text-center border border-[#2c2c2c]">
                        <p className="text-2xl font-bold">{card.retention}</p>
                        <p className="text-sm text-muted-foreground">
                          gain in retention
                        </p>
                      </div>
                      <div className="bg-[#1e1e1e] rounded-xl px-6 py-4 text-center border border-[#2c2c2c]">
                        <p className="text-2xl font-bold">{card.profits}</p>
                        <p className="text-sm text-muted-foreground">
                          surge in profits
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-xl border border-[#1f1f1f] shadow-lg object-cover w-full h-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
