import { context } from "@/context/context";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';

const Service = () => {
  const [services, setServices] = useState([]);
  const { modalToggle, setServiceModal } = useContext(context);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');

        setServices(response.data.user.services);
      } catch (error) {
        console.error('Error fetching services:', error.message);
      }
    };


    fetchServices();
  }, []);

  return (
    <div className="iknow_tm_services">
      <div className="iknow_tm_main_title">
        <span>Service</span>
        <h3>Never compromise with quality</h3>
      </div>
      <div className="service_list">
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <div className="list_inner">
                <span >
                  <img
                    className="svg"
                    src={service.image.url}
                    alt="Service Image"
                    style={{ height: '100px', width: '100px' }}
                  />
                </span>
                <h3 className="title">{service.name}</h3>
                <p className="text">{service.desc}</p>
                <p className="charge">Charge: {service.charge}</p>
                <a
                  className="iknow_tm_full_link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
