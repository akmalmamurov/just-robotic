import { logo } from "@/assets/images";
import { Container } from "../container";
import LanguageSwitcher from "../switcher/LanguageSwitcher";
import HeaderLink from "./HeaderLink";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MenuIcon, CloseIcon } from "@/assets/icons";
import { useEffect, useRef, useState } from "react";
import HeaderMenu from "./HeaderMenu";

export const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <header className="border-t-[14px] border-b-[14px] border-goldenYellow bg-black py-[23px] text-white ">
      <Container className="flex items-center justify-between">
        {/*logo  */}
        <div className="cursor-pointer w-[111px]">
          <img src={logo} alt="logo" className="" />
        </div>

        <div className="hidden lg:flex gap-[47px] ml-[100px]">
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
        <div className="lg:hidden flex items-center gap-[10px]">
          <LanguageSwitcher />
          <span
            ref={ref}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </span>
        </div>
      </Container>
      {open && <HeaderMenu setOpen={setOpen} t={t} />}
    </header>
  );
};

export default Header;
