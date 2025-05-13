import { Container } from "../container";
import { HomeTopCard } from "../card";
import { homeCardData } from "@/data";

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
