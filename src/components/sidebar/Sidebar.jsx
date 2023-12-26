import React from "react";
import css from "./Sidebar.module.scss";
import { PiSneakerMoveLight } from "react-icons/pi";
import { FiCircle } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { MdHistory, MdOutlinePersonOutline } from "react-icons/md";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={css.wrapper}>
      <div className={`xPaddings ${css.container}`}>
        <div className={` ${css.topContent}`}>
          <div className={css.logoIcons}>
            <PiSneakerMoveLight size={35} className={css.logos} />
          </div>
          <span className="primaryText">Shoe</span>
          <span className="primaryText">Lit.</span>
        </div>
        <div className={`yPaddings ${css.menuList}`}>
          <ul>
            <li>
              <Link to="/">
                <FaRegCompass size={22} />
                Explore
              </Link>
            </li>
            <li>
              <Link to="saved">
                <FaRegHeart size={22} />
                Saved
              </Link>
            </li>
            <li>
              <Link to="cart">
                <IoCartOutline size={24} />
                Cart
              </Link>
            </li>
            <li>
              <Link to="history">
                <MdHistory size={23} />
                History
              </Link>
            </li>
            <li>
              <Link to="profile">
                <MdOutlinePersonOutline size={22} />
                Profile
              </Link>
            </li>
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
