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
  },[])

  return (
    <div className="flex gap-10 items-center w-[553px]">
      <NavLink to="/" className="header-link">
        {t("home")}
      </NavLink>
      <NavLink to="/about" className="header-link">
        {t("about")}
      </NavLink>
      <button
      ref={ref}
        onClick={() => setOpen(!open)}
        className={`text-xl ${open ? "border-goldenYellow text-goldenYellow" : ""} w-[132px] h-[42px] border rounded-[25px] flex justify-center items-center relative`}
      >
        {t("course")}

        <span className="ml-[5px]">
          <ChevronDown />
        </span>
        {open && (
          <div className="absolute top-[50px] z-[20] bg-black w-[500px] shadow-md py-6 flex flex-col items-center gap-4 rounded-md">
            {courses?.map((course) => (
              <div key={course.key} className="w-[289px] border border-goldenYellow rounded-[25px] text-goldenYellow">
                <Link to={`/course/${course.key}`} className="text-xl">
                  {course.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </button>
      <NavLink to="/contact" className="header-link">
        {t("contact")}
      </NavLink>
    </div>
  );
};

export default HeaderLink;
