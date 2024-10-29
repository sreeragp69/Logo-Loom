import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({ hideController = false ,selectedColor,height}) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");
 
  
  return (
    <div
      className={`  min-h-[670px]   cursor-pointer`}
    >
      <ColorPicker
      className={" rounded-lg"}
        value={color}
        onChange={(e)=>{setColor(e);  selectedColor(e)}}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
};

export default ColorPickerController;
