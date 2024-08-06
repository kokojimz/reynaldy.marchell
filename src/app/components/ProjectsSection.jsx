"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CCP-Visualizer",
    description: "Visualizer for coin change problem",
    image: "/images/projects/CCP.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kokojimz/CCP-Visualizer",
    previewUrl: "https://ccp-visualizer.vercel.app/",
  },
  {
    id: 2,
    title: "Breath",
    description: "Social media platform where creativity meets connectivity",
    image: "/images/projects/Breath.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kokojimz/Breath",
    previewUrl: "https://breaath.vercel.app/",
  },
  {
    id: 3,
    title: "CineFlix",
    description: "Simple Movie list App, Search your favorite movies here",
    image: "/images/projects/CineFlix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kokojimz/CineFlix",
    previewUrl: "https://cine-flix-snowy.vercel.app/",
  },
  {
    id: 4,
    title: "GVC",
    description: "Gesture Volume Control using Hand Tracking MediaPipe",
    image: "/images/projects/GVC.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/kokojimz/GVC",
    previewUrl: "https://drive.google.com/file/d/1j5xfK4cjy8YPiw5iNHNfitGvOEGZzGZ9/view?usp=sharing",
  },
  {
    id: 5,
    title: "SiPeta",
    description: "Sipeta is an Android application designed to assist users in navigating and exploring maps.",
    image: "/images/projects/SiPeta.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kokojimz/SiPeta",
    previewUrl: "https://drive.google.com/file/d/1yCqzqPaV0kwTc-KmloIlV8boiSvtjGVl/view?usp=sharing",
  },
  {
    id: 6,
    title: "Fragment-and-Gridview",
    description: "Simple Mobile Application Project for Learning Fragments and GridView in Android",
    image: "/images/projects/Fragment-and-Gridview.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kokojimz/Fragment-and-Gridview",
    previewUrl: "https://drive.google.com/file/d/1XN5p_GnBd2hx0t7jDmjR4vfUdNB-IbPY/view?usp=sharing",
  },
  {
    id: 7,
    title: "Crypt",
    description: "Learn Solidity, Smart Contracts, and Blockchain by building simple crypto sending dApp",
    image: "/images/projects/Crypt.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kokojimz/Crypt",
    previewUrl: "https://cryptt.vercel.app/",
  },
  {
    id: 8,
    title: "Research_UrbanFarming",
    description: "Conducting research on effectiveness of utilizing different types of water for urban farming using IoT.",
    image: "/images/projects/Riset.png",
    tag: ["All", "IoT"],
    gitUrl: "https://github.com/kokojimz/Research_UrbanFarming",
    previewUrl: "https://github.com/kokojimz/Research_UrbanFarming",
  },
  {
    id: 9,
    title: "Compost_Monitoring_system",
    description: "IoT based Compost Monitoring system",
    image: "/images/projects/Compost_Monitoring_system.png",
    tag: ["All", "IoT"],
    gitUrl: "https://github.com/kokojimz/Compost_Monitoring_system",
    previewUrl: "https://github.com/kokojimz/Compost_Monitoring_system",
  },
  {
    id: 10,
    title: "FlyTheDragon",
    description: "Simple Augmented Reality (AR) game that displays a red dragon in 3D after scanning an image of the dragon.",
    image: "/images/projects/FlyTheDragon.png",
    tag: ["All", "Mobile","AR/VR"],
    gitUrl: "https://github.com/kokojimz/FlyTheDragon",
    previewUrl: "https://drive.google.com/file/d/1eNKD5dmAk80_smten8L_pBUsQe0plGaC/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-5 text-4xl font-bold text-center text-white md:mb-8">
        Projects
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 py-6 text-white custom-sm:flex-row custom-md:flex-row lg:flex-row md:flex-row sm:flex-col">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IoT"
          isSelected={tag === "IoT"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AR/VR"
          isSelected={tag === "AR/VR"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
