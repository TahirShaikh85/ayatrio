"use client";
import Card from "@/components/Room/Other/Card";
import Reviews from "@/components/Room/Other/Reviews";
import RoomImageList from "@/components/Room/RoomImageList";
import RoomInfo from "@/components/Room/RoomInfo";
import React, { useEffect, useState } from "react";
import ImageCaresoul from "@/components/Room/imagecaresoul";
import { useDispatch, useSelector } from "react-redux";
import {
  selectQuantity,
  updateQuantity,
} from "@/components/Features/Slices/calculationSlice";
import { setRoomData } from "@/components/Features/Slices/roomSlice";
import axios from "axios";
const RoomPage = ({ params }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantity);
  let url = "http://3.224.109.20:8080/api/getSingleProduct?id=";
  const [howMuchScrolled, setHowMuchScrolled] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getRoomData = async () => {
      try {
        const response = await axios.get(`${url}${params.id}`);
        setData(response.data);
        dispatch(setRoomData({ roomData: response.data, status: "succeeded" }));
        
        console.log("room response ", response.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
        dispatch(setRoomData({ roomData: [], status: "failed" }));
      }
    };
    getRoomData();
  }, []);
  //posting data to database
  // if (typeof window !== "undefined") {
  //   var id = localStorage.getItem("deviceId");
  //   console.log("deviceId : ", id);
  // }
  // const postUrl = "http://3.224.109.20:8080/api/cart";
  // const postRoomData = async () => {
  //   try {
  //     const postData = {
  //       deviceId: id,
  //       productId: data.productId,
  //       quantity: quantity,
  //     };

  //     const response = await axios.post(postUrl, postData);
  //     console.log("Data posted successfully:", response.data);
  //   } catch (error) {
  //     console.error("Error posting room data:", error);
  //   }
  // };

  //posting data to database

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHowMuchScrolled(window.scrollY);
      } else {
        setHowMuchScrolled(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [howMuchScrolled]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  //sending data into slice
  // useEffect(() => {
  //   dispatch(setRoomData(params.id));
  // }, [dispatch, params.id]);

  useEffect(() => {
    dispatch({ type: "FETCH_ROOM_REQUEST", payload: params.id });
  }, [dispatch, params.id]);

  return (
    <>
      <div className="container-rooms flex sm:block items-center ">
        {/* {isFilterVisible && <Header />} */}
        <div className="sm:px-[50px] px-[20px] mt-[65px]">
          <div className="flex sm:flex-row flex-col">
            <div className="sm:basis-2/3 flex flex-col  sm:flex-grow">
              <RoomImageList images={data.images} />
              <ImageCaresoul />
              {/* <div className="sm:hidden flex">
                <Card/>
              </div> */}
              <RoomInfo data={data} />
            </div>
            <div className="sm:basis-1/3 flex flex-col  ">
              <div className="sm:sticky flex top-12 mb-16 ml-0">
                <Card data={data} />
              </div>
            </div>
          </div>

          <Reviews data={data} />
          {/*           
            <Mobileswiper/> */}

          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default RoomPage;
