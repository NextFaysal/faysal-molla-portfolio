"use client"

import SectionHeader from "@/components/SectionHeader";
import FaysalMolla from "@/assets/images/Faysal Molla Pic.png";
import Card from "@/components/Card";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import TilwindCSS from "@/assets/icons/tailwindcss-icon-svgrepo-com.svg";
import NextJS from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import Express from "@/assets/icons/nodejs-svgrepo-com.svg";
import Prisma from "@/assets/icons/prisma-svgrepo-com.svg";
import TypeScript from "@/assets/icons/typescript-svgrepo-com.svg";
import GithubIcon from "@/assets/icons/github.svg";
import WordPress from "@/assets/icons/wordpress-svgrepo-com.svg";
import NodeJS from "@/assets/icons/node-svgrepo-com.svg";
import PostgreSQL from "@/assets/icons/postgresql-svgrepo-com.svg";
import React from "@/assets/icons/react-svgrepo-com.svg";
import MapIcon from "@/assets/images/bengldesh-map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "TilwindCSS",
    iconType: TilwindCSS,
  },
  {
    title: "Next.JS (React)",
    iconType: NextJS,
  },
  {
    title: "Express.js",
    iconType: Express,
  },
  {
    title: "Prisma ORM",
    iconType: Prisma,
  },
  {
    title: "TypeScript",
    iconType: TypeScript,
  },
  {
    title: "WordPress",
    iconType: WordPress,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "NodeJS",
    iconType: NodeJS,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSQL,
  },
  {
    title: "React Native ",
    iconType: React,
  },
];

const hobbies = [
  {
    title: "Researching",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Religion",
    emoji: "☪️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Travel",
    emoji: "🚀",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "40%",
  },
  {
    title: "Chatgpt",
    emoji: "֎",
    left: "70%",
    top: "45%",
  },
  {
    title: "Problem Solving",
    emoji: "💡",
    left: "5%",
    top: "65%",
  },
  {
    title: "Volunteering",
    emoji: "🤝",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          subTitle="A Peek Into My Journey"
          description="Discover who I am, what I do, and the passions that drive me forward."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 lg:col-span-1 md:col-span-2">
              <Image
                className="h-full w-full object-cover"
                src={FaysalMolla}
                alt="This Faysal Molla"
              />
            </Card>
            <Card className="h-[320px] lg:col-span-2 md:col-span-3">
              <CardHeader
                header="My Experience"
                subHead="Discover the technologies and tools I leverage to create outstanding digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:40s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:40s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-5">
            <Card className="h-[320px] flex flex-col lg:col-span-2 md:col-span-3 ">
              <CardHeader
                header="Other Interests"
                subHead="Delve into the activities and pursuits that inspire me beyond my main passions."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobbie) => (
                  <motion.div
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    key={hobbie.title}
                    style={{
                      left: hobbie.left,
                      top: hobbie.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 ">
                      {hobbie.title}
                    </span>
                    <span>{hobbie.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative lg:col-span-1 md:col-span-2">
              <Image
                className="h-full w-full object-cover object-left-top "
                src={MapIcon}
                alt="This my location"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20 z-0"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
