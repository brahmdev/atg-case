import { Fragment } from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel, Row, RowData,
  useReactTable
} from "@tanstack/react-table";

interface ReactTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData>[];
    getRowCanExpand?: (row: Row<TData>) => boolean;
    renderSubComponent?: (columnDef: { row: Row<RowData> }) => JSX.Element
}

export function Table<TData extends object> ({
  data,
  columns,
  renderSubComponent,
  getRowCanExpand,
}: ReactTableProps<TData>) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const table = useReactTable({
    data,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="text-left">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <tr key={row.id} className="border border-gray-300 p-2">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className={`${row.getIsExpanded() && "bg-blue-200"}`}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
              {row.getIsExpanded() && (
                <tr>
                  <td colSpan={row.getVisibleCells().length}>
                    {renderSubComponent && renderSubComponent({ row })}
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
