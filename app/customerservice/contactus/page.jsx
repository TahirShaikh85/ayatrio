'use client'

import React from "react";
import { useRouter } from "next/navigation";
const storesInformation = [
  {
    storeName: "AYATRIO Store - HITEC City",
    address:
      "Raidurg, Serilingampally, Mandal, Survey no. 83/1, Plot No.25, 26, Part 29 Panmaqtha, Rangareddy, Hyderabad, 500032, Telangana, India.",
  },
  {
    storeName: "AYATRIO Store - Navi Mumbai",
    address: "Turbhe MIDC, Turbhe, Navi Mumbai, 400705, Maharashtra, India.",
  },
  {
    storeName: "AYATRIO Worli City Store",
    address:
      "Unit-1 Level 0, Unit -2 Level 1, Unit -3 Level 2, Bldg #18 & #10 Trade View, Utopia City, Pandurang Budhkar Marg, near Kamala Mills Compound, Worli, Mumbai, Maharastra, 400013",
  },
  {
    storeName: "AYATRIO Store - Nagasandra",
    address: "Manjunatha Nagar, Bagalakunte, Bengaluru, Karnataka 560073",
  },
  {
    storeName: "AYATRIO Store - R CITY",
    address:
      "R CITY Mall,  3rd and 4th Floor, North Wing, T-28I and TF-1,146 CTS No. 166/1 to 23 off village Ghatkopar, LBS Marg, Mumbai, Maharashtra - 400086",
  },
];

const ContactUsPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mt-20 sm:ml-[50px] ml-[20px] sm:mr-[50px] mr-[20px] p-10 space-y-10">
        {/* Contact us section starts */}
        <section>
          <div className="flex flex-col w-full space-y-10">
            <div className="flex flex-col md:w-2/3 gap-4">
              <h1 className="font-bold text-4xl">Contact us</h1>
              <p>
                Whether you’re looking for answers, would like to solve a
                problem, or just want to let us know how we did, you’ll find
                many ways to contact us right here.
              </p>
              <p>
                We’ll help you resolve your issues quickly and easily, getting
                you back to more important things, like relaxing on your new
                sofa.
              </p>
              <p>Take a look at our FAQs for answers to your questions.</p>
            </div>
            <div>
              <button onClick={()=>router.push('/customerservice/faq')} className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                See all FAQs
              </button>
            </div>
          </div>
        </section>
        {/* Contact us section ends */}
        <hr />
        {/* our stores grid section starts */}
        <section>
          <div className="flex flex-col w-full space-y-6">
            <div>
              <h2 className="font-bold text-xl">Our Stores</h2>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
              {storesInformation.map((curElement) => {
                return (
                  <div>
                    <h3 className="font-bold">{curElement.storeName}</h3>
                    <p>{curElement.address}</p>
                    <br />
                    <p>
                      Go to the store page for more information, such as opening
                      times and directions.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* our stores grid section ends */}
        <hr />
        {/* Chat with us section starts */}
        <section>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="font-bold text-xl">Chat with us</h3>
              <p>Available from 8 am- 10 pm</p>
            </div>
            <div>
              <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold items-start">
                Start chat
              </button>
            </div>
            <div>
              <h3 className="font-bold text-xl">Call us</h3>
              <p>1800 419 4532</p>
              <p>Available from 8 am to 10 pm</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">Email us</h3>
              <p>Mail to: customercare.india@AYATRIO.com</p>
            </div>
          </div>
        </section>
        {/* Chat with us section ends */}
      </div>
    </div>
  );
};

export default ContactUsPage;
