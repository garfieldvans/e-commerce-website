import React from "react";
import css from "./Profile.module.scss";
import { PiGearBold } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import { IoPower } from "react-icons/io5";
import { TbBrandCashapp } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";

const ProfileScreen = () => {
  return (
    <div className={`flexCenter ${css.wrapper}`}>
      Profile Screen
      <div className={css.modal}>
        <div className={css.head}>
          <div className={css.profile}>
            <div className={css.img}>
              <img src="./profil.png" alt="profile" />
            </div>
              <div className={css.detail}>
                <span>Nama Profile</span>
                <p>Username</p>
              </div>
              <div className={css.cash}>
              <TbBrandCashapp  size={20} className={css.icon}/>
                <p>500.1  </p>

              </div>
          </div>
        </div>

        <div className={css.line}/>
        <div className={css.body}>
          <div className={css.profileBtn}>
            <a href="#">
            <GoGear size={20} className={css.icon}/>
            {/* <PiGearBold /> */}
              <p>Profile Setting</p>
            </a>
          </div>
          <div className={css.item}>
            <div className={css.wallet}>
              <a href="">
              <IoWalletOutline size={20} />
                <p>E-wallet</p>
              </a>
            </div>
            <div className={css.creditCard}>
              <a href="">
              <BsCreditCard size={20}/>
                <p>Card</p>
              </a>
            </div>
            <div className={css.shipping}>
              <a href="">
              <LiaShippingFastSolid size={20}/>
                <p>Shipping</p>
              </a>
            </div>
            <div className={css.shipping}>
              <a href="">
              <LiaShippingFastSolid size={20}/>
                <p>Shipping</p>
              </a>
            </div>
          </div>
        </div>
        <div className={css.line}/>

        <div className={css.logout}>
          <a href="">
          <IoPower size={20} />
            <p>Logout</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
