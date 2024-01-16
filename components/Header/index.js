"use client";
import React from "react";
import "./styles.css";
import SearchModal from "./MobileSearch";
import Menu from "./menu";
import { useEffect, useState } from "react";

import Expandedbar from "./Expandedbar";

import TopLoader from "../AddOn/TopLoader";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Header({ howMuchScrolled }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchEngine, SetSeacrhEngine] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  const handleLoginNav = () => {
    router.push("/login");
  };
  const handleProfileNav = () => {
    console.log("Profile");
    handleLinkClick("/profile");
  };
  const onClose = () => {
    setSearchQuery("");
    SetSeacrhEngine("");
  };
  const loginStatus =
    typeof window !== "undefined" ? localStorage.getItem("Login") : null;

  const [isLoading, setIsLoading] = useState(false);
  const handleLinkClick = (path) => {
    console.log(isLoading);
    setIsLoading(true);
    console.log(isLoading);
    setTimeout(() => {
      router.push(path);
      setIsLoading(false);
    }, 1310);
  };

  const [isModalOPen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = (event) => {
    event.stopPropagation();
    setModalOpen(false);
    onClose();
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

  return (
    <header
      className={`fixed w-full sm:bg-none  top-0 transition-all ease-in-out duration-300  z-[99999]
       ${isScrolled ? "bg-white" : "bg-white"} 
      
      
      ${isFilterVisible ? "block" : "hidden"}
      `}
    >
      {isLoading && <TopLoader />}
      {!searchQuery ? (
        <div
          className={`${
            isScrolled ? "border-b-[0.5px] border-slate-200" : ""
          }  flex flex-row justify-between items-center sm:px-[30px] px-[10px] py-0`}
        >
          <div className="sm:gap-5 gap-1 flex flex-row items-center justify-start w-1/3">
            <div className="profile-menu font-bold p-[7px] hover:bg-zinc-100 hover:rounded-full">
              <Menu />
            </div>
            {/* for only mobile search */}

            <div
              className="sm:hidden block  w-10 h-10 p-[7px]"
              onClick={handleModalOpen}
            >
              <Image
                src="/search.svg"
                alt=""
                width={20}
                height={20}
                className="header-div-icon"
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <div className="mainlogo">
              <Link href="/">
                <Image
                  onClick={() => handleLinkClick("/home")}
                  src="/images/ayatriologo.png"
                  alt="logo"
                  width={300}
                  height={40}
                  className="sm:w-44 w-44 m-2"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-end w-1/3">
            <div
              onClick={handleModalOpen}
              className="w-10 h-10 p-[7px] hover:bg-zinc-100 hover:rounded-full cursor-pointer sm:block hidden"
            >
              <Image
                src="/search.svg"
                alt=""
                className="seachbar-div2-icon absolute z-10"
                width={30}
                height={30}
              />
            </div>
            <div className="sm:block hidden w-10 h-10 p-[7px] hover:bg-zinc-100 hover:rounded-full cursor-pointer">
              <Image
                src="/like.svg"
                alt=""
                className="header-div-icon"
                width={25}
                height={25}
              />
            </div>
            <div
              className="w-10 h-10 p-[7px] hover:bg-zinc-100 hover:rounded-full cursor-pointer"
              onClick={() => handleLinkClick("/cart")}
            >
              <Image
                src="/adtocart.svg"
                alt=""
                className="header-div-icon"
                width={25}
                height={25}
              />
              <div className="cart-notification">3</div>
            </div>
            {loginStatus === "true" ? (
              <div
                className="pro flex p-[7px] hover:bg-zinc-100 hover:rounded-full whitespace-nowrap "
                onClick={handleProfileNav}
              >
                <Image
                  src="/profile.svg"
                  alt=""
                  className="header-div-icon"
                  width={25}
                  height={25}
                />
              </div>
            ) : (
              <Image
                src="/profile.svg"
                onClick={handleLoginNav}
                alt=""
                width={25}
                height={25}
                className="header-div-icon"
              />
            )}
            {/* for only mobole search */}
            {isModalOPen && (
              /* <SearchModal
                isOpen={isModalOPen}
                onClose={handleModalClose}
                onSearch={(e) =>
                  dispatch(searchProductsRequest(e.target.value))
                }
              /> */
              <Expandedbar
                searchQuery={searchQuery}
                onClose={handleModalClose}
                onSearch={handleSearchChange}
              />
            )}
          </div>
        </div>
      ) : (
        <Expandedbar
          searchQuery={searchQuery}
          onClose={onClose}
          onSearch={handleSearchChange}
        />
      )}
    </header>
  );
}
export default Header;
