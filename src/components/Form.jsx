import React from "react";
import CreditCard from "./CreditCard";
import Countries from "./Countries";

function Form() {
  return (
    <div className="md:flex-1 order-1">
      <div className="container bg-[#f8f1eb] px-[15px] pb-[50px] max-w-full min-w-[400px]">
        <div className="container  text-gray3 text-[12px] tracking-[0.07rem] leading-[23px] uppercase my-0 mx-auto max-w-[640px] w-full pt-[30px] md:pt-[50px] pb-[10px]">
          PAYMENT AND SHIPPING
        </div>
        <div className="container bg-white px-[16px] border-[1px] border-[#E9D6C5] rounded-md my-0 mx-auto max-w-[640px] w-full">
          <label
            className="text-gray3 font-semibold block pt-[20px] pb-[4px]"
            htmlFor="customerInfo"
          >
            Customer Information
          </label>
          <p className="text-[12px] text-gray4">
            Fields marked as (*) are requred.
          </p>
          <div className="md:flex md:items-center md:justify-between">
            <input
              className="block h-[48px] border border-gray4 rounded-[3px] w-full indent-[12px] my-[16px] placeholder-gray4 md:mr-1 focus:outline-gray4"
              type="text"
              placeholder="First name*"
              required
            />
            <input
              className="block h-[48px] border border-gray4 rounded-[3px] w-full indent-[12px] placeholder-gray4 md:ml-1 focus:outline-gray4"
              type="text"
              placeholder="Last name*"
              required
            />
          </div>

          <label
            className="text-gray3 font-semibold block mt-[30px] mb-[16px]"
            htmlFor="customerInfo"
          >
            Shipping Address
          </label>
          <input
            className="block h-[48px] border border-gray4 rounded-[3px] w-full  md:max-w-full indent-[12px] mb-[16px] placeholder-gray4 focus:outline-gray4"
            type="text"
            placeholder="Address*"
            required
          />
          <div className="md:flex">
            <Countries />
            <input
              className="block h-[48px] border border-gray4 rounded-[3px] w-full indent-[12px] mb-[16px] placeholder-gray4 focus:outline-gray4 md:max-w-[150px]"
              type="text"
              placeholder="Postal code*"
              required
            />
          </div>

          <label
            className="text-gray3 font-semibold block mt-[14px] mb-[16px]"
            htmlFor="customerInfo"
          >
            Payment Method
          </label>
          <div className="border border-gray4 rounded-[3px]">
            <p className="text-gray3 py-[18px] px-[16px]">Credit Card</p>
            <div className="py-[18px] bg-[#FAFAFA] px-[16px]">
              <CreditCard />
            </div>
          </div>
          <div className="text-center py-[31px]">
            <button className="bg-[#009900] active:bg-[#2eb12e] h-[50px] w-full text-white shadow-myShadow rounded-[3px] text-[14px] tracking-[0.07rem] text-center uppercase max-w-[592px]">
              complete order
            </button>
          </div>

          <div className="flex items-center justify-center px-[16px] pb-[62px]">
            <img className="min-w-[63px]" src="./img/NortonSecure.png" alt="" />
            <img className="min-w-[63px]" src="./img/VeriSign.png" alt="" />
            <img className="min-w-[63px]" src="./img/McAfee.png" alt="" />
            <img className="min-w-[63px]" src="./img/Comodo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
