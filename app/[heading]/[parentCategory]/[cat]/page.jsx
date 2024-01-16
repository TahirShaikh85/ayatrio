'use client'
import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
import Products from "../../../../components/Product/Products";
// import "../../components/Product/styles.css";
// import "../../../../components/Product/styles.css"; 
import "@/components/Product/styles.css";
// import Footer from "../components/Footer/Footer";
import Measure from "@/components/Product/meausrement";
import Tabproduct from "@/components/Product/TabsProducts";
import axios from "axios";

// const hideheader=
const ProductPage = ({params}) => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("URLparameters : ", params);
  let parentCategoryVar = params.parentCategory;
  console.log("heading : ",params.heading);

useEffect(() => {
  const fetchFilteredProducts = async () => {
    try {
      // Constructing the URL dynamically based on params
      const apiUrl = `http://3.224.109.20:8080/api/products?category=${encodeURIComponent(params.heading)}&${parentCategoryVar}=${encodeURIComponent(params.cat)}`;
      
      // Fetch products using the dynamically constructed URL
      const response = await axios.get(apiUrl);

      // Handle the fetched products as needed
      console.log("Filtered products:", response.data);
      setFilteredProducts(response.data); // Save the filtered products in state
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };  
  fetchFilteredProducts();
}
, [params.parentCategory, params.cat]);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFilterVisible(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* {isFilterVisible && <Header />} */}
      <Products filteredProducts={filteredProducts} />
      <Tabproduct filteredProducts={filteredProducts} heading={params.heading}/>
      <Measure filteredProducts={filteredProducts}/>
      {/* <Footer /> */}
    </div>
  );
};

export default ProductPage;
