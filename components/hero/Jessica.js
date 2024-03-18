import { useEffect, useState } from "react";
import axios from "axios";

const Jessica = ({
  menus,
  setActiveNav,
  activeNav,
  shapes1,
  setCopyRightClass,
}) => {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [heroImg, setHeroImg] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
      );

      setName(res.data.user.about.name);
      setTitle(res.data.user.about.title);
      setHeroImg(res.data.user.about.avatar.url);
    }
    getData();
  });
  return (
    <div className="iknow_tm_hero">
      <div className="background_shape" />
      <div className="hero_content">
        <div className="container">
          <div className="content_inner">
            <div className="main_info">
              <div className="left">
                <span className="subtitle">I'm</span>
                <h3 className="name">{name}</h3>
                <p className="text">
                  {title}
                </p>
                <div className="iknow_tm_video">
                  <div className="video_inner">
                    <div className="circle" />
                    <h3 className="play">Play Video</h3>
                    <a
                      className="iknow_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="image">
                  <img src="/img/thumbs/47-60.jpg" alt="img" />
                  <div className="main" data-img-url={heroImg} />
                </div>
              </div>
            </div>
            <div className="main_menu">
              <ul>
                {menus.map(
                  (menu) =>
                    menu.id !== 0 && (
                      <li
                        className={activeNav === menu.href ? "active" : ""}
                        key={menu.id}
                      >
                        <img
                          className="svg"
                          src={`/img/svg/${menu.icon}.svg`}
                          alt="Svg"
                        />
                        <span>{menu.title}</span>
                        <a
                          className="iknow_tm_full_link"
                          href={`#${menu.href}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveNav(menu.href);
                            setCopyRightClass("hidden visible");
                          }}
                        />
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="simple_shapes">
        {shapes1.map((shap) => (
          <span
            key={shap.id}
            className={`${shap.classname} ${shap.animationName}`}
          >
            <img
              className="svg"
              src={`/img/svg/shapes/${shap.shapeImg}.svg`}
              alt="svg-icon"
            />
          </span>
        ))}
      </div>

    </div>
  );
};
export default Jessica;
