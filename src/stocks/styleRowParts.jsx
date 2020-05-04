import styled from "styled-components";
export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
`;
export const Symbol = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  width: 10%;
  font-family: monospace;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 8px;
  }
`;
export const Company = styled.div`
  font-size: 22px;
  color: #000000;
  width: 70%;
  text-align: left;
    @media (max-width: 425px) {
    font-size: 14px;
  }
`;
export const Price = styled.div`
  font-size: 30px;
  color: #000000;
  width: 20%;
  text-align: right;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
export const DecPartSpan = styled.span`
  font-size: 0.7em;
`;
