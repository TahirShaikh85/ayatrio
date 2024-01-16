"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dataTiles } from "@/Model/data";
import Sidebar from "@/components/sidebar";
const Content1 = () => {
  const router = useRouter();
  const prevHandler = () => {
    router.push("/virtualexperience/budget");
  };
  const nextHandler = () => {
    router.push("/virtualexperience/content2");
  };
  const [selectedPage, setSelectedPage] = useState("content4");

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const [selectedActivity, setSelectedActivity] = useState({});
  const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);

  const handleSelect = () => {
    setShowCircle(!showCircle);
  };
  const handleClick = (roomId) => {
    setSelectedActivity((prevSelectedRooms) => {
      const updatedSelectedRooms = {
        ...prevSelectedRooms,
        [roomId]: !prevSelectedRooms[roomId],
      };
      return updatedSelectedRooms;
    });
    setShowCircle(!showCircle);
    setShowbuttoncontent(!showbuttoncontent);
  };

  // const [selected, setSelected] = useState(null);
  // const handleImageClick = (image) => {
  //   setSelected(image === selected ? null : image);
  // };
  return (
    <div className=" py-4 w-full h-full bg-[#f4e3dd] text-sm ">
      {/* <Header /> */}
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />

      <div className="card-container flex flex-row justify-center  gap-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1  my-0 mx-0 ">
          {dataTiles.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ borderRadius: "1rem" }}
                onClick={() => {
                  handleClick(item.id);
                  handleSelect();
                }}
                className={`object-cover  w-full h-full block p-1
                ${
                  selectedActivity[item.id]
                    ? " overlay z-10 black opacity-100"
                    : ""
                }
               ${selectedActivity[item.id] ? " border-2 border-red-500 " : ""}
              `}
              />
              <h3
                className={` p-1 rounded-sm 
              ${
                selectedActivity[item.id]
                  ? "font-semibold text-white absolute left-2 bottom-2 bg-transparent"
                  : "bg-white absolute right-1 bottom-1"
              }
              `}
              >
                {item.title}
              </h3>

              {selectedActivity[item.id] && (
                <div
                  className="room-item absolute top-2 right-2 z-10  flex items-center opacity-50 justify-center"
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
          ))}
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
            onClick={nextHandler}
            className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] "
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content1;
