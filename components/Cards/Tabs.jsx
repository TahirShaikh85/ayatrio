"use client";
import React, { useState, useEffect } from "react";
import "../MainSlider/Mainslidestyle.css";
import room from "@/public/images/room.jpg";
import work from "@/public/images/work.jpg";
import living from "@/public/images/living.jpg";
import kitchen from "@/public/images/kitchen.webp";
import "./tabs.css";
import TabImage from "./TabImage";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Tabs = () => {
  const router = useRouter();
  const handleTab = () => {
    router.push("/room");
  };

  const circled = [
    {
      top: 50,
      left: 68,
      productTitle: "Bedroom Room",
      productCategory: "Mountain view",
      price: 1900,
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [activeTab, setActiveTab] = useState("all");
  const [isSticky, setIsSticky] = useState(false);
  const tabImages = {
    all: [room, work, living, kitchen],
    bedroom: [room, room, room],
    livingroom: [living, living, living],
    kitchen: [kitchen, kitchen, kitchen],
    workspace: [work, work, work],
    outdoor: [room, living, kitchen],
    bathroom: [room, room, room],
    dining: [living, kitchen, room],
    hallway: [room, room, room],
    laundry: [work, work, work],
    accessories: [room, living, kitchen],
  };

  const tabsData = [
    { key: "all", label: "All", img: tabImages.all },
    { key: "bedroom", label: "Bedroom", img: tabImages.bedroom },
    { key: "livingroom", label: "Living Room", img: tabImages.livingroom },
    { key: "kitchen", label: "Kitchen", img: tabImages.kitchen },
    { key: "workspace", label: "Workspace", img: tabImages.workspace },
    { key: "outdoor", label: "Outdoor", img: tabImages.outdoor },
    { key: "bathroom", label: "Bathroom", img: tabImages.bathroom },
    // { key: "babychildren", label: "Baby & children room" },
    { key: "dining", label: "Dining", img: tabImages.dining },
    { key: "hallway", label: "Hallway", img: tabImages.hallway },
    { key: "laundry", label: "Laundry", img: tabImages.laundry },
    { key: "accessories", label: "Accessories", img: tabImages.accessories },
  ];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // logic for sticky


  useEffect(() => {
    const handleScroll = () => {
      const thirdDiv = document.querySelector(".classic-tabs");

      if (thirdDiv) {
        const thirdDivTop = thirdDiv.getBoundingClientRect().top;
        const elementVisible = thirdDivTop <= 0 && thirdDivTop + thirdDiv.clientHeight > 0;
        setIsSticky(elementVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="mb-20 sm:px-[50px] px-[20px] py-20 h-full">
        <div>
          <h2 className="text-xl font-bold mb-5">More ideas and inspiration</h2>
        </div>
        <div
          className={` py-2.5 bloc-tabsnone flex flex-row tabcategory ${isSticky ? 'sticky-tabcategory' : ''
            }`}
          style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {tabsData.map((tab, i) => (
            <div
              key={i}
              className={` px-5 py-2 tabS cursor-pointer
            ${activeTab === tab.key
                  ? "active-tabs  border border-black mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                  : "tabs  border border-white mr-2.5 rounded-full flex items-center justify-center bg-gray-100 whitespace-nowrap"
                }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="classic-tabs text-green-800 grid sm:grid-cols-3 grid-cols-2 gap-3 grid-rows-3">
          <TabImage
            src={tabImages[activeTab][0]}
            alt="Room"
            className="lazyloaded"
            handleTab={handleTab}
            circled={circled}
          />

          <div className="overflow-hidden relative">
            <Image
              className="h-full w-full object-cover lazyloaded"
              src={tabImages[activeTab][1]}
              alt="Room"
            />
          </div>

          <TabImage
            src={tabImages[activeTab][2]}
            alt="Room"
            handleTab={handleTab}
            circled={circled}
          />
          <div className="overflow-hidden sm:hidden block">
            <Image
              className="h-full w-full object-cover lazyloaded"
              src={work}
              alt="Room"
            />
          </div>

          <TabImage
            src={
              activeTab === "all"
                ? tabImages[activeTab][3]
                : tabImages[activeTab][0]
            }
            alt="Room"
            handleTab={handleTab}
            circled={circled}
            className="lazyloaded"
          />
          <div className="overflow-hidden">
            <Image
              className="h-full w-full object-cover lazyloaded"
              src={tabImages[activeTab][0]}
              alt="Room"
            />
          </div>
          <div className="bg-teal-100 overflow-hidden lazyloaded">
            <Image
              className="h-full w-full object-cover"
              src={tabImages[activeTab][0]}
              alt="Room"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Tabs;
