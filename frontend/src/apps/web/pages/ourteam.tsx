"use client";

import { Biohazard, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Moughees Jafri",
    role: "Founder & CEO",
    image:
      "https://framerusercontent.com/images/cy4wavbyt81gvoWNZYNvS2mmo8.png?scale-down-to=1024",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Zain Ul Abideen",
    role: "Co-Founder & CTO",
    image:
      "https://framerusercontent.com/images/JIIlDuVwdfJZuOpFYqQevpNQRrU.png?scale-down-to=1024",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Hassaan Zuberi",
    role: "COO",
    image:
      "https://framerusercontent.com/images/meD9qS8xpKRajRR77S85wY5Mv8A.jpg?scale-down-to=512",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Ayesha Noor",
    role: "Head of Design",
    image:
      "https://framerusercontent.com/images/XFFLjET4kskD3uCeXXbsOEjE.png?scale-down-to=1024",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 5,
    name: "Faraz Ahmed",
    role: "Lead AI Researcher",
    image:
      "https://framerusercontent.com/images/JR3P7kajBqC7kAHbwF66sBvACw.png?scale-down-to=1024",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 6,
    name: "Sara Khan",
    role: "AI Product Manager",
    image:
      "https://framerusercontent.com/images/XNaoO5zh0Xr50RaXTmjSPo.jpg?scale-down-to=512",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
];

export const OurTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0B0D11] text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-2 text-sm uppercase text-muted-foreground mb-2 tracking-wide">
          <Biohazard className="w-4 h-4 text-muted-foreground text-gray-400" />
          <span>OUR AMAZING TEAM</span>
        </div>

        <h2 className="text-4xl font-bold">
          Get to Know <span className="italic font-light">Us</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Everything you need to collaborate, create, and scale, all in one
          place.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={member.id}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#15182bc5] dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-[#0B0D11] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition">
              <div className="rounded-2xl h-64 w-full p-6 overflow-hidden bg-[#0B0D29] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition">
                <div className="relative z-50 flex items-center h-full gap-6">
                  {/* Left side */}
                  <div className="flex flex-col justify-center h-full">
                    <div>
                      <h5 className="text-zinc-100 font-bold tracking-wide text-1xl">
                        {member.name}
                      </h5>
                      <p className="text-zinc-400 tracking-wide text-sm">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-5 h-5 text-zinc-400 hover:text-white transition" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 text-zinc-400 hover:text-white transition" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-5 h-5 text-zinc-400 hover:text-white transition" />
                      </a>
                    </div>
                  </div>

                  {/* Right side image */}
                  <div className="ml-auto w-28 h-28 rounded-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
