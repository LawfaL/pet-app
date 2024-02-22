import { Card, Section } from "_ui-library";
import { memo } from "react";

const InfoSectionMemo = () => {
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
      items={Array(4)
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
              type="info-card"
              title={data.name}
              imgUrl={`https://randomfox.ca/images/${idx + 1}.jpg`}
              badges={["Pet Knowledge"]}
              description={
                "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed. "
              }
            ></Card>
          );
        })}
    />
  );
};

export const InfoSection = memo(InfoSectionMemo);
