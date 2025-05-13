import { Container } from "../container";
import { logoFooter } from "@/assets/images";
import { TelegramIcon, YoutubeIcon, InstagramIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { requestData } from "../../data/robo-data";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="pt-[10px] pb-[17px] bg-goldenYellow font-involve">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] lg:gap-[140px]">
          <div className="">
            <img src={logoFooter} alt="logo" className="mb-[15px]" />
            <span className="font-semibold text-sm leading-[22px]">
              SLOGAN lLorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className="flex gap-[14px] mt-5">
              <Link to={"https://t.me/just_robotics_uz"} target="_blank">
                <TelegramIcon />
              </Link>
              <Link
                to={"https://www.youtube.com/@JustRobotics-vt1hu"}
                target="_blank"
              >
                <YoutubeIcon />
              </Link>
              <Link
                to={"https://www.instagram.com/just.robotics/?hl=ru"}
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
          <div className="pt-[15px]">
            <h3 className="font-bold text-[26px] mb-[5px]">{t("course")}</h3>
            <ul className="flex flex-col gap-2">
              {requestData.map((item, index) => (
                <li key={index}>
                  <Link to={"/"} className="text-xl font-normal ">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-[15px]">
            <h3 className="font-bold text-[26px] mb-[5px]">{t("contact")}</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="https://t.me/just_robotics_uz"
                  target="_blank"
                  className="text-xl font-normal "
                >
                  {t("telegram")}
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/just.robotics/?hl=ru"
                  target="_blank"
                  className="text-xl font-normal "
                >
                  {t("instagram")}
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/@JustRobotics-vt1hu"
                  target="_blank"
                  className="text-xl font-normal "
                >
                  {t("youtube")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[22px]">
          <p className="font-semibold text-sm text-black">Ideallux.com © 2000-2024, All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
