"use client";

import { useAllDevelopers } from "@/entities/developer";
import MultipleSelector, { Option } from "@/shared/ui/multipleSelector";
import { Skeleton } from "@/shared/ui/skeleton";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useMemo } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Button } from "@/shared/ui/button";
import useComplexFiltersStore from "../model/complexFiltersStore";

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const FormSchema = z.object({
  developers: z.array(optionSchema).min(1),
});

const ComplexFilters: React.FC = ({}) => {
  const applyFilters = useComplexFiltersStore((state) => state.setFilters);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { data, isSuccess } = useAllDevelopers();

  const developersOptions: Option[] | undefined = useMemo(
    () =>
      data?.map((d) => ({
        label: d.nameRu,
        value: d.id.toString(),
      })),
    [data]
  );

  const onSubmit = useCallback(
    (data: z.infer<typeof FormSchema>) => {
      console.log(data);
      const developersIds = data.developers.map((d) => parseInt(d.value));

      applyFilters({
        developersIds: developersIds,
        districtsIds: [],
        metrosIds: [],
      });
    },
    [applyFilters]
  );

  if (!isSuccess) return <Skeleton className="w-full h-5 rounded" />;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="developers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Застройщики</FormLabel>
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
        <Button type="submit" className="w-full">
          Применить
        </Button>
      </form>
    </Form>
  );
};

export default React.memo(ComplexFilters);
