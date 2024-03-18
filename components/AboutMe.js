import { context } from "@/context/context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AboutMe = () => {
  const { aboutData } = useContext(context);
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [heroImg, setHeroImg] = useState();
  const [email, setEmail] = useState();
  const [phnum, setPhnum] = useState();
  const [add, setAdd] = useState();
  const [subTitle, setSubTitle] = useState();
  const [pera, setPera] = useState();


  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
      );


      let aboutData = res.data.user.about;
      setName(aboutData.name);
      setTitle(aboutData.title);
      setSubTitle(aboutData.subTitle);
      setPera(aboutData.description)
      setHeroImg(aboutData.avatar.url);
      setEmail(res.data.user.email);
      setPhnum(aboutData.phoneNumber);
      setAdd(aboutData.address);
    }
    getData();
  });
  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <img src="/img/thumbs/35-44.jpg" alt="image" />
            <div className="main" data-img-url="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>{name}</span>
              </li>
              <li>
                <h3>Birthday</h3>
                <span>{aboutData.birthday}</span>
              </li>
              <li>
                <h3>Mail</h3>
                <span>{email}</span>
              </li>
              <li>
                <h3>Phone</h3>
                <span>{phnum}</span>
              </li>
              <li>
                <h3>Address</h3>
                <span>{add}</span>
              </li>
              <li>
                <h3>Nationality</h3>
                <span>{aboutData.nationality}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="iknow_tm_main_title">
          <span>About Me</span>
          <h3>{title}</h3>
        </div>
        <div className="bigger_text">
          <p>{subTitle}</p>
        </div>
        <div className="text">
          <p>{pera}</p>
        </div>
        <div className="iknow_tm_button">
          <a href="img/cv/1.jpg" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
