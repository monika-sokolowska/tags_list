import {
  DataTable,
  DataTableProps,
  DataTableValue,
  DataTableValueArray,
} from "primereact/datatable";
import { Column } from "primereact/column";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useState } from "react";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/soho-light/theme.css";

import "./DataList.css";

interface DataListProps {
  tags: DataTableValue[] | null;
  loading: boolean;
}

const DataList = ({ tags, loading }: DataListProps) => {
    const [rows, setRows] = useState<number>(5);

  const renderHeader = () => {
    return (
      <div className="header">
        <label htmlFor="integeronly" className="label">
          Rows per page
        </label>
        <InputNumber
          inputId="integeronly"
          value={rows}
          onValueChange={(e: InputNumberValueChangeEvent) => {
            if (e.value) setRows(e.value);
          }}
          showButtons
          min={5}
          max={100}
        />
      </div>
    );
  };
  return (
    <DataTable
      value={tags ? tags: []}
      paginator
      showGridlines
      stripedRows
      selectionMode="single"
      rows={rows}
      dataKey="id"
      header={renderHeader()}
      loading={loading}
      emptyMessage="No customers found."
    >
      <Column
        field="name"
        header="Name"
        sortable
        style={{ minWidth: "12rem", height: "3rem" }}
      />
      <Column
        field="count"
        header="Count"
        sortable
        style={{ minWidth: "12rem", height: "3rem" }}
      />
    </DataTable>
  );
};

export default DataList;
