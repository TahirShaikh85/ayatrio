import React, { useState, useEffect } from "react";
import "./popup.css";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setSelectedcomItems1,
  setSelectedcomItems2,
  setSelectedcomItems3,
} from "../Features/Slices/selectedItemsSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
SwiperCore.use([Autoplay, Navigation]);
// import {
//   recomendProduct,
//   recomendationLoader,
// } from "../../Features/Slices/recommendationSlice";

function App() {
  const [fetchedCategories, setFetchedCategories] = useState(null);
  const [fetchCities, setFetchedCities] = useState(null);
  const [fetchHobbies, setFetchedHobbies] = useState(null);
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `http://3.224.109.20:8080/api/categories`
      );
      setFetchedCategories(response.data[0].categories);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
  console.log(fetchedCategories);
  const fetchCitiesAndHobbies = async () => {
    try {
      const response = await axios.get(
        `http://3.224.109.20:8080/api/citiesAndHobbies`
      );
      setFetchedCities(response.data[0].cities);
      setFetchedHobbies(response.data[0].hobbies);
    } catch (error) {
      console.error("Error fetching cities and hobbies:", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(fetchedCategories);
  const [openPopUp1, setOpenPopUp1] = useState(true);
  const [openPopUp2, setOpenPopUp2] = useState(false);
  const [openPopUp3, setOpenPopUp3] = useState(false);

  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [selectedItems3, setSelectedItems3] = useState([]);

  const handleNext = () => {
    // call backend api for fetching cities and hobbies
    fetchCitiesAndHobbies();
    setOpenPopUp1(false);
    setOpenPopUp2(true);
  };

  // const resetPopups = () => {
  //   setOpenPopUp1(true);
  //   setOpenPopUp2(false);
  //   setOpenPopUp3(false);
  // };

  const goTo = () => {
    setOpenPopUp3(true);
    setOpenPopUp2(false);
  };

  const goTo2 = () => {
    setOpenPopUp3(false);
    setOpenPopUp2(true);
  };

  const toggleItemSelection1 = (label, parentCategory) => {
    const isSelected = selectedItems1.some(
      (item) => item.label === label && item.parentCategory === parentCategory
    );

    setSelectedItems1((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter(
            (item) =>
              !(item.label === label && item.parentCategory === parentCategory)
          )
        : [...prevSelectedItems, { label, parentCategory }]
    );

    dispatch(setSelectedcomItems1({ items1: selectedItems1 }));
  };

  const toggleItemSelection2 = (label) => {
    const isSelected = selectedItems2.includes(label);
    setSelectedItems2((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== label)
        : [...prevSelectedItems, label]
    );

    dispatch(setSelectedcomItems2({ items2: selectedItems2 }));
  };

  const toggleItemSelection3 = (label) => {
    const isSelected = selectedItems3.includes(label);
    setSelectedItems3((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== label)
        : [...prevSelectedItems, label]
    );
    dispatch(setSelectedcomItems3({ items3: selectedItems3 }));
  };

  useEffect(() => {
    document.body.style.overflow =
      openPopUp1 || openPopUp2 || openPopUp3 ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openPopUp1, openPopUp2, openPopUp3]);

  function segregateData(data) {
    const segregatedData = {};

    // Iterate through the data array
    data.forEach((item) => {
      const parentCategory = item.parentCategory;

      // If the parent category doesn't exist in the segregatedData, create an array for it
      if (!segregatedData[parentCategory]) {
        segregatedData[parentCategory] = [];
      }

      // Add the current item to the array corresponding to its parent category
      segregatedData[parentCategory].push(item.label.name);
    });

    return segregatedData;
  }

  const selectedCategoriesData = segregateData(selectedItems1);

  const convertToPreferencesSchema = (categories, cities, hobbies) => {
    const preferences = {
      preferredCities: [],
      preferredHobbies: [],
      preferredCategories: [],
    };

    // Convert hobbies data
    preferences.preferredHobbies = hobbies.map((hobby) => hobby.name);

    // convert cities data
    preferences.preferredCities = cities.map((city) => city.name);

    // Convert categories data
    for (const categoryName in categories) {
      const category = {
        name: categoryName,
        subcategories: categories[categoryName],
      };

      preferences.preferredCategories.push(category);
    }

    return preferences;
  };

  const preferencesDataToSendToBackend = convertToPreferencesSchema(
    selectedCategoriesData,
    selectedItems2,
    selectedItems3
  );

  const done = async () => {
    setOpenPopUp3(false);
    setOpenPopUp2(false);
    setOpenPopUp1(false);
    localStorage.setItem("popUp", "true");

    try {
      const response = await axios.post(
        `http://3.224.109.20:8080/api/preferences`,
        {
          deviceId: localStorage.getItem("deviceid"),
          userPreferredCities: preferencesDataToSendToBackend.preferredCities,
          userPreferredHobbies: preferencesDataToSendToBackend.preferredHobbies,
          userPreferredCategories:
            preferencesDataToSendToBackend.preferredCategories,
        }
      );
      console.log("tahir", preferencesDataToSendToBackend.preferredCategories);

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error during request setup:", error.message);
      }
    }
  };

  const [isMinItemsSelected, setIsMinItemsSelected] = useState(false);

  // Update isMinItemsSelected whenever selectedItems1 changes
  // useEffect(() => {
  //   setIsMinItemsSelected(selectedItems1.length >= 5);
  // }, [selectedItems1]);

  // console.log("from selecteditems1", Items1selected);
  // console.log("from selecteditems2", Items2selected);
  // console.log("from selecteditems3", Items3selected);

  return (
    <div className="App">
      {openPopUp1 && (
        <div className="popup1 flex flex-col">
          <div className="cont1">
            <div className="flex-grow basis-4/5">
              {fetchedCategories &&
                fetchedCategories.map((category, index) => (
                  <div key={index}>
                    <p className="text">{category.name}</p>
                    <Swiper
                      className="my-swiper-slider"
                      centeredSlides={false}
                      // slidesPerView={4}
                      grabCursor={true}
                      mousewheel={false}
                      keyboard={{
                        enabled: true,
                      }}
                      // style={{
                      //   marginLeft:-15,
                      // }}
                      // If we need pagination
                      // pagination={{
                      //   el: ".swiper-pagination",
                      //   dynamicBullets: false,
                      //   clickable: true,
                      // }}
                      // If we need navigation
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      // Responsive breakpoints
                      breakpoints={{
                        // 412: {
                        //   slidesPerView: 1.5,
                        //   spaceBetween: 5,
                        // },

                        // 640: {
                        //   slidesPerView: 1.25,
                        //   spaceBetween: 5,
                        // },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 5,
                        },
                      }}
                    >
                      {category.subcategories && (
                        <div className="row">
                          {category.subcategories.map(
                            (subcategory, subIndex) => (
                              <SwiperSlide>
                                <div
                                  className={`box firstbox ${
                                    selectedItems1.some(
                                      (item) =>
                                        item.label === subcategory &&
                                        item.parentCategory === category.name
                                    )
                                      ? "selected"
                                      : ""
                                  }`}
                                  key={subIndex}
                                  onClick={() =>
                                    toggleItemSelection1(
                                      subcategory,
                                      category.name
                                    )
                                  }
                                  style={{
                                    background: `url('${subcategory.img}')`,
                                  }}
                                >
                                  <Image
                                    src="/circletick.svg"
                                    height={20}
                                    width={20}
                                    alt="tick"
                                    className={`absolute tickicon ${
                                      selectedItems1.includes(subcategory)
                                        ? "block"
                                        : "hidden"
                                    }`}
                                  />
                                  <b className="bel">{subcategory.name}</b>
                                </div>
                              </SwiperSlide>
                            )
                          )}
                        </div>
                      )}
                      {/* <div className="swiper-button-prev"></div> */}
                      <div className="swiper-pagination"></div>
                      <Image
                        src="/leftvector.svg"
                        width={30}
                        height={30}
                        alt="arrow"
                        className="swiper-button-prev sm:-translate-y-[150px] sm:-translate-x-[460px]"
                      />
                      <Image
                        src="/rightvector.svg"
                        width={30}
                        height={30}
                        alt="arrow"
                        className="swiper-button-next sm:-translate-y-[150px]"
                      />
                    </Swiper>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-[600px] bg-white p-2 pl-6 fixed-button">
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
      {openPopUp2 && (
        <div className="popup1 flex flex-col">
          <div className="cont1">
            <p className="text mb-4">Cities</p>
            <div className="grid grid-cols-3 gap-x-4  basis-4/5 flex-grow">
              {fetchCities &&
                fetchCities.map((city, index) => (
                  <React.Fragment key={index}>
                    <div
                      className={`box firstbox ${
                        selectedItems2.includes(city) ? "selected" : ""
                      }`}
                      onClick={() => toggleItemSelection2(city)}
                      style={{
                        background: `url('${city.img}')`,
                        backgroundSize: "center",
                      }}
                    >
                      <Image
                        src="/circletick.svg"
                        height={20}
                        width={20}
                        alt="close"
                        className={`absolute tickicon ${
                          selectedItems2.includes(city) ? "block" : "hidden"
                        }`}
                      />
                      <b className="bel">{city.name}</b>
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </div>
          <div className="w-[600px] bg-white p-2 pl-6 fixed-button">
            <button className="next" onClick={goTo}>
              Next
            </button>
          </div>
        </div>
      )}
      {openPopUp3 && (
        <div className="popup1 flex flex-col">
          <div className="cont1">
            <div className="head">
              <img
                src="/images/back.png"
                className="back"
                onClick={goTo2}
                alt="Back"
              />
              <p className="text">Last Step! Choose your hobbies</p>
            </div>
            {openPopUp3 && (
              <>
                <p className="text mb-4">Hobbies</p>
                <div className="grid grid-cols-3 gap-x-4 basis-4/5 flex-grow">
                  {fetchHobbies &&
                    fetchHobbies.map((hobbie, index) => (
                      <div
                        className={`box firstbox ${
                          selectedItems3.includes(hobbie) ? "selected" : ""
                        }`}
                        onClick={() => toggleItemSelection3(hobbie)}
                        style={{
                          background: `url('${hobbie.img}')`,
                          backgroundSize: "center",
                        }}
                        key={index}
                      >
                        <Image
                          src="/circletick.svg"
                          height={20}
                          width={20}
                          alt="close"
                          className={`absolute tickicon ${
                            selectedItems3.includes(hobbie) ? "block" : "hidden"
                          }`}
                        />
                        <b className="bel">{hobbie.name}</b>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
          <div className="w-[600px] bg-white p-2 pl-6 fixed-button">
            <button
              className={`next self-end mt-6 
                    ${isMinItemsSelected ? "bg-red-700" : "bg-red-200"}
                    `}
              onClick={done}
              // disabled={!isMinItemsSelected}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
