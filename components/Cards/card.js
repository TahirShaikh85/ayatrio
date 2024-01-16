import React from "react";
import "./styles.css";

// import StarIcon from "/svg/star-full-icon.svg";
import Carousel from "./swip";
// import rev from "/images/rev.webp";
import PopUp from "../Reviews/PopUp";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

function Card(props) {
  // console.log("i am card prop",props)
  const router = useRouter();
  // console.log("props is ", props);
  const handleImageClick = () => {
    props.setPopupVisible(true);
  };
  // let url = "http://3.224.109.20:8080/api/getSingleProduct?id="
const handleclick = (id,productId) => {
  const postTrending = async () => {
    const response = await axios.post(`http://43.204.166.53:8080/api/increment-popularity?productId=${productId}`);
    console.log("response is ",response)
  }
  postTrending();
  router.push('/room/'+id)
}
  return (
    <>
      <div
      key={props.cardkey}
        className="card m-2"
        style={{
          width: "100%",
          height: "100%",
        }}
       
      >
        <div className={`card-flex ${props.cssClass}  `} onClick={()=>handleclick(props.id,props.productId)}>
          <Carousel data={props.imgSrc} className="card-img" />
          <div className="review-icon-container   ">
            <Image
              src="/images/rev.webp"
              className="h-8 rounded-md cursor-pointer"
              onClick={handleImageClick}
              width={40}
              height={40}
              alt="Review Icon"
              
            />
          </div>
        </div>
        <div className="card-title"  >
          <div className="card-title-desc">{props.title}</div>
          <div className="card-rating">
            <img src="/svg/star-full-icon.svg" className="w-6 h-6" alt="" />

            {props.rating}
          </div>
        </div>
        <div className="card-date">{props.desc}</div>
        <div className="card-price">
          <strong>₹{props.price}</strong>
        </div>
      </div>
      {props.isPopupVisible && (
        <PopUp
          isPopupVisible={props.isPopupVisible}
          closePopup={props.closePopup}
        />
      )}
    </>
  );
}

export default Card;
