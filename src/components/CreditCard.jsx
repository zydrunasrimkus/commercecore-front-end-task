import React, { useState } from "react";
import Cleave from "cleave.js/react";

export default function CreditCard() {
  const [creditCardType, setCreditCardType] = useState("");
  const [creditCardNo, setCreditCardNo] = useState();
  const [dateRawValue, setDateRawValue] = useState("");
  const [cvv, setCVV] = useState("");

  function onCreditCardTypeChanged(type) {
    setCreditCardType(type);
  }

  function onCreditCardChange(e) {
    setCreditCardNo(e.target.rawValue);
  }

  function onDateChange(e) {
    setDateRawValue(e.target.rawValue);
  }

  function onCVVChange(e) {
    setCVV(e.target.rawValue);
  }
  return (
    <div>
      <div className="relative card-no uppercase font-semibold">
        <Cleave
        className="block placeholder-gray4 h-[48px] border border-gray4 rounded-[3px] w-full min-w-[298px] indent-[12px] focus:outline-gray4"
          placeholder="Card number"
          options={{
            creditCard: true,
            onCreditCardTypeChanged,
          }}
          onChange={(e) => onCreditCardChange(e)}
        />
        {creditCardType.toLowerCase() !== "unknown" && <p>{creditCardType}</p>}
      </div>
      <div className="flex justify-between md:justify-start items-center pt-[16px]">
        <div>
          <Cleave
          className="block placeholder-gray4 max-w-[125px] w-full h-[48px] border border-gray4 rounded-[3px] indent-[12px] mr-1 focus:outline-gray4"
            placeholder="MM / YY"
            options={{ date: true, datePattern: ["m", "d"] }}
            onChange={onDateChange}
          />
        </div>
        <div>
          <Cleave
          className="block placeholder-gray4 max-w-[125px] w-full h-[48px] border border-gray4 rounded-[3px] indent-[12px] ml-1 focus:outline-gray4"
            placeholder="CVV"
            options={{
              blocks: [3],
              numericOnly: true,
            }}
            onChange={onCVVChange}
          />
        </div>
      </div>
    </div>
  );
}
