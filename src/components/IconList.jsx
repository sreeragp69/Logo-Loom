import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { icons } from "lucide-react";
import { iconList } from "@/constants/icons";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

const BASE_URL = "https://logoexpress.tubeguruji.com/";

const IconList = ({ selectedIcon }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [pngIconList, setPngIconList] = useState([]);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  useEffect(() => {
    getPngIcons();
  }, []);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }

    return <LucidIcon color={color} size={size} />;
  };

  const getPngIcons = async () => {
    try {
      const res = await axios.get(BASE_URL + "/getIcons.php");
      setPngIconList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3  cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        >
          {icon?.includes(".png") ? (
            <img
              src={BASE_URL + "/png/" + icon}
              alt={BASE_URL + "/png/" + icon}
            />
          ) : (
            <Icon name={icon} color={"#000"} size={20} />
          )}
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pic your Favorite Icon</DialogTitle>
            <DialogDescription>
              {/* TABS */}
              <Tabs defaultValue="icons" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icons">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                </TabsList>

                <TabsContent value="icons">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {iconList &&
                      iconList.map((icon, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            selectedIcon(icon);
                            setOpenDialog(false);
                            setIcon(icon);
                          }}
                          className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                        >
                          <Icon name={icon} color={"#000"} size={20} />
                        </div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="color-icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {pngIconList &&
                      pngIconList.map((icon, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            selectedIcon(icon);
                            setOpenDialog(false);
                            setIcon(icon);
                          }}
                          className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                        >
                          <img
                            src={BASE_URL + "/png/" + icon}
                            alt={BASE_URL + "/png/" + icon}
                          />
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>

            <DialogClose className="absolute top-4 right-4">
              <span className="sr-only">Close</span>
              <span>
                <Cross2Icon className="h-4 w-4 " />
              </span>
            </DialogClose>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
