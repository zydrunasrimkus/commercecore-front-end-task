import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function CartButton(props) {
  return (
    <div
      onClick={props.onClick}
      className="tracking-[0.07rem] leading-[16px] text-[14px] text-gray3 cursor-pointer select-none flex items-center justify-between px-[15px] py-[18px] border-b border-[#E0E0E0] md:hidden relative"
    >
      <div>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="px-2">ORDER SUMMARY</span>
        <FontAwesomeIcon icon={props.isOpen ? faChevronUp : faChevronRight} />
      </div>
      <div>{props.kainike}</div>
    </div>
  );
}

export default CartButton;
