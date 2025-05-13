import { HomeIcon } from "@/assets/icons";
import { Link } from "react-router-dom";
import { AboutIcon, ContactIcon, CourseIcon } from "../../assets/icons";

const HeaderMenu = ({ setOpen, t }) => {
  return (
    <div className="block lg:hidden min-h-[100vh] h-full absolute mt-[37px] w-full">
      <div className="w-full h-full bg-black mx-[15px] pt-1 pl-5 pr-[56px] font-involve">
        <div
          onClick={() => setOpen(false)}
          className="flex pl-2 gap-2 items-center py-4 border-b border-lightWhite cursor-pointer "
        >
          <span className="w-[50px]">
            <HomeIcon />
          </span>
          <span className="text-2xl text-white">{t("home")}</span>
        </div>
        <div
          onClick={() => setOpen(false)}
          className="flex pl-2 gap-2 items-center py-4 border-b border-lightWhite cursor-pointer"
        >
          <span className="w-[50px]">
            <AboutIcon className="w-[50px]" />
          </span>
          <span className="text-2xl text-white">{t("about")}</span>
        </div>
        <div
          onClick={() => setOpen(false)}
          className="flex pl-2 gap-2 items-center py-4 border-b border-lightWhite cursor-pointer"
        >
          <span className="w-[50px]">
            <CourseIcon className="w-[50px]" />
          </span>
          <span className="text-2xl text-white">{t("course")}</span>
        </div>
        <div
          onClick={() => setOpen(false)}
          className="flex pl-2 gap-2 items-center py-4  cursor-pointer"
        >
          <span className="w-[50px]">
            <ContactIcon className="w-[50px]" />
          </span>
          <span className="text-2xl text-white">{t("contact")}</span>
        </div>
        <Link
          to={"tel:+998999999999"}
          className="w-full mt-10 h-[62px] bg-goldenYellow text-black font-bold text-xl flex justify-center items-center rounded-[7px] shadow-yellow-glow"
        >
          {t("call")}
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;
