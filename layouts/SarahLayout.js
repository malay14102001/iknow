"use client";
import CopyRightText from "@/components/CopyRightText";
import TopBar from "@/components/TopBar";
import Sarah from "@/components/hero/Sarah";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { Fragment, useContext, useEffect, useState } from "react";
const SarahLayout = ({ darkLogo, darkBg = false }) => {
  useEffect(() => {
    // Function to get computed style of an element
    function getComputedStyle(el, styleProp) {
      if (el.currentStyle) {
        return el.currentStyle[styleProp];
      } else if (window.getComputedStyle) {
        return document.defaultView
          .getComputedStyle(el, null)
          .getPropertyValue(styleProp);
      }
      return "";
    }

    // Function to set CSS properties
    function setCSSProperties() {
      var ww =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      var wh =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      var topbar = document.querySelector(".iknow_tm_topbar");
      var footer = document.querySelector(".iknow_tm_copyright");
      var fixedContentInner = document.querySelector(
        ".iknow_tm_fixed_content .fixed_content_inner"
      );

      var topbarH = topbar ? topbar.offsetHeight : 0;
      var footerH = footer ? footer.offsetHeight : 0;

      var topPosition = topbarH + 62;
      var topPosition2 = topbarH + 35;
      var topPosition3 = topbarH + 25;

      var total = wh - topbarH - footerH - 62;
      var total2 = wh - topbarH - footerH - 40;
      var total3 = wh - topbarH - footerH;

      if (ww > 1400 && fixedContentInner) {
        fixedContentInner.style.height = total + "px";
        fixedContentInner.style.top = topPosition + "px";
      } else if (ww >= 1040 && fixedContentInner) {
        fixedContentInner.style.height = total3 + "px";
        fixedContentInner.style.top = topPosition3 + "px";
      } else if (fixedContentInner) {
        fixedContentInner.style.height = total2 + "px";
        fixedContentInner.style.top = topPosition2 + "px";
      }
    }

    // Call the function when the window is resized
    window.addEventListener("resize", setCSSProperties);

    // Call the function initially
    setCSSProperties();
  }, []);

  const [active, setActive] = useState("about");
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
  }, []);

  const { pageContent, setTestimonialItems, menus, setAboutData } =
    useContext(context);
  useEffect(() => {
    setTestimonialItems(1);
    setAboutData({
      img: "/img/about/3.jpg",
      name: "Sarah Jessica",
      email: "hello@jessica.com",
      bio: "Hi! My name is Sarah Jessica. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
    });
  }, []);

  return (
    <Fragment>
      <TopBar darkLogo={darkLogo} topbarIcon={false} />
      <div
        className="iknow_tm_fixed_background movingEffect"
        data-img-url={darkBg ? "/img/hero/5.jpg" : "/img/hero/4.jpg"}
      />
      {/* /BACKGROUND */}
      {/* CONTENT */}
      <div className="iknow_tm_fixed_content">
        <div className="container">
          <div className="fixed_content_inner">
            <div className="content_left">
              {/* MENUBAR */}
              <div className="menubar">
                <ul>
                  {menus.map(
                    (menu) =>
                      menu.id !== 0 && (
                        <li
                          key={menu.id}
                          className={menu.href === active ? "active" : ""}
                        >
                          <img
                            className="svg"
                            src={`/img/svg/${menu.icon}.svg`}
                            alt=""
                          />
                          <span>{menu.title}</span>
                          <a
                            className="iknow_tm_full_link"
                            onClick={(e) => {
                              e.preventDefault();
                              setActive(menu.href);
                            }}
                            href={`#${menu.href}`}
                          />
                        </li>
                      )
                  )}
                </ul>
              </div>
              {/* /MENUBAR */}
              {/* INFOBAR */}
              <Sarah />
              {/* /INFOBAR */}
            </div>
            <div className="content_right">
              {/* MAINBAR */}
              <div className="mainbar">
                {pageContent.map((content) => (
                  <div
                    id={content.sectionId}
                    className={`iknow_tm_main_section ${
                      active === content.sectionId ? "active" : ""
                    }`}
                    key={content.id}
                  >
                    {content.component}
                  </div>
                ))}
              </div>
              {/* /MAINBAR */}
            </div>
          </div>
        </div>
      </div>
      <CopyRightText fixed={true} />
    </Fragment>
  );
};

export default SarahLayout;
