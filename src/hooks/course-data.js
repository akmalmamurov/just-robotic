/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export function useCourseData() {
  const { t, i18n } = useTranslation(); 

  const courses = useMemo(
    () => [
      { key: "robotics",   name: t("robotics")   },
      { key: "english",    name: t("english")    },
      { key: "painting",   name: t("painting")   },
      { key: "paintAdult", name: t("paintAdult") },
    ],
    [i18n.language]      
  );

  return courses;
}
