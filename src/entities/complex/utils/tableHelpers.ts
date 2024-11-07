export const tableToData = (table: string[][]) => {
  const columns = table[0].map((c) => ({
    accessorKey: c.replaceAll(".", "-").replaceAll(" ", ""),
    header: c,
  }));

  const data = table
    .slice(1)
    .map((r) =>
      columns.reduce((a, v, i) => ({ ...a, [v.accessorKey]: r[i] }), {})
    );

  return { columns, data };
};
