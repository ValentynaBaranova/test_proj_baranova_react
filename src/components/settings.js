import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SETTINGS_COLUMN_NAMES, tablecolumns } from "../shared/shared";
import { setVisibleField } from "../store/actions/actions";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  color: #fff;
`;

const Container = styled.div`
  margin: 14px;
  border-radius: 5px;
  background-color: #000;
  padding: 0 20px 20px 20px;
  height: 444px;
`;
const Title = styled.h2`
  padding: 10px;
`;
const List = styled.div`
  padding: 10px;
  text-decoration: uppercase;
  background-color: #1a1a1a;
  border-radius: 2px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;
const DeleteLink = styled.a`
  background-color: #1a1a1a;
`;
const Form = styled.div`
  input {
    background-color: #000;
    padding: 8px 9px;
    margin: 0 10px;
    border-radius: 10px;
    color: #fff;
  }
`;

const FSettings = () => {
  const [filter, setFilter] = useState("");
  const visibleFields = useSelector((state) => state.visibleFields);
  const dispatcher = useDispatch();

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  const onDrop = (ev, src) => {
    let id = ev.dataTransfer.getData("id");
    let newVisibleFields = visibleFields.slice();
    if (src === SETTINGS_COLUMN_NAMES.SELECTED) {
      newVisibleFields.push(id);
    } else {
      if (visibleFields.length < 2) return;
      let index = newVisibleFields.indexOf(id);
      if (index !== -1) {
        newVisibleFields.splice(index, 1);
      }
    }
    dispatcher(setVisibleField(newVisibleFields));
  };
  const OnDelButtonClick = (ev, id) => {
    if (visibleFields.length < 2) return;
    let newVisibleFields = visibleFields.slice();

    let index = newVisibleFields.indexOf(id);
    if (index !== -1) {
      newVisibleFields.splice(index, 1);
    }

    dispatcher(setVisibleField(newVisibleFields));
  };
  const AddItems = (selected) => {
    if (selected) {
      return visibleFields.map((itm, index) => (
        <List
          key={index}
          name={itm}
          draggable
          className="draggable"
          onDragStart={(e) => onDragStart(e, itm)}
        >
          {itm}
          <DeleteLink onClick={(e) => OnDelButtonClick(e, itm)}>
            <FaTimes />
          </DeleteLink>
        </List>
      ));
    } else {
      let allFileds = [];
      tablecolumns.forEach((item) => {
        if (!visibleFields.includes(item.name)) {
          allFileds.push(item.name);
        }
      });
      return allFileds
        .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
        .map((item, index) => (
          <div
            key={index}
            name={item}
            draggable
            onDragStart={(e) => onDragStart(e, item)}
          >
            <List> {item}</List>
          </div>
        ));
    }
  };

  return (
    <div>
      <Form>
        <input
          type="search"
          placeholder="Enter a column name"
          autoFocus="on"
          autoComplete="off"
          id="filter"
          value={filter}
          onChange={({ target: { value } }) => setFilter(value)}
        />
      </Form>
      <ModalContainer>
        <Container
          className="fromfields"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, SETTINGS_COLUMN_NAMES.ALL_COLUMNS);
          }}
        >
          <Title className="task-header">
            {SETTINGS_COLUMN_NAMES.ALL_COLUMNS}
          </Title>
          {AddItems(false)}
        </Container>
        <Container
          className="selectedfields"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, SETTINGS_COLUMN_NAMES.SELECTED)}
        >
          <Title className="task-header">
            {SETTINGS_COLUMN_NAMES.SELECTED}
          </Title>
          {AddItems(true)}
        </Container>
      </ModalContainer>
    </div>
  );
};
export default FSettings;
