"use client";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import Imagechanger from "../Imagechanger/Imagechanger";
import Multicard from "../Imagechanger/Multicard";
// import Footer from "../Footer";
import Tabs from "./Tabs";
import Profile from "./Profile";
import Image from "../Imagechanger/Image";
import Phone from "./Phone";
import DoubleComp from "./DoubleComp";
import { useMemo } from "react";
import Trending from "./Trending";
import axios from "axios";
import Dataslider from "./Dataslider";
import NewMainSlider from "../MainSlider/NewMainSlider";

function Cards() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const closePopup = () => {
    setPopupVisible(false);
  };
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  const [trendingData, setTrendingData] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [deviceId, setDeviceId] = useState(null);
if (typeof window !== "undefined") {
  var id = localStorage.getItem("deviceId");
}
  useEffect(() => {
  // setDeviceId(id);
  const getRecommendedData = async () => {
    const response = await axios.get(`http://43.204.166.53:8080/api/getRecommendation?deviceId=${id}`);
    setRecommended(response.data);
  }
  
  getRecommendedData();
}, [])

const Partdata = (cat)=>{
  return  recommended?.products?.filter((item) => item.category === `${cat}` )
} 
  const categories = recommended?.products?.map((item) => item.category);
  let uniqueCategories = [...new Set(categories)];


  //memo hook
  const MemoizedMainSlider = useMemo(() => <NewMainSlider />, []);
  const MemoizedProfileContent = useMemo(() => <Profile />, []);
  const MemoizedTrendingProducts = useMemo(() => <Trending />, []);
  const datasliderRefs = useRef([]);
useEffect(() => {
  datasliderRefs.current = uniqueCategories.map(() => React.createRef());
}, [uniqueCategories]);
  return (
    <div className="">
      {MemoizedMainSlider}
      {MemoizedTrendingProducts}
      <div className="h-40 my-10 sm:px-[50px] px-[50px]">
        <img
          src="/images/salesoffer.jpg"
          alt=""
          className="w-full h-full object-fit"
        />
      </div>
      {/* 1st */}
      <Image />
      {uniqueCategories?.map((item, index) => {
        return (
          <Dataslider
            key={index}
            category={item}
            sliderIndex={index}
            data={Partdata(item)}
            ref={datasliderRefs.current[index]} // Pass the ref to Dataslider
          />
        );
      })}

      <Multicard />
      {/* removed for overlape sm:h-[80vh] */}
      <div className="w-full sm:px-[50px] px-[20px] py-20  h-auto">
        <Imagechanger />
      </div>
      <DoubleComp />
      {MemoizedProfileContent}
      <Tabs />
      <Phone />
    </div>
  );
}
export default Cards;
