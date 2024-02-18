"use client";

import React from "react";
import Loader from "./Components/Loader";
import AboutSubChapter from "@/components/AboutSubChapter";
function page() {
  return (
    <>
    <Loader />
    <AboutSubChapter />
    </>
  );
}

export default page;
