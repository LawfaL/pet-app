import { Card, Section } from "_ui-library";
import { memo, useEffect, useState } from "react";
import styles from "./ProductSection.module.css";
import { currencyFormatter } from "utils/currency";

const ProductSectionMemo = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <Section
      description={
        <div className="text-left">
          <span className="text-primary">
            Hard to choose right products for your pets?
          </span>
          <h2 className="font-bold text-primary">Our Products</h2>
        </div>
      }
      btnLabel={"View More"}
      items={product.map((data: any, idx) => {
        return (
          <Card
            key={idx}
            type="product-card"
            promo={"Free toys & shaker"}
            title={data.title}
            imgUrl={data.image}
            price={currencyFormatter(data.price)}
            description={
              <div className={styles["monito-petsection-card-description"]}>
                <span className="text-neutral text-2xs">
                  Product: <b>{data.category}</b>
                </span>
                &#x2022;
                <span className="text-neutral text-2xs">
                  Size: <b>{data.price}</b>
                </span>
              </div>
            }
          ></Card>
        );
      })}
    />
  );
};

export const ProductSection = memo(ProductSectionMemo);
