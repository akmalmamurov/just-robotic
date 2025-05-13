import { HomeTop, HomeTopInfo } from "@/components/home-top";
import { HomeDesc } from "@/components/home-desc";
import { Courses } from "@/components/courses";
import { Reviews } from "../components/reviews";

const HomePage = () => {
  return (
    <section>
      <HomeTop />
      <HomeTopInfo />
      <HomeDesc />
      <Courses />
      <Reviews />
    </section>
  );
};

export default HomePage;
