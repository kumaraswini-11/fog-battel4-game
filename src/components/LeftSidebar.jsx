import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { LiaPowerOffSolid } from "react-icons/lia";
import sidebarMenu1 from "../assets/SidebarMenu1.png";
import sidebarMenu2 from "../assets/SidebarMenu2.png";
import sidebarMenu3 from "../assets/SidebarMenu3.png";
import sidebarMenu4 from "../assets/SidebarMenu4.png";
import sidebarMenu5 from "../assets/SidebarMenu5.png";
import rightSidebarIcon1 from "../assets/asset 44.svg";
import rightSidebarIcon2 from "../assets/asset 43.svg";

const menuItems = [
  {
    src: sidebarMenu1,
    alt: "Sidebar Menu Icon 1",
    title: "BATTLEFIELD V",
  },
  {
    src: sidebarMenu2,
    alt: "Sidebar Menu Icon 2",
    title: "BATTLEFIELD 1",
  },
  {
    src: sidebarMenu3,
    alt: "Sidebar Menu Icon 3",
    title: "BATTLEFIELD 4",
  },
  {
    src: sidebarMenu4,
    alt: "Sidebar Menu Icon 4",
    title: "BATTLEFIELD HARDLINE",
  },
  {
    src: sidebarMenu5,
    alt: "Sidebar Menu Icon 5",
    title: "CAREER",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex h-full w-16 flex-col items-center justify-between border-r border-gray-700 py-8 pt-32">
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <SidebarIcon
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            isHighlighted={index === 2}
          />
        ))}
        <IconWrapper title="WATCH">
          <img
            src={rightSidebarIcon2}
            alt="Play Button 1"
            className="h-8 w-8"
          />
        </IconWrapper>
        <IconWrapper title="NEWS">
          <img
            src={rightSidebarIcon1}
            alt="Play Button 2"
            className="h-8 w-8"
          />
        </IconWrapper>
      </nav>

      <nav className="flex flex-col items-center justify-center gap-4">
        <IconWrapper title="Help">
          <FaCircleQuestion size={20} className="text-white" />
        </IconWrapper>
        <IconWrapper>
          <LiaPowerOffSolid size={20} className="text-white" />
        </IconWrapper>
      </nav>
    </aside>
  );
};

const SidebarIcon = ({ src, alt, title, isHighlighted }) => {
  return (
    <div
      className={`group relative flex items-center justify-center ${
        isHighlighted ? "border-l-2 border-orange-500" : ""
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="h-10 w-9 opacity-60 transition-opacity duration-200 group-hover:opacity-100"
      />
      <span className="absolute left-full ml-2 hidden whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
        {title}
      </span>
    </div>
  );
};

const IconWrapper = ({ children, title }) => {
  return (
    <div className="group relative flex items-center justify-center opacity-60 transition-opacity duration-200 group-hover:opacity-100">
      {children}
      {title && (
        <span className="absolute left-full ml-2 hidden whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
          {title}
        </span>
      )}
    </div>
  );
};

export default Sidebar;
