import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer/Footer";
import FAQSwiper from "../../../components/FAQSwiper/FAQSwiper";

const mainGridData = [
  {
    image:
      "https://www.ikea.com/images/34/90/34905ba1cb5d99ed8e357c93b0a09af8.png?f=l",
    text: "Returns, Guarantees & Complaints",
  },
  {
    image:
      "https://www.ikea.com/images/82/f5/82f527203d788f64e872bf40d2228f6e.png?f=l",
    text: "Deliveries, Orders, Assembly & Services",
  },
  {
    image:
      "https://www.ikea.com/images/22/9b/229b71fcd4cf4a232cddadd557c5c4ff.png?f=l",
    text: "Spare parts",
  },
  {
    image:
      "https://www.ikea.com/images/cd/88/cd8874e3b2fd6d34a22752617521eb24.png?f=l",
    text: "Questions & Help regarding Products",
  },
  {
    image:
      "https://www.ikea.com/images/79/70/7970eabb14bf7ab32978a85b4df243ac.png?f=l",
    text: "AYATRIO profile, AYATRIO Family, AYATRIO for Business",
  },
  {
    image:
      "https://www.ikea.com/images/0a/77/0a770f6ec4406789a12456e3bad2caff.png?f=l",
    text: "Click & Collect",
  },
  {
    image:
      "https://www.ikea.com/images/63/0f/630f4a513f328e48b89ed67a7f1b2cc5.png?f=l",
    text: "General Information",
  },
  {
    image:
      "https://www.ikea.com/images/7b/74/7b7456e157904dde81cb860afe0192bf.png?f=l",
    text: "Availability of Goods",
  },
];

const questionAndAnswers = [
  {
    question:
      "I'm trying to complete the order placement in your website and end up with an error. How can this be solved for?",
    answer:
      "The error you are facing could likely be because of stock availability on pin code not being serviceable. Please reach out to us via chat or call us at 1800 419 4532 for more help.",
  },
  {
    question:
      "When can I expect the refund for my online order that was cancelled?",
    answer:
      "The refund timeline for an Online order is 7-14 business days from the date of refund issued.",
  },
  {
    question: "Can I cancel the order once placed, is the refund immediate?",
    answer:
      "One can cancel the order via the link received on the order confirmation. Alternatively, you can connect with us on via Chat or call us on the Toll-free number 1800 419 4532 for further assistance.",
  },
  {
    question:
      "I received articles that arrived in a damaged condition, how can I solve it?",
    answer:
      "You can fill this form so our team can help you with the return process. We will get back to you in 48-72 hrs. after filling up the form. https://www.AYATRIO.com/in/en/customer-service/returns-pubb98c97b0",
  },
  {
    question:
      "I have an issue with my existing order and wish to return few articles. How is it possible?",
    answer:
      "You can fill out this form so our team can help you with the return process. We will get back to you in 48-72 hrs. after filling up the form. Return form",
  },
  {
    question: "Do you have a guarantee on Mattresses?",
    answer:
      "We offer a 'Love it, Exchange It policy for mattresses' wherein the customer gets to try the mattress for a minimum of 30 days. In case they wish to return we will only exchange the mattress once during this 90-day period. For more information please click on: https://www.AYATRIO.com/customer-service/returns-claims/return-policy/",
  },
  {
    question:
      "I raised a complaint regarding the exchange/refund. Where can I find the status?",
    answer:
      "Our team communicates a reference number communicated via Email or when you contact us. Please reach the customer support team for the latest update on your complaint by dialling 1800 415 4532",
  },
  {
    question: "Can I return the items I bought online at one of the stores?",
    answer:
      "Yes, the articles bought online or through click and collect can be returned even at the stores. We suggest you carry the invoice along as it helps the processing easier. The return is possible if the place of delivery/pickup is in the same city where the store is located.",
  },
  {
    question:
      "I received the package which was delivered by a third party service provider. There are issues related to damage/missing articles who can I contact?",
    answer:
      "In this situation, the respective third party service provider would be the appropriate team to support you further. However, if the issue remains unresolved you can contact our team via chat/phone or email for better help.",
  },
  {
    question:
      "What happens if there is an issue with my Assembly service provided?",
    answer:
      "If a problem occurs with your Assembly (done by AYATRIO India) please reach us via chat or call us at 1800-419-4532 or chat/email for resolution. Kindly share your receipt and order number available.",
  },
  {
    question:
      "If screws (missing spares) are missing in the package, can you send them to me?",
    answer:
      "If a problem occurs then please chat or call the AYATRIO Contact Centre at 1800-419-4532 for resolution. Our team can book a spare on your behalf free of cost, these need to be collected from the store within 48 hrs. of booking.",
  },
  {
    question:
      "The assembly instructions are missing from the package. Where can I find it?",
    answer:
      "Assembly instructions can be found on the website on the respective product details page. Our customer support team can also share the pdf document within 24 hrs. of the complaint being lodged.",
  },
  {
    question:
      "I have issues with the Urban company assembly service completed. How can I get more help?",
    answer:
      "In case of any assembly related damages or difficulty in using the assembled articles within 30 days from the date of assembly, Urban Company will rectify them free of charge. Please contact their Customer support team via the website/app. In case of any further issues please connect with us via call/chat or email.",
  },
  {
    question:
      "I purchased an article at the store and paid through a Credit/Debit card. It was returned for a refund, when can I expect the funds to be refunded?",
    answer:
      "You can expect the refund in a maximum of 7 - business 21days (Except Rupay), and 10 - 25 business days (Rupay). Please note these timelines are subjected to the bank crediting the amount back to the customer's account.",
  },
  {
    question:
      "I paid through a Debit card/ Cash at one of your stores and have requested a return pickup. But I don't want to visit the store to collect the refund. What is the alternative?",
    answer:
      "In this case, we can proceed with the refund via a Bank transfer. Our customer support team will reach out and explain the process of submitting a Cancelled cheque.",
  },
  {
    question:
      "How long does it take for the refund to be received for an order placed online?",
    answer:
      "The refund for orders placed Online including Clock & Collect is 14 business days",
  },
  {
    question: "What is the current return policy?",
    answer:
      "Please check this link for the latest information on the current Return policy: Know more",
  },
  {
    question:
      "Can I return the articles directly to where it was shipped from?",
    answer:
      "Articles purchased at the store/online can be returned if they were delivered in the same city where the store is available. Unfortunately, customers can't return the articles to a fulfilment centre.",
  },
  {
    question:
      "I have issues with the article functionality and it was assembled by AYATRIO. How can I resolve this?",
    answer:
      "We are sorry to know about that. Please fill this form with the relevant details https://www.AYATRIO.com/in/en/customer-service/returns-pubb98c97b0 and our team will contact you within 24-48 hrs.",
  },
  {
    question: "Is there a way I can track my complaint online?",
    answer:
      "You can contact our Customer support team through call/chat or email with a complaint reference id shared and we can help you better.",
  },
  {
    question:
      "The appliance isn't working as expected. What is the solution here?",
    answer:
      "In the event that an appliance is not functioning properly, *please have the order number/invoice handy* please Contact our Customer support on: https://www.AYATRIO.com/in/en/customer-service/contact-us/ to speak with our after sales team.",
  },
  {
    question:
      "I wish to return the article post the return policy timeline. Is that possible?",
    answer:
      "We're sorry to hear that you're still having problems. If your product is outside of its guarantee period then we are unable to accept the return. More details can be found here: https://www.AYATRIO.com/in/en/customer-service/returns-pubb98c97b0",
  },
];

const FaqPage = () => {

  return (
    <div>
      {/* <Header /> */}
      <div className="mt-20 sm:px-[50px] px-[20px] space-y-10">
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
        <FAQSwiper/>
        {/* main grid section starts */}
        <section>
          <div className="flex flex-col space-y-6">
            <div className="flex font-bold text-xl">Jump to a topic:</div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2">
              {mainGridData.map((curElement) => {
                return (
                  <div className="flex flex-col space-y-1 cursor-pointer hover:underline">
                    <img src={curElement.image} alt=""/>
                    <p>{curElement.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* main grid section ends */}
        {/* FAQs start */}
        <section>
          <div className="flex flex-col space-y-7 md:w-2/3">
            <h4 className="font-bold text-xl">
              Returns, Guarantees & Complaints
            </h4>
            {questionAndAnswers.map((curElement) => {
              return (
                <div>
                  <h2 className="font-bold text-lg">{curElement.question}</h2>
                  <h3>{curElement.answer}</h3>
                </div>
              );
            })}
          </div>
        </section>
        {/* FAQs end */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FaqPage;
