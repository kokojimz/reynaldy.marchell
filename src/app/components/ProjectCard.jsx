import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="max-w-full mx-auto card sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div
        className="relative h-40 sm:h-52 md:h-72 rounded-t-xl group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            target="_blank"
            href={gitUrl}
            className="h-12 w-12 sm:h-14 sm:w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            target="_blank"
            href={previewUrl}
            className="h-12 w-12 sm:h-14 sm:w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#1d1c1c] py-4 sm:py-6 px-4">
        <h5 className="mb-2 text-lg font-semibold sm:text-xl">{title}</h5>
        <p className="text-[#bec3c7] text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
