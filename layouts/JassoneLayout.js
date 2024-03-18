"use client";
import CopyRightText from "@/components/CopyRightText";
import Shapes from "@/components/Shapes";
import SocialIcons from "@/components/SocialIcons";
import Jassone from "@/components/hero/Jassone";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { shapes1 } from "@/utility/shapes";
import { Fragment, useContext, useEffect, useState } from "react";
const JassoneLayout = ({ darkLogo = true }) => {
  const { pageContent, menus, setAboutData } = useContext(context);
  const [activeMenu, setActiveMenu] = useState("home");
  useEffect(() => {
    iKnowUtilits.imgToSVG();
    iKnowUtilits.dataImage();
    iKnowUtilits.menuTransition();
    setAboutData({
      img: "/img/hero/7.jpg",
      name: "Jassone Doe",
      email: "hello@jassone.com",
      bio: "Hi! My name is Jassone Doe. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
    });
  }, []);

  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <Fragment>
      {/* MOBILE MENU */}
      <div className="iknow_tm_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <a href="#">
                <img src="/img/logo/dark.png" alt="" />
              </a>
            </div>
            <div className="trigger" onClick={() => setMenuToggle(!menuToggle)}>
              <div
                className={`hamburger hamburger--slider ${
                  menuToggle ? "is-active" : ""
                }`}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="dropdown"
          style={{ display: menuToggle ? "block" : "none" }}
        >
          <div className="dropdown_inner">
            <ul className="transition_link">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={`#${menu.href}`}
                    onClick={() => {
                      setMenuToggle(false);
                      setActiveMenu(menu.href);
                    }}
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* /MOBILE MENU */}
      {/* SIDEBAR */}
      <div className="iknow_tm_sidebar_2 index-4-menu">
        <div className="sidebar_inner">
          <div className="logo">
            <a href="#">
              {darkLogo ? (
                <img src="/img/logo/dark.png" alt="logo" />
              ) : (
                <img src="/img/logo/light.png" alt="logo" />
              )}
            </a>
          </div>
          <div className="menu transition_link">
            <ul>
              {menus.map((menu) => (
                <li
                  className={activeMenu === menu.href ? "active" : ""}
                  key={menu.id}
                >
                  <img
                    className="svg"
                    src={`/img/svg/${menu.icon}.svg`}
                    alt=""
                  />
                  <span> {menu.title}</span>
                  <a
                    className="iknow_tm_full_link"
                    href={`#${menu.href}`}
                    onClick={() => setActiveMenu(menu.href)}
                  />
                </li>
              ))}
              <span class="ccc"></span>
            </ul>
          </div>
        </div>
      </div>
      {/* /SIDEBAR */}
      {/* MAINPART */}
      <div className="iknow_tm_fixed_mainpart">
        <div className="mainpart_inner">
          {/* Hero Shapes */}
          <Shapes shapes={shapes1} />
          {/* /Hero Shapes */}
          {/* TOPBAR */}
          <div className="topbar_extra">
            <div className="details">
              <SocialIcons />
              <div className="iknow_tm_button">
                <a href="img/cv/1.jpg" download="">
                  Download CV
                </a>
              </div>
            </div>
          </div>
          {/* /TOPBAR */}
          {/* CONTENT */}
          <div className="iknow_tm_content_extra">
            {/* HOME */}
            <Jassone activeMenu={activeMenu} />
            {/* /HOME */}
            {/* ABOUT */}
            {pageContent.map((content) => (
              <div
                className={`iknow_tm_animate_section ${
                  activeMenu == content.sectionId
                    ? "iknow_tm_animate_section animated zoomIn active"
                    : "iknow_tm_animate_section active zoomOut hidden animated"
                }`}
                id={content.id}
              >
                <div className="section_inner">{content.component}</div>
              </div>
            ))}
            {/* /ABOUT */}
          </div>
          {/* COPYRIGHT */}
          <div className="extra_copyright">
            <CopyRightText extraCls="ex" />
          </div>
          {/* /COPYRIGHT */}
        </div>
      </div>
      {/* /MAINPART */}
    </Fragment>
  );
};
export default JassoneLayout;
