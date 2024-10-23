"use client";

import { Input } from "@/shared/ui/input";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

export interface SearchProps {
  onSearchChange: (search: string) => void;
  placeholder?: string;
}

type InputElement = Omit<HTMLInputElement, "type" | "placeholder" | "onChange">;

const Search = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<InputElement> & SearchProps
>(
  (
    { onSearchChange, placeholder = "Поиск ЖК и застройщиков", ...props },
    ref
  ) => {
    const debounced = useDebouncedCallback((value: string) => {
      onSearchChange(value);
    }, 1000);

    return (
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => debounced(e.target.value)}
        ref={ref}
        {...props}
      />
    );
  }
);
Search.displayName = "Search";

export default React.memo(Search);
