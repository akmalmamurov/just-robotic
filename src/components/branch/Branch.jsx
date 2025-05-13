import { useState } from "react";
import { Container } from "../container";
import { useTranslation } from "react-i18next";
import { PhoneIcon, ClockIcon, LocationIcon } from "@/assets/icons";

export const Branch = () => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  return (
    <div className="bg-black py-20">
      <Container>
        <div className="flex gap-[60px] font-involve">
          <button
            onClick={() => setActive(0)}
            className={`${
              active === 0
                ? "text-black bg-goldenYellow shadow-yellow-glow"
                : "bg-white text-darkTone"
            } py-[19px] px-[64px] font-bold text-[30px] rounded-[8.75px] uppercase`}
          >
            {t("branch1")}
          </button>
          <button
            onClick={() => setActive(1)}
            className={`${
              active === 1
                ? "text-black bg-goldenYellow shadow-yellow-glow"
                : "bg-white text-darkTone"
            } py-[19px] px-[64px] font-bold text-[30px] rounded-[8.75px] uppercase`}
          >
            {t("branch2")}
          </button>
        </div>
        <div className="mt-20 flex justify-center gap-[56px] font-involve">
          <div className="flex gap-[23px] items-center">
            <span>
              <PhoneIcon />
            </span>
            <span className="text-white text-2xl">{t("addressPhone")}</span>
          </div>
          <div className="flex gap-[23px] items-center">
            <span>
              <LocationIcon />
            </span>
            <span className="text-white text-2xl">{t("address")}</span>
          </div>
          <div className="flex gap-[23px] items-center">
            <span>
              <ClockIcon />
            </span>
            <span className="text-white text-2xl">{t("addressPhone")}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Branch;
