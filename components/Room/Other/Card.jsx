"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useState, useEffect } from "react";
import Calculation from "./Calculation";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  selectQuantity,
} from "@/components/Features/Slices/calculationSlice";
import {
  selectRoomData,
  selectRoomStatus,
} from "@/components/Features/Slices/roomSlice";
import "../styles.css";
import axios from "axios";
import Image from "next/image";
// import zIndex from "@mui/material/styles/zIndex";
const Card = ({ data }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(selectQuantity);
  const router = useRouter();
  const [imgColor, setImgColor] = useState("red");
  const [widthstate, setwidthstate] = useState(0);
  const [heightstate, setheightstate] = useState(0);
  const [pricestate, setpricestate] = useState(0);
  const [coststate, setcoststate] = useState(7000);
  const [rollstate, setrollstate] = useState(0);

  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const [hidden, setHidden] = useState(false);
  const handlefunc = () => {
    setHidden(!hidden);
  };

  const priceCal = () => {
    const area = (widthstate * heightstate) / 50;
    const calculatedPrice = area * coststate;
    setpricestate(calculatedPrice.toFixed(2));
    setrollstate(area.toFixed(2));
  };
  useEffect(() => {
    priceCal();
  }, [widthstate, heightstate, coststate]);

  const colorSep = data?.colors?.[0]?.split(",");

  const roomData = useSelector(selectRoomData);
  const roomStatus = useSelector(selectRoomStatus);
  //posting data to database
  if (typeof window !== "undefined") {
    var id = localStorage.getItem("deviceId");
    console.log("deviceId : ", id);
  }
  const postUrl = "http://3.224.109.20:8080/api/cart";
  const postRoomData = async () => {
    try {
      console.log("Posting room data:", {
        deviceId: id,
        productId: roomData._id,
        quantity: quantity,
      });

      const postData = {
        deviceId: id,
        productId: roomData._id,
        quantity: quantity,
      };

      const response = await axios.post(postUrl, postData);

      console.log("Server Response:", response);

      console.log("Data posted successfully:", postData);
    } catch (error) {
      console.error("Error posting room data:", error);
    }
  };

  const handleClickDB = async () => {
    try {
      // Validate quantity, productId, and deviceId
      if (quantity <= 0) {
        console.error("Invalid quantity");
        return;
      }

      if (!roomData.productId) {
        console.error("Invalid productId");
        return;
      }

      if (!id) {
        console.error("Invalid deviceId");
        return;
      }

      // Post data to the database
      await postRoomData();

      // Redirect to the checkout page
    } catch (error) {
      console.error("Error handling click:", error);
    }
  };
  //posting data to database

  const handleClicks = () => {
    router.push("/checkout");
  };
  return (
    <>
      {/* texts */}

      <div className="flex justify-start gap-4 sm:w-[28vw]  w-[80vw] sm:ml-10 ml-0">
        <div className=" mt-5  prefence-text">
          <div className="share-btn flex gap-x-4 text-sm justify-end">
            <div className="share flex items-center">
              <Image
                src="/rooms/share-icon.svg"
                width={20}
                height={20}
                alt="share"
                className="text-xs"
                style={{ fontSize: "18px" }}
              />
              <span className="ml-1 underline sm:text-sm text-sm   tracking-[.012rem]  sm:font-normal">
                Share
              </span>
            </div>
            <div className="save flex items-center">
              <Image
                src="/rooms/favourite-icon.svg"
                width={20}
                height={20}
                alt="favourite"
                className="text-xs"
                style={{ fontSize: "18px" }}
              />
              <span className="ml-1 underline sm:text-sm text-sm   tracking-[.012rem]  sm:font-normal">
                Save
              </span>
            </div>
          </div>

          <div className="textHolders flex flex-col ">
            <h1 className="text-2xl mt-5 font-bold mb-2">
              {data?.productTitle}
            </h1>
            <h3 className="mb-2 font-semibold">
              Collection:{data?.collectionName}
            </h3>
            <h3 className="mb-4 font-semibold">
              Pattern Number: {data?.patternNumber}
            </h3>
            <div className="price">
              <h2 className="font-bold mb-1">
                MRP: ₹{data?.perUnitPrice}/roll
              </h2>
              {/* taking quantity as input */}
              <div>
                <label htmlFor="Quantity">Quantity: &nbsp;</label>
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value, 10);
                    dispatch(updateQuantity(isNaN(newValue) ? 0 : newValue));
                  }}
                  className=" outline"
                />
              </div>
              <h5 className="">incl. Of taxes</h5>
              <h4>Also Includes Taxes</h4>
            </div>
          </div>

          {/* color-container */}
          <div className="colorContainer flex flex-col mt-4 sm:w-auto w-[80vw]">
            <h1 className="mb-2 font-bold">Other Colorways</h1>
            <div className="colors flex gap-3">
              {colorSep?.map((color, index) => (
                <div
                  key={index}
                  className={`
                    w-[50px]
                    h-[50px]
                    border-2
                    border-black
                    text-gray-900
                    text-center 
                    text-xs
                    flex 
                    justify-center
                    items-center
                    `}
                  style={{
                    backgroundColor: color,
                  }}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>

          {/* calculations */}
          <div className="border border-gray-300 w-[100%] rounded-xl mt-2 pt-4 pb-4 sm:pl-3">
            <div className="flex items-center">
              <div className="pl-3">
                <Calculation priceData={data} />
              </div>
            </div>

            <hr />
            <div className="flex items-center pt-3">
              <div>
                <Image
                  src="/rooms/truck-delivery-icon.svg"
                  width={25}
                  height={25}
                  alt="delivery"
                />
              </div>
              <div className="pl-3">Delivery</div>
            </div>
            <div className="pl-60 -ml-3 -mt-1">
              {!visible ? (
                <div className="mt-1 sm:mr-6 cursor-pointer">
                  <Image
                    src="/rooms/arrow-circle-right-icon.svg"
                    width={25}
                    height={25}
                    alt="arrow right"
                    onClick={handleClick}
                  />
                </div>
              ) : (
                <div className="mt-1 mr-6 cursor-pointer">
                  <Image
                    src="/rooms/arrow-circle-down.svg"
                    width={25}
                    height={25}
                    alt="arrow down"
                    onClick={handleClick}
                  />
                </div>
              )}
            </div>
            <div className="pb-3 text-gray-600 pl-8 -mt-4">
              Check availability
            </div>
            {visible && (
              <div>
                <div className="pl-7">Enter pincode:</div>
                <input
                  type="number"
                  name="pincode"
                  value=""
                  className="border border-black ml-8 mb-2"
                />
              </div>
            )}
            <hr />
            <div className="flex pt-3">
              <div className="sm:pr-3">
                <Image
                  src="/rooms/store-icon.svg"
                  width={25}
                  height={25}
                  alt="store"
                />
              </div>
              <div className="pl-3">In-store</div>
            </div>
            <div className="pl-60 -ml-3 -mt-1">
              {!hidden ? (
                <div className="mt-1 mr-6 cursor-pointer">
                  <Image
                    src="/rooms/arrow-circle-right-icon.svg"
                    width={25}
                    height={25}
                    alt="arrow right"
                    onClick={handlefunc}
                  />
                </div>
              ) : (
                <div className="mt-1 mr-6 cursor-pointer">
                  <Image
                    src="/rooms/arrow-circle-down.svg"
                    width={25}
                    height={25}
                    alt="arrow down"
                    onClick={handlefunc}
                  />
                </div>
              )}{" "}
            </div>
            <div className="text-gray-600 pl-9 -mt-4">Check in-store stock</div>
            {hidden && (
              <div>
                <div className="pl-7">Enter city:</div>
                <input
                  type="text"
                  name="city"
                  value=""
                  className="border border-black ml-8 mb-2"
                />
              </div>
            )}
          </div>

          {/* //buttons */}
          <div className="buttons mt-4 sm:w-auto w-[100%] sm:block flex flex-col items-center justify-center">
            <div className="guestCheckout ">
              <button
                onClick={() => {
                  handleClickDB();
                  {
                    roomStatus === "succeeded" &&
                      toast.success("Succesfully added", {
                        toastId: "success1",
                      });
                  }
                }}
                className="bg-black text-white sm:w-80 w-40 sm:h-16 h-8 rounded-full hover:bg-gray-900 transition duration-300"
              >
                Add To Bag
              </button>
            </div>

            <Link
              href={{
                pathname: "/checkout",
                query: {
                  search: "rooms",
                },
              }}
              className="memberCheckout my-4 flex items-center justify-center"
            >
              <button className="bg-black text-white sm:w-80 w-40 sm:h-16 h-8 rounded-full hover:bg-gray-900 transition duration-300">
                Buy Now
              </button>
            </Link>

            {/* <div className="guestCheckout ">
              <button
                onClick={handleClicks}
                className="bg-black mt-4 text-white sm:w-80 w-40 sm:h-16 h-8 rounded-full hover:bg-gray-900 transition duration-300"
              >
                Buy Now
              </button>
            </div> */}
            <div className="memberCheckout mt-4">
              <button className="border-2 border-neutral-300 text-black sm:w-80 w-40 sm:h-16 h-8 rounded-full hover:bg-gray-900 transition duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          newestOnTop={true}
          theme="light"
          style={{ zIndex: "9999999999999" }}
        />
      </div>
    </>
  );
};

export default Card;
