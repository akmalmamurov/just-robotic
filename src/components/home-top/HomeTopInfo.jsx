import React from "react";
import { Container } from "../container";
import { homeCardData } from "../../data";
import { HomeTopCard } from "../card";

export const HomeTopInfo = () => {
  return (
    <div className="bg-darkTone ">
      <Container>
        <div className="grid grid-cols-3 gap-[43px] ">
          {homeCardData.map((item, index) => (
            <HomeTopCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomeTopInfo;
