import React, { useRef, useState } from "react";
import css from "./Navbar.module.scss";
import { VscSettings } from "react-icons/vsc";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import PopupModal from "./modal/PopupModal";
import useOutsideAlerter from "../utils/useOutsideAlert";
import { PiSneakerMoveLight } from "react-icons/pi";

const Navbar = () => {
  const [isModalOpen, setMenuOpened] = useState(false);
 const profileLinkRef = useRef(null);

  const closeModal = () => {
    setMenuOpened(false);
  };


  return (
    <div>
      <div className={`xPaddings ${css.wrapper}`}>
        <div className={css.container}>
        <div className={` ${css.topContent}`}>
          <div className={css.logoIcons}>
            <PiSneakerMoveLight size={35} className={css.logos} />
          </div>
          <span className="primaryText">Shoe</span>
          <span className="primaryText">Lit.</span>
        </div>
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
              <LuMenu size={25} className={css.menuIcon} onClick={() => {
            setMenuOpened((prev) => !prev);
          }} />
            </div>
            <div className={css.profile } onClick={() => {
            setMenuOpened((prev) => !prev);
          }}>
              <img  src="./profil.png" alt="profil" className={css.img} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {isModalOpen && <PopupModal isOpen={isModalOpen} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Navbar;
