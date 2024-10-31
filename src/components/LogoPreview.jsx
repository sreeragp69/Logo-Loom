import { useUpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://logoexpress.tubeguruji.com/";
const LogoPreview = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState(null);

  const { updateStorage, setUpdateStorage } = useUpdateStorageContext();

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "logo.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }

    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center  h-scree ">
      <div
        className="h-[300px] w-[300px]    lg:w-[400px] lg:h-[400px] bg-gray-200 outline-dotted outline-gray-300"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <img src={"/png/" + storageValue?.icon} alt="pngImage" style={{
              height:storageValue?.iconSize,
              width:storageValue?.iconSize,

            }} />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
