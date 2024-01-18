import Javascript from "react-devicons/javascript/original";
import Typescript from "react-devicons/typescript/original";
import CSS from "react-devicons/css3/original";
import HTML from "react-devicons/html5/original";
import React from "react-devicons/react/original";
import Next from "react-devicons/nextjs/original";
import Nest from "react-devicons/nestjs/plain";
import Tailwind from "react-devicons/tailwindcss/plain";
import Node from "react-devicons/nodejs/original";
import Python from "react-devicons/python/original";
import Socketio from "react-devicons/socketio/original";
import Bootstrap from "react-devicons/bootstrap/original";
import Postgres from "react-devicons/postgresql/original";
import Mysql from "react-devicons/mysql/original";
import Java from "react-devicons/java/original";
import Docker from "react-devicons/docker/original";
import Sass from "react-devicons/sass/original";
import Git from "react-devicons/git/original";
import MongoDb from "react-devicons/mongodb/original";
import C from "react-devicons/c/original";
import { SiPrisma } from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { ReactElement } from "react";

export interface LanguageType {
  name: string;
  Element: ReactElement;
}

interface LanguagesType {
  primary: LanguageType[];
  secondary: LanguageType[];
}

export const Languages: LanguagesType = {
  primary: [
    { name: "Javascript", Element: <Javascript /> },
    { name: "Typescript", Element: <Typescript /> },
    { name: "React", Element: <React /> },
    { name: "HTML5", Element: <HTML /> },
    { name: "CSS3", Element: <CSS /> },
    { name: "PostgreSQL", Element: <Postgres /> },
    { name: "NodeJS", Element: <Node /> },
    { name: "Python", Element: <Python /> },
    { name: "NextJS", Element: <Next color="white" /> },
    { name: "NestJS", Element: <Nest /> },
    { name: "Tailwind", Element: <Tailwind />},
    { name: "Socket.io", Element: <Socketio color="white" /> },
    { name: "Docker", Element: <Docker /> },
    { name: "PrismaJS", Element: <SiPrisma /> },
    { name: "Sass", Element: <Sass /> },
    { name: "Git", Element: <Git /> }
  ],
  secondary: [
    { name: "MySQL", Element: <Mysql /> },
    { name: "Java", Element: <Java /> },
    { name: "MongoDb", Element: <MongoDb /> },
    { name: "Bootstrap", Element: <Bootstrap /> },
    { name: "AWS", Element: <FaAws />},
    { name: "C", Element: <C />}
  ]
};