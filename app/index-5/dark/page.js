"use client";
import JamesLayout from "@/layouts/JamesLayout";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  });
  return <JamesLayout darkLogo={false} />;
};
export default Page;
