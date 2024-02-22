import { Card, Section } from "_ui-library";
import { memo } from "react";
import styles from "./PetSection.module.css";
import { currencyFormatter } from "utils/currency";

const PetSectionMemo = () => {
  return (
    <Section
      description={
        <div className="text-left">
          <span className="text-primary">Whats new?</span>
          <h2 className="font-bold text-primary">
            Take A Look At Some Of Our Pets
          </h2>
        </div>
      }
      btnLabel={"View More"}
      items={Array(8)
        .fill({
          name: "MO231 - Pomeranian White",
          age: 2,
          gene: "Male",
          price: 6900000,
        })
        .map((data, idx) => {
          return (
            <Card
              key={idx}
              type="product-card"
              title={data.name}
              imgUrl={`https://randomfox.ca/images/${idx + 1}.jpg`}
              price={currencyFormatter(data.price)}
              description={
                <div className={styles["monito-petsection-card-description"]}>
                  <span className="text-neutral text-2xs">
                    Gene: <b>{data.gene}</b>
                  </span>
                  &#x2022;
                  <span className="text-neutral text-2xs">
                    Age: <b>{data.age} Month</b>
                  </span>
                </div>
              }
            ></Card>
          );
        })}
    />
  );
};

export const PetSection = memo(PetSectionMemo);
