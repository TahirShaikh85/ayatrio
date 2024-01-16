"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Cards from "../Cards";
import MobileSearchBar from "../MobileSearch";
import Filter from "../Filter";
// import ayatrio_store from "../assets/icon/ayatrio_store.svg";
import "./HomePage.css";
import PopUp from "../PopUp/PopUp";
// import { Oval } from "react-loader-spinner";
import Expandedbar from "../Header/Expandedbar";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const loader = false;
  const router = useRouter();

  // const handleLoginNav = () => {
  //   navigate("/login");
  // };
  const handleProfileNav = () => {
    console.log("Profile");
    router.push("/profile");
  };

  const onClose = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  //2nd
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFilterVisible(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const popUp = typeof window !== "undefined" ? localStorage?.getItem("popUp") : null;

  if (loader) {
    return (
      <div className="loader slider-container">
        <Oval
          height={100}
          width={100}
          color="#FF0000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="Creating your Ayatrio Experience"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isFilterHovered, setFilteredContent] = useState(null);
  const handleFilterHover = (content) => {
    setFilteredContent(content);
  };

  return (
    <>
      <div
        className={`fade-in
          
         overflow-x-hidden `}
      >
        {popUp ? null : <PopUp />}
        {isFilterVisible && (
          <>
            {/* <Header onSearchIconClick={handleSearchIconClick} /> */}
            {isSearchBarVisible && (
              <Expandedbar
                // searchText={searchText}
                onClose={onClose}
              />
            )}
            <MobileSearchBar />
          </>
        )}
        <Filter
          isFilterHovered={isFilterHovered}
          onFilterHover={handleFilterHover}
        />
        <Cards />
        {isFilterVisible && (
          <div className="fixed-ayatrio-map">
            <button
              type="button"
              className="fixed sm:hidden flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]  -bottom-3 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => router.push("/ayatrio-map")}
            >
              Map{" "}
              <img
                src="/ayatrio_store.svg"
                alt=""
                className="header-div-sStore-icon"
              />
            </button>
            <button
              type="button"
              className="fixed sm:flex hidden leading-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]  -bottom-3 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={() => router.push("/ayatrio-map")}
            >
              Near Ayatrio{" "}
              <img
                src="/ayatrio_store.svg"
                alt=""
                className="header-div-sStore-icon"
              />
            </button>
          </div>
        )}
        </div>
    </>
  );
};

export default HomePage;
