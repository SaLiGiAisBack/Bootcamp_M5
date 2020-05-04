import styled from "styled-components";
export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 15px 10px;
  border-bottom: 0.5px dashed lightgrey;
  &:hover {
    background-color: rgba(131, 58, 224, 0.05);
  }
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 425px) {
    padding: 0;
    font-size: 13px;
    justify-content: center;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
`;
export const RowElemTickerDiv = styled.div`
  font-family: monospace;
  width: 3%;
  color: grey;
  font-size: x-small;
  vertical-align: baseline;
`;
export const RowElemNameDiv = styled.div`
  width: 20%;
  @media (max-width: 425px) {
   width: 30%;
   padding-left: 10px;
  }
`;
export const RowElemAmountDiv = styled.div`
  font-family: monospace;
  width: 7%;
  color: grey;
  font-size: x-small;
  vertical-align: baseline;
`;
export const RowElemSumDiv = styled.div`
  width: 15%;
  text-align: right;
`;
export const RowElemProfitDiv = styled.div`
  width: 20%;
  text-align: left;
  color: ${(props) => (props.isNegative ? "red" : "green")};
  @media (max-width: 425px) {
    font-size: 13px;
  }
`;
export const DecPartSpan = styled.span`
  font-size: 0.7em;
`;
