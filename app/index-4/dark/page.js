"use client";
import JassoneLayout from "@/layouts/JassoneLayout";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  });
  return <JassoneLayout darkLogo={false} />;
};
export default Page;
