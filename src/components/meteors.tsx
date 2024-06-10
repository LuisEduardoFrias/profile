import { cn } from "./cn";
import clsx from "clsx";
import React from "react";

type TMeteorProps = { 
    number?: number;
    className?: string;
}

export default function Meteors({ number, className, }: TMeteorProps){
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-1 w-1 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[25%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            position: "fixed",
            top: 0,
            border:"3px solid #c1c58a4c",
            left: Math.floor(Math.random() * (100 - -100) + -100) + "%",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        >
        </span>
      ))}
    </>
  );
};
