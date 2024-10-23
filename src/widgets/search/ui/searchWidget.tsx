"use client";

import { DeveloperList } from "@/entities/developer";
import { useSearch } from "@/entities/search";
import { Search } from "@/features/search";
import { cn } from "@/shared/lib/utils";
import Block from "@/shared/ui/block";
import React, { useEffect, useRef, useState } from "react";

export interface SearchWidgetProps {}

const SearchWidget: React.FC<SearchWidgetProps> = ({}) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const { data } = useSearch(search);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      focus &&
      data &&
      (data.complexes.length > 0 || data.developers.length > 0)
    ) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [data, focus]);

  console.log(open, focus, data);

  return (
    <div className="relative w-full">
      <Search
        onSearchChange={setSearch}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        ref={searchRef}
      />
      <Block
        className={cn(
          "max-w-[90vw] absolute top-[calc(100%+1.25rem)] left-1/2 -translate-x-1/2 z-20 p-5",
          {
            hidden: !open,
          }
        )}
      >
        <div className="max-w-[800px] min-w-36">
          {data && data.developers.length > 0 && (
            <DeveloperList items={data.developers} />
          )}
        </div>
      </Block>
    </div>
  );
};

export default React.memo(SearchWidget);
