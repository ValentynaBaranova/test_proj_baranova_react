import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Fdatatable from "./components/datatable";
import FfieldsSettingDlg from "./components/fieldsSettingDlg";

const Footer = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  padding: 10px 0;
  font-size: 20px;
  a {
    color: #e3c194;
  }
`;

function App() {
  const visibleFields = useSelector((state) => state.visibleFields);

  return (
    <>
      {}
      <FfieldsSettingDlg />
      <Fdatatable visibleFields={visibleFields} />
      <Footer>
        This project was coded by Valentyna Baranova and is &nbsp;
        <a href="https://github.com/ValentynaBaranova/test_proj_baranova_react">
          {" "}
          open-sourced on GitHub
        </a>{" "}
        &nbsp; and &nbsp;
        <a href="heroic-jelly-39ed08.netlify.app/">hosted on Netlify</a>
      </Footer>
    </>
  );
}

export default App;
