import React from "react";
import IconInterface from "./IconInterface";
import AppColors from "@/utils/AppColors";

function InfinityIcon({
  size = 30,
  color = AppColors.primaryColor,
}: IconInterface) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M17.4503 17.2999C15.7703 17.2999 14.2202 16.5099 13.2102 15.1199C12.9702 14.7899 13.0402 14.3199 13.3702 14.0699C13.7002 13.8199 14.1703 13.8999 14.4203 14.2299C15.1503 15.2199 16.2503 15.7899 17.4503 15.7899C19.5403 15.7899 21.2502 14.0899 21.2502 11.9899C21.2502 9.8899 19.5503 8.18991 17.4503 8.18991C16.0303 8.18991 14.6902 8.94991 13.9602 10.1599L11.3102 14.5699C10.3102 16.2399 8.48025 17.2699 6.54025 17.2699C3.62025 17.2699 1.24023 14.8899 1.24023 11.9699C1.24023 9.04991 3.62025 6.66992 6.54025 6.66992C8.22025 6.66992 9.77024 7.45991 10.7802 8.84991C11.0202 9.17991 10.9502 9.6499 10.6202 9.8999C10.2802 10.1499 9.82025 10.0699 9.57025 9.7399C8.84025 8.7499 7.74025 8.1799 6.54025 8.1799C4.45025 8.1799 2.74023 9.87992 2.74023 11.9799C2.74023 14.0799 4.44025 15.7799 6.54025 15.7799C7.96025 15.7799 9.30024 15.0199 10.0302 13.8099L12.6802 9.3999C13.6802 7.7299 15.5103 6.69992 17.4503 6.69992C20.3703 6.69992 22.7502 9.07991 22.7502 11.9999C22.7502 14.9199 20.3703 17.2999 17.4503 17.2999Z"
        fill={color}
      />
      <path
        d="M6.5 14C7.60457 14 8.5 13.1046 8.5 12C8.5 10.8954 7.60457 10 6.5 10C5.39543 10 4.5 10.8954 4.5 12C4.5 13.1046 5.39543 14 6.5 14Z"
        fill={color}
      />
      <path
        d="M17.5 14C18.6046 14 19.5 13.1046 19.5 12C19.5 10.8954 18.6046 10 17.5 10C16.3954 10 15.5 10.8954 15.5 12C15.5 13.1046 16.3954 14 17.5 14Z"
        fill={color}
      />
    </svg>
  );
}

export default InfinityIcon;
