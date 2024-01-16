import React from "react";
import { content } from "./mainslide-list";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
SwiperCore.use([Autoplay, Navigation]);

export default function NewMainSlider() {
  const router = useRouter();
  const handleTab = () => {
    router.push("/room");
  };
  const[hov,setHov]=React.useState(false)
 const handleEnter=()=>{
  setHov(true);
 };
 const handleLeave=()=>{
  setHov(false);

 }
  return (
    <div>
      <Swiper
        className="swiper-slider"
        centeredSlides={true}
        slidesPerView={1}
        grabCursor={true}
        freeMode={false}
        loop={true}
        mousewheel={false}
        keyboard={{
          enabled: true,
        }}
        style={{
          marginLeft:-60,
        }}
        // Enabled autoplay mode
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // If we need pagination
        pagination={{
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true,
        }}
        // If we need navigation
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // Responsive breakpoints
        breakpoints={{
          412: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 1.25,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 1.72,
            spaceBetween: 5,
          },
        }}
      >
    {content.map((data) => (
  <SwiperSlide key={data} >
    <div className="relative group">
      <Image src={data.img} width={500} height={500} alt="Swiper" className="swiper-slide"/>
      <div className="absolute bottom-4 left-4 flex text-lg text-white">Your text</div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
       <div onMouseEnter={handleEnter}  className="cursor-pointer">        
          <div className="carcular-conui top-28 left-40  absolute rounded-full w-[30px] h-[30px]">
          <div className=" bg-white h-3 w-3 absolute rounded-full carcular-ui">
          </div>
          </div>
          </div>
           {hov &&(
             <div
              className={` flex-row z-10 mt-12 mr-64 w-40 h-48 flex items-center pb-2 bg-white cursor-pointer`}
              onClick={handleTab} onMouseLeave={handleLeave}
            >
              <div className="flex flex-row relative">        
                  <div
                    className="flex flex-col basis-3/4 w-36 flex-grow relative ml-1 mr-2.5 pr-4"
                    key={data.productId}
                  >
                    <h2 className="font-bold pt-1 pr-2">{data.productTitle}</h2>
                    <p className="font-normal pb-2">{data.productCategory}</p>
                    <p className="font-bold bg-yellow-400 h-8 w-16 pl-2 main">
                      ₹{data.price}
                    </p>
                  </div>
                <div className="absolute right-0 top-0 border-l border-gray-200 flex justify-end items-center h-full pr-1">
                  <Image
                    className="flex ml-2"
                    src="/backarrowRevarce.svg"
                    height={20}
                    width={20}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>)}        
      </div>
    </div>
  </SwiperSlide>
))}
          <div className="swiper-pagination"></div>
        {/* <div className="swiper-button-prev"></div> */}
        <Image src='/rightvector.svg' width={30} height={30} alt="arrow" className="swiper-button-next sm:-translate-y-[150px]"/>
      </Swiper>
    </div>
  );
}