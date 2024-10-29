import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import {
  UpdateStorageContext,
  useUpdateStorageContext,
} from "@/context/UpdateStorageContext";
import IconList from "./IconList";

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon :"Smile")


  const { updateStorage, setUpdateStorage } = useUpdateStorageContext();

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon,
    };
    setUpdateStorage(updatedValue);

    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color,icon]);

  return (
    <div className="">
      <div>
        <IconList selectedIcon={(icon)=>setIcon(icon)} />

        {/*  SIZE */}
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Size <span>{size} px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>

        {/* ROTATE */}
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Rotate <span>{rotate} °</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(value) => setRotate(value[0])}
          />
        </div>

        {/* COLOR PICKER */}
        <div className="py-2">
          <label className="p-2   flex justify-between items-center">
            Icon Color 
          </label>
          <ColorPickerController
            selectedColor={(color) => setColor(color)}
            hideController={true}
            height={"1000"}
          />
        </div>
      </div>
      
    </div>
  );
};

export default IconController;
