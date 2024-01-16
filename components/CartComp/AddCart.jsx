"use client";
// import { Delete, HeartBroken } from "@mui/icons-material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRoomData } from "../Features/Slices/roomSlice";
import { selectRoomStatus } from "../Features/Slices/roomSlice";
import { selectQuantity } from "../Features/Slices/calculationSlice";
import { setDbItems } from "../Features/Slices/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
// import Footer from "../Footer/Footer";
const AddCart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/checkout`);
  };
  const selectedItems = useSelector((state) => state.rooms.selectedActivity);
  // console.log("Cart component re-rendered");
  // const roomsData = useSelector((state) => state.roomdetails.roomData);
  const roomData = useSelector(selectRoomData);
  // console.log("roomData in cart page", roomData);
  const roomStatus = useSelector(selectRoomStatus);
  // console.log("roomstatus", roomStatus);
  // console.log("selecteditems", selectedItems);
  const quantity = useSelector(selectQuantity);
  const [cartdata, setcartdata] = useState("");
  const [cartStatus, setCartStaus] = useState("");
  // if (typeof window !== "undefined") {
  //   var id = localStorage.getItem("deviceId");
  //   // console.log("deviceId : ", id);
  // }

  const dbItems = useSelector((state) => state.cart.dbItems);

  if (typeof window !== "undefined") {
    var id = localStorage.getItem("deviceId");
    // console.log("deviceId : ", id);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setCartStaus("loading");

        // const deviceId = localStorage.getItem("deviceId");

        // if (!deviceId) {
        //   console.error("Device ID not found");
        //   setCartStaus("failed");
        //   return;
        // }

        const response = await axios.get("http://3.224.109.20:8080/api/cart", {
          // headers: {
          //   "Content-Type": "application/json",
          // },
          params: {
            deviceId: id,
          },
        });
        console.log(response);
        if (response.status !== 200) {
          throw new Error("HTTP status " + response.status);
        }
        const data = response.data; // Extract JSON from the response
        console.log("response from DB", data);

        setcartdata(data);
        console.log("response from DB", cartdata);
        setCartStaus("succeeded");
        console.log("cartStatus", cartStatus);
        dispatch(setDbItems(data));
        console.log("this is data from redux (db)", dbItems);
      } catch (error) {
        console.error("Error Fetching data from DB : ", error);

        setCartStaus("failed");
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Do something with the updated state (cartdata and cartStatus)
    console.log("Updated cartdata", cartdata);
    console.log("Updated cartStatus", cartStatus);
  }, [cartdata, cartStatus]);

  let totalPrice = 0;
  if (cartStatus === "succeeded" && cartdata) {
    totalPrice = cartdata.items.reduce(
      (total, item) => total + item.productId.totalPrice * item.quantity,
      0
    );
  }
  let quantities = 0;
  if (cartStatus === "succeeded" && cartdata) {
    quantities = cartdata.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
  // if (typeof window !== "undefined") {
  //       var id = localStorage.getItem("deviceId");
  //     }

  //delete items from DB
  const postUrl = "http://3.224.109.20:8080/api/cart";
  const postData = {
    deviceId: id,
    productId: roomData._id,
    quantity: quantity,
  };

  const handleDelete = async (itemid) => {
    try {
      const response = await axios.get("http://3.224.109.20:8080/api/cart", {
        params: {
          deviceId: id,
        },
      });

      if (response.status !== 200) {
        throw new Error("HTTP status" + response.status);
      }
      const updatedItems = response.data.items.filter(
        (item) => item._id !== itemid
      );

      setcartdata((prevstate) => ({
        ...prevstate,
        items: updatedItems,
      }));

      //update data in DB

      const responsed = await axios.post(postUrl, {
        deviceId: id,
        items: updatedItems,
      });

      console.log("Server Response:", responsed);

      console.log("Data posted successfully:", postData);
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  //delete handle function
  return (
    <div className="">
      <div className="main-cart flex justify-center sm:flex-row gap-80  items-start min-h-screen relative top-32 pb-20">
        {/* <div className="cartContainer flex flex-col sm:flex-row w-4/5 h-4/5 bg-white sm:gap-0 gap-10 sm:my-0 my-20 "> */}
        {/* getting data from redux store */}
        {/* {roomStatus === "succeeded" && ( */}
        {cartStatus === "loading" && <p>Loading...</p>}
        {cartStatus === "failed" && <p>Error loading data from DB.</p>}
        {cartStatus === "succeeded" && cartdata && (
          <div>
            <h1 className="sm:text-4xl text-2xl mb-6 font-semibold">Bag</h1>
            {cartdata.items.map((item) => (
              <div key={item._id}>
                <div className="left-cart flex-col flex sm:w-2/3 w-[90vw] pr-8">
                  <div className="bagContainer w-72">
                    <div className="cartitem flex mb-6 border-b pb-4">
                      <div className="img w-48 h-48 mr-8">
                        <Image
                          src={item.productId.images[0]}
                          className="w-full h-full object-cover rounded-md"
                          alt="Product"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="cartContent flex flex-col justify-between">
                        <div className="mainright">
                          <div className="leftContent flex flex-col">
                            <h2 className="sm:text-xl text-lg sm:font-semibold font-medium  mb-2">
                              {item.productId.productTitle}
                            </h2>
                            <h3 className="text-gray-600">
                              {item.productId.category}
                            </h3>
                            <h3 className="text-gray-600">
                              Quantity: &nbsp;{item.quantity}
                            </h3>
                          </div>
                          <div className="rightContent sm:text-xl text-lg sm:font-semibold font-medium">
                            ₹ &nbsp;{item.productId.totalPrice * item.quantity}
                          </div>
                          <div className="icons flex items-center space-x-2 mt-4">
                            <Image
                              src="/CartIcons/delete-icon.svg"
                              width={25}
                              height={25}
                              alt="delete"
                              className="hover:text-slate-500 cursor-pointer"
                              onClick={() => handleDelete(item._id)}
                            />
                            <Image
                              src="/CartIcons/broken-heart-icon.svg"
                              width={25}
                              height={25}
                              alt=""
                              className="text-red-700 hover:text-red-500 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 
this is order summary */}
        {/* {cartStatus === "loading" && <p>Loading...</p>}
        {cartStatus === "failed" && <p>Error loading data from DB.</p>}
        {cartStatus === "succeeded" && cartdata && (
          let totalPrice = cartdata.items.reduce((total, item) => total + item.productId.totalPrice * item.quantity, 0);
        )}
         */}

        {cartStatus === "loading" && <p>Loading...</p>}
        {cartStatus === "failed" && <p>Error loading data from DB.</p>}
        {cartStatus === "succeeded" && cartdata && (
          <div className="right-cart flex flex-col  sm:w-1/3 w-[80vw]">
            <h1 className="sm:text-4xl text-2xl font-semibold mb-6">
              Order Summary
            </h1>
            <div className="subtotal flex justify-between items-center mb-4">
              <div className="text-lg">Subtotal</div>
              <div className="text-lg sm:font-semibold font-medium">
                ₹ &nbsp;{totalPrice}
              </div>
            </div>
            <div className="deliveryCharges flex justify-between items-center mb-4">
              <div className="text-lg">Delivery Charges</div>
              <div className="text-lg sm:font-semibold font-medium">₹7</div>
            </div>
            <hr className="my-4" />
            <div className="total flex justify-between items-center mb-6">
              <div className="sm:text-xl text-lg sm:font-semibold font-medium">
                Total
              </div>
              <div className="sm:text-xl text-lg sm:font-semibold font-medium">
                ₹ &nbsp; {totalPrice + 7}
              </div>
            </div>
            <div>Quantity: {quantities}</div>

            {/* <div
              onClick={handleClick}
              className="guestCheckout flex items-center justify-center my-4"
            >
              {" "}
              <button className="bg-black text-white sm:w-full w-[40vw] sm:h-14 h-9 rounded-full	 hover:bg-gray-900 transition duration-300">
                Guest Checkout
              </button>
            </div> */}

            <Link
              href={{
                pathname: "/checkout",
                query: {
                  search: "cart",
                },
              }}
              className="memberCheckout my-4 flex items-center justify-center"
            >
              <button className="bg-black text-white sm:w-full w-[40vw] sm:h-14 h-9 rounded-full	 hover:bg-gray-900 transition duration-300">
              Guest Checkout
              </button>
            </Link>

            {/* <div
              onClick={handleClick}
              className="memberCheckout my-4 flex items-center justify-center"
            >
              <button className="bg-black text-white sm:w-full w-[40vw] sm:h-14 h-9 rounded-full	 hover:bg-gray-900 transition duration-300">
                Member Checkout
              </button>
            </div> */}
            <Link
              href={{
                pathname: "/checkout",
                query: {
                  search: "cart",
                },
              }}
              className="memberCheckout my-4 flex items-center justify-center"
            >
              <button className="bg-black text-white sm:w-full w-[40vw] sm:h-14 h-9 rounded-full	 hover:bg-gray-900 transition duration-300">
                Member Checkout
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* <Footer /> */}
      <div className="middle-cart">
        {Object.values(selectedItems).map((item) => (
          <div key={item.id} className="cartitem flex mb-6 border-b pb-4">
            <div className="img w-48 h-48 mr-8">
              <img
                src={item.image}
                className="w-full h-full object-cover rounded-md"
                alt={item.title}
              />
            </div>
            <div className="cartContent flex flex-col justify-between">
              <div className="mainright">
                <div className="leftContent flex flex-col">
                  <h2 className="sm:text-xl text-lg sm:font-semibold font-medium  mb-2">
                    {item.title}{" "}
                  </h2>
                  <h3 className="text-gray-600">{item.category} </h3>
                </div>
                <div className="rightContent sm:text-xl text-lg sm:font-semibold font-medium">
                  ₹{item.price}{" "}
                </div>
                <div className="icons flex items-center space-x-2 mt-4">
                  <img
                    src={Delete}
                    alt=""
                    className="w-6 h-6 hover:text-slate-500 cursor-pointer "
                  />
                  <img
                    src={HeartBroken}
                    alt=""
                    className="text-red-700 hover:text-red-500 cursor-pointer w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCart;
