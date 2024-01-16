"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { dataActivity } from "../../../Model/data";
import { useRouter } from "next/navigation";
// import Header from "../../Header";
import Image from "next/image";
import Sidebar from "../../../components/sidebar";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedActivity } from "../../../Features/store";
const Activities = () => {
  const router = useRouter();


  const prevHandler = () => {
    router.push("/virtualexperience/vrooms");
  };
  const nextHandler = () => {
    router.push("/virtualexperience/budget");
  };
  const [dataActivities, setDataActivities] = useState([]);
  useEffect(() => {
    const fetchActivities = async () => {
      const response = await axios.get("http://43.204.166.53:8080/api/getVE");
      console.log(response);
      setDataActivities(response.data);
    };
    fetchActivities();
  },[]);
console.log(dataActivities);
  const [selectedPage, setSelectedPage] = useState("activities");
  const [selectedActivity, setSelectedActivity] = useState({});
  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);

  const handleSelect = () => {
    setShowCircle(!showCircle);
  };

  

  const handleClick = (roomId, roomPrice, roomTitle, roomImage) => {
    setSelectedActivity((prevSelectedRooms) => {
     
      if (prevSelectedRooms[roomId]) {
        const updatedSelectedRooms = { ...prevSelectedRooms };
        delete updatedSelectedRooms[roomId];
        return updatedSelectedRooms;
      } else {
        return {
          ...prevSelectedRooms,
          [roomId]: {
            id: roomId,
            price: roomPrice,
            title: roomTitle,
            image: roomImage,
          },
        };
      }
    });

    setShowCircle((prevShowCircle) => !prevShowCircle);
    setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);
  };

  const addToCart = () => {
    SetIsOPen(true);
    console.log("selectedrooms", selectedActivity);
  };


  return (
    <div className=" py-4 relative w-full h-full flex justify-center flex-col bg-[#f4e3dd]">
      <Sidebar selectedPage={selectedPage} onSelectPage={handleSelectPage} />
      <Image
        src="/adtocart.svg"
        width={30}
        height={30}
        onClick={() => {
          addToCart();
          setShowbuttoncontent(false);
        }}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1  my-0 mx-0 ">
        {dataActivity.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ borderRadius: "1rem" }}
              onClick={() => {
                handleClick(item.id, item.img, item.price, item.title);
                handleSelect();
              }}
              className={`object-cover  w-full h-full block p-1
              ${
                selectedActivity[item.id]
                  ? " overlay z-10 black opacity-100"
                  : ""
              }  ${selectedActivity[item.id] ? "border-2 border-red-500" : ""}
              `}
            />
            <h3
              className={` p-1 rounded-sm absolute right-0 bottom-0
              ${
                selectedActivity[item.id]
                  ? "font-semibold text-white absolute left-2 bottom-2 bg-transparent"
                  : "bg-white"
              }
              `}
            >
              {item.title}
            </h3>

            {selectedActivity[item.id] && (
              <div
                className="room-item absolute top-2 right-2 z-10  flex items-center opacity-50 justify-center"
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
            {/* <Button /> */}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-5 px-10 my-4">
        <button
          onClick={prevHandler}
          className="rounded-2xl px-3 py-1 text-center text-black font-normal bg-white"
        >
          Previous Question
        </button>
        <button
          onClick={nextHandler}
          className="rounded-2xl px-3 py-1 text-center text-white font-normal bg-[#2F4F4F] "
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Activities;
