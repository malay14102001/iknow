"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import ModalLayout from "./ModalLayout";
const PortfolioPopup = () => {
  const { setPortfolioModal } = useContext(context);
  return (
    <ModalLayout nullValue={setPortfolioModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src="/img/thumbs/4-2.jpg" alt="img" />
          <div className="main" data-img-url="/img/portfolio/8.jpg" />
        </div>
        <div className="portfolio_main_title">
          <span>Detail</span>
          <h3>Teresa Melbig</h3>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              We live in a world where we need to move quickly and iterate on
              our ideas as flexibly as possible. Building mockups strikes the
              ideal balance ease of modification.
            </p>
            <p>
              Mockups are useful both for the creative phase of the project -
              for instance when you're trying to figure out your user flows or
              the proper visual hierarchy - and the production phase when they
              will represent the target product.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>Alvaro Morata</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">Detail</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>March 07, 2021</span>
              </li>
              <li>
                <span className="first">Share</span>
                <ul className="share">
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="/img/svg/social/facebook.svg"
                        alt
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="/img/svg/social/twitter.svg"
                        alt
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="/img/svg/social/instagram.svg"
                        alt
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="/img/thumbs/4-2.jpg" alt="img" />
                  <div className="main" data-img-url="/img/portfolio/1.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="/img/thumbs/4-2.jpg" alt="img" />
                  <div className="main" data-img-url="/img/portfolio/2.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="/img/thumbs/4-2.jpg" alt="img" />
                  <div className="main" data-img-url="/img/portfolio/3.jpg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ModalLayout>
  );
};
export default PortfolioPopup;
