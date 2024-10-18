import { BasketList, CreateOrder } from "@/features/order";
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
      <PopoverContent className="w-auto max-w-96 space-y-2">
        <CreateOrder />
        <div className="max-h-[50vh] overflow-y-auto">
          <BasketList />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(Basket);
