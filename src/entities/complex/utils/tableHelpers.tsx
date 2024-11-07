import { Button } from "@/shared/ui/button";
import { createColumnHelper } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export const tableToData = (table: string[][]) => {
  const columnHelper = createColumnHelper();

  const columns = table[0].map((c) =>
    columnHelper.accessor(c.replaceAll(".", "-").replaceAll(" ", ""), {
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {c}
            {column.getIsSorted() === "asc" && (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            )}
            {column.getIsSorted() === "desc" && (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        );
      },
    })
  );

  const data = table
    .slice(1)
    .map((r) =>
      columns.reduce((a, v, i) => ({ ...a, [v.accessorKey]: r[i] }), {})
    );

  return { columns, data };
};
