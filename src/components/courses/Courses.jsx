import { useTranslation } from "react-i18next";
import { Container } from "../container";
import { Title } from "../title";
import { roboData } from "../../data";
import { CourseCard } from "../card";

export const Courses = () => {
  const { t } = useTranslation();
  return (
    <section className="">
      <div className="background bg-black pt-20 ">
        <Container>
          <Title className="text-center mb-20">{t("title1")}</Title>
          <div className="lg:px-[60px]">
            <div className="flex gap-5 lg:gap-[58px] overflow-x-auto lg:overflow-visible lg:flex-wrap">
              {roboData.map((item, i) => (
                <CourseCard key={i} item={item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Courses;
