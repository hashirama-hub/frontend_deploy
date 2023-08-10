import React from "react";
import Button from "@atlaskit/button";
import { Styled, styled } from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top = 10px;
  text-align = left;
`;
 

export default function Todo({ todo }){
    return <ButtonStyled shouldFitContainer>{todo.name}</ButtonStyled>
}