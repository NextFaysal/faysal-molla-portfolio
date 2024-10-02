import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
export default function Card({
  className,
  children,
  ...other
}: ComponentPropsWithRef <"div">) {
  // px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 opacity-5 -z-50"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
}
