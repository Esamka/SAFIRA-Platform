 import * as React from "react";
 
 export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
 
 export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
   ({ className, ...props }, ref) => {
     return (
       <label
         ref={ref}
         className={"text-white/80 text-sm block mb-2 " + (className ?? "")}
         {...props}
       />
     );
   }
 );
 
 Label.displayName = "Label";
