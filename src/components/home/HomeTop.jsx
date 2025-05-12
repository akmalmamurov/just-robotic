import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "../container";
import { Link } from "react-router-dom";
import { robot } from "../../assets/images";

export const HomeTop = () => {
  const { t } = useTranslation();
  return (
    <div className="home-bg bg-black overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 gap-20">
          {/* left */}
          <div className="py-[49px]">
            <div className="bg-white rounded-[30px] py-12 px-10">
              <h2 className="font-semibold text-[82px] mb-2">JustRobotics</h2>
              <p className="font-medium text-[40px] leading-[42px]">
                {t("1l")}
              </p>
              <div className="mt-20">
                <p className="mb-[6px] font-normal text-xl">
                  {t("homeTopFree")}
                </p>
                <Link
                  to="/courses"
                  className="
                    group
                    relative
                    w-[320px] h-[62px]
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
                  <span className="relative z-10 font-bold text-xl">{t("goCourses")}</span>

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
                </Link>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="">
            <img src={robot} alt="robot" className="h-[611px]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeTop;
