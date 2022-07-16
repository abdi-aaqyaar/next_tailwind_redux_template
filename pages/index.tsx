import React, { useEffect } from "react";
import { getProducts } from "redux/slices/products.slice";
import { useReduxDispatch } from "hooks/useReduxHooks";
import Hero from "components/Hero/Hero";
import Header from "components/Header/Header";
import Products from "components/Products/Products";
import Footer from "components/Footer/Footer";

const Home: React.FC = () => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // <div className="w-full h-fit">
  return (
    <div className="">
      <Header />
      <main
      // className="md:mx-10 mx-0"
      >
        <Hero />
        <Products />
        <Footer />
      </main>
    </div>
  );
  // </div>
};

export default Home;
