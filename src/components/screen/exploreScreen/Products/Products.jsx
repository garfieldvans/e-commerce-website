import React, { useEffect, useState } from "react";
import css from "./Products.module.scss";
import { getDataProduct } from "../../../../APIs/GetApi";
import { IoMdStar } from "react-icons/io";

const Products = ({ searchResults, query, load }) => {
  const [data, setData] = useState([]);

    // console.log(searchResults);

  useEffect(() => {
    getDataProduct()
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error setting data:", error));
  }, []);
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <span className={`primaryText ${css.sectionTitle}`}>Products</span>
        {searchResults.length > 0 ? (
          <>
          <p>Result for "<em>{query}</em>"</p>
        <div className={css.productSection}>
          {searchResults.map((item) => {
            return (
              <div className={`${css.productcard}`} key={item._id}>
                <div className={css.top}>

                <img src={item.image} alt={item.name} className={css.img} />
                <p className={css.title}>{item.name}</p>
                <div className={css.pricerates}>
                  <span className={css.price}>Price ${item.price}</span>
                  
                </div>
                
                </div>
                <div className={` ${css.rates}`}>
                    <div className={css.rating}>
                      <IoMdStar /> <p>{item.review}</p>
                    </div>
                    <div className={css.reviews}>
                      <p>({item.review} reviews)</p>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
        </>
        ) : (
          <>
          <p>No results for "<em>{query}</em>"</p>
          <div className={css.productSection}>
          {data.map((item) => {
            // console.log(item);
            return (
              <div className={`${css.productcard}`} key={item._id}>
                <div className={css.top}>

                <img src={item.image} alt={item.name} className={css.img} />
                <p className={css.title}>{item.name}</p>
                <div className={css.pricerates}>
                  <span className={css.price}>Price ${item.price}</span>
                  
                </div>
                
                </div>
                <div className={` ${css.rates}`}>
                    <div className={css.rating}>
                      <IoMdStar /> <p>{item.review}</p>
                    </div>
                    <div className={css.reviews}>
                      <p>({item.review} reviews)</p>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>

          </>
          
          
        )}
      </div>
    </section>
  );
};

export default Products;
