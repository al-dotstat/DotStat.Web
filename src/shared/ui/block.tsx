import { Slot, SlotProps } from "@radix-ui/react-slot";
import React from "react";
import { cn } from "../lib/utils";

export interface BlockProps {
  asChild?: boolean;
  border?: boolean;
}

const Block = React.forwardRef<HTMLElement, BlockProps & SlotProps>(
  ({ asChild, children, className, border, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        className={cn(
          "rounded bg-zinc-50 p-5",
          {
            border: border,
          },
          className
        )}
        {...props}
        ref={forwardedRef as React.ForwardedRef<HTMLDivElement>}
      >
        {children}
      </Comp>
    );
  }
);

Block.displayName = "Block";

export default React.memo(Block);
