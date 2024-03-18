"use client";
import SarahLayout from "@/layouts/SarahLayout";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  });
  return <SarahLayout darkLogo={false} darkBg={true}></SarahLayout>;
};
export default Page;
