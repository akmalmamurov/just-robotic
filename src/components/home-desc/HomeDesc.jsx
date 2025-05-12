import { useTranslation } from "react-i18next";
import { Container } from "../container";

export const HomeDesc = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-5 -mt-10 h-[400px] relative z-10 py-[100px] font-involve">
      <Container>
        <p className="text-2xl">
          <strong className="font-bold">JustRobotics</strong> - <span>{t("homeDesc")}</span>
        </p>
        <p className="text-2xl">
          <strong>JustRobotics</strong> - <span>{t("homeDesc2")}</span>
        </p>
      </Container>
    </div>
  );
};

export default HomeDesc;
