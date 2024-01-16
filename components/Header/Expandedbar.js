// Expandedbar.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Expandbar.css";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import search from "../../assets/icon/search.svg";
// import mainlogo from "../../assets/ayatriologo.png";

const Expandedbar = ({ searchText, onClose, onSearch }) => {
  const [searchTexte, setSearchText] = useState(searchText);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let cacheddata = JSON.parse(sessionStorage.getItem("cachedData"));

  // console.log("cached data is ", JSON.parse(cacheddata));
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cachedData = sessionStorage.getItem("cachedData");
        const cachedSearchText = sessionStorage.getItem("cachedSearchText");

        if (searchTexte !== cachedSearchText) {
          // Perform the search and update the cache
          const response = await axios.get(
            `http://43.204.166.53:8080/api/products?search=${searchTexte}`
          );
          sessionStorage.setItem("cachedData", JSON.stringify(response.data));
          sessionStorage.setItem("cachedSearchText", searchTexte);

          setData(response.data);
          console.log("search api fetched");
          console.log(response.data);
          onSearch(response.data);
        } else {
          setData(JSON.parse(cachedData));
          onSearch(JSON.parse(cachedData));
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    const timeoutId = setTimeout(() => {
      if (searchTexte) {
        fetchData();
      }
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTexte]);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const router = useRouter();
  const handleRoute = (item) => {
    router.push("/room/" + item.id);
  };
  return (
    <>
      <div className="expanded-search-box block pt-2 bg-white sm:h-310px h-full z-30 sm:w-full w-[100vw]  absolute right-0 sm:shadow-[0_350px_60px_500px_rgba(0,0,0,0.5)]">
        <div className="flex flex-row gapofsearchclose  justify-between bg-white rounded-lg w-full absolute left-0">
          <div className="logo hidden sm:block pl-2">
            <img src="/images/ayatriologo.png" className="w-44 z-30" alt="" />
          </div>
          <div className="searchDiv  flex flex-col">
            <div className="searchCon relative sm:w-[600px] w-[60vw] bg-zinc-100 p-2 rounded-none">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="search-input bg-transparent h-full sm:w-full w-[60vw] pl-10 border-0 focus:outline-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <img
                src="/search.svg"
                alt=""
                className=" search_icon_mar w-5 mx-1 my-1.5 top-[18%] left-[1%]  absolute z-10"
              />
            </div>
          </div>
          <div
            className="close text-base font-medium mr-4 pt-2.5 cursor-pointer"
            onClick={onClose}
          >
            Close
          </div>
        </div>
        <div
          className={`dropdown  pt-20 pb-6 flex flex-row justify-center gap-4 max-w-full bg-white ${
            searchTexte
              ? "sm:pl-6 pl-20 "
              : "items-center sm:pr-[12rem] pr-0 sm:pl-32 pl-20 "
          }`}
        >
          <div
            className={`items cursor-pointer sm:w-70 w-40vw  flex-col 
           
          `}
          >
            <div className="dropdown-item sm:font-medium font-base py-2 sm:text-2xl text-lg  text-slate-400">
              Popular Searches
            </div>
            <div className="dropdown-item sm:font-medium font-base py-2 sm:text-xl  text-lg whitespace-nowrap">
              Engineering Flooring
            </div>
            <div className="dropdown-item sm:font-medium font-base py-2 sm:text-xl  text-lg whitespace-nowrap">
              Grass Flooring
            </div>
            <div className="dropdown-item sm:font-medium font-base py-2 sm:text-xl  text-lg whitespace-nowrap">
              Wallpaper for Home
            </div>
            <div className="dropdown-item sm:font-medium font-base py-2 sm:text-xl  text-lg whitespace-nowrap">
              Vinyl
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6 ml-32 mt-3">
            {(!cacheddata && !data) || isLoading ? (
              <p className="flex justify-center items-center">
                No results found
              </p>
            ) : (
              (data && data.length > 0
                ? data
                : cacheddata && cacheddata.length > 0
                ? cacheddata
                : []
              ).map((item) => (
                <div
                  key={item.id}
                  className="col-span-1"
                  onClick={() => handleRoute(item)}
                >
                  <div className="">
                    <Image
                      src={item.images[0]}
                      width={200}
                      height={200}
                      alt="Product"
                    />
                  </div>
                  <div>{item.category}</div>
                  <div>{item.collectionName}</div>
                  <div>{item.totalPrice}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expandedbar;
