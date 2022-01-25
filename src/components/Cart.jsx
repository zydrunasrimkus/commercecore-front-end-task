import React, { useState, useEffect } from "react";
import { cart } from "../cart";
import CartButton from "./mobile/CartButton";

function Cart() {
  const [list, updateList] = useState(cart);
  const [isOpen, setIsOpen] = useState(false);

  const TotalPriceCalc = () => {
    let totalPrice = 0;
    for (const item of list) {
      totalPrice += item.price;
    }
    return `$${totalPrice.toFixed(2)}`;
  };

  const handleRemoveItem = (name) => {
    updateList(list.filter((item) => item.id !== name));
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (window.screen.width >= 768 && window.innerWidth >= 768) {
      setIsOpen(true);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:flex-1 order-2 relative">
      <CartButton
        kainike={TotalPriceCalc()}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />
      <div className="md:max-w-[768px] m-auto absolute w-full bg-white md:static md:pt-[69.5px]">
        {isOpen && list.length > 0
          ? list.map((item, index) => {
              return (
                <div key={index + "fdg"}>
                  <div className="flex justify-between items-center p-[15px] btnhover">
                    <div className="flex items-center ">
                      <img
                        className="w-[72px] h-[72px]"
                        src={item.img}
                        alt=""
                      />
                      <span className="ml-12 mr-2 font-bold text-gray3">
                        {item.quantity}x
                      </span>
                      <div>
                        <span className="block relative text-gray3">{`${item.item}`}</span>
                        <button
                          onClick={() => {
                            handleRemoveItem(item.id);
                          }}
                          className="text-[#DC624E] text-[12px] block absolute hover:font-bold btn"
                        >
                          ✗ Remove
                        </button>
                      </div>
                    </div>
                    <span>${item.price}</span>
                  </div>
                  <span className="cool-line"></span>
                </div>
              );
            })
          : null}
        {isOpen && list.length === 0 ? (
          <div className="text-center p-[15px] text-gray3 font-semibold">
            Empty cart
          </div>
        ) : null}
        {isOpen && (
          <div className="flex justify-between items-center p-[15px] shadow-lg md:shadow-none">
            <span className="text-[18px] text-[#828282]">Total</span>
            <div>
              <span className="mr-2 text-[12px]">USD</span>
              <span className="text-[24px] text-gray3">
                <TotalPriceCalc />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
