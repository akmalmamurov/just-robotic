import { useTranslation } from "react-i18next";

export const CourseCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="pt-[43px] bg-safron shadow-yellow-robo rounded-[30px] pb-[35px] px-[51px] last:mt-[15px] relative">
      <div className="w-full h-[211px] overflow-hidden rounded-[30px] mb-[21px]">
        <img
          src={item.image}
          alt="courseImage"
          className="w-full h-full hover:scale-105 duration-500 ease-in-out"
        />
      </div>
      <p className="font-semibold text-[40px] leading-[42px] max-w-[381px]">
        {t(item.key)}
      </p>
    </div>
  );
};

export default CourseCard;
