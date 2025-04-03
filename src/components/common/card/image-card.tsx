import React from "react";
import Button from "../button/button";

interface ImageCardProps {
  item: {
    id: number;
    title: string;
    location: string;
    imageUrl: string;
    altText: string;
  };
}

const ImageCard = ({ item }: ImageCardProps) => {
  return (
    <div key={item.id} className="p-2 border border-gray-300 rounded-md bg-gray-50 shadow-sm ">
      <div className="min-h-[130px] max-h-[130px] relative mb-2">
        <div className="absolute top-0 right-2 flex gap-2 z-50 mt-2">
          <Button className="text-center max-w-[2px] rounded-full  !bg-gray-300 cursor-pointer">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium size-5 hover:text-red-500 css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="DeleteOutlinedIcon"
            >
              <path d="M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z" />
            </svg>
          </Button>
          <Button className="text-center max-w-[2px] rounded-full  !bg-gray-300 cursor-pointer">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium size-5 hover:text-slate-600 css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="EditOutlinedIcon"
            >
              <path d="m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z" />
            </svg>
          </Button>
        </div>
        <div>
          <img
            alt={item.altText}
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover"
            src={item.imageUrl}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
            }}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold text-md">{item.title}</div>
      </div>
      <div className="mt-3 flex justify-between">
        <div className="text-sm">{item.location}</div>
        <div>
          <span className="MuiSwitch-root MuiSwitch-sizeMedium css-ecvcn9">
            <span className="MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary css-1uf4bbi">
              <input
                className="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"
                aria-label="controlled"
                type="checkbox"
              />
              <span className="MuiSwitch-thumb css-19gndve" />
              <span className="MuiTouchRipple-root css-w0pj6f" />
            </span>
            <span className="MuiSwitch-track css-1ju1kxc" />
          </span>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ImageCard;
