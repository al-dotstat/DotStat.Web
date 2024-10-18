import { BasketList } from "@/features/order";
import { Button } from "@/shared/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { IconBasket } from "@tabler/icons-react";
import React from "react";

export interface BasketProps {}

const Basket: React.FC<BasketProps> = ({}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <IconBasket />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto max-w-96 max-h-[50vh]">
        <BasketList />
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(Basket);
