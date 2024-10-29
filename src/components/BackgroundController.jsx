import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import {
  UpdateStorageContext,
  useUpdateStorageContext,
} from "@/context/UpdateStorageContext";

const BackgroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#ffd"
  );

  const { updateStorage, setUpdateStorage } = useUpdateStorageContext();

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updatedValue);

    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, color]);

  return (
    <div className="w-full">
      {/*  rounded */}
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(value) => setRounded(value[0])}
        />
      </div>

      {/*  Padding */}
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(value) => setPadding(value[0])}
        />
      </div>

      {/* COLOR PICKER */}
      <div className="py-2 ">
        <label className="p-2 flex justify-between items-center">
          Icon Color
        </label>
        <ColorPickerController
          selectedColor={(color) => setColor(color)}
          hideController={false}
          height={"700"}
        />
      </div>
    </div>
  );
};

export default BackgroundController;
