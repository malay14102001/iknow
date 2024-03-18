"use client";
import { context } from "@/context/context";
import { Fragment, useContext } from "react";
import BlogPopup from "./BlogPopup";
import PortfolioPopup from "./PortfolioPopup";
import ServicePopup from "./ServicePopup";
import VideoPopup from "./VideoPopup";
const Popup = () => {
  const { modal, portfolioModal, serviceModal, blogModal } =
    useContext(context);
  return (
    <Fragment>
      <VideoPopup />
      {modal && portfolioModal && <PortfolioPopup />}
      {modal && serviceModal && <ServicePopup />}
      {modal && blogModal && <BlogPopup />}
    </Fragment>
  );
};
export default Popup;
