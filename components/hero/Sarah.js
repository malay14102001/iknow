import { SocialIcons2 } from "../SocialIcons";
const Sarah = () => {
  return (
    <div className="infobar">
      <div className="bar_in">
        <div className="image">
          <img src="/img/thumbs/10-9.jpg" alt="" />
          <div className="main" data-img-url="/img/hero/3.jpg" />
        </div>
        <div className="extra">
          <div className="short">
            <h3>Sarah Jessica</h3>
            <span>Senior UI/UX Designer</span>
          </div>
          <SocialIcons2 />
        </div>
      </div>
    </div>
  );
};
export default Sarah;
