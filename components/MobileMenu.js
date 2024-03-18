import { useState } from "react";

const MobileMenu = ({ menus }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="iknow_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="/img/logo/dark.png" alt="" />
            </a>
          </div>
          <div className="trigger" onClick={() => setMenuToggle(!menuToggle)}>
            <div
              className={`hamburger hamburger--slider ${
                menuToggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        style={{ display: menuToggle ? "block" : "none" }}
      >
        <div className="dropdown_inner">
          <ul className="transition_link">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`} onClick={() => setMenuToggle(false)}>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
