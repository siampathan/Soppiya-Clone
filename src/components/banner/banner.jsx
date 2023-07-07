import "./banner-style.scss";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-left">
          <div className="banner-title">
            <p>
              Imagine your <strong> website,</strong> witness the
              <strong> growth.</strong>
            </p>
          </div>
          <p className="banner-subtitle">
            Transform your business into a global success story. Dominate with
            our powerful business tools.
          </p>

          <div className="banner-btn">
            <button>Get Started Today</button>
          </div>
        </div>
        <div className="banner-right">
          <div className="banner-video">
            <video autoPlay loop muted>
              <source
                src="https://cdn.jsdelivr.net/gh/ConceptXLtd/public@main/media/soppiya_hero.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
