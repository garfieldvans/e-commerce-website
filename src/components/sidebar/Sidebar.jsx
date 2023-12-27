import React from "react";
import css from "./Sidebar.module.scss";
import { PiSneakerMoveLight } from "react-icons/pi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { menuList } from "../utils/data";

const Sidebar = () => {

  const isActive = css.active;
  const location = useLocation();
  return (
    <div className={css.wrapper}>
      <div className={` ${css.container}`}>
        <div className={` ${css.topContent}`}>
          <div className={css.logoIcons}>
            <PiSneakerMoveLight size={35} className={css.logos} />
          </div>
          <span className="primaryText">Shoe</span>
          <span className="primaryText">Lit.</span>
        </div>
        <div className={css.menuList}>
          <ul>
          {menuList.map((menu, i) => {
            return (
                <li key={i}>
                  <NavLink to={menu.link} className={({isActive}) => isActive ? css.active : ''} >
                    <menu.icon size={27}/>
                    <p>{menu.name}</p>
                  </NavLink>
                </li>
            )
          })}
            </ul>
        </div>

        <div className={`xPaddings ${css.groundContent}`}>
          <div className={`flexCenter ${css.plus}`}>
            <a href="">
              <img src="./circle.png" className={css.btnImg} />
            </a>
          </div>
          <span className="flexCenter">Need help?</span>
          <p>About Account Management Ordering & Payment refund and FAQ</p>
          <div className={css.button}>
            <a href="">Customer Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
