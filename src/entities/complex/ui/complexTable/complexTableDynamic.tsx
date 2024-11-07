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
    return <Button onClick={() => setOpen(true)}>Загрузить таблицу</Button>;
  }

  return <ComplexTable id={id} />;
};

export default React.memo(ComplexTableDynamic);
