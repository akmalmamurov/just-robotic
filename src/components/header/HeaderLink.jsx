import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "../../assets/icons";
import { useCourseData } from "../../hooks";

const HeaderLink = () => {
  const { t } = useTranslation();
  const courses = useCourseData();
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
    <div className="flex gap-10 items-center w-[553px] relative">
      <NavLink to="/" className="header-link">
        {t("home")}
      </NavLink>
      <NavLink to="/" className="header-link">
        {t("about")}
      </NavLink>
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`text-xl w-[132px] h-[42px] border rounded-[25px]
                      flex justify-center items-center transition-colors
                      ${open ? "border-goldenYellow text-goldenYellow" : ""}
                      `}
        >
          {t("course")}
          <span className="ml-[5px]">
            <ChevronDown />
          </span>
        </button>

        {open && (
          <>
            <div
              onClick={() => setOpen(false)}
              className=" fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm  z-10 "
            />

            <div
              className=" absolute top-[60px] -left-20 z-20 shadow-md py-6 flex flex-col items-center gap-4 rounded-lg bg-darkTone px-5 "
            >
              {courses?.map((course) => (
                <div
                  key={course.key}
                  className="
            w-[289px] border border-goldenYellow 
            rounded-[25px] text-goldenYellow
          "
                >
                  <button
                    onClick={() => setOpen(false)}
                    className="text-xl block py-2 px-4"
                  >
                    {course.name}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <NavLink to="/" className="header-link">
        {t("contact")}
      </NavLink>
    </div>
  );
};

export default HeaderLink;
