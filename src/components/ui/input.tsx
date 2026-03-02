 import * as React from "react";
 
 export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
 
 export const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, ...props }, ref) => {
     return (
       <input
         ref={ref}
         className={
           "w-full h-14 bg-[#000A13] text-white placeholder-white/60 border border-[#007AEB66] focus:border-[#007AEB] outline-none px-5 rounded-lg " +
           (className ?? "")
         }
         {...props}
       />
     );
   }
 );
 
 Input.displayName = "Input";
