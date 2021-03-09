import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 30%;
`;

const RestAPITest = () => {
  const [input, setInput] = useState("");

  const onHandleChange = (e) => {
    setInput(e.target.value);
  };

  const onClickGetAPI = async () => {
    const response = await axios.get("http://localhost:4300/api/test");
    console.log("getResult", response);
  };

  const onClickPostAPI = async () => {
    const response = await axios.post(
      `http://localhost:4300/api/test/${input}`,
      {
        content: input,
      }
    );
    console.log("postResult", response);
  };
  return (
    <Wrapper>
      <Button onClick={onClickGetAPI}>GET API test</Button>
      <TextField onChange={onHandleChange} />
      <Button onClick={onClickPostAPI}>POST API test</Button>
    </Wrapper>
  );
};

export default RestAPITest;
