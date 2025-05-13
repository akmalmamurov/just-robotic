import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "../container";
import { robot } from "../../assets/images";

export const HomeTop = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-black ">
      <Container>
        <div className="grid grid-cols-12  lg:gap-20">
          {/* left */}
          <div className="py-[49px] relative col-span-7 lg:col-span-6">
            <div className="bg-white rounded-[30px] p-[15px] lg:py-12 lg:px-10">
              <h2 className="font-semibold text-[32px]  lg:text-[82px] mb-1 lg:mb-2">
                JustRobotics
              </h2>
              <p className="font-medium text-base leading-4 lg:text-[40px] lg:leading-[42px]">
                {t("1l")}
              </p>
              <div className="lg:mt-20 mt-[5px]">
                <p className="mb-[6px] font-normal text-sm lg:text-xl">
                  {t("homeTopFree")}
                </p>
                <button
                  className="
                    group
                    relative
                    lg:w-[320px] lg:h-[62px]
                    w-[170px] h-[32px] 
                    overflow-hidden
                    rounded-[8px]
                    bg-black
                    text-goldenYellow
                    uppercase
                    flex items-center justify-center

                    transition-colors duration-300 ease-in-out
                    transform

                    hover:bg-goldenYellow
                    hover:text-black
                  "
                >
                  <span className="relative z-10 font-bold text-sm lg:text-xl">
                    {t("goCourses")}
                  </span>

                  <span
                    className="
                      absolute bottom-0 left-0
                      h-1
                      w-0
                      bg-goldenYellow
                      transition-all duration-500 ease-in-out
                      group-hover:w-full
                      
                    "
                  />
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-5 lg:col-span-6 ">
            <div className="flex justify-start relative">
              <img
                src={robot}
                alt="robot"
                className="lg:h-[611px] h-[250px]  w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeTop;
