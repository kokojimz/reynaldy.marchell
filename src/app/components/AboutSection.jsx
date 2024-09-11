"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Tech Stack",
    id: "Tech Stack",
    content: (
      <ul className="pl-2 list-disc">
        <li>React</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>JAVA</li>
        <li>C/C++</li>
        <li>TailwindCSS</li>
        <li>Vercel</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Arduino IDE</li>
        <li>Android Studio</li>
        <li>Unity</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://binus.ac.id/"
          >
            Bina Nusantara University
          </Link>
          • <i>Indonesia</i> | Jun 2022 - Jul 2026 (Expected)
        </li>
        <p>Bachelor Degree in Computer Science, 3.64/4.00</p> <br />
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://english.wsu.ac.kr/main/index.jsp"
          >
            Woosong University
          </Link>
          • <i>Daejeon, South Korea</i> | Agu 2024 - Des 2024
        </li>
        <p>
        Participant of AIMS Exchange Student at Endicott College of International Studies - AI and Big Data
        </p> <br />
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://eng.cycu.edu.tw/"
          >
            Chung Yuan Christian University 
          </Link>
          • <i>Taiwan</i> | Feb 2023 - Jun 2023
        </li>
        <p>
          Virtual study abroad program - Industrial and Systems Engineering,
          75.00/100.00
        </p>{" "}
        <br />
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://www.sololearn.com/en/certificates/CT-NYHYBNHC"
          >
            Sololearn : C Programming Course
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://www.sololearn.com/en/certificates/CC-DPBCTLHZ"
          >
            Sololearn : Introduction to SQL
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://progate.com/course_certificate/83befb7es0elna"
          >
            Progate : Git Course
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://drive.google.com/file/d/1aBbRzqWzZcbsl-50Ix5vHuSM8vplSXPY/view"
          >
            D-Link Certified Network Design Associate (DCNA)
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://progate.com/course_certificate/d4ab9ab5s0cwhx"
          >
            Progate : UNIX Command Line
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://www.dicoding.com/certificates/6RPNW21W9P2M"
          >
            Dicoding Indonesia : Belajar Dasar Pemrograman JavaScript
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://icpc.global/ICPCID/E9A8MA4UEVSC"
          >
            (ICPCID) International Collegiate Programming Contest
          </Link>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Tech Stack");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <a href="https://open.spotify.com/user/v16fporu9wzoeehgyxvahedxh">
          <img
            src="https://spotify-recently-played-readme.vercel.app/api?user=v16fporu9wzoeehgyxvahedxh&count=5"
            alt="Spotify recently played"
            width={500}
            height={500}
          />
        </a>
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-green-400">About Me</h2>
          <p className="text-base lg:text-lg">
            A 5th-semester Computer Science student specializing in Internet of
            Things and full-stack web development. With experience in both
            front-end and back-end technologies, I enjoy building practical and
            user-friendly applications. I'm always eager to learn new things and
            develop practical skills to contribute effectively in a team.
            <br />
            <br />I have experience working with{" "}
            <Link
              className="text-blue-400 hover:underline"
              target="_blank"
              href="https://react.dev"
            >
              React
            </Link>{" "}
            ,{" "}
            <Link
              className="text-blue-400 hover:underline"
              target="_blank"
              href="https://nextjs.org"
            >
              Next.js
            </Link>
            , and{" "}
            <Link
              className="text-blue-400 hover:underline"
              target="_blank"
              href="https://expressjs.com/"
            >
              Express.js
            </Link>{" "}
            for web development projects, and I've also worked with some of IoT
            platforms like{" "}
            <Link
              className="text-blue-400 hover:underline"
              target="_blank"
              href="https://docs.arduino.cc/hardware/uno-rev3/"
            >
              Arduino
            </Link>
            , and{" "}
            <Link
              className="text-blue-400 hover:underline"
              target="_blank"
              href="https://en.wikipedia.org/wiki/NodeMCU"
            >
              NodeMCU
            </Link>{" "}
            .
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Tech Stack")}
              active={tab === "Tech Stack"}
            >
              {" "}
              Tech Stack{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
