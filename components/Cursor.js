"use client";
import { iKnowUtilits } from "@/utility";
import { Fragment, useEffect } from "react";
const Cursor = () => {
  useEffect(() => {
    iKnowUtilits.customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </Fragment>
  );
};
export default Cursor;
