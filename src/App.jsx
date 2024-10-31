import { useState } from "react";

import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import {
  UpdateStorageContext,
  UpdateStorageProvider,
} from "./context/UpdateStorageContext";
import Footer from "./components/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [downloadIcon, setDownloadIcon] = useState(null);

  const handleClick = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <UpdateStorageProvider>
      <>
        <Header handleClick={handleClick} DownloadIcon={setDownloadIcon} />
        <div className="flex  justify-center w-screen md:justify-between">
          <div className="relative" >
            <SideNav
              setIsSidebarActive={setIsSidebarActive}
              isSidebarActive={isSidebarActive}
              selectedIndex={(value) => setSelectedIndex(value)}
            />
          </div>
          <div className=" flex w-full shadow-sm md:w-auto md:flex-1 flex-col justify-center md:items-start md:flex-row  md:justify-between ">
            <div className="  order-2 md:order-1   border-r p-4 w-[97%] md:w-1/2 md:p-5 md:overflow-auto">
              {selectedIndex == 0 ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>

            <div className="flex   justify-center my-5 md:mt-1 md:w-1/2 order-1 md:order-2">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
          </div>
        </div>
      <Footer/>
      </>
    </UpdateStorageProvider>
  );
}

export default App;
