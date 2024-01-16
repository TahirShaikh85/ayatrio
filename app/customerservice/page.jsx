'use client'
import FAQ from "../../components/FAQ/FAQ";
import FAQSwiper from "../../components/FAQSwiper/FAQSwiper";
// import React from "react";
// import { useNavigate } from "react-router-dom";

import "../../components/styles/CustomerServicePage.css";
import { useRouter } from "next/navigation";
const servicesData = [
  {
    id: 1,
    image:
      "https://www.ikea.com/ext/ingkadam/m/6b1de71d2067e4/webimage-PH188791-crop001.png?f=xxs",
    text: "Home",
  },
  {
    id: 2,
    image:
      "https://www.ikea.com/ext/ingkadam/m/5eff6dba17cd5e0a/webimage-PH189426-crop001.png?f=xxs",
    text: "Services",
  },
  {
    id: 3,
    image:
      "https://www.ikea.com/ext/ingkadam/m/359516937fc35a0b/webimage-PH188794-crop001.png?f=xxs",
    text: "How to shop",
  },
  {
    id: 4,
    image:
      "https://www.ikea.com/ext/ingkadam/m/7cb5eb6036568fe0/webimage-PH188796-crop001.png?f=xxs",
    text: "FAQs",
  },
  {
    id: 5,
    image:
      "https://www.ikea.com/ext/ingkadam/m/653823675e79d329/webimage-PH186303-crop001.png?f=xxs",
    text: "Return Policy",
  },
  {
    id: 6,
    image:
      "https://www.ikea.com/ext/ingkadam/m/7a75be96e1f166f4/webimage-PH188793-crop001.png?f=xxs",
    text: "Gift Cards",
  },
  {
    id: 7,
    image:
      "https://www.ikea.com/ext/ingkadam/m/5452a1af43063195/webimage-PH188795-crop001.png?f=xxs",
    text: "Price Guarantee",
  },
  {
    id: 8,
    image:
      "https://www.ikea.com/ext/ingkadam/m/21dae79cdba26758/webimage-PH188797-crop001.png?f=xxs",
    text: "Contact us",
  },
];

const gridDataRow1 = [
  {
    heading: "Return or exchange products",
    text: "Find out all about how to exchange or return your products.",
  },
  {
    heading: "Click & Collect",
    text: "Order your favorite products online and collect it later",
  },
  {
    heading: "Missing a part",
    text: "Order fittings and spare parts",
  },
  {
    heading: "Stock availability",
    text: "Plan your shopping before buying",
  },
];

const gridDataRow2 = [
  {
    heading: "Warranty",
    text: "AYATRIO products comes with warranty",
  },
  {
    heading: "Terms and conditions",
    text: "Check all t&c's here",
  },
];

//switch statements will be better
const CustomerServicePage = () => {
  const router = useRouter();

  const handleOptionClick = (id) => {
    switch (id) {
      case 1:
        router.push("/");
        break;
      case 2:
        router.push("/customerservice/services");
        break;
      case 3:
        router.push("/customerservice/shoppinginfo");
        break;
      case 4:
        router.push("/customerservice/faq");
        break;
      case 5:
        router.push("/customerservice/returnpolicy");
        break;
      case 6:
        router.push("/customerservice/giftcards");
        break;
      case 7:
        router.push("/customerservice/priceguarantee");
        break;
      case 8:
        router.push("/customerservice/contactus");
        break;
      default:
        router.push("/");
    }
  };


  return (
    <div>
      <div className="mt-20 sm:px-[50px] px-[20px] sm:space-y-10 space-y-5 ">
        <div className="space-y-6">
          <h1 className="font-bold text-4xl">Customer Service</h1>
          <div className="service-container">
            {servicesData.map((option, id) => {
              return (
                <div
                  className="service-item hover:underline cursor-pointer"
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                >
                  <img src={option.image} alt="" />
                  <p className="text-sm">{option.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Helping you help yourself </h2>
          <p className="">
            Looking to check the status of your order? Want to return a product
            or order a spare part? We have convenient self service options which
            will let you do just that!{" "}
          </p>
        </div>
        {/* Section of grid starts */}
        <section>
          <div>
            <div className="grid-row-1">
              {gridDataRow1.map((gridItem) => {
                return (
                  <div className="bg-gray-200 py-10 px-5 border border-white text-center">
                    <h3 className="font-bold">{gridItem.heading}</h3>
                    <p>{gridItem.text}</p>
                    <p className="underline text-gray-500">Read more</p>
                  </div>
                );
              })}
            </div>
            <div className="grid-row-2">
              {gridDataRow2.map((gridItem) => {
                return (
                  <div className="bg-gray-200 py-10 px-5 border border-white text-center">
                    <h3 className="font-bold">{gridItem.heading}</h3>
                    <p>{gridItem.text}</p>
                    <p className="underline text-gray-500">Read more</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Section of grid ends */}
        {/* FAQs search bar section starts */}
        <section>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl">
                <strong>Frequently Asked Questions</strong>
              </h2>
            </div>
            <div className="flex flex-wrap w-full">
              <input
                className="w-full bg-gray-200 border border-transparent rounded-full items-center transition duration-200 ease-in-out flex relative overflow-hidden p-5"
                id="search"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
        </section>
        {/* FAQs search bar section ends */}
        <FAQSwiper />
        <FAQ />
        {/* Plan and Shop from home starts */}
        <section>
          <div className="plan-section">
            <div className="">
              <h2 className="text-2xl font-bold">Plan and shop from home</h2>
              <p>
                Are you looking for innovative solutions in furnishing your
                home? Together with our interior designers you can create your
                dream interior. Our specialists are ready to help you with
                advice, online or in-store​.
              </p>
            </div>
            <div className="">
              <img
                className="object-contain w-full h-auto "
                src="https://media.istockphoto.com/id/1331493599/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=612x612&w=0&k=20&c=ocaFzVRnDARFnANjyd6CMrwAI0Ua6I0Na_MKej8IysA="
                alt=""
              />
            </div>
          </div>
        </section>
        {/* Plan and Shop from home starts */}
        {/* Three buttons section starts */}
        <section>
          <div className="three-buttons">
            <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
              Book interior design
            </button>
            <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
              Book personal shopper
            </button>
            <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
              Book kitchen planning
            </button>
          </div>
        </section>
        {/* Three buttons section ends */}
        {/* Find an AYATRIO section starts */}
        <section>
          <div className="find-section">
            <div>
              <img
                src="https://www.ikea.com/ext/ingkadam/m/314e597614cbeb4e/original/PE315126-crop003.jpg?f=xxl"
                alt=""
              />
            </div>
            <div className="bg-gray-200">
              <div className="p-7 space-y-5">
                <div>
                  <h3 className="font-bold text-xl">
                    Find an AYATRIO near you
                  </h3>
                  <p>
                    Visit us in store and get inspired. We're open and excited
                    for your visit. Browse our products, walk through our room
                    settings, and grab a bite to go.
                  </p>
                </div>
                <div>
                  <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                    find your AYATRIO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Find an AYATRIO section ends */}
        {/* Still have questions section starts */}
        <section>
          <div className="flex space-y-9 flex-col">
            <div>
              <h2 className="font-bold text-xl">
                Do you still have questions?
              </h2>
              <p className="max-w-[900px]">
                To help you the best way possible, you can now look for a
                solution in a more targeted way. If you can't find the answer,
                we will offer you the best way to get in contact with us.
              </p>
            </div>
            <div>
              <button onClick={()=>router.push('/customerservice/contactus')} className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                Contact us
              </button>
            </div>
          </div>
        </section>
        {/* Still have questions section ends */}
      </div>
    </div>
  );
};

export default CustomerServicePage;
