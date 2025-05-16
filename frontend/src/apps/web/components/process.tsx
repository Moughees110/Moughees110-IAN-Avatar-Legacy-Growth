"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tabData = [
  {
    key: "step1",
    title: "Connect Your Data",
    description:
      "Effortlessly integrate with all your tools to bring data into one place.",
    image:
      "https://framerusercontent.com/images/0DBAix0ysUgnw6WhKOms5oGcN8.png?scale-down-to=1024",
  },
  {
    key: "step2",
    title: "Analyze Performance",
    description:
      "Use our dashboards to get a detailed understanding of your business health.",
    image:
      "https://framerusercontent.com/images/EPErbkkqsOxh8MmRFjfhCGP08.png?scale-down-to=1024",
  },
  {
    key: "step3",
    title: "Get Clear Insights",
    description:
      "Our AI delivers insights that are ready to be acted upon, helping you make informed decisions.",
    image:
      "https://framerusercontent.com/images/0DBAix0ysUgnw6WhKOms5oGcN8.png?scale-down-to=1024",
  },
];

export default function HowLandioWorks() {
  const [activeTab, setActiveTab] = useState("step1");

  const current = tabData.find((tab) => tab.key === activeTab);

  return (
    <section className="w-full bg-[#0B0D11] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-2 text-sm uppercase text-muted-foreground mb-2">
          <BadgeCheck className="h-4 w-4" />
          <span>Process</span>
        </div>
        <h2 className="text-4xl font-bold">
          How Landio <span className="italic font-light">Works</span>
        </h2>
        <p className="text-muted-foreground mt-3">
          Everything you need to collaborate, create, and scale, all in one
          place.
        </p>
      </div>

      <Card className="bg-[#0B0D11] border border-[#1f1f1f] max-w-7xl mx-auto p-6 md:p-10">
        {/* Tabs */}
        <Tabs defaultValue="step1" className="w-full">
          <TabsList className="grid grid-cols-3 gap-2 w-full bg-transparent mb-10">
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="w-full bg-[#0B0D11] text-white data-[state=active]:bg-[#0B0D29] data-[state=active]:text-white border border-[#2c2c2c] rounded-md py-2 text-sm"
              >
                {tab.key.toUpperCase().replace("STEP", "STEP ")}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current?.image}
              src={current?.image}
              alt={current?.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className=""
            />
          </AnimatePresence>

          {/* Right - Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current?.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-muted-foreground mb-1">
                0{tabData.findIndex((t) => t.key === activeTab) + 1}
              </p>
              <h3 className="text-2xl text-white font-semibold mb-2">
                {current?.title}
              </h3>
              <p className="text-muted-foreground text-base">
                {current?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Card>
    </section>
  );
}
