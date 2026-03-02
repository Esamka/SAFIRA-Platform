import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    const base =
      "rounded-xl bg-black/20 text-white";
    return <div ref={ref} className={[base, className].filter(Boolean).join(" ")} {...props} />;
  }
);

Card.displayName = "Card";
