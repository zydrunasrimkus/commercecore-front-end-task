import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-[160px] md:h-full px-[15px] py-[20px] bg-[#DC624E] flex flex-col md:flex-row justify-between items-center text-white text-[12px] leading-[15px]">
      <img className="md:scale-75" src="./img/logoipsum-logo-8 1.png" alt="" />
      <div>
        <a className="mx-[16px]" href="/">
          Terms of Service
        </a>
        <a className="mx-[16px]" href="/">
          Privacy Policy
        </a>
        <a className="mx-[16px]" href="/">
          Returns
        </a>
        <a className="mx-[16px]" href="/">
          FAQ
        </a>
      </div>
      <span>© {currentYear} Logoipsum. All rights reserved</span>
    </footer>
  );
}
export default Footer;
