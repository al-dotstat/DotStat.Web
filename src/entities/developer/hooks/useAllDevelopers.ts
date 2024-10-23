"use client";

import developersController from "@/shared/api/developersController";
import { developerKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useAllDevelopers = () => {
  const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: developerKeys.all,
    queryFn: developersController.getAllDevelopers,
  });

  useEffect(() => {
    result.data?.forEach((d) => {
      queryClient.setQueryData(developerKeys.detail(d.id), d);
    });
  }, [result.data, queryClient]);

  return result;
};

export default useAllDevelopers;
