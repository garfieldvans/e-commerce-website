import React from "react";
import css from "./Navbar.module.scss";
import { VscSettings } from "react-icons/vsc";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`xPaddings ${css.wrapper}`}>
      <div className={css.container}>
        <div className={css.slogan}>
          <span className="primaryText">Choose your style</span>
          <p>From top brands</p>
        </div>
        <div className={css.search}>
          <IoSearchOutline className={css.searchIcon} size={22} />
          <input type="text" placeholder="search product" />
          <div className={css.filter}>
            <VscSettings className={css.filterIcon} size={22} />
          </div>
        </div>
        <div className={css.rightSide}>
          <div className={css.message}>
            <BiMessageDetail size={25} className={css.msg} />
          </div>
          <div className={css.notif}>
            <FaRegBell size={25} className={css.notifIcon} />
          </div>
          <div className={css.menus}>
            <LuMenu size={25} className={css.menuIcon} />
          </div>
          <div className={css.profile}>
            <Link to="profile">
              <img src="./profil.png" alt="profil" className={css.img} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
