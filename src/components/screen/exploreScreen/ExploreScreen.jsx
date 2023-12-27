import React from "react";
import css from "./Explore.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdStar } from "react-icons/io";
import {
  FaHeart,
  FaArrowRightLong,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa6";
import { event, product, promos, responsive } from "../../utils/data";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const ExploreScreen = () => {
  return (
    <div className={`xPaddings ${css.wrapper}`}>
      <div className={css.container}>
        <div className={css.leftSide}>
          <div className={`primaryText ${css.sectionTitle}`}>
            <p>Top Brands</p>
          </div>
          <div className={`xPaddings ${css.hotCard}`}>
            <div className={css.productImg}>
              <img src="./sepatu.png" alt="" className={css.img} />
            </div>
            <div className={css.detail}>
              <span className="primaryText">Sepatu Baru Bos</span>
              <div className={css.stars}>
                <IoMdStar size={17} color="#F8E329" />
                <IoMdStar size={17} color="#F8E329" />
                <IoMdStar size={17} color="#F8E329" />
                <IoMdStar size={17} color="#F8E329" />
                <IoMdStar size={17} color="#F8E329" />
                <p>(200+ Reviews)</p>
              </div>
              <div className={css.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                eveniet obcaecati tempore reiciendis ab quae ipsam mollitia
                facere.
              </div>
              <div className={css.price}>Price $345.50</div>
              <div className={css.buttons}>
                <a href="" className={`flexCenter ${css.savebtn}`}>
                  <FaHeart className={css.saveIcon} size={15} />
                </a>
                <a href="" className={`flexCenter ${css.addcart}`}>
                  <IoCartOutline className={css.cartIcon} />
                  <p>Add to cart</p>
                </a>
                <a href="" className={`flexCenter ${css.buynow}`}>
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <div className={`primaryText ${css.sectionTitle2}`}>
            <p>New Product</p>
            <div className={css.seeAll}>
                <span>See all</span>
                <Link to="#" className={css.btn}>
                  <FaArrowRightLong size={15} />
                </Link>
              </div>
          </div>
          <Carousel responsive={responsive} className={css.slider}>
          {/* <div className={css.product}> */}
            {product.map((item, i) => {
              console.log(item);
              return (
                <div className={`${css.productcard}`} key={i}>
                  <img src={item.img} alt={item.title} className={css.img} />
                  <p className={css.title}>{item.title}</p>
                  <div className={css.pricerates}>
                    <span className={css.price}>Price ${item.price}</span>
                    <div className={` ${css.rates}`}>
                      <div className={css.rating}>
                        <IoMdStar /> <p>{item.rating}</p>
                      </div>
                      <div className={css.addbtn}>
                        <a href="">
                          <FaPlus size={16} className={css.btn} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* </div> */}
            </Carousel>
          <div className={css.exprCategory}>
            <div className={css.title}>
              <span className={`primaryText ${css.label}`}>Hot Promos</span>
              <div className={css.seeAll}>
                <span>See all</span>
                <Link to="#" className={css.btn}>
                  <FaArrowRightLong size={15} />
                </Link>
              </div>
            </div>

            <div className={css.card}>
              {promos.map((item, i) => {
                return (
                  <div className={css.promoCard} key={i}>
                    <a href="">
                      <img src={item.img} alt="" className={css.img} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={css.rightSide}>
          <div className={css.event}>
            <span>Hot deals from top sales</span>
            <div className={css.imgStack}>
              {event.map((img, i) => {
                return <img src={img.img} alt="" className={css.img} key={i} />;
              })}
            </div>
            <div className={css.btnAds}>
              <a href="">
                <span>Get promo</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;
