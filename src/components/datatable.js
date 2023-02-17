import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { tablecolumns } from "../shared/shared";
import { getdata } from "../store/actions/actions";
import styled from "styled-components";
import { activateSettings } from "../store/actions/actions";

const Error = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #000;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 22px 19px 21px rgb(16 18 18 / 52%);
  margin-top: 20px;
`;

const Button = styled.button`
  font-size: 18px;
  margin: 1em;
  padding: 10px;
  border-radius: 3px;
  background-color: #8c1170;
  border: 1px solid #5c0549;
  color: #fff;
  border-radius: 5px;
  &:hover {
    transition: all 500ms ease 0s;
    opacity: 0.7;
  }
`;

const tableStyles = {
  rows: {
    style: {
      backgroundColor: "black",
      color: "white",
      minHeight: "40px",
      minWidth: "40px",
    },
  },
  headCells: {
    style: {
      justifyContent: "center",
      backgroundColor: "#3d3c3c",
      color: "white",
      fontSize: "18px",
      fontWeight: "500",
      textTransform: "uppercase",
      padding: "5px",
    },
  },
  cells: {
    style: {
      minWidth: "40px",
      border: "1px solid #3d3c3c",
      justifyContent: "center",
      fontSize: "16px",
      padding: "5px",
    },
  },
};

export default function Fdatatable({ visibleFields }) {
  const MAX_ROWS_COUNT = 1000;
  const isFieldSettingActive = useSelector((state) => state.showSettingsDlg);
  const rows = useSelector((state) => state.rows);
  const isLoading = useSelector((state) => state.isLoading);
  const currentPage = useSelector((state) => state.page);
  const limit = useSelector((state) => state.limit);
  const IsError = useSelector((state) => state.isError);
  const dispatcher = useDispatch();

  const onClick = () => {
    dispatcher(activateSettings(!isFieldSettingActive));
  };

  useEffect(() => {
    dispatcher(getdata(currentPage, limit));
  }, [currentPage, limit, dispatcher]);

  let tableCoulums = tablecolumns.slice();
  const processVisibility = () => {
    if (visibleFields.length > 0) {
      tablecolumns.forEach((item) => {
        item.omit = !visibleFields.includes(item.name);
      });
    }
  };
  processVisibility();

  /*
  // for pagination if it will be needed
  const handlePageChange = (page) => {
    dispatcher(setCurrentPage(page));
  };
  */

  return (
    <div>
      <MainContainer>
        {IsError === true && (
          <Error>
            <h1>An error occurred while retrieving data</h1>
          </Error>
        )}
        <Button onClick={onClick}>Select Columns</Button>
        <DataTable
          paginationServer
          paginationTotalRows={MAX_ROWS_COUNT}
          responsive={true}
          columns={tableCoulums}
          data={rows}
          progressPending={isLoading}
          customStyles={tableStyles}
        />
      </MainContainer>
    </div>
  );
}
