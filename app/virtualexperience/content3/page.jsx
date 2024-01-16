"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
const Content3 = () => {
  const router = useRouter();
  const prevHandler = () => {
    router.push("/virtualexperience/content2");
  };
  const donehandler = () => {
    router.push("/cart");
  };

  const [selectedPage, setSelectedPage] = useState("content6");

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const [selectedActivity, setSelectedActivity] = useState({});

  const handleClick = (index) => {
    setSelectedActivity((prevSelectedActivities) => {
      const updatedSelectedActivities = { ...prevSelectedActivities };
      updatedSelectedActivities[index] = !prevSelectedActivities[index];
      return updatedSelectedActivities;
    });
  };

  return (
    <div className=" py-4 w-full h-full bg-[#f4e3dd]  text-sm">
      {/* <Header /> */}
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />
      <div className="relative container-tikes flex sm:flex-row flex-col  items-center sm:gap-10 gap-2 justify-center">
        {/* 1st */}
        <div
          onClick={() => handleClick(0)}
          className={`sm:w-1/5 w-[60%] h-40 my-20 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col
selectedActivity(index) ? "" :""}
         
         `}
        >
          {selectedActivity[0] && (
            <div className="overlay  absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
          )}
          <div className="w-6 h-20 bg-orange-400 "></div>
          <div className="flex items-center gap-2">
            <Image
              src="/up-arrow-svgrepo-com.svg"
              alt="arrow"
              width={10}
              height={10}
              className=" -rotate-90"
            />
            3" -4"{" "}
            <Image
              src="/up-arrow-svgrepo-com.svg"
              alt="arrow"
              width={10}
              height={10}
              className=" rotate-90"
            />
          </div>
          <p className="absolute -bottom-5 left-0">3"-4" Widths</p>
          {selectedActivity[0] && (
            <div
              className="room-item absolute bottom-4  z-10  flex items-center opacity-50 justify-center"
              // style={{ zIndex: 10 }}
            >
              <div className="circle-container relative flex justify-center items-center">
                {/* <FaCircle size={30} color="black" className="opacity-100" />

                <TiTick
                  className="opacity-100 absolute"
                  color="white"
                  size={30}
                  style={{ opacity: 100 }}
                /> */}
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={30}
                  height={30}
                  className=" opacity-100"
                />
              </div>
            </div>
          )}
        </div>
        {/* 2 */}
        <div
          onClick={() => handleClick(1)}
          className="sm:w-1/5 w-[60%]  h-40 my-20 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col"
        >
          {selectedActivity[1] && (
            <div className="overlay  absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
          )}
          <div className="w-8 h-20 bg-orange-400"></div>
          <div className="flex items-center gap-2">
            <Image
              src="/up-arrow-svgrepo-com.svg"
              alt="arrow"
              width={10}
              height={10}
              className=" -rotate-90"
            />
            5"- 6"{" "}
            <Image
              src="/up-arrow-svgrepo-com.svg"
              alt="arrow"
              width={10}
              height={10}
              className=" rotate-90"
            />
          </div>
          <p className="absolute -bottom-5 left-0">5"-6" Widths</p>
          {/* <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" /> */}
          {selectedActivity[1] && (
            <div
              className="room-item absolute bottom-4  z-10  flex items-center opacity-50 justify-center"
              // style={{ zIndex: 10 }}
            >
              <div className="circle-container relative flex justify-center items-center">
              
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={30}
                  height={30}
                  className=" opacity-100"
                />
              </div>
            </div>
          )}
        </div>

        {/* 3 */}
        <div
          onClick={() => handleClick(2)}
          className="sm:w-1/5 w-[60%]  h-40 my-20 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col"
        >
          {selectedActivity[2] && (
            <div className="overlay  absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
          )}
          <div className="w-10 h-20 bg-orange-400"></div>
          <div className="flex items-center gap-2">
            <Image
              src="/up-arrow-svgrepo-com.svg"
              alt="arrow"
              width={10}
              height={10}
              className=" -rotate-90"
            />
            7"- 9"{" "}
            <Image
              src="/up-arrow-svgrepo-com.svg"
              alt="arrow"
              width={10}
              height={10}
              className=" rotate-90"
            />
          </div>
          <p className="absolute -bottom-5 left-0">7"-9" Widths</p>
          {/* <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" /> */}

          {selectedActivity[2] && (
            <div
              className="room-item absolute bottom-4  z-10  flex items-center opacity-50 justify-center"
              // style={{ zIndex: 10 }}
            >
              <div className="circle-container relative flex justify-center items-center">
                
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={30}
                  height={30}
                  className=" opacity-100"
                />
              </div>
            </div>
          )}
        </div>
        {/* 4 */}
        <div
          onClick={() => handleClick(3)}
          className="sm:w-1/5 w-[60%]  h-40 my-20 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col"
        >
          {selectedActivity[3] && (
            <div className="overlay  absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
          )}
          <div className="flex flex-row items-center gap-1">
            <div className="w-8 h-20 bg-orange-400"></div>
            <div className="w-6 h-20 bg-orange-400"></div>
            <div className="w-10 h-20 bg-orange-400"></div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/up-arrow-svgrepo-com.svg"
              alt="arrow"
              width={10}
              height={10}
              className=" -rotate-90"
            />
            Multiple Widths{" "}
            <Image
              src="/up-arrow-svgrepo-com.svg"
              alt="arrow"
              width={10}
              height={10}
              className=" rotate-90"
            />
          </div>
          <p className="absolute -bottom-5 left-0">Multiple Widths</p>
          {/* <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" /> */}

          {selectedActivity[3] && (
            <div
              className="room-item absolute bottom-4  z-10  flex items-center opacity-50 justify-center"
              // style={{ zIndex: 10 }}
            >
              <div className="circle-container relative flex justify-center items-center">
                {/* <FaCircle size={30} color="black" className="opacity-100" />

                <TiTick
                  className="opacity-100 absolute"
                  color="white"
                  size={30}
                  style={{ opacity: 100 }}
                /> */}
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={30}
                  height={30}
                  className=" opacity-100"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-5 px-10 mt-10">
        <button
          onClick={prevHandler}
          className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white"
        >
          Previous Question
        </button>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <p>
            Products Available (728){" "}
            <span>
              {" "}
              <a href="/" className="text-underline underline">
                Skip to results
              </a>{" "}
            </span>
          </p>
          <button
            onClick={donehandler}
            className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] "
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content3;
