import MenuTabs from "@/app/components/MenuTabs";
import { adefiTabs } from "@/app/page";
export const PATH_EXCHANGE_DEX = "/exchange/dex";
export const PATH_EXCHANGE_LIQUIDITY = "/exchange/liquidity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <div className="self-start">
      <Link href="/">
        <Image
          src={"/adefi-no-background.png"}
          width={85}
          height={45}
          alt="adefi-no-background"
        ></Image>
      </Link>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 max-sm:hidden">
        <MenuTabs tabs={adefiTabs} />
      </div>
    </div>
  );
};

export default HeaderComponent;
