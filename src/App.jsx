import React from "react";
import BackgroundImage from "./assets/asset 29.png";
import Sidebar from "./components/LeftSidebar";
import MainMenu from "./components/MainMenu";
import RightSidebar from "./components/RightSidebar";

const navItems = [
  {
    id: 1,
    label: "Large Scale Battles",
    description: "the best vehicle focused Conquest Large maps.",
    image: "src/assets/asset 29.png",
  },
  {
    id: 2,
    label: "The Battlefield",
    description:
      "Battlefield at its best. Conquest small, Rush and Obliteration, with a good balance between infantry and vehicle gameplay",
    image: "src/assets/asset 28.png",
  },
  {
    id: 3,
    label: "Close Quarters",
    description: "Smaller scale infantary focused maps and modes.",
    image: "src/assets/asset 27.png",
  },
  {
    id: 4,
    label: "Night Operations",
    description: "Engage in tactical night-time missions.",
    image: "src/assets/asset 26.png",
  },
  {
    id: 5,
    label: "Night Operations Large",
    description: "Experience large-scale night-time battles.",
    image: "src/assets/asset 25.png",
  },
  {
    id: 6,
    label: "Night Operations Infantry",
    description: "Infantry-focused night-time missions.",
    image: "src/assets/asset 24.png",
  },
  {
    id: 7,
    label: "Community Operations",
    description: "Join community-driven battles.",
    image: "src/assets/asset 23.png",
  },
  {
    id: 8,
    label: "Community Operations Large",
    description: "Participate in large-scale community operations.",
    image: "src/assets/asset 22.png",
  },
  {
    id: 9,
    label: "Community Operations Infantry",
    description: "Infantry-focused community operations.",
    image: "src/assets/asset 21.png",
  },
  {
    id: 10,
    label: "Legacy Operations Large",
    description: "Experience legacy large-scale operations.",
    image: "src/assets/asset 20.png",
  },
  {
    id: 11,
    label: "Legacy Operations",
    description: "Participate in legacy operations.",
    image: "src/assets/asset 19.png",
  },
  {
    id: 12,
    label: "Legacy Operations Infantry",
    description: "Infantry-focused legacy operations.",
    image: "src/assets/asset 18.png",
  },
  {
    id: 13,
    label: "Air Superiority",
    description: "Engage in intense air-to-air battles.",
    image: "src/assets/asset 17.png",
  },
  {
    id: 14,
    label: "Capture the Flag",
    description: "Capture the enemy's flag to win.",
    image: "src/assets/asset 16.png",
  },
  {
    id: 15,
    label: "Carrier Assault Large",
    description: "Attack or defend aircraft carriers.",
    image: "src/assets/asset 15.png",
  },
  {
    id: 16,
    label: "Carrier Assault Small",
    description: "Small-scale carrier assault missions.",
    image: "src/assets/asset 14.png",
  },
  {
    id: 17,
    label: "Chainlink",
    description: "Secure and link objectives.",
    image: "src/assets/asset 13.png",
  },
  {
    id: 18,
    label: "Conquest Large",
    description: "Capture and hold strategic points.",
    image: "src/assets/asset 12.png",
  },
  {
    id: 19,
    label: "Conquest Small",
    description: "Small-scale conquest missions.",
    image: "src/assets/asset 11.png",
  },
  {
    id: 20,
    label: "Defuse",
    description: "Destroy or defend bomb sites.",
    image: "src/assets/asset 10.png",
  },
  {
    id: 21,
    label: "Domination",
    description: "Dominate key locations.",
    image: "src/assets/asset 9.png",
  },
  {
    id: 22,
    label: "Gun Master",
    description: "Progress through various weapons.",
    image: "src/assets/asset 8.png",
  },
  {
    id: 23,
    label: "Obliteration",
    description: "Destroy enemy objectives.",
    image: "src/assets/asset 7.png",
  },
  {
    id: 24,
    label: "Rush",
    description: "Attack or defend objectives.",
    image: "src/assets/asset 6.png",
  },
  {
    id: 25,
    label: "Squad Deathmatch",
    description: "Team-based deathmatch.",
    image: "src/assets/asset 5.png",
  },
  {
    id: 26,
    label: "Squad Obliteration",
    description: "Squad-based obliteration missions.",
    image: "src/assets/asset 4.png",
  },
  {
    id: 27,
    label: "Team Deathmatch",
    description: "Classic team-based deathmatch.",
    image: "src/assets/asset 3.png",
  },
  {
    id: 28,
    label: "Commander",
    description: "Lead your team from the commander's seat.",
    image: "src/assets/asset 2.png",
  },
];

function App() {
  return (
    <main className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat blur-md"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className="relative z-50 flex h-screen text-white">
        <Sidebar />
        <MainMenu navItems={navItems} />
        <RightSidebar />
      </div>
    </main>
  );
}

export default App;
