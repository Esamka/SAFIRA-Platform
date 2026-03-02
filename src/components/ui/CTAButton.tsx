import Link from "next/link";
import * as React from "react";
import { Button } from "./button";

type CTAButtonProps = React.ComponentProps<typeof Button> & {
  href?: string;
  children: React.ReactNode;
  textColor?: string;
  reverseIcon?: boolean;
};

export function CTAButton({ href, children, className, textColor, reverseIcon, ...props }: CTAButtonProps) {
  const btnClass = [
    "w-[204px] h-[50px] gap-2 rounded-[10px] px-[35px] py-[15px] flex items-center justify-center",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span style={{ fontFamily: "IBM Plex Sans Arabic", fontWeight: 600, fontSize: 18, color: textColor || "#fff" }}>{children}</span>
      <span
        className="inline-flex items-center justify-center size-6 rounded-full bg-white text-[#0b2749]"
        style={reverseIcon ? { marginLeft: 8 } : { marginRight: 8 }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          style={reverseIcon ? { transform: "scaleX(-1)" } : undefined}
        >
          <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={typeof children === "string" ? children : undefined}>
        <Button className={btnClass} {...props}>
          {content}
        </Button>
      </Link>
    );
  }

  return (
    <Button className={btnClass} {...props}>
      {content}
    </Button>
  );
}

export default CTAButton;
