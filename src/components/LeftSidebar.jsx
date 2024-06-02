import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { LiaPowerOffSolid } from "react-icons/lia";
import SidebarMenu1 from "../assets/SidebarMenu1.png";
import SidebarMenu2 from "../assets/SidebarMenu2.png";
import SidebarMenu3 from "../assets/SidebarMenu3.png";
import SidebarMenu4 from "../assets/SidebarMenu4.png";
import SidebarMenu5 from "../assets/SidebarMenu5.png";
import RightSidebarIcon1 from "../assets/asset 44.svg";
import RightSidebarIcon2 from "../assets/asset 43.svg";

function Sidebar() {
  return (
    <aside
      role="complementary"
      className="flex h-full w-16 flex-col items-center justify-between border-r border-gray-700 py-8 pt-32 opacity-60"
    >
      <nav className="flex flex-col gap-2">
        {[
          { src: SidebarMenu1, alt: "Sidebar Menu Icon 1", title: "Menu 1" },
          { src: SidebarMenu2, alt: "Sidebar Menu Icon 2", title: "Menu 2" },
          { src: SidebarMenu3, alt: "Sidebar Menu Icon 3", title: "Menu 3" },
          { src: SidebarMenu4, alt: "Sidebar Menu Icon 4", title: "Menu 4" },
          { src: SidebarMenu5, alt: "Sidebar Menu Icon 5", title: "Menu 5" },
        ].map((item, index) => (
          <SidebarIcon
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
          />
        ))}
        <IconWrapper title="Play Button 1">
          <img
            src={RightSidebarIcon2}
            alt="Play Button 1"
            height={27}
            width={27}
          />
        </IconWrapper>
        <IconWrapper title="Play Button 2">
          <img
            src={RightSidebarIcon1}
            alt="Play Button 2"
            height={27}
            width={27}
          />
        </IconWrapper>
      </nav>

      <nav className="flex flex-col gap-2">
        <IconWrapper title="Help">
          <FaCircleQuestion size={18} className="hover: text-white" />
        </IconWrapper>
        <IconWrapper title="Power Off">
          <LiaPowerOffSolid size={14} />
        </IconWrapper>
      </nav>
    </aside>
  );
}

function SidebarIcon({ src, alt, title }) {
  return (
    <div className="group relative flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        width={28}
        height={28}
        className="hover:opacity-100"
      />
      <span className="absolute left-full z-50 ml-2 hidden w-max whitespace-nowrap rounded bg-black p-1 text-xs text-white group-hover:block">
        {title}
      </span>
    </div>
  );
}

function IconWrapper({ children, title }) {
  return (
    <div className="group relative flex items-center justify-center">
      <div className="mt-2">{children}</div>
      <span className="absolute left-full z-50 ml-2 hidden w-max whitespace-nowrap rounded bg-black p-1 text-xs text-white group-hover:block group-hover:opacity-100">
        {title}
      </span>
    </div>
  );
}

export default Sidebar;
