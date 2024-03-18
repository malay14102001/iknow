import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
import { useContext, useEffect } from "react";

const ModalLayout = ({ children, nullValue }) => {
  useEffect(() => {
    iKnowUtilits.imgToSVG();
    iKnowUtilits.dataImage();
  }, []);

  const { modalToggle } = useContext(context);
  let domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });
  return (
    <div className="iknow_tm_modalbox opened">
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              modalToggle(false);
              nullValue(null);
            }}
          >
            <img className="svg" src="/img/svg/cancel.svg" alt="img" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default ModalLayout;
