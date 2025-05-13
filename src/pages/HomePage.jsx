import { HomeTop, HomeTopInfo } from "@/components/home-top";
import { HomeDesc } from "@/components/home-desc";
import { Courses } from "@/components/courses";
import { Reviews } from "@/components/reviews";
import { Request } from "@/components/request";
import { Branch } from "@/components/branch";
import React from "react";
const HomePage = () => {
  return (
    <div>
      <HomeTop />
      <HomeTopInfo />
      <HomeDesc />
      <Courses />
      <Reviews />
      <Request />
      <Branch />
    </div>
  );
};

export default HomePage;
