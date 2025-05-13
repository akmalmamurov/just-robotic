import { useTranslation } from "react-i18next";

export const HomeTopCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="relative z-[15] ">
      <div className="lg:h-[369px] bg-safron lg:shadow-yellow-lr rounded-[15px] lg:rounded-[30px] lg:pt-[64px] py-6 lg:pb-[19px] flex flex-col items-center">
        <span className="font-extrabold text-[20px] lg:text-[120px] text-center">
          {item?.number}+
        </span>
        <span className="font-semibold text-xs lg:text-[40px] text-center lg:leading-[42px]">
          {t(item.key)}
        </span>
      </div>
    </div>
  );
};

export default HomeTopCard;
