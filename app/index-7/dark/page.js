"use client";
import NaynaLayout from "@/layouts/NaynaLayout";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  });
  return <NaynaLayout darkLogo={false} darkBg={true} />;
};
export default Page;
