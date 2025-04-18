import React from "react";
import IconInterface from "./IconInterface";
import AppColors from "@/utils/AppColors";

function ConverterIcon({
  size = 30,
  color = AppColors.primaryColor,
}: IconInterface) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`.a{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;}`}</style>
      </defs>
      <path
        className="a"
        d="M24.78,32a8.65,8.65,0,0,0,.08-1.15,8.77,8.77,0,0,0-.08-1.15l2.5-2a.57.57,0,0,0,.14-.75l-2.36-4.1a.59.59,0,0,0-.72-.25L21.4,23.77a9.24,9.24,0,0,0-2-1.16L19,19.48a.6.6,0,0,0-.59-.5H13.63a.6.6,0,0,0-.58.5l-.44,3.13a8.85,8.85,0,0,0-2,1.16L7.66,22.59a.58.58,0,0,0-.72.25l-2.36,4.1a.59.59,0,0,0,.14.75l2.5,2a8.91,8.91,0,0,0-.09,1.15A8.64,8.64,0,0,0,7.22,32l-2.5,2a.6.6,0,0,0-.14.76l2.36,4.09a.59.59,0,0,0,.72.26l2.95-1.19a8.64,8.64,0,0,0,2,1.16l.44,3.14a.6.6,0,0,0,.58.49h4.73a.6.6,0,0,0,.59-.49L19.39,39a8.49,8.49,0,0,0,2-1.16L24.33,39a.59.59,0,0,0,.72-.26l2.37-4.09a.6.6,0,0,0-.14-.76Zm-8.78,3a4.14,4.14,0,1,1,4.14-4.14A4.14,4.14,0,0,1,16,34.94Z"
      />
      <path
        className="a"
        d="M26.69,33.45H40.2a3.3,3.3,0,0,0,3.3-3.3V5.38H36.36l3.94,5.74H35.39L31.45,5.38H27.5l3.95,5.74H26.54L22.59,5.38H18.65l3.94,5.74H17.68L13.74,5.38H11.5a3.3,3.3,0,0,0-3.3,3.3V22.8"
      />
    </svg>
  );
}

export default ConverterIcon;
