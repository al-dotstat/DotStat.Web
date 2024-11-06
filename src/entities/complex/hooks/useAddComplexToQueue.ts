import parseController from "@/shared/api/parseController";
import { parseKeys } from "@/shared/lib/queryKeyFactory";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddComplexToQueue = (
  onSuccess?: (
    data: Awaited<ReturnType<typeof parseController.addToQueue>>
  ) => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: parseController.addToQueue,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: parseKeys.queue(),
      });
      if (onSuccess) onSuccess(data);
    },
  });
};

export default useAddComplexToQueue;
