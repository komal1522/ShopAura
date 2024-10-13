// App.jsx or App.js
import React from 'react';
import Nevbar from './Component/Nevbar/Nevbar';
import Hero from './Component/Hero/Hero';
import Products from './Component/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProduct from './Component/TopProducts/TopProduct';
import Banner from './Component/Banner/Banner';
import Subscribe from './Component/Subscribe/Subscribe';
import Testimonials from './Component/Testimonials/Testimonials';
import Footer from './Component/Footer/Footer';
import Popup from './Component/Popus/Popup';
import Test from "./Component/Testslider"

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Nevbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProduct handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Test></Test>
      {orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />}
    </div>
  );
};

export default App;
