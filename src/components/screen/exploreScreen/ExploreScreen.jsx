import React from "react";
import css from "./Explore.module.scss";
import { IoMdStar } from "react-icons/io";
import { FaHeart, FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { product } from "../../utils/data";
import { LuPlus } from "react-icons/lu";

const ExploreScreen = () => {
  return (
    <div className={`xPaddings ${css.wrapper}`}>
      <div className={css.container}>
        <div className={css.leftSide}>

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
            <div className={css.varian}>
              <span>Quantity</span>
              <div className={css.qty}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className={css.buttons}>
              <a href="" className={`flexCenter ${css.savebtn}`}>
                <FaHeart className={css.saveIcon} size={15}/>
              </a>
              <a href="" className={`flexCenter ${css.addcart}`}>
                Add to cart
              </a>
              <a href="" className={`flexCenter ${css.buynow}`}>
                Buy now
              </a>
            </div>
          </div>
        </div>
        <div className={css.product}>
          {product.map((item, i) => {
            console.log(item);
            return (
              <div className={`${css.productcard}`} key={i}>
                <img src={item.img} alt={item.title} className={css.img} />
                <span className={css.title}>{item.title}</span>
                <div className={css.pricerates}>
                  <span className={css.price}>Price  ${item.price}</span>
                  <div className={` ${css.rates}`}>
                    <div className={css.rating}>

                      <IoMdStar /> <p>{item.rating}</p>
                    </div>
                <div className={css.addbtn}>
                  <a href="" >
                  <FaPlus size={16} className={css.btn}/>
                  </a>
                </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={css.exprCategory}>
          <div className={css.title}>
            <span className={`primaryText ${css.label}`}>Explore Pupular Categories</span>
            <div className={css.seeAll}>
              <span>See all</span>
              <FaArrowRightLong size={20}/>
            </div>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
};

export default ExploreScreen;
