import Banner from "../banner/banner";
import CheckoutPlanet from "../checkoutPlanet/checkoutplanet";
import Navbar from "../navbar/navbar";
import YourStore from "../yourStore/yourStore";
import "./home-style.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <YourStore />
      <CheckoutPlanet />
    </div>
  );
};

export default Home;
