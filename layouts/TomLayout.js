"use client";
import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CopyRightText from "@/components/CopyRightText";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Service from "@/components/Service";
import TopBar from "@/components/TopBar";
import Tom from "@/components/hero/Tom";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { shapes2 } from "@/utility/shapes";
import dynamic from "next/dynamic";
import { Fragment, useContext, useEffect } from "react";
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
const TomLayout = ({ darkLogo }) => {
  const { setAboutData } = useContext(context);
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
    iKnowUtilits.accordionToggle();
    setAboutData({
      img: "/img/about/2.jpg",
      name: "Tom Anderson",
      email: "hello@anderson.com",
      bio: "Hi! My name is Tom Anderson. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
    });
  }, []);

  const contents = [
    {
      id: 1,
      menuIcon: "archive",
      href: "about",
      menuTitle: "About Me",
      content: <AboutMe />,
    },
    {
      id: 2,
      menuIcon: "contacs",
      href: "resume",
      menuTitle: "Resume",
      content: <Resume />,
    },
    {
      id: 3,
      menuIcon: "briefcase",
      href: "portfolio",
      menuTitle: "Portfolio",
      content: <Portfolio />,
    },
    {
      id: 4,
      menuIcon: "gear",
      href: "service",
      menuTitle: "Service",
      content: <Service />,
    },
    {
      id: 5,
      menuIcon: "message",
      href: "testimonials",
      menuTitle: "Testimonials",
      content: <Testimonials />,
    },
    {
      id: 6,
      menuIcon: "writing",
      href: "news",
      menuTitle: "Blog",
      content: <Blog />,
    },
    {
      id: 7,
      menuIcon: "letter",
      href: "contact",
      menuTitle: "Contact",
      content: <Contact />,
    },
  ];

  return (
    <Fragment>
      <TopBar darkLogo={darkLogo} topbarIcon={false} />
      <Tom shapes2={shapes2} />
      {/* Content */}
      <div className="iknow_tm_extra_menu">
        <div className="container">
          <div className="menu_list">
            <div className="unordered">
              {contents.map((content) => (
                <li className="unorderest_li" key={content.id}>
                  <div className="list_in">
                    <div className="list_icon">
                      <img
                        className="svg"
                        src={`/img/svg/${content.menuIcon}.svg`}
                        alt=""
                      />
                    </div>
                    <div className="center">
                      <span>{content.menuTitle}</span>
                    </div>
                    <div className="down_icon">
                      <img className="svg" src="/img/svg/down.svg" alt="" />
                    </div>
                    <a
                      className="iknow_tm_full_link tab_btn"
                      href={`#${content.href}`}
                    />
                  </div>
                  <div className="details_wrapper">{content.content}</div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CopyRightText extraCls="copyright" />
    </Fragment>
  );
};
export default TomLayout;
