import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useEffect, useState } from "react";

const SideNav = ({ selectedIndex, isSidebarActive, setIsSidebarActive }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  
  useEffect(() => {
    const handleResize = () => {
      const isMdScreen = window.innerWidth >= 768;
      setIsSidebarActive(isMdScreen);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSidebarActive]);

  return (
    <>
      <div
        className={`shadow-lg z-50  bg-white h-screen transition-all duration-300 ease-in-out ${
          isSidebarActive
            ? "translate-x-0 w-64 opacity-100"
            : "-translate-x-full w-0 opacity-0"
        } `}
      >
        <div>
          {menuList.length > 0 ? (
            menuList.map((menu, index) => (
              <h2
                onClick={() => {
                  setActiveIndex(index);
                  selectedIndex(index);
                }}
                className={`p-4 px-5 md:p-3  text-base text-gray-500  flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white   ${
                  activeIndex === index && "bg-primary text-white"
                }`}
                key={index}
              >
                <menu.icon />
                {menu.name}
              </h2>
            ))
          ) : (
            <div className="p-3 text-lg text-red-500 font-semibold text-center">
              No menu items available.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideNav;
