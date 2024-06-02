import { useState } from "react";
import LeftSidebarIcon1 from "../assets/asset 30.svg";
import LeftSidebarIcon2 from "../assets/asset 33.svg";
import LeftSidebarIcon3 from "../assets/asset 35.svg";
import RightSidebarPhoto1 from "../assets/OnlineIcon.png";
import RightSidebarPhoto2 from "../assets/OfflineIcon.png";
import PlusIconGray from "../assets/asset 32.svg";

function RightSidebar() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(1);

  const items = [
    {
      icon1: <img src={LeftSidebarIcon1} alt="Squad Icon" />,
      label1: "SQUAD",
      icon2: (
        <img
          src={PlusIconGray}
          alt="Plus Icon"
          height={32}
          width={32}
          className="bg-black"
        />
      ),
      label2: "Squad Join",
    },
    {
      icon1: <img src={LeftSidebarIcon2} alt="Online Icon" />,
      label1: "Online",
      icon2: (
        <img src={RightSidebarPhoto1} alt="Online" height={32} width={32} />
      ),
      label2: (
        <>
          <span>MaryJain</span>
          <span>Online</span>
        </>
      ),
    },
    {
      icon1: <img src={LeftSidebarIcon3} alt="Offline Icon" />,
      label1: "Offline",
      icon2: (
        <img src={RightSidebarPhoto2} alt="Offline" height={32} width={32} />
      ),
      label2: (
        <>
          <span>420</span>
          <span>Offline</span>
        </>
      ),
    },
  ];

  return (
    <section
      className={`h-full transition-all duration-300 ease-in-out ${
        show ? "w-56 bg-[#1F2022]" : "w-16"
      }`}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {items.map((item, index) => (
        <div key={index + 1} className="mt-6">
          {show && <hr className="my-2 rounded border-gray-700" />}
          <div
            className={`flex flex-col items-start justify-start gap-1 pl-2 text-sm`}
          >
            <div className="flex w-full items-center justify-start gap-1">
              {item.icon1}
              {show && <span className="w-full">{item.label1}</span>}
            </div>
            <div
              className={`flex w-full items-center justify-start gap-1 hover:bg-white hover:text-black ${
                index !== 0 && selected === index
                  ? "border-l-3 border-l-green-700"
                  : "border-l-3 border-l-white"
              } ${selected === index ? "border-l-2 border-l-green-500" : ""}`}
              onClick={() => setSelected(index)}
            >
              {item.icon2}
              {show && (
                <label className="flex flex-1 flex-col font-medium">
                  {item.label2}
                </label>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default RightSidebar;
