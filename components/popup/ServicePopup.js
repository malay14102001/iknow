"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import ModalLayout from "./ModalLayout";
const ServicePopup = () => {
  const { setServiceModal, serviceModal } = useContext(context);
  return (
    <ModalLayout nullValue={setServiceModal}>
      <div className="service_informations">
        <div className="image">
          <img src="/img/thumbs/4-2.jpg" alt="img" />
          <div className="main" data-img-url={serviceModal.img} />
        </div>
        <div className="title">
          <h3>{serviceModal.title}</h3>
        </div>
        <div className="description">
          <p>
            iKnow is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand, improve your conversion rates, and maximize your revenue to
            help grow your business and achieve your goals.
          </p>
          <p>
            In today’s digital world, your website is the first interaction
            consumers have with your business. That's why almost 95 percent of a
            user’s first impression relates to web design. It’s also why web
            design services can have an immense impact on your company’s bottom
            line.
          </p>
          <p>
            That’s why more companies are not only reevaluating their website’s
            design but also partnering with Kura, the web design agency that’s
            driven more than $2.4 billion in revenue for its clients. With over
            50 web design awards under our belt, we're confident we can design a
            custom website that drives sales for your unique business.
          </p>
        </div>
      </div>
    </ModalLayout>
  );
};
export default ServicePopup;
