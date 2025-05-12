import { logo } from "@/assets/images";
import { Container } from "../container";
import LanguageSwitcher from "../switcher/LanguageSwitcher";
import HeaderLink from "./HeaderLink";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="border-t-[14px] border-b-[14px] border-goldenYellow bg-black py-[23px] text-white">
      <Container className="flex items-center">
        {/*logo  */}
        <div className="cursor-pointer w-[111px]">
          <img src={logo} alt="logo" className="" />
        </div>

        <div className="flex gap-[47px] ml-[100px]">
          {/* menu */}
          <HeaderLink />
          <div className="flex gap-[30px] items-center justify-between">
            <Link
              to={"tel:+998999999999"}
              className="w-[220px] h-[62px] bg-goldenYellow text-black font-bold text-xl flex justify-center items-center rounded-[7px] shadow-yellow-glow"
            >
              {t("call")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
