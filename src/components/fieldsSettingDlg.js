import Modal from "react-modal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateSettings } from "../store/actions/actions";
import FSettings from "./settings";
import styled from "styled-components";

const Button = styled.button`
  font-size: 18px;
  padding: 5px 10px;
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

const customStyles = {
  content: {
    width: "40%",
    minWidth: "340px",
    inset: "0",
    padding: "20px 20px 10px 20px",
    backgroundColor: "#1a1a1a",
    borderRadius: "10px",
    margin: "20px auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "inherit",
  },
};

export default function FfieldsSettingDlg() {
  const isFieldSettingActive = useSelector((state) => state.showSettingsDlg);
  const dispatcher = useDispatch();

  return (
    <div>
      <Modal
        isOpen={isFieldSettingActive}
        ariaHideApp={false}
        style={customStyles}
      >
        <FSettings />
        <Button onClick={() => dispatcher(activateSettings(false))}>
          Apply
        </Button>
      </Modal>
    </div>
  );
}
