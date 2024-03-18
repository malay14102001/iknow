"use client";
import CopyRightText from "@/components/CopyRightText";
import MobileMenu from "@/components/MobileMenu";
import Shapes from "@/components/Shapes";
import { SocialIcons2 } from "@/components/SocialIcons";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { shapes2 } from "@/utility/shapes";
import { useContext, useEffect } from "react";
const JamesLayout = ({ darkLogo = true }) => {
  const { pageContent, menus, setAboutData } = useContext(context);
  useEffect(() => {
    iKnowUtilits.imgToSVG();
    iKnowUtilits.dataImage();
    setAboutData({
      img: "/img/about/3.jpg",
      name: "James Smith",
      email: "hello@james.com",
      bio: "Hi! My name is James Smith. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var menu = document.querySelector(".iknow_tm_sidebar_3");
      var WinOffset = window.pageYOffset || document.documentElement.scrollTop;

      if (WinOffset >= 100) {
        menu.classList.add("animate");
      } else {
        menu.classList.remove("animate");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", iKnowUtilits.scrollSection);
  }, []);

  return (
    <div className="iknow_tm_extra_demo">
      <span className="top_shape" />
      <div className="background_part">
        {/* Hero Shapes */}
        <Shapes shapes={shapes2} shapesClass="rounded_shapes" />
        {/* /Hero Shapes */}
      </div>
      {/* TOPBAR */}
      <div className="iknow_tm_topbar onepage">
        <div className="topbar_inner">
          <div className="logo">
            <a href="#">
              {darkLogo ? (
                <img src="/img/logo/dark.png" alt="logo" />
              ) : (
                <img src="/img/logo/light.png" alt="logo" />
              )}
            </a>
          </div>
          <div className="right">
            <SocialIcons2 />
          </div>
        </div>
      </div>
      {/* /TOPBAR */}
      {/* MOBILE MENU */}
      <MobileMenu menus={menus} />
      {/* /MOBILE MENU */}
      {/* SIDEBAR */}
      <div className="iknow_tm_sidebar_3">
        <div className="inner">
          <div className="image">
            <div className="main" data-img-url="/img/about/3.jpg" />
          </div>
          <div className="menu scrollable">
            <ul className="anchor_nav">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <img
                    className="svg"
                    src={`/img/svg/${menu.icon}.svg`}
                    alt=""
                  />
                  <span>{menu.title}</span>
                  <a className="iknow_tm_full_link" href={`#${menu.href}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* /SIDEBAR */}
      {/* MAINPART */}
      <div className="iknow_tm_content_wrapper">
        {/* HERO */}
        <div className="iknow_tm_hero_third section_container" id="home">
          <div className="background">
            <div className="image" data-img-url="/img/hero/8.jpg" />
            <div className="overlay" />
          </div>
          <div className="content">
            <span className="hello">Hello, I'm</span>
            <h3 className="name">James Smith</h3>
            <p className="text">
              A passionate UI/UX Designer and Web Developer based In NYC, USA
            </p>
            <div className="iknow_tm_button">
              <a href="img/cv/1.jpg" download="">
                Download CV
              </a>
            </div>
          </div>
          <div className="iknow_tm_down_arrow">
            <div className="down-icon white top_120">
              <a className="anchor" href="#about">
                <svg
                  width="26px"
                  height="100%"
                  viewBox="0 0 247 390"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "1.5",
                  }}
                >
                  <path
                    id="wheel"
                    d="M123.359,79.775l0,72.843"
                    style={{ fill: "none", stroke: "#fff", strokeWidth: 20 }}
                  />
                  <path
                    id="mouse"
                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                    style={{ fill: "none", stroke: "#fff", strokeWidth: 20 }}
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* /HERO */}
        {pageContent.map((content) => (
          <div
            className="iknow_tm_section_new section_container"
            id={content.sectionId}
            key={content.id}
          >
            {content.component}
          </div>
        ))}

        {/* COPYRIGHT */}
        <CopyRightText extraCls="onepage extra" />
        <span className="bottom_shape" />
        {/* /COPYRIGHT */}
      </div>
      {/* /MAINPART */}
    </div>
  );
};
export default JamesLayout;
