"use client";
import "./index.css";

import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import HeaderComponent from "./components/HeaderComponent";

export const Header = () => {
  // console.log(wallet)
  return (
    <header className="headerShadow fixed z-50 !h-[84px] w-full bg-[#1F191D] font-quicksand ">
      <div className="relative !mx-auto !my-5 flex !max-h-[50px] max-w-[1140px] justify-between">
        <HeaderComponent />

        <div className="self-end">
          <div className="flex items-center justify-center gap-4 max-sm:gap-[11px]">
            <div className="flex h-[40px] items-center justify-center gap-2 rounded-[50px] px-3 max-sm:h-[40px] ">
              <Image
                src={"https://docs.sui.io/img/logo.svg"}
                width={24}
                height={24}
                alt="adefi-no-background"
                className="!h-6 !w-6"
              ></Image>
            </div>
            {/* <BalanceComponent /> */}
          </div>
        </div>
      </div>
    </header>
  );
};
