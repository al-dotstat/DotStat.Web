import parseController from "@/shared/api/parseController";
import { parseKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery } from "@tanstack/react-query";

const useQueueComplexes = () => {
  return useQuery({
    queryKey: parseKeys.queue(),
    queryFn: parseController.getParseQueue,
  });
};

export default useQueueComplexes;
