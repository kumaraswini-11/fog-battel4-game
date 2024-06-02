import { useState } from "react";
import squadIcon from "../assets/asset 30.svg";
import onlineIcon from "../assets/asset 33.svg";
import offlineIcon from "../assets/asset 35.svg";
import onlineStatusIcon from "../assets/OnlineIcon.png";
import offlineStatusIcon from "../assets/OfflineIcon.png";
import plusIcon from "../assets/asset 32.svg";

const SidebarItem = ({ show, item, selected, onClick, index }) => (
  <div className="mt-6">
    {show && <hr className="my-2 rounded border-gray-700" />}
    <div className="flex flex-col items-start justify-start gap-1 pl-2 text-sm">
      <div className="flex w-full items-center justify-start gap-1">
        {item.icon1}
        {show && <span className="w-full font-semibold">{item.label1}</span>}
      </div>
      <div
        className={`flex w-full items-center justify-start gap-1 hover:bg-white hover:text-black ${
          index === 0
            ? ""
            : selected
              ? "border-l-2 border-l-green-500"
              : "border-l-2 border-l-white"
        }`}
        onClick={onClick}
      >
        {item.icon2}
        {show && (
          <label className="flex flex-1 flex-col items-start justify-center font-medium leading-none">
            {item.label2}
          </label>
        )}
      </div>
    </div>
  </div>
);

function RightSidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const items = [
    {
      icon1: <img src={squadIcon} alt="Squad Icon" />,
      label1: "SQUAD",
      icon2: (
        <img
          src={plusIcon}
          alt="Plus Icon"
          height={32}
          width={32}
          className="bg-black"
        />
      ),
      label2: "Squad Join",
    },
    {
      icon1: <img src={onlineIcon} alt="Online Icon" />,
      label1: "Online",
      icon2: <img src={onlineStatusIcon} alt="Online" height={32} width={32} />,
      label2: (
        <>
          <span>MaryJain</span>
          <span className="text-xs text-gray-400">Online</span>
        </>
      ),
    },
    {
      icon1: <img src={offlineIcon} alt="Offline Icon" />,
      label1: "Offline",
      icon2: (
        <img src={offlineStatusIcon} alt="Offline" height={32} width={32} />
      ),
      label2: (
        <>
          <span>420</span>
          <span className="text-xs text-gray-400">Offline</span>
        </>
      ),
    },
  ];

  return (
    <section
      className={`h-full transition-all duration-300 ease-in-out ${isSidebarVisible ? "w-56 bg-[#1F2022] opacity-85" : "w-16"}`}
      onMouseOver={() => setSidebarVisible(true)}
      onMouseLeave={() => setSidebarVisible(false)}
    >
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          show={isSidebarVisible}
          item={item}
          selected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
          index={index}
        />
      ))}
    </section>
  );
}

export default RightSidebar;
