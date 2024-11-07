"use client";

import { Complex } from "@/shared/types/complex";
import { Button } from "@/shared/ui/button";
import React, { useState } from "react";
import ComplexTable from "./complexTable";

export interface ComplexTableProps {
  id: Complex["id"];
}

const ComplexTableDynamic: React.FC<ComplexTableProps> = ({ id }) => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="mx-auto w-fit">
        <Button onClick={() => setOpen(true)}>Загрузить таблицу</Button>
      </div>
    );
  }

  return <ComplexTable id={id} />;
};

export default React.memo(ComplexTableDynamic);
