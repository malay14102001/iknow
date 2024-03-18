"use client";
import MaryLayout from "@/layouts/MaryLayout";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  });
  return <MaryLayout darkLogo={false} darkBg={true} />;
};
export default Page;
