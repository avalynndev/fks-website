import React from "react";

export const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className = "", ...props }, ref) => (
  <section
    ref={ref}
    className={[
      "bg-background text-foreground px-4 py-12 sm:py-24 md:py-32",
      className,
    ].join(" ")}
    {...props}
  />
));

Section.displayName = "Section";
