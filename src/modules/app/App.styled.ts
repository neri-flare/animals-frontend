import styled from "styled-components";

export const Styled = {
  MainContainer: styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  `,
  Header: styled.h1`
    font-size: 48px;
  `,
  Section: styled.section`
    display: flex;
    gap: 16px;
  `,
  QueriesContainer: styled.div`
    display: flex;
    flex-direction: row;
    border: solid orange 2px;
    border-radius: 5px;
    padding: 24px;
  `,
  ResultsContainer: styled.div`
    border: solid red 2px;
    border-radius: 5px;
    padding: 24px;
  `,
};
