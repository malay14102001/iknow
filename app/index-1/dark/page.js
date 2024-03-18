"use client";
import JassicaLayout from "@/layouts/JassicaLayout";
import { useEffect } from "react";
const IndexDark1 = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  });

  return <JassicaLayout darkLogo={false}></JassicaLayout>;
};
export default IndexDark1;
