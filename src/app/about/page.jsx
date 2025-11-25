import AboutOurStory from "@/components/AboutPage/AboutOurStory";
import AboutPageHeader from "@/components/AboutPage/AboutPageHeader";
import WhyUs from "@/components/AboutPage/WhyUs";

import React from "react";

export default function page() {
  return (
    <div>
      <AboutPageHeader />
      <AboutOurStory />
      <WhyUs />
    </div>
  );
}
