"use client";

import districtsController from "@/shared/api/districtsController";
import { districtKeys } from "@/shared/lib/queryKeyFactory";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useAllDistricts = () => {
  const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: districtKeys.all,
    queryFn: districtsController.getAllDistricts,
  });

  useEffect(() => {
    result.data?.forEach((d) => {
      queryClient.setQueryData(districtKeys.detail(d.id), d);
    });
  }, [result.data, queryClient]);

  return result;
};

export default useAllDistricts;
