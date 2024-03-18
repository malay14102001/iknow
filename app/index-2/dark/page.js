"use client";
import TomLayout from "@/layouts/TomLayout";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  });
  return <TomLayout darkLogo={false}></TomLayout>;
};
export default Page;
