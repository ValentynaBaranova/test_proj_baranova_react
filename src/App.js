import React from "react";
import { useSelector } from "react-redux";
import Fdatatable from "./components/datatable";
import FfieldsSettingDlg from "./components/fieldsSettingDlg";

function App() {
  const visibleFields = useSelector((state) => state.visibleFields);

  return (
    <>{}
      <FfieldsSettingDlg />
      <Fdatatable visibleFields={visibleFields} />
    </>
  );
}

export default App;
