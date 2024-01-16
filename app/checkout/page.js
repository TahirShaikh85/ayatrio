import Checkoutmain from "@/components/Checkoutcomp/Checkoutmain"
import Script from 'next/script';

const CheckoutPage = () => {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Checkoutmain />
    </>
  )
}

export default CheckoutPage