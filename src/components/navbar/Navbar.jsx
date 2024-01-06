import React, { useEffect, useRef, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../APIs/apiurl";

const Navbar = ({ onSearch, query}) => {
  const [isModalOpen, setMenuOpened] = useState(false);
  const closeModal = () => {
    setMenuOpened(false);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const lastSearchQuery = localStorage.getItem('lastSearchQuery');
    if (lastSearchQuery) {
      setSearchQuery(lastSearchQuery);
    }
  }, []);

  const handleSearch = async () => {
    try {
      const encodedQuery = encodeURIComponent(searchQuery);
      const url = `search/q?query=${searchQuery}`;
      const response = await fetch(`${BaseUrl}/${url}`);
      const data = await response.json();

      onSearch(data); // Pass the search results to the onSearch callback
      localStorage.setItem('lastSearchQuery', searchQuery);
      navigate(`/products/find?q=${encodedQuery}`);
      query(searchQuery);
    } catch (error) {
      console.error("Error fetching search results:", error);
      onSearch([]); // Pass an empty array in case of an error
    }
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
            <IoSearchOutline size={22} className={css.searchIcon} />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearch();
                }
              }}
            />
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
              <LuMenu
                size={25}
                className={css.menuIcon}
                onClick={() => {
                  setMenuOpened((prev) => !prev);
                }}
              />
            </div>
            <div
              className={css.profile}
              onClick={() => {
                setMenuOpened((prev) => !prev);
              }}
            >
              <img src="./profil.png" alt="profil" className={css.img} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {isModalOpen && (
          <PopupModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
