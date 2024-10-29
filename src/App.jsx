import { useState } from "react";

import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext, UpdateStorageProvider } from "./context/UpdateStorageContext";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [downloadIcon, setDownloadIcon] = useState(null)
 

  const handleClick = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <UpdateStorageProvider>
      <>
        <Header handleClick={handleClick}   DownloadIcon={setDownloadIcon}/>
        <div className={`w-64 fixed ${isSidebarActive ? "z-10" : "z-0"}`}>
          <SideNav
            setIsSidebarActive={setIsSidebarActive}
            isSidebarActive={isSidebarActive}
            selectedIndex={(value) => setSelectedIndex(value)}
          />
        </div>
        <div className="md:ml-64 grid grid-cols-1 md:grid-cols-6  fixed">
          <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="col-span-3 ">
            <LogoPreview  downloadIcon={downloadIcon}/>
          </div>
          <div className="bg-green-50">Ads Banner</div>
        </div>
      </>
    </UpdateStorageProvider>
  );
}

export default App;
