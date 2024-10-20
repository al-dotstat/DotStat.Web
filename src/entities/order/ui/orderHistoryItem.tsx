import { Order } from "@/shared/types/order";
import { Button } from "@/shared/ui/button";
import { IconDownload, IconDownloadOff } from "@tabler/icons-react";
import React from "react";

export interface OrderProps {
  order: Order;
  actions?: React.ReactNode;
}

const OrderHistoryItem: React.FC<OrderProps> = ({ order, actions }) => {
  const isExpired = new Date(order.fileExpiredDateTime) <= new Date();

  return (
    <div className="flex gap-5 items-center w-full justify-between">
      <span>{new Date(order.createdDateTime).toLocaleString()}</span>
      <div className="flex items-center gap-1">
        {actions}
        <Button
          size="icon"
          variant="outline"
          className="hover:bg-green-400 hover:text-white"
          disabled={isExpired}
          asChild={!isExpired}
        >
          {isExpired ? (
            <IconDownloadOff />
          ) : (
            <a
              href={`${process.env.NEXT_PUBLIC_API_URL}StaticFiles/${order.fileName}`}
            >
              <IconDownload />
            </a>
          )}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(OrderHistoryItem);
