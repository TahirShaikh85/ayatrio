"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedActivity } from '../../../Features/store';
import "../../../components/styles/virtualexperience.css";
import Sidebar from "@/components/sidebar";
import { dataRooms } from "@/Model/data";
const Rooms = () => {
    const router = useRouter();
  // const dispatch = useDispatch();
  //   const selectedActivity = useSelector((state) => state.rooms.selectedActivity);

  const nextHandler = () => {
    if (selectedPage === "vrooms") {
      router.push("/virtualexperience/activities");
    }
  };

  const [selectedActivity, setSelectedActivity] = useState({});
  const [showCircle, setShowCircle] = useState(false);
  const [showbuttoncontent, setShowbuttoncontent] = useState(false);

  const [selectedPage, setSelectedPage] = useState("vrooms");
  //   const [isOpen,SetIsOPen]=useState(false);

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  const handleSelect = () => {
    setShowCircle(!showCircle);
  };

  // const handleClick = (roomId, roomPrice, roomTitle, roomImage) => {
  //   setSelectedActivity((prevSelectedRooms) => {
  //     // if (prevSelectedRooms.some((room) => room.id === roomId)) {
  //     //   // Remove the room if it was already selected
  //     //   return prevSelectedRooms.filter((room) => room.id !== roomId);
  //     // } else {
  //     //   // Add the room to the selected rooms
  //       return [
  //         ...prevSelectedRooms,
  //         { id: roomId, price: roomPrice, title: roomTitle, image: roomImage },
  //       ]

  //     });
  //   // Toggle the showCircle state based on the current state of the selected room
  //   setShowCircle((prevShowCircle) => !prevShowCircle);
  //   // Toggle the showbuttoncontent state based on the current state of the selected room
  //   setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);
  //   // setShowCircle(!showCircle);
  //   // setShowbuttoncontent(true);
  // };

  const handleClick = (roomId, roomPrice, roomTitle, roomImage) => {
    setSelectedActivity((prevSelectedRooms) => {
      // Check if the room is already selected
      if (prevSelectedRooms[roomId]) {
        // Deselect the room if it was already selected
        const updatedSelectedRooms = { ...prevSelectedRooms };
        delete updatedSelectedRooms[roomId];
        return updatedSelectedRooms;
      } else {
        // Select the room and add it to the selected rooms
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

    // Toggle the showCircle state based on the current state of the selected room
    setShowCircle((prevShowCircle) => !prevShowCircle);
    // Toggle the showbuttoncontent state based on the current state of the selected room
    setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);
  };

  //true

  //   const handleClick = (roomId, roomPrice, roomTitle, roomImage) => {
  //     dispatch(setSelectedActivity({
  //       ...selectedActivity,
  //       [roomId]: { id: roomId, price: roomPrice, title: roomTitle, image: roomImage },
  //     }));

  //     setShowCircle((prevShowCircle) => !prevShowCircle);
  //     setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);
  //   };
  //true

  // const handleClick = (roomId, roomPrice, roomTitle, roomImage) => {
  //   dispatch(setSelectedActivity({ roomId, roomPrice, roomTitle, roomImage }));
  //   setShowCircle((prevShowCircle) => !prevShowCircle);
  //   setShowbuttoncontent((prevShowButtonContent) => !prevShowButtonContent);
  // };

  // const handleClick = (roomId, roomPrice, roomTitle, roomImage) => {
  //   dispatch(setSelectedActivity({
  //     ...selectedActivity,
  //     [roomId]: selectedActivity[roomId]
  //       ? undefined // Deselect the room if it was already selected
  //       : { id: roomId, price: roomPrice, title: roomTitle, image: roomImage },
  //   }));

  //   // Toggle the showCircle and showbuttoncontent state
  //   setShowCircle(!showCircle);
  //   setShowbuttoncontent(!showbuttoncontent);
  // };

  const addToCart = () => {
    SetIsOPen(true);
    console.log("selectedrooms", selectedActivity);
  };

  //true
  //   const addToCart = () => {
  //     dispatch(setSelectedActivity(selectedActivity));
  //     console.log("selectedrooms", selectedActivity);
  //   };
  //true

  return (
    <div className="py-4 relative w-full h-full flex flex-col justify-center bg-[#f4e3dd]">
      {/* <Header /> */}

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

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-3 gap-y-1 mb-4 my-0 mx-2">
        {dataRooms.map((item) => (
          <div
            key={item.id}
            className=" relative  overflow-hidden m-1 aspect-w-16 aspect-h-9 group"
          >
            {/* {selectedActivity[item.id] && (
              <div className="overlay rounded-2xl absolute top-0 left-0 w-full h-full opacity-50 bg-white"></div>
            )} */}
            {/* <div className="overlay absolute inset-0 bg-black opacity-50 rounded-2xl"></div> */}

            <img
              src={item.img}
              alt={item.title}
              onClick={() => {
                handleClick(item.id, item.img, item.price, item.title);
                handleSelect();
              }}
              className={`room-item rounded-2xl object-cover w-full opactiy-100 h-full block p-1
             
            ${selectedActivity[item.id] ? " " : "overlay z-10 "}  ${
                selectedActivity[item.id] ? " border-2 border-red-500 " : ""
              }

              `}
            />

            {/* <h3
              className={` p-1 rounded-sm  absolute left-[40%] top-[40%] bg-transparent
            ${
              selectedActivity[item.id]
                ? "font-semibold text-white absolute left-2 bottom-2  bg-transparent"
                : "text-white font-semibold text-lg"
            }
            `}
            >
              {item.title}
            </h3> */}

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
              <div className="room-item absolute top-2 right-2 z-10  flex items-center opacity-50 justify-center">
                <div className="circle-container relative flex justify-center items-center">
                  {/* <FaCircle size={30} color="black" className="opacity-100" />

                  <TiTick
                    className="opacity-100 absolute"
                    color="white"
                    size={30}
                    style={{ opacity: 100 }}
                  /> */}
                  <Image src="/tick.svg" alt="tick" width={30} height={30} className=" opacity-100" />
                </div>
              </div>
            )}
            {/* {showbuttoncontent && (
              <Button onSelect={() => handleClick(item.id)} />  
            )} */}
          </div>
        ))}
      </div>
      <button
        onClick={nextHandler}
        className="rounded-2xl px-3 py-1 mb-4 text-center text-white font-bold bg-[#2F4F4F] absolute right-2 bottom-1"
      >
        Next Question
      </button>
    </div>
  );
};

export default Rooms;
