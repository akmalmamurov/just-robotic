import { useTranslation } from "react-i18next";

export const CourseCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="p-[15px] lg:pt-[43px] flex-shrink-0 bg-safron lg:shadow-yellow-robo lg:w-[551px] w-[254px] rounded-[15px] lg:rounded-[30px] lg:pb-[35px] lg:px-[51px] lg:last:mt-[15px] relative">
      <div className="w-full h-[190px] lg:h-[211px] overflow-hidden rounded-[30px] mb-[21px]">
        <img
          src={item.image}
          alt="courseImage"
          className="w-full h-full hover:scale-105 duration-500 ease-in-out"
        />
      </div>
      <p className="font-semibold text-[20px] lg:text-[40px] lg:leading-[42px] lg:max-w-[381px]">
        {t(item.key)}
      </p>
      <div className="lg:mt-[74px] flex justify-end mt-10">
        <button className="py-[6px] px-[19px] bg-black text-white rounded-lg">
          {t("more")} -&gt;
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
