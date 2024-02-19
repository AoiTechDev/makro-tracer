import logo from "@/assets/logo.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="w-[180px] h-[100px] flex items-center justify-center lg:w-[250px] lg:h-[100px]  ">
      <Link href='/'>
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
