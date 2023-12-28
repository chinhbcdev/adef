import React from "react";
import MenuTabs from "./components/MenuTabs";
import DexView from "./views/Dex/DexView";

export const adefiTabs = [
  { name: "Trade", path: "/exchange/dex" },
  { name: "Liquidity", path: "/exchange/liquidity" },
];
export default function Home() {
  return (
    <div>
      <div className="my-12 mt-4 flex justify-center md:hidden">
        <MenuTabs tabs={adefiTabs} />
      </div>
      <DexView />
    </div>
  );
}
