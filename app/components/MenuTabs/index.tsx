"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const MenuTabs = ({
  tabs,
  isButton,
  menu,
  setMenu,
}: {
  tabs: { name: string; path: string }[];
  isButton?: any;
  menu?: any;
  setMenu?: any;
}) => {
  const pathName = usePathname();
  return (
    <nav className="inline-flex h-[48px] items-center justify-center gap-2 rounded-[50px] bg-[#2B2529] px-3">
      {tabs.map((item) =>
        !isButton ? (
          <Link
            key={item.name}
            href={item.path}
            className={`rounded-[46px] bg-[#2B2529] px-4 py-1 capitalize text-[#B3B3B3] ${
              pathName === item.path ||
              (pathName === "/" && item.name === tabs[0].name) ||
              (pathName.includes("exchange/liquidity") &&
                item.name === tabs[1].name)
                ? "!bg-[#FF3140] !text-[#F9F9F9]"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ) : (
          <button
            key={item.name}
            className={`rounded-[46px] bg-[#2B2529] px-4 py-1 capitalize text-[#B3B3B3] ${
              menu === parseInt(item.path)
                ? "!bg-[#FF3140] !text-[#F9F9F9]"
                : ""
            }`}
            onClick={() => setMenu(parseInt(item.path))}
          >
            {item.name}
          </button>
        )
      )}
    </nav>
  );
};

export default MenuTabs;
