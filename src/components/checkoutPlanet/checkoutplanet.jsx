import "./checkoutplanet-style.scss";

const CheckoutPlanet = () => {
  return (
    <div className="checkoutplanet">
      <div className="checkout-item">
        <div className="item-left">
          <p className="item-title">
            The best converting checkout on the planet
          </p>

          <p className="item-subtitle">
            Whether you want to sell products down the street or around the
            world, we have all the tools you need.
          </p>
          <p className="checkout-item">Let’s get started</p>
        </div>
        <div className="item-right"></div>
      </div>

      {/* <div className="checkoutplanet-item">
        <div className="item-left">
          <p className="item-title">
            The best converting checkout on the planet
          </p>
          <p className="item-subtitle">
            Whether you want to sell products down the street or around the
            world, we have all the tools you need.
          </p>
          <p className="item-button">Let’s get started</p>
        </div>
        <div className="item-right">
          <div className="video-content">
            <video autoPlay loop muted>
              <source
                src="https://cdn.jsdelivr.net/gh/ConceptXLtd/public@main/media/soppiya_checkout.webm"
                type="video/webm"
              />
            </video>
            <h2>Video COntent</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CheckoutPlanet;
