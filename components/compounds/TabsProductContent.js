import React from "react";
import "@/components/Product/styles.css";
import Image from "next/image";

const TabsProductContent = (props) => {
  const {
    key,
    commonClasses,
    filterName,
    isFilterOpen,
    handleAll,
    handleTabClick,
    handleFilter,
    handleAllFilter,
    filterArr,
    renderFilter,
    openContent,
    handleContent,
    typeContent,
    renderTypeContent
    
  } = props;

  return (
    <div>
      <button
        onClick={() => {
          if (window.innerWidth <= 450) {
            handleAll();
            handleTabClick();
            handleAllFilter();
          } else {
            handleFilter();
            handleTabClick();
          }
        }}
        className={`
                  ${
                    isFilterOpen
                      ? `active-tabs  border border-black ${commonClasses}`
                      : `tabS  border border-white ${commonClasses}`
                  }
                  ${
                    window.innerWidth <= 450
                      ? " justify-center"
                      : " justify-between"
                  }
                  `}
      >
        {filterName} &nbsp;
        <Image
          src="/backarrow.svg"
          width={40}
          height={40}
          className={`w-6 h-6  mt-1 sm:block hidden
                ${isFilterOpen ? " rotate-90" : "-rotate-90"}
                
                `}
          alt=""
        />
      </button>
      {isFilterOpen ? (
        <div className=" bg-white flex flex-col  gap-7 py-5 rounded-2xl w-72 border h-80 overflow-y-auto px-5">
          {filterArr.map(renderFilter)}
          {filterName === "Type" ? (
            <button
              className={`text-left underline
                  ${openContent ? "hidden" : "block"}
                  `}
              onClick={handleContent}
            >
              +7 more
            </button>
          ) : null}
          {openContent ? typeContent.map(renderTypeContent) : null}

          {filterName === "Type" && openContent ? (
            <button
              onClick={handleContent}
              className={`text-left underline ${
                openContent ? "block" : "hidden"
              }`}
            >
              Less
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default TabsProductContent;
