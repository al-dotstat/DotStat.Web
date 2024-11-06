import { useAddComplexToQueue, useQueueComplexes } from "@/entities/complex";
import { Complex } from "@/shared/types/complex";
import { Button } from "@/shared/ui/button";
import { IconPlaylistAdd } from "@tabler/icons-react";
import React from "react";

export interface QueueActionProps {
  complex: Complex;
}

const QueueAction: React.FC<QueueActionProps> = ({ complex }) => {
  const { mutate: addToQueue, isPending: isAddingToQueue } =
    useAddComplexToQueue();
  const { data: queue, isSuccess: isQueueSucceed } = useQueueComplexes();
  const isComplexInQueue =
    queue?.find((c) => c.complexId === complex.id) !== undefined;

  return (
    <Button
      size="icon"
      onClick={() => addToQueue(complex.id)}
      disabled={isComplexInQueue || !isQueueSucceed || isAddingToQueue}
    >
      <IconPlaylistAdd />
    </Button>
  );
};

export default React.memo(QueueAction);
