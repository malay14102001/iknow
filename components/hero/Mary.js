const Mary = ({ activeMenu }) => {
  return (
    <div
      className={`iknow_tm_animate_section ${
        activeMenu == "home"
          ? "active animated zoomInDown"
          : "active slideInLeft hidden animated"
      }`}
      id="home"
    >
      <div className="iknow_tm_hero_fourth">
        <div className="background">
          <div className="image" data-img-url="/img/hero/9.jpg" />
          <div className="overlay" />
        </div>
        <div className="content">
          <div className="left">
            <div className="image">
              <img src="/img/hero/avatar.png" alt="" />
            </div>
          </div>
          <div className="right">
            <span className="hello">Hello, I'm</span>
            <h3 className="name">Mary Jane</h3>
            <p className="text">
              A passionate UI/UX Designer and Web Developer based In NYC, USA
            </p>
            <div className="iknow_tm_button">
              <a href="img/cv/1.jpg" download="">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mary;
