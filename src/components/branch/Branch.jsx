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
            <span className="text-white text-2xl">{t("work")}</span>
          </div>
        </div>
      </Container>
      <div className="mt-20">
        {active === 0 ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23968.26080998003!2d69.22502795036107!3d41.329904439894555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b981e0fe325%3A0xa6fc38e83861c109!2sJust%20Robotics%20Uzbekistan!5e0!3m2!1sru!2s!4v1747152555017!5m2!1sru!2s"
            className="w-full h-[594px]"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23964.073748423973!2d69.17476827431642!3d41.34128430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d1c273459ab%3A0xdfac2fa8036a74f3!2zSnVzdCBSb2JvdGljcyDRhNC40LvQuNCw0Lsg0JHQtdGA0YPQvdC40Lk!5e0!3m2!1sru!2s!4v1747152648973!5m2!1sru!2s"
            className="w-full h-[594px]"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>
    </div>
  );
};

export default Branch;
