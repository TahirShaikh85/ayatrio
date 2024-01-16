const gridData = [
  {
    image:
      "https://www.ikea.com/images/8f/43/8f43c1948aa13a642442266d4859d9af.jpg?f=s",
    text: "Energy and resources",
  },
  {
    image:
      "https://www.ikea.com/images/24/a5/24a5dca4e09d5a6b79c4f7cd7c876006.jpg?f=s",
    text: "Healthy living",
  },
  {
    image:
      "https://www.ikea.com/images/being-a-large-business-comes-with-large-responsibilities-our-449a3cba6e6180fa8c1a31149f4a9602.jpg?f=s",
    text: "Large business, large responsibilities",
  },
  {
    image:
      "https://www.ikea.com/images/tapping-into-more-ways-to-use-less-water-8e2cc4c6db46b2e4efc6fff8a981d13a.jpg?f=s",
    text: "More ways to save water",
  },
  {
    image:
      "https://www.ikea.com/images/led-lightbulb-hanging-from-a-black-cord-against-a-dark-blue--bb1e572e1de69c72e66e032369014070.jpg?f=s",
    text: "A brighter life at home with LED",
  },
  {
    image:
      "https://www.ikea.com/images/2e/9e/2e9e4b1b3d586e89c7f449938a17654e.jpg?f=s",
    text: "Less waste, more value",
  },
  {
    image:
      "https://www.ikea.com/images/00/2e/002e3a6ef6ca0d7c3d520193ca6e4d90.png?f=s",
    text: "Switch on some sustainable light",
  },
  {
    image:
      "https://www.ikea.com/images/community-engagement-3f55eb7cad9507842d35ecd80c1c210d.jpg?f=s",
    text: "Community Engagement",
  },
];

const SustainabilityPage = () => {
  return (
    <div>
      <div className="mt-20 sm:ml-[50px] ml-[20px] sm:mr-[50px] mr-[20px] p-10 space-y-10">
        {/* Being sustainable section starts */}
        <section>
          <div className="flex flex-col md:w-2/3 space-y-10">
            <div className="flex flex-col space-y-5">
              <h1 className="font-bold text-4xl">Being sustainable</h1>
              <p>
                How sustainable is AYATRIO? Well, with kitchen fronts made of
                recycled plastic bottles, taps that save on water and
                electricity, being a leading light on LED...it's clear we want
                to inspire change. Because, as the founder of AYATRIO, Ingvar
                Kamprad, once said: ‘No method is more effective than the good
                example.’
              </p>
              <p>
                That's why we work hard everyday to be that good example, and to
                help you to be too.
              </p>
            </div>
            <div>
              <p className="underline font-bold">
                Highlights from the AYATRIO Sustainability Report FY21
              </p>
              <p>
                In a challenging year, when life at home has been more important
                than ever before, we were guided by our values to quickly adapt
                to meet the new needs of many people. Ingka Group has focused
                its efforts towards supporting communities and partners along
                the value chain, reaching those most in need during the
                pandemic. Despite the challenges, the company continues to
                progress on sustainability goals whilst delivering robust
                performance, allowing for continued investments in omnichannel
                and sustainability.
              </p>
              <p>
                The new Ingka Group Annual Summary & Sustainability Report
                reveals that for the first time, the company produced more
                renewable energy than it consumed in its operations, as it
                continues to build back better.
              </p>
            </div>
          </div>
        </section>
        {/* Being sustainable section ends */}
        <hr />
        {/* main grid section starts */}
        <section>
          <div className="flex flex-col space-y-6">
            <div className="flex font-bold text-lg underline">
              AYATRIO Sustainability Report FY-21
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-7">
              {gridData.map((curElement) => {
                return (
                  <div className="flex flex-col space-y-1 cursor-pointer hover:underline">
                    <img src={curElement.image} />
                    <p className="font-bold text-xl">{curElement.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* main grid section ends */}
      </div>
    </div>
  );
};

export default SustainabilityPage;
