import { useState } from "react";
import backSpaceIcon from "../assets/asset 0.svg";

function MainMenu({ navItems }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section role="main" className="flex flex-1 flex-col gap-2 pl-7 pt-5">
      <Breadcrumb />
      <MenuSection
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
        navItems={navItems}
      />
    </section>
  );
}

function Breadcrumb() {
  return (
    <div className="flex flex-col text-white">
      <div className="flex items-center">
        <span>
          <img src={backSpaceIcon} alt="Back Space" />
        </span>
        <label className="ml-4 text-xs uppercase hover:font-semibold">
          MultiPlayer
        </label>
        <span className="mx-2">/</span>
      </div>
      <label className="text-3xl font-medium uppercase">QuickMatch</label>
    </div>
  );
}

function MenuSection({ hoveredItem, setHoveredItem, navItems }) {
  return (
    <section className="mt-12 flex items-start justify-start">
      <nav className="h-[61.5%] w-72 overflow-y-auto text-xs uppercase">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative">
              <hr className="rounded border-gray-700 transition-colors duration-200 group-hover:border-white" />
              <label
                className={`block cursor-pointer px-2 py-3 font-semibold transition-colors duration-200 group-hover:bg-white group-hover:text-black ${
                  [1, 2, 3].includes(index + 1)
                    ? "text-orange-500"
                    : "text-white"
                }`}
              >
                {item.label}
              </label>
            </div>
          </div>
        ))}
      </nav>

      <article className="ml-9 w-[500px]">
        {hoveredItem && (
          <div>
            <img src={hoveredItem.image} alt={hoveredItem.label} />
            <h2 className="mt-4 text-xl font-semibold">{hoveredItem.label}</h2>
            <p className="mt-2 text-sm text-gray-300">
              {hoveredItem.description}
            </p>
          </div>
        )}
      </article>
    </section>
  );
}

export default MainMenu;
