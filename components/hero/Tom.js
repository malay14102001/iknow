import { SocialIcons2 } from "../SocialIcons";
const Tom = ({ shapes2 }) => {
  return (
    <div className="iknow_tm_hero_second">
      <div className="background_shape" />
      <div className="container">
        <div className="main_info">
          <div className="left">
            <span className="subtitle">I'm</span>
            <h3 className="name">Tom Anderson</h3>
            <p className="text">
              A passionate UI/UX Designer and Senior Web Developer based In NYC,
              USA
            </p>
            <SocialIcons2 />
          </div>
          <div className="right">
            <div className="image">
              <div className="main" data-img-url="/img/hero/2.jpg" />
              <span className="first anim_translate" />
              <span className="second anim_left2" />
              <span className="third anim_right2" />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Shapes */}
      <div className="rounded_shapes">
        {shapes2.map((shap) => (
          <span
            className={`${shap.classname} ${shap.animationName}`}
            key={shap.id}
          >
            <img
              className="svg"
              src={`/img/svg/shapes/${shap.shapeImg}.svg`}
              alt="svg"
            />
          </span>
        ))}
      </div>
      {/* /Hero Shapes */}
    </div>
  );
};
export default Tom;
