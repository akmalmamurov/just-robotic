import { useTranslation } from "react-i18next";

export const HomeTopCard = ({ item }) => {
  console.log(item.key);

  const { t } = useTranslation();
  return (
  <div className="relative z-[20] -mt-10">
      <div className="h-[369px] bg-goldenYellow shadow-yellow-lr rounded-[30px] pt-[64px] pb-[19px] flex flex-col items-center">
      <span className="font-extrabold text-[120px] text-center">{item?.number}+</span>
      <span className="font-semibold text-[40px] text-center leading-[42px]">{t(item.key)}</span>
    </div>
  </div>
  );
};

export default HomeTopCard;
