const CopyRightText = ({ fixed = false, extraCls = false }) => {
  return (
    <div
      className={`iknow_tm_copyright ${
        extraCls ? extraCls : fixed ? "fixed" : "hidden"
      }`}
    >
      <div className="container">
        <div className="inner">
          <div className="left">
            <p>
              Designed with love ©{" "}
              <a href="https://themeforest.net/user/codeefly" target="_blank">
                CodeeFly
              </a>
            </p>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="#">Terms &amp; Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRightText;
