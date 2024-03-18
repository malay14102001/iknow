"use client";
import CopyRightText from "@/components/CopyRightText";
import MobileMenu from "@/components/MobileMenu";
import { SocialIcons3 } from "@/components/SocialIcons";
import Nayna from "@/components/hero/Nayna";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { useContext, useEffect } from "react";

const NaynaLayout = ({ darkLogo = true, darkBg = false }) => {
  const { pageContent, menus, setAboutData } = useContext(context);
  useEffect(() => {
    iKnowUtilits.imgToSVG();
    iKnowUtilits.dataImage();
    iKnowUtilits.scrollSection();
    setAboutData({
      img: "/img/hero/13.jpg",
      name: "Nayna Eva",
      email: "hello@nayna.com",
      bio: "Hi! My name is Nayna Eva. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", iKnowUtilits.scrollSection);
  }, []);

  return (
    <div className="iknow_tm_extra_demo_2">
      <span className="top_shape" />
      <span className="bottom_shape" />
      <div
        className="iknow_tm_fixed_background"
        data-img-url={darkBg ? "/img/hero/5.jpg" : "/img/hero/4.jpg"}
      />
      {/* TOPBAR */}
      <div className="iknow_tm_topbar smaller onepage">
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
          <div className="iknow_tm_button">
            <a href="img/cv/1.jpg" download="">
              Download CV
            </a>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}
      {/* MOBILE MENU */}
      <MobileMenu menus={menus} />
      {/* /MOBILE MENU */}
      {/* MAINPART */}
      <div className="iknow_tm_mainpart_new_2">
        {/* SOCIAL */}
        <SocialIcons3 />
        {/* /SOCIAL */}
        {/* MENU */}
        <div className="main_menu">
          <ul className="anchor_nav">
            {menus.map((menu) => (
              <li key={menu.id}>
                <img className="svg" src={`/img/svg/${menu.icon}.svg`} alt="" />
                <span>{menu.title}</span>
                <a className="iknow_tm_full_link" href={`#${menu.href}`} />
              </li>
            ))}
          </ul>
        </div>
        {/* /MENU */}
        {/* HERO */}
        <Nayna />
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

        <CopyRightText extraCls={"smaller onepage empty"} />
      </div>
      {/* /MAINPART */}
    </div>
  );
};
export default NaynaLayout;
