"use client";

import React, { useCallback, useMemo } from "react";
import { z } from "zod";
import MultipleSelector, { Option } from "@/shared/ui/multipleSelector";
import useComplexQueueFiltersStore from "../model/complexQueueFiltersStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAllDevelopers } from "@/entities/developer";
import { useAllDistricts } from "@/entities/district";
import { Skeleton } from "@/shared/ui/skeleton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Button } from "@/shared/ui/button";

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const FormSchema = z.object({
  developers: z.array(optionSchema).optional(),
  districts: z.array(optionSchema).optional(),
});

const ComplexQueueFilters: React.FC = ({}) => {
  const applyFilters = useComplexQueueFiltersStore((state) => state.setFilters);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { data: developers, isSuccess: areDevelopersSucceed } =
    useAllDevelopers();
  const { data: districts, isSuccess: areDistrictsSucceed } = useAllDistricts();

  const developersOptions: Option[] | undefined = useMemo(
    () =>
      developers?.map((d) => ({
        label: d.nameRu,
        value: d.id.toString(),
      })),
    [developers]
  );

  const districtsOptions: Option[] | undefined = useMemo(
    () =>
      districts?.map((d) => ({
        label: d.name,
        value: d.id.toString(),
      })),
    [districts]
  );

  const onSubmit = useCallback(
    (data: z.infer<typeof FormSchema>) => {
      const developersIds =
        data.developers?.map((d) => parseInt(d.value)) ?? [];
      const districtsIds = data.districts?.map((d) => parseInt(d.value)) ?? [];

      applyFilters({
        developersIds: developersIds,
        districtsIds: districtsIds,
      });
    },
    [applyFilters]
  );

  if (!areDevelopersSucceed) return <Skeleton className="w-full h-5 rounded" />;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {areDevelopersSucceed ? (
          <FormField
            control={form.control}
            name="developers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Застройщик</FormLabel>
                <FormControl>
                  <MultipleSelector
                    {...field}
                    defaultOptions={developersOptions}
                    placeholder="Выберите застройщиков"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <Skeleton className="w-full h-5 rounded" />
        )}

        {areDistrictsSucceed ? (
          <FormField
            control={form.control}
            name="districts"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Район</FormLabel>
                <FormControl>
                  <MultipleSelector
                    {...field}
                    defaultOptions={districtsOptions}
                    placeholder="Выберите район"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <Skeleton className="w-full h-5 rounded" />
        )}

        <Button type="submit" className="w-full">
          Применить
        </Button>
      </form>
    </Form>
  );
};

export default React.memo(ComplexQueueFilters);
