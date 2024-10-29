import React from "react";
import { Button } from "./ui/button";
import { Download, Menu } from "lucide-react";

const Header = ({ handleClick, DownloadIcon }) => {
  return (
    <div className="px-2  py-2 shadow-sm borde flex items-center justify-between">
      <div className="flex items-center ">
        <Menu
          onClick={handleClick}
          className="md:hidden flex w-7 m-1 h-7 text-gray-500"
        />
        <img src="/logoloom.png" alt="logo" className=" w-36  md:w-52" />
      </div>
      <Button
        onClick={() => DownloadIcon(Date.now())}
        className="flex gap-2  h-8 rounded-md px-3 text-xs  md:h-9 md:px-4 md:py-2"
      >
        <Download className="h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default Header;
