import React from "react";
import MenuTabs from "./components/MenuTabs";
import DexView from "./views/Dex/DexView";

export default function Home() {
  return (
    <div>
      <div className="my-12 mt-4 flex justify-center md:hidden"></div>
      <DexView />
    </div>
  );
}
