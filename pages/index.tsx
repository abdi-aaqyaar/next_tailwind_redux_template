import React, { useEffect } from "react";
import { getProducts } from "redux/slices/products.slice";
import { useReduxDispatch } from "hooks/useReduxHooks";
import Hero from "components/Hero/Hero";
import Header from "components/Header/Header";

const Home: React.FC = () => {
  const dispatch = useReduxDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    // <div className="w-full h-fit">
    <>
      <Header />
      {/* <Hero /> */}
    </>
    // </div>
  );
};

export default Home;
