import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { gql, useLazyQuery, useQuery, useMutation } from "@apollo/client";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 30%;
`;

const TEST_DOTEST = gql`
  mutation doTest($testInput: String!) {
    doTest(testInput: $testInput) {
      test
    }
  }
`;

const TEST_SAY_HELLO = gql`
  query sayHello {
    sayHello {
      test
    }
  }
`;

const Test = () => {
  const [input, setInput] = useState("");
  const [queryResult, setQueryResult] = useState("");
  const [mutationResult, setMutationResult] = useState("");

  const onHandleChange = (e) => {
    setInput(e.target.value);
  };

  const onClickQuery = (e) => {
    console.log("query");
    testQuery({});
  };

  const onClickMutation = () => {
    console.log("mutation");
    testMutation({
      variables: {
        testInput: input,
      },
    });
  };

  const [
    testQuery,
    { loading: queryLoading, error: qeuryError, data: queryData },
  ] = useLazyQuery(TEST_SAY_HELLO);

  const [
    testMutation,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(TEST_DOTEST);

  useEffect(() => {
    console.log("queryData", queryData);
  }, [queryData]);

  useEffect(() => {
    console.log("mutationData", mutationData);
  }, [mutationData]);

  return (
    <Wrapper>
      <Button onClick={onClickQuery}>apollo setting query test</Button>
      <TextField onChange={onHandleChange} />
      <Button onClick={onClickMutation}>apollo setting mutation test</Button>
    </Wrapper>
  );
};

export default Test;
