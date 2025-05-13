import { HomeTop, HomeTopInfo } from "@/components/home-top";
import { HomeDesc } from "@/components/home-desc";
import { Courses } from "@/components/courses";
import { Reviews } from "@/components/reviews";
import { Request } from "@/components/request";

const HomePage = () => {
  return (
    <section>
      <HomeTop />
      <HomeTopInfo />
      <HomeDesc />
      <Courses />
      <Reviews />
      <Request />
    </section>
  );
};

export default HomePage;
