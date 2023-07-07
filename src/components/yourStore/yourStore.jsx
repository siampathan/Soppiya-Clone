import { useState } from "react";
import "./yourstore-style.scss";

const YourStore = () => {
  const [active, setActive] = useState("item1");

  const contentList = [
    {
      title: "Customise your store",
      subTitle:
        "Soppiya is a SaaS-based e-commerce CMS platform that allows businesses to sell online, manage inventory. ",
      vdlink:
        "https://cdn.jsdelivr.net/gh/ConceptXLtd/public@main/media/soppiya_page_builder.webm",
      link: "Online store Customize",
    },
    {
      title: "Choose the theme you want",
      subTitle:
        "Soppiya is a SaaS-based e-commerce CMS platform that allows businesses to sell online, manage inventory. ",
      vdlink:
        "https://cdn.jsdelivr.net/gh/ConceptXLtd/public@main/media/soppiya_themes.webm",
      link: "Theme store",
    },
    {
      title: "Extend feature with plugins ",
      subTitle:
        "Soppiya is a SaaS-based e-commerce CMS platform that allows businesses to sell online, manage inventory. ",
      vdlink:
        "https://cdn.jsdelivr.net/gh/ConceptXLtd/public@main/media/soppiya_plugins.webm",
      link: "Explore plugins",
    },
  ];

  return (
    <div className="yourstore">
      <div className="content-text">
        <p className="small-title">Build an Online Store</p>
        <p className="section-title">Your Store, youre way</p>
      </div>

      <div className="your-store-wrapper">
        <div className="your-store-video">
          <video loop muted autoPlay>
            {active === "item1" && (
              <source src={contentList[0].vdlink} type="video/webm" />
            )}
            {active === "item2" && (
              <source src={contentList[1].vdlink} type="video/webm" />
            )}
            {active === "item3" && (
              <source src={contentList[2].vdlink} type="video/webm" />
            )}
          </video>
        </div>
      </div>

      <div className="your-store-contain">
        <div className="your-store-contant">
          <div className="your-store-item">
            <div>
              <p className="medium-title">{contentList[0].title}</p>
              <p className="small-title">{contentList[0].subTitle}</p>
              <p className="link"> {contentList[0].link} </p>
            </div>
          </div>

          <div className="your-store-item">
            <p className="medium-title">{contentList[1].title}</p>
            <p className="small-title">{contentList[1].subTitle}</p>
            <p className="link"> {contentList[1].link} </p>
          </div>

          <div className="your-store-item">
            <p className="medium-title">{contentList[2].title}</p>
            <p className="small-title">{contentList[2].subTitle}</p>
            <p className="link"> {contentList[2].link} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourStore;
