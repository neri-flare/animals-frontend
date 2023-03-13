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
    gap: 64px;
  `,
  ResultsContainer: styled.div`
    box-shadow: 2px 5px 16px 0px #00000044;
    border-radius: 10px;
    padding: 28px;
  `,
  BoldText: styled.span`
    font-weight: 700;
  `,
};
