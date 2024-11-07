"use client";

import { Complex } from "@/shared/types/complex";
import React, { useMemo } from "react";
import { useComplexTable } from "../../hooks";
import { LoaderIcon, TriangleAlertIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { ComplexDataTable } from "./complexDataTable";
import { tableToData } from "../../utils/tableHelpers";

export interface ComplexTableProps {
  id: Complex["id"];
}

const ComplexTable: React.FC<ComplexTableProps> = ({ id }) => {
  const {
    data: table,
    isLoading: isLoading,
    isError: isFailed,
  } = useComplexTable(id);

  const flatsData = useMemo(
    () => (table?.flats ? tableToData(table.flats) : null),
    [table]
  );
  const isFlatsData = flatsData && flatsData.data.length > 0;

  const parkingsData = useMemo(
    () => (table?.parkings ? tableToData(table.parkings) : null),
    [table]
  );
  const isParkingsData = parkingsData && parkingsData.data.length > 0;

  const storagesData = useMemo(
    () => (table?.storages ? tableToData(table.storages) : null),
    [table]
  );
  const isStoragesData = storagesData && storagesData.data.length > 0;

  const commercialsData = useMemo(
    () => (table?.commercials ? tableToData(table.commercials) : null),
    [table]
  );
  const isCommercialsData = commercialsData && commercialsData.data.length > 0;

  if (isLoading)
    return (
      <div className="flex items-center">
        <LoaderIcon className="animate-spin" />
        <p>Загрузка...</p>
      </div>
    );

  if (isFailed)
    return (
      <div className="flex items-center">
        <TriangleAlertIcon className="text-destructive" />
        <p>Произошла ошибка :(</p>
      </div>
    );

  return (
    <Tabs
      defaultValue={
        isFlatsData
          ? "flats"
          : isParkingsData
          ? "parkings"
          : isStoragesData
          ? "storages"
          : isCommercialsData
          ? "commercials"
          : undefined
      }
    >
      <TabsList className="block w-fit mx-auto">
        {isFlatsData && <TabsTrigger value="flats">Квартиры</TabsTrigger>}
        {isParkingsData && <TabsTrigger value="parkings">Паркинг</TabsTrigger>}
        {isStoragesData && <TabsTrigger value="storages">Кладовые</TabsTrigger>}
        {isCommercialsData && (
          <TabsTrigger value="commercials">Коммерция</TabsTrigger>
        )}
      </TabsList>
      {isFlatsData && (
        <TabsContent value="flats">
          <ComplexDataTable columns={flatsData.columns} data={flatsData.data} />
        </TabsContent>
      )}
      {isParkingsData && (
        <TabsContent value="parkings">
          <ComplexDataTable
            columns={parkingsData.columns}
            data={parkingsData.data}
          />
        </TabsContent>
      )}
      {isStoragesData && (
        <TabsContent value="storages">
          <ComplexDataTable
            columns={storagesData.columns}
            data={storagesData.data}
          />
        </TabsContent>
      )}
      {isCommercialsData && (
        <TabsContent value="commercials">
          <ComplexDataTable
            columns={commercialsData.columns}
            data={commercialsData.data}
          />
        </TabsContent>
      )}
    </Tabs>
  );
};

export default React.memo(ComplexTable);
