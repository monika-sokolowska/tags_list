import { DataTable } from "primereact/datatable";
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
  isHeader: boolean;
}

const DataList = ({ isHeader }: DataListProps) => {
  const [rows, setRows] = useState<number>(5);
  const [loading, setLoading] = useState(false);

  const tags = [
    { name: "test_1", count: "1" },
    { name: "test_2", count: "2" },
    { name: "test_3", count: "3" },
    { name: "test_4", count: "4" },
    { name: "test_5", count: "5" },
    { name: "test_6", count: "6" },
  ];
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
      value={tags}
      paginator
      showGridlines
      stripedRows
      selectionMode="single"
      rows={rows}
      dataKey="id"
      header={isHeader ? renderHeader(): null}
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
