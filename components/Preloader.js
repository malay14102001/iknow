"use client";
import { iKnowUtilits } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    iKnowUtilits.preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default Preloader;
