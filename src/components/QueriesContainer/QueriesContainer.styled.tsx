import styled from "styled-components";

export const Styled = {
  QueriesContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 24px;
    box-shadow: 2px 5px 16px 0px #00000044;
    border-radius: 10px;
    padding: 24px 48px;
    background: #fff;

    &:hover {
      background: rgb(210, 232, 150);
    }
  `,
  QueryLine: styled.div``,
};
