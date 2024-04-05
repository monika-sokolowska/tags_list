import { ScrollPanel } from "primereact/scrollpanel";
import { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";

import "./Layout.css";
import DataList from "../../components/DataList/DataList";
import { useFetchData } from "../../hooks/useFetchData";

const Layout = () => {

  const { data, loading, error } = useFetchData({url: "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"});

  const toast = useRef<Toast>(null);

  const show = () => {
    if (toast?.current) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Loading tags list failed",
      });
    }
  };

  useEffect(() => {
    if (error) show();
  }, [data]);


  return (
    <ScrollPanel style={{ width: "100%", height: "100%" }}>
    <div className="layout">
      <Toast ref={toast} position="top-center" />
      <div className="list">
        <div className="card">
            <DataList tags={data} loading={loading}/>
        </div>
      </div>
    </div>
    </ScrollPanel>
  );
};

export default Layout;
