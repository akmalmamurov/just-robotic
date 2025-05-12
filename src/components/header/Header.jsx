import { logo } from "@/assets/images";
import { Container } from "../container";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../switcher/LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="border-t-[14px] border-b-[14px] border-goldenYellow bg-black py-[23px] text-white">
      <Container className="flex gap-[100px] items-center">
        {/*logo  */}
        <div className="cursor-pointer">
          <img src={logo} alt="logo" className="h-[100px]" />
        </div>

        {/* menu */}
        <h3>{t("hello")}</h3>
        <LanguageSwitcher/>
      </Container>
    </header>
  );
};

export default Header;
