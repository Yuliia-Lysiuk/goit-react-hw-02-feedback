import styled from "styled-components";

export const Text = styled.p`
  
 text-align: center;
  color: red;
  font-size: 18px;
`

export const Item = styled.li`
  list-style: none;
  text-transform: capitalize;
  font-size: 20px;
  :not(:last-child){
      margin-bottom: 8px;
  }
 
`
export const Title = styled.h2`
  margin-left: 20px;
 
`