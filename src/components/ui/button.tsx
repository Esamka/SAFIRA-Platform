 import * as React from "react";
 
 type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
   variant?: "default" | "ghost";
 };
 
 function cx(...classes: Array<string | undefined>) {
   return classes.filter(Boolean).join(" ");
 }
 
 export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant = "default", ...props }, ref) => {
     const base =
       "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";
     const variants: Record<string, string> = {
       default:
        "h-14 px-9 bg-gradient-to-r from-[#007AEB] to-[#82DEF5] text-white rounded-[10px] hover:from-[#2EA9FF] hover:to-[#B7F2FF] hover:shadow-md",
       ghost:
         "h-10 px-4 py-2 bg-transparent text-white hover:bg-white/10 border border-white/20",
     };
     return (
       <button
         ref={ref}
         className={cx(base, variants[variant], className)}
         {...props}
       />
     );
   }
 );
 
 Button.displayName = "Button";
