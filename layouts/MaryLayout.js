"use client";
import Audio from "@/components/Audio";
import CopyRightText from "@/components/CopyRightText";
import Mary from "@/components/hero/Mary";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { Fragment, useContext, useEffect, useState } from "react";

const MaryLayout = ({ darkLogo = true, darkBg = false }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [toggle, setToggle] = useState(false);
  const { pageContent, menus, setAboutData } = useContext(context);
  useEffect(() => {
    iKnowUtilits.imgToSVG();
    iKnowUtilits.dataImage();
    setAboutData({
      img: "/img/hero/12.jpg",
      name: "Mary Jane",
      email: "hello@mary.com",
      bio: "Hi! My name is Mary Jane. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
    });
  }, []);
  useEffect(() => {
    iKnowUtilits.maryMenuTransition();
  }, [activeMenu]);

  return (
    <Fragment>
      <div className="iknow_tm_extra_demo">
        <div
          className="iknow_tm_fixed_background"
          data-img-url={darkBg ? "/img/hero/5.jpg" : "/img/hero/4.jpg"}
        />
        {/* TOPBAR */}
        <div className="iknow_tm_topbar smaller" data-position="fixed">
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
            <div className="wrapper">
              <div className={`menu transition_link ${toggle ? "opened" : ""}`}>
                <ul>
                  {menus.map((menu) => (
                    <li
                      className={activeMenu === menu.href ? "active" : ""}
                      key={menu.id}
                    >
                      <a
                        href={`#${menu.href}`}
                        onClick={() => setActiveMenu(menu.href)}
                      >
                        {menu.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <span className="ccc" />
              </div>
              <div className="trigger">
                <div
                  className={`hamburger hamburger--slider ${
                    toggle ? "is-active" : ""
                  }`}
                  onClick={() => setToggle(!toggle)}
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /TOPBAR */}
        {/* MAINPART */}
        <div className="iknow_tm_mainpart_new">
          {/* HERO */}
          <Mary activeMenu={activeMenu} />
          {/* /HERO */}
          {pageContent.map((content) => (
            <div
              className={`iknow_tm_animate_section ${
                activeMenu == content.sectionId
                  ? "active animated zoomInDown"
                  : "active slideInLeft hidden animated"
              }`}
              id="about"
              key={content.id}
            >
              <div className="section_inner">{content.component}</div>
            </div>
          ))}
        </div>
        {/* /MAINPART */}
        {/* COPYRIGHT */}
        <CopyRightText fixed={true} />
        {/* /COPYRIGHT */}
      </div>
      {/* AUDIO FOR CLICK */}
      <Audio />
    </Fragment>
  );
};

export default MaryLayout;
