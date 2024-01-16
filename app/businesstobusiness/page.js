"use client";
import Image from "next/image";

const expertDesigners = [
  {
    id: 1,
    image: "https://design-crew.vercel.app/assets/d1-9NhTKQG6.jpg",
    name: "Charity DeLeora Ray",
    city: "Broadway, NY",
  },
  {
    id: 2,
    image: "https://design-crew.vercel.app/assets/d2-K4_tyLqN.jpg",
    name: "Scott Charles",
    city: "Chelsea, NY",
  },
  {
    id: 3,
    image: "https://design-crew.vercel.app/assets/d3-nyzQOfTy.avif",
    name: "Sherry Carlson",
    city: "Edina, MN",
  },
  {
    id: 4,
    image: "https://design-crew.vercel.app/assets/d4-1o0aWDBI.jpg",
    name: "Angel Lim",
    city: "Skokie, IL",
  },
  {
    id: 5,
    image: "https://design-crew.vercel.app/assets/d5-w2n6pQZ4.jpg",
    name: "Sarah Dover",
    city: "Providence, RI",
  },
  {
    id: 6,
    image: "https://design-crew.vercel.app/assets/d6-8VAYk23m.jpeg",
    name: "Stephanie Fong",
    city: "Son Ramon, CA",
  },
  {
    id: 7,
    image: "https://design-crew.vercel.app/assets/d7-ItFw2CTW.jpg",
    name: "Silema Bogans",
    city: "Emeryville, CA",
  },
  {
    id: 8,
    image: "https://design-crew.vercel.app/assets/d8-QmLpff5t.jpg",
    name: "Alison Metzger",
    city: "Kansas City, M.O",
  },
];

const ideasAndAdvice = [
  {
    id: 1,
    image: "https://design-crew.vercel.app/assets/p1-TQgHSmWd.jpeg",
    text: "Pillows & throws inspiration",
  },
  {
    id: 2,
    image: "https://design-crew.vercel.app/assets/p2-t0xj-wv0.jpeg",
    text: "How to choose the right upholstery fabric",
  },
  {
    id: 3,
    image: "https://design-crew.vercel.app/assets/p3-lRFBpDnl.jpeg",
    text: "How to hang your gallery art",
  },
  {
    id: 4,
    image: "https://design-crew.vercel.app/assets/p4-2BflcWg5.jpeg",
    text: "How to choose the right lighting",
  },
  {
    id: 5,
    image: "https://design-crew.vercel.app/assets/p5-ctjatfz2.jpeg",
    text: "How to decorate with color",
  },
];

const DesignServicePage = () => {
  return (
    <>
      <div>
        <div className="mt-10 sm:ml-[50px] ml-[20px] sm:mr-[50px] mr-[20px] p-10 space-y-10">
          {/* Free one on one section starts */}
          <section>
            <div>
              <Image
                src="/Businesstobusinessimg/living-room.jpg"
                width={1350}
                height={500}
                alt="living room"
                className="sm:h-[600px] object-cover"
              />
              <div className="flex p-7 sm:absolute bg-white sm:top-[425px]">
                <div className="flex flex-col space-y-3">
                  <p className="font-semibold text-xl">
                    IN STORE AT HOME VIRTUAL
                  </p>
                  <p className="font-semibold text-4xl">free one-on-one</p>
                  <p className="font-semibold text-4xl">design services</p>
                  <button className="bg-black py-2 px-3 text-white font-semibold rounded-sm">
                    request an appointment
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Free one on one section ends */}
          {/* Our services section starts */}
          <section>
            <div className="flex flex-col w-full space-y-4">
              <div className="flex justify-center">
                <h3 className="font-bold text-3xl">Our services</h3>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-5 justify-center">
                <div className="flex flex-col gap-5 md:w-1/4 border border-t-4 border-t-black p-4 shadow-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-4/6">
                      <img
                        className="p-5"
                        src="data:image/png;base64,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"
                      />
                    </div>
                    <p className="font-semibold text-xl">design chat</p>
                    <p className="font-semibold text-lg">free</p>
                    <p className="font-semibold text-lg">
                      Design question you nedd help with ASAP? Start a free
                      online chat with one of our experts.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="bg-black font-semibold py-2 px-7 rounded-sm text-white">
                      start a chat
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:w-1/4 border border-t-4 border-t-black p-4 shadow-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-4/6">
                      <img
                        className="p-5"
                        src="https://design-crew.vercel.app/assets/home-paJww6jJ.png"
                      />
                    </div>
                    <p className="font-semibold text-xl">design services</p>
                    <p className="font-semibold text-lg">free</p>
                    <p className="font-semibold text-lg">
                      From quick styling tips to home makeovers,our design
                      experts are here to help .Pick the best appointment option
                      for you:
                    </p>
                    <p className="font-semibold text-sm">In store</p>
                    <p className="font-semibold text-sm">At home</p>
                    <p className="font-semibold text-sm">Virtual</p>
                    <p className="font-semibold text-sm">
                      Note:Whether in person or virtual ,please select the
                      location thats nearest to you
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="bg-black font-semibold py-2 px-7 rounded-sm text-white">
                      start a chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Our services section ends */}
          {/* 2 divs section starts */}
          <section>
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:w-1/2 bg-lime-100 md:py-36 md:px-28 py-10 px-5">
                <div className="flex flex-col space-y-3">
                  <div>
                    <p className="font-semibold text-lg">
                      FROM OUR SOFAS TO YOURS
                    </p>
                    <p className="font-bold text-3xl">
                      our design crew loves to make you smile
                    </p>
                    <p className="font-semibold text-lg">
                      Check out this feel-good video of how our incredible
                      Design Crew team is here to help you virtually, from a
                      video call on your new WFH space to DMs on your backyard.
                    </p>
                  </div>
                  <div>
                    <button className="py-2 bg-black px-3 rounded-sm text-white font-semibold">
                      request an appointment
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:py-16 md:px-48 py-10 px-5">
                <div className="flex flex-col items-center space-y-10">
                  <div className="w-2/3">
                    <h2 className="font-bold text-5xl">
                      let us help refurnish your home
                    </h2>
                  </div>
                  {/* <div className="w-1/3">
                      <img className="items-end" src="https://design-crew.vercel.app/assets/zigzag-EtSpoOM4.png"/>
                    </div> */}
                  <div>
                    <button className="py-2 bg-black px-3 rounded-sm text-white font-semibold">
                      request an appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 2 divs section ends */}
          {/* meet our expert designer section starts */}
          <section>
            <div className="flex w-full flex-col gap-5 items-center">
              <div>
                <h2 className="font-bold text-4xl p-2">
                  meet our expert designers
                </h2>
              </div>
              <div className="flex flex-col w-full md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-3">
                {expertDesigners.map((curElement) => {
                  return (
                    <div className="flex items-center justify-between h-[350px] flex-col space-y-3 border-none rounded-sm bg-slate-200 p-4 pt-5">
                      {/* <div className="w-2/3"> */}
                      <img
                        className="h-[200px] w-[200px] object-cover rounded-full"
                        src={curElement.image}
                      />
                      {/* </div> */}
                      <div className="items-center flex flex-col">
                        <div>
                          <p className="font-bold text-xl">{curElement.name}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-lg">
                            {curElement.city}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="underline">view portfolio</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          {/* meet our expert designer section ends */}
          {/* ideas and advice section starts */}
          <section>
            <div className="flex w-full flex-col space-y-6 items-center">
              <div>
                <h2 className="font-bold text-4xl p-2">ideas and advice</h2>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-5">
                {ideasAndAdvice.map((curElement) => {
                  return (
                    <div className="flex flex-col items-start hover:underline cursor-pointer">
                      <img
                        className="h-[300px] w-[350px] object-cover object-top"
                        src={curElement.image}
                      />
                      <div className="items-center flex flex-col">
                        <div>
                          <p className="font-semibold text-xl">
                            {curElement.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="border-2 px-20 py-2 bg-transparent border-black text-black">
                read more
              </button>
            </div>
          </section>
          {/* ideas and advice section ends */}
        </div>
      </div>
    </>
  );
};

export default DesignServicePage;
