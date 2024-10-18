"use client";

import complexesController from "@/shared/api/complexesController";
import { complexKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useAllComplexes = () => {
  const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: complexKeys.all,
    queryFn: complexesController.getAllComplexes,
  });

  useEffect(() => {
    result.data?.forEach((d) => {
      queryClient.setQueryData(complexKeys.detail(d.id), d);
    });
  }, [result.data, queryClient]);

  return result;
};

export default useAllComplexes;
